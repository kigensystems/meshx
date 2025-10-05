'use client';

const stats = [
  {
    value: '$50M+',
    label: 'Trading Volume',
  },
  {
    value: '100+',
    label: 'Active Pairs',
  },
  {
    value: '10K+',
    label: 'Traders',
  },
  {
    value: '0.05%',
    label: 'Trading Fee',
  },
];

export function Stats() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-mesh-gradient-red to-mesh-gradient-blue bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-mesh-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
