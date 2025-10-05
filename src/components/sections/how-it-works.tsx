'use client';

const steps = [
  {
    number: 1,
    title: 'Connect Wallet',
    description: 'Connect your Solana wallet with one click',
  },
  {
    number: 2,
    title: 'Deposit USDC',
    description: 'Fund your account with USDC collateral',
  },
  {
    number: 3,
    title: 'Trade Memecoins',
    description: 'Long or short your favorite tokens with leverage',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Start Trading in 3 Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-mesh-gradient-red to-mesh-gradient-blue flex items-center justify-center text-2xl font-bold mx-auto">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-mesh-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
