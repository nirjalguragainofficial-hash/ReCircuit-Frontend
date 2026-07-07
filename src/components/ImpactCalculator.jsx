import { useState, useMemo } from 'react';
import { Calculator, Trash2, ShieldAlert, Sparkles, Award } from 'lucide-react';

const ITEMS = [
  {
    id: 'smartphone',
    name: 'Smartphones',
    icon: '📱',
    co2: 55,       // kg of CO2 equivalent saved
    gold: 30,      // mg of gold recovered
    copper: 15,    // g of copper recovered
    hazardous: 2,  // g of toxic metals/materials diverted (lead, mercury, cadmium)
  },
  {
    id: 'laptop',
    name: 'Laptops / Computers',
    icon: '💻',
    co2: 220,
    gold: 220,
    copper: 80,
    hazardous: 50,
  },
  {
    id: 'television',
    name: 'TVs & Monitors',
    icon: '📺',
    co2: 350,
    gold: 150,
    copper: 120,
    hazardous: 1500,
  },
  {
    id: 'tablet',
    name: 'Tablets',
    icon: '📟',
    co2: 85,
    gold: 50,
    copper: 25,
    hazardous: 15,
  },
  {
    id: 'accessories',
    name: 'Cables & Accessories',
    icon: '🔌',
    co2: 12,
    gold: 5,
    copper: 30,
    hazardous: 5,
  },
  {
    id: 'trimmer',
    name: 'Electric Trimmers',
    icon: '🪒',
    co2: 18,
    gold: 8,
    copper: 15,
    hazardous: 8,
  },
  {
    id: 'adaptor',
    name: 'Charger Adaptors',
    icon: '⚡',
    co2: 8,
    gold: 2,
    copper: 10,
    hazardous: 3,
  },
];

export function ImpactCalculator() {
  const [quantities, setQuantities] = useState(
    ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const updateQuantity = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + delta),
    }));
  };

  const resetCalculator = () => {
    setQuantities(ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {}));
  };

  const totals = useMemo(() => {
    let co2 = 0;
    let gold = 0;
    let copper = 0;
    let hazardous = 0;
    let itemsCount = 0;

    ITEMS.forEach((item) => {
      const q = quantities[item.id] || 0;
      co2 += q * item.co2;
      gold += q * item.gold;
      copper += q * item.copper;
      hazardous += q * item.hazardous;
      itemsCount += q;
    });

    return {
      co2,
      gold: (gold / 1000).toFixed(2), // Convert mg to grams for cleaner display if high
      copper: (copper / 1000).toFixed(2), // Convert g to kg
      hazardous: (hazardous / 1000).toFixed(2), // Convert g to kg
      itemsCount,
      treesEquivalent: Math.round(co2 / 21), // Average tree absorbs 21kg CO2 per year
      carMilesEquivalent: Math.round(co2 * 2.5), // Average car emits 400g CO2 per mile (approx 2.5 miles per kg)
    };
  }, [quantities]);

  return (
    <section id="calculator" className="bg-neutral-50 py-24 md:py-32 border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-lt text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            E-Waste Calculator
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            Calculate Your <span className="text-gradient-green">Green Impact</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Estimate how much carbon emission you save and how many raw materials are recovered by recycling your e-waste.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Item Selector Column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
              <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <Calculator className="text-accent" size={22} />
                Select Your Items
              </h3>
              {totals.itemsCount > 0 && (
                <button
                  onClick={resetCalculator}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors"
                >
                  <Trash2 size={16} /> Reset
                </button>
              )}
            </div>

            <div className="flex flex-col gap-4">
              {ITEMS.map((item) => {
                const qty = quantities[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-200 ${
                      qty > 0
                        ? 'border-accent bg-accent/5'
                        : 'border-neutral-100 bg-neutral-50/50 hover:border-neutral-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" role="img" aria-label={item.name}>
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="font-bold text-neutral-800 text-base">{item.name}</h4>
                        <p className="text-xs text-neutral-400">
                          Saves {item.co2} kg CO₂ • Recover {item.gold}mg Gold
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className={`w-9 h-9 flex items-center justify-center rounded-xl font-bold text-lg transition-all duration-200 select-none border ${
                          qty > 0
                            ? 'bg-white border-neutral-200 text-neutral-800 hover:bg-neutral-50 active:scale-95'
                            : 'bg-neutral-100 border-neutral-100 text-neutral-400 cursor-not-allowed'
                        }`}
                        disabled={qty <= 0}
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-extrabold text-neutral-900 text-lg">
                        {qty}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-9 h-9 flex items-center justify-center bg-white border border-neutral-200 text-neutral-800 hover:bg-neutral-50 active:scale-95 rounded-xl font-bold text-lg transition-all duration-200 select-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="text-accent" size={20} />
                Your Green Impact
              </h3>

              {totals.itemsCount === 0 ? (
                <div className="py-16 text-center text-neutral-400">
                  <Calculator size={48} className="mx-auto mb-4 opacity-30 text-white" />
                  <p className="font-semibold text-base mb-1">No items selected yet</p>
                  <p className="text-xs text-neutral-500 max-w-[240px] mx-auto">
                    Increase item counts to see your dynamic carbon savings & materials recovered.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {/* CO2 Highlight */}
                  <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                    <span className="text-xs font-semibold text-accent uppercase tracking-widest block mb-1">
                      Carbon Offset
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-extrabold text-white">
                        {totals.co2}
                      </span>
                      <span className="text-lg font-bold text-neutral-300">kg CO₂</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2.5">
                      <div className="flex items-center gap-2.5 text-sm text-neutral-300">
                        <span className="text-lg">🌳</span>
                        <span>
                          Equivalent to <strong>{totals.treesEquivalent}</strong> full-grown trees absorbing carbon for a year.
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm text-neutral-300">
                        <span className="text-lg">🚗</span>
                        <span>
                          Equivalent to avoiding <strong>{totals.carMilesEquivalent}</strong> miles driven in an average car.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Materials Recovered */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <span className="text-xs text-neutral-400 block mb-1">Precious Metals</span>
                      <span className="text-lg font-bold text-amber-400 block">
                        {totals.gold} g <span className="text-xs text-white/70">Gold</span>
                      </span>
                      <span className="text-xs text-neutral-500 mt-1 block">
                        +{totals.copper} kg Copper
                      </span>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <span className="text-xs text-neutral-400 block mb-1">Hazardous Materials</span>
                      <span className="text-lg font-bold text-emerald-400 block">
                        {totals.hazardous} kg
                      </span>
                      <span className="text-xs text-neutral-500 mt-1 block flex items-center gap-1">
                        <ShieldAlert size={12} className="text-emerald-400/80" />
                        Safely Diverted
                      </span>
                    </div>
                  </div>

                  {/* Award CTA */}
                  <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl p-4 border border-accent/20 flex items-center gap-3">
                    <Award className="text-accent flex-shrink-0" size={24} />
                    <div className="text-xs text-neutral-300">
                      <p className="font-bold text-white mb-0.5">Ready to make it official?</p>
                      Find your nearest drop-off center to hand in these items.
                    </div>
                  </div>

                  <a
                    href="#centers"
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-accent hover:bg-accent/90 active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-md transition-all duration-200 text-center"
                  >
                    Find Nearest Center Now
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
