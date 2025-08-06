'use client';

import {
  useState,
  useLayoutEffect,
  useRef,
  FormEvent,
  FC,
  ChangeEvent,
} from 'react';
import { gsap } from 'gsap';
import {
  Check,
  ArrowRight,
  ArrowLeft,
  LoaderCircle,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';

// --- Contenido y Tipos ---
const formContent = {
  mainTitle: "Let's Design Your AI-Powered Future.",
  mainSubtitle:
    'A few key details will help our AI architects understand your unique challenges. This is the first step toward your free audit or live demo.',
  step1: {
    title: "First, let's get to know you.",
    fields: {
      name: { label: 'Full Name', placeholder: 'e.g., Jane Doe' },
      email: {
        label: 'Work Email',
        placeholder: "We'll send your blueprint here.",
      },
      company: {
        label: 'Company Name',
        placeholder: "What's the name of your business?",
      },
    },
    nextButton: 'Next: Your Goals',
  },
  step2: {
    title: "What's your primary goal with AI?",
    subtitle: 'Select the one that best describes your needs.',
    goals: [
      'Automate Operations',
      'Deliver 24/7 Support',
      'Scale Content Creation',
    ],
    industry: {
      label: 'What industry are you in?',
      placeholder: 'Select an industry...',
      options: [
        'Marketing Agency',
        'E-commerce',
        'Real Estate',
        'SaaS',
        'Fintech',
        'Other',
      ],
    },
    urgency: {
      label: 'How soon do you need a solution?',
      options: ['ASAP', 'In 1-3 months', 'Just exploring'],
    },
    nextButton: 'Next: Your Channels',
    backButton: 'Back',
  },
  step3: {
    title: 'Finally, where will your AI operate?',
    subtitle: 'Select all that apply.',
    channels: [
      'Website',
      'WhatsApp',
      'Social Media',
      'Internal Tools (Slack, etc.)',
    ],
    submitButton: 'Build My AI Blueprint',
    backButton: 'Back',
  },
  thankYou: {
    title: 'Thank You! Your AI Blueprint is on its way.',
    paragraph:
      "We've received your information. An AI strategist from our team will review it and contact you within 24 hours to schedule your session.",
    cta: "Don't want to wait? Book a time that works for you directly on our calendar.",
    ctaButton: 'Schedule Your Session Now',
  },
};

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  goal?: string;
  industry?: string;
  urgency?: string;
  channels?: string;
}

// --- Componente de Indicador de Pasos ---
const StepIndicator: FC<{ currentStep: number; totalSteps: number }> = ({
  currentStep,
  totalSteps,
}) => (
  <div className="flex items-center justify-center w-full mb-12 font-sora">
    {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
      <div
        key={step}
        className={`flex items-center ${
          step < totalSteps ? 'w-1/3' : 'w-auto'
        }`}
      >
        <div
          className={`w-8 h-8 rounded-full grid place-items-center flex-shrink-0 transition-all duration-500 ${
            currentStep >= step
              ? 'bg-accent-green text-dark-blue'
              : 'bg-dark-blue border-2 border-light-blue'
          }`}
        >
          {currentStep > step ? <Check size={16} /> : step}
        </div>
        {step < totalSteps && (
          <div
            className={`w-full h-1 transition-all duration-500 mx-2 ${
              currentStep > step ? 'bg-accent-green' : 'bg-light-blue'
            }`}
          ></div>
        )}
      </div>
    ))}
  </div>
);

// --- Componente Principal del Formulario ---
const LeadCaptureFormComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    goal: '',
    industry: '',
    urgency: 'In 1-3 months',
    channels: [] as string[],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mainContainerRef = useRef<HTMLDivElement>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        channels: checked
          ? [...prev.channels, value]
          : prev.channels.filter((c) => c !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Full name is required.';
      if (!formData.email.trim()) {
        newErrors.email = 'Work email is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email format is invalid.';
      }
      if (!formData.company.trim())
        newErrors.company = 'Company name is required.';
    } else if (step === 2) {
      if (!formData.goal) newErrors.goal = 'Please select a primary goal.';
      if (!formData.industry) newErrors.industry = 'Please select an industry.';
      if (!formData.urgency) newErrors.urgency = 'Please select a timeline.';
    } else if (step === 3) {
      if (formData.channels.length === 0)
        newErrors.channels = 'Please select at least one channel.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(3) || !executeRecaptcha) return;

    setIsSubmitting(true);

    try {
      const recaptchaToken = await executeRecaptcha('form_submission');
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });
      if (!response.ok) throw new Error('Server response was not OK');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem with your submission. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useLayoutEffect(() => {
    // Lógica de animación corregida y robusta
    const ctx = gsap.context(() => {
      gsap.from('.form-wrapper', {
        autoAlpha: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });
    }, mainContainerRef);
    return () => ctx.revert(); // Función de limpieza
  }, []);

  if (isSubmitted) {
    return (
      <main
        ref={mainContainerRef}
        className="flex items-center justify-center min-h-screen text-center px-6 bg-light-blue"
      >
        <div className="bg-dark-blue p-8 md:p-16 rounded-2xl max-w-2xl">
          <CheckCircle2 size={64} className="text-accent-green mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary">
            {formContent.thankYou.title}
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            {formContent.thankYou.paragraph}
          </p>
          <p className="mt-8 text-lg font-sora font-semibold">
            {formContent.thankYou.cta}
          </p>
          <Link
            href="#"
            className="mt-6 inline-block bg-accent-green text-black font-sora font-semibold rounded-full px-8 py-3 hover:bg-light-green transition-colors"
          >
            {formContent.thankYou.ctaButton}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      ref={mainContainerRef}
      className="min-h-screen flex flex-col items-center justify-start pt-24 md:pt-32 pb-12 px-4 bg-light-blue"
    >
      <div className="form-wrapper w-full max-w-xl md:max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">
            {formContent.mainTitle}
          </h1>
          <p className="mt-4 text-gray-400">{formContent.mainSubtitle}</p>
        </div>

        <div className="bg-dark-blue p-6 md:p-12 rounded-2xl shadow-2xl shadow-dark-blue/20">
          <StepIndicator currentStep={currentStep} totalSteps={3} />

          <form onSubmit={handleSubmit} noValidate>
            <div className="relative min-h-[32rem]">
              {/* PASO 1 */}
              <div
                className={`form-step-1 space-y-5 absolute w-full transition-opacity duration-300 ${
                  currentStep === 1 ? 'opacity-100' : 'opacity-0 invisible'
                }`}
              >
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  {formContent.step1.title}
                </h2>
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-400"
                  >
                    {formContent.step1.fields.name.label}
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={formContent.step1.fields.name.placeholder}
                    className={`w-full mt-2 p-3 bg-light-blue rounded-lg border-2 focus:outline-none ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-transparent focus:border-accent-green'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-400"
                  >
                    {formContent.step1.fields.email.label}
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={formContent.step1.fields.email.placeholder}
                    className={`w-full mt-2 p-3 bg-light-blue rounded-lg border-2 focus:outline-none ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-transparent focus:border-accent-green'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-gray-400"
                  >
                    {formContent.step1.fields.company.label}
                  </label>
                  <input
                    required
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={formContent.step1.fields.company.placeholder}
                    className={`w-full mt-2 p-3 bg-light-blue rounded-lg border-2 focus:outline-none ${
                      errors.company
                        ? 'border-red-500'
                        : 'border-transparent focus:border-accent-green'
                    }`}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="!mt-8 w-full bg-accent-green text-black font-sora font-semibold rounded-full p-3 flex items-center justify-center gap-2"
                >
                  {formContent.step1.nextButton} <ArrowRight size={20} />
                </button>
              </div>

              {/* PASO 2 */}
              <div
                className={`form-step-2 space-y-5 absolute w-full transition-opacity duration-300 ${
                  currentStep === 2 ? 'opacity-100' : 'opacity-0 invisible'
                }`}
              >
                <h2 className="text-xl md:text-2xl font-semibold text-center">
                  {formContent.step2.title}
                </h2>
                <div>
                  <label className="text-sm font-medium text-gray-400">
                    {formContent.step2.subtitle}
                  </label>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {formContent.step2.goals.map((goal) => (
                      <label
                        key={goal}
                        className={`flex items-center p-3 bg-light-blue rounded-lg border-2 cursor-pointer transition-colors ${
                          formData.goal === goal
                            ? 'border-accent-green'
                            : 'border-transparent'
                        }`}
                      >
                        <input
                          type="radio"
                          name="goal"
                          value={goal}
                          checked={formData.goal === goal}
                          onChange={handleInputChange}
                          className="hidden peer"
                        />
                        <div className="w-4 h-4 rounded-full border-2 border-gray-500 peer-checked:bg-accent-green mr-3"></div>
                        <span>{goal}</span>
                      </label>
                    ))}
                  </div>
                  {errors.goal && (
                    <p className="text-red-500 text-sm mt-1">{errors.goal}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="industry"
                    className="text-sm font-medium text-gray-400"
                  >
                    {formContent.step2.industry.label}
                  </label>
                  <select
                    required
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className={`w-full mt-2 p-3 bg-light-blue rounded-lg border-2 focus:outline-none appearance-none ${
                      errors.industry
                        ? 'border-red-500'
                        : 'border-transparent focus:border-accent-green'
                    }`}
                  >
                    <option value="" disabled>
                      {formContent.step2.industry.placeholder}
                    </option>
                    {formContent.step2.industry.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.industry}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">
                    {formContent.step2.urgency.label}
                  </label>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {formContent.step2.urgency.options.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center justify-center p-3 bg-light-blue rounded-lg border-2 cursor-pointer transition-colors text-sm ${
                          formData.urgency === option
                            ? 'border-accent-green'
                            : 'border-transparent'
                        }`}
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={option}
                          checked={formData.urgency === option}
                          onChange={handleInputChange}
                          className="hidden"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 !mt-8">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-full sm:w-1/3 bg-dark-blue border border-gray-700 text-gray-300 font-sora font-semibold rounded-full p-3 flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={20} /> {formContent.step2.backButton}
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full sm:w-2/3 bg-accent-green text-black font-sora font-semibold rounded-full p-3 flex items-center justify-center gap-2"
                  >
                    {formContent.step2.nextButton} <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              {/* PASO 3 */}
              <div
                className={`form-step-3 space-y-5 absolute w-full transition-opacity duration-300 ${
                  currentStep === 3 ? 'opacity-100' : 'opacity-0 invisible'
                }`}
              >
                <h2 className="text-xl md:text-2xl font-semibold text-center">
                  {formContent.step3.title}
                </h2>
                <div>
                  <label className="text-sm font-medium text-gray-400">
                    {formContent.step3.subtitle}
                  </label>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {formContent.step3.channels.map((channel) => (
                      <label
                        key={channel}
                        className={`flex items-center p-3 bg-light-blue rounded-lg border-2 cursor-pointer transition-colors ${
                          formData.channels.includes(channel)
                            ? 'border-accent-green'
                            : 'border-transparent'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="channels"
                          value={channel}
                          checked={formData.channels.includes(channel)}
                          onChange={handleInputChange}
                          className="hidden peer"
                        />
                        <div className="w-5 h-5 rounded border-2 border-gray-500 peer-checked:bg-accent-green flex items-center justify-center mr-3 flex-shrink-0">
                          <Check
                            size={12}
                            className={`transition-opacity ${
                              formData.channels.includes(channel)
                                ? 'opacity-100'
                                : 'opacity-0'
                            }`}
                          />
                        </div>
                        <span>{channel}</span>
                      </label>
                    ))}
                  </div>
                  {errors.channels && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.channels}
                    </p>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 !mt-12">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-full sm:w-1/3 bg-dark-blue border border-gray-700 text-gray-300 font-sora font-semibold rounded-full p-3 flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={20} /> {formContent.step3.backButton}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-2/3 bg-accent-green text-black font-sora font-semibold rounded-full p-3 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <LoaderCircle size={20} className="animate-spin" />
                    ) : (
                      formContent.step3.submitButton
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

// --- Componente Contenedor para reCAPTCHA ---
const LeadCapturePageWithCaptcha = () => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    scriptProps={{
      async: false,
      defer: false,
      appendTo: 'head',
      nonce: undefined,
    }}
  >
    <LeadCaptureFormComponent />
  </GoogleReCaptchaProvider>
);

export default LeadCapturePageWithCaptcha;
