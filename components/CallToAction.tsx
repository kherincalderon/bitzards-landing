import Link from 'next/link';

export const CallToAction = () => {
  return (
    // 1. Fondo de la sección: 'light-blue'
    <section className="bg-light-blue py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* --- Tarjeta Izquierda --- */}
          <div
            // 2. Fondo de la tarjeta: 'dark-blue'
            className="bg-dark-blue p-10 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-regular">
                Ready to Let AI Do the Heavy Lifting?
              </h2>
              <p className="mt-6 text-gray-300">
                Whether you&apos;re curious or committed, we&apos;ll help you
                take the first step toward smarter operations and better results
                — no pressure, just possibilities.
              </p>
            </div>
            <Link
              href="/demo"
              className="inline-block bg-light-green text-black font-sora font-semibold rounded-full px-8 py-3 mt-8 w-fit hover:bg-white transition-colors"
            >
              Get My Free AI Audit
            </Link>
          </div>

          {/* --- Tarjeta Derecha --- */}
          <div className="bg-light-green text-black p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <p className="font-semibold">
                Not sure if your business is ready to automate yet?
              </p>
              <h2 className="text-3xl md:text-4xl font-regular mt-2">
                Check our Automation Business Assessment below
              </h2>
            </div>
            <Link
              href="/automation-quiz"
              className="inline-block bg-black text-primary-text font-sora font-semibold rounded-full px-8 py-3 mt-8 w-fit hover:bg-gray-800 transition-colors"
            >
              Take Automation Quiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
