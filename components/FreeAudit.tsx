// components/FreeAudit.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Zap, Target, BrainCircuit, type LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type IconComponent = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>;

const auditBenefits: {
  Icon: IconComponent;
  text: string;
}[] = [
  { Icon: Zap, text: 'Identify high-impact automation opportunities' },
  { Icon: Target, text: 'Spot inefficiencies in your current stack' },
  { Icon: BrainCircuit, text: 'Get tailored AI use cases for your business' },
];

export const FreeAudit = () => {
  return (
    <section id="free-audit" className="bg-dark-blue text-primary-text py-20">
      {/* Contenedor principal que ya tiene el padding responsive correcto */}
      <div className="max-w-[1440px] mx-auto px-14 md:px-20">
        {/* El grid ahora es hijo directo del contenedor principal para evitar conflictos */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
          {/* --- Columna de Texto --- */}
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-3xl md:text-4xl font-light">
              <span className="text-gradient-primary">
                Get a Free AI Audit <br />
              </span>{' '}
              – <span className="text-primary-text">No Strings Attached</span>
            </h2>
            <p className="mt-4 text-gray-300">
              Wondering where AI could save you time, boost revenue, or simplify
              operations?
            </p>
            <p className="mt-4 text-gray-300">
              Our team will analyze your workflows and give you a{' '}
              <strong className="text-primary-text">
                personalized roadmap — totally free.
              </strong>
            </p>

            <ul className="mt-8 space-y-4">
              {auditBenefits.map(({ Icon, text }, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Icon className="text-accent-green flex-shrink-0" size={20} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#free-audit"
              className="inline-block bg-accent-green text-black font-sora font-semibold rounded-full px-8 py-3 mt-8 hover:bg-light-green transition-colors"
            >
              Get My Free AI Audit
            </Link>
          </div>

          {/* --- Columna de Imagen --- */}
          <div className="col-span-12 lg:col-span-6">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team analyzing workflows on a laptop"
              width={450}
              height={600}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
