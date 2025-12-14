import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Zap, Battery, DollarSign, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const SavingsCalculator = () => {
  const [billAmount, setBillAmount] = useState([400]);
  const [systemSize, setSystemSize] = useState([6.6]);
  const [includeBattery, setIncludeBattery] = useState(true);
  const [batterySize, setBatterySize] = useState([10]);

  const calculations = useMemo(() => {
    const quarterlyBill = billAmount[0];
    const annualBill = quarterlyBill * 4;
    const system = systemSize[0];
    const battery = includeBattery ? batterySize[0] : 0;

    // Solar savings (roughly 30-50% of bill depending on system size)
    const solarSavingsPercent = Math.min(0.3 + (system / 20), 0.7);
    const solarSavings = Math.round(annualBill * solarSavingsPercent);

    // Battery savings (additional 20-35%)
    const batterySavingsPercent = battery > 0 ? Math.min(0.15 + (battery / 40), 0.35) : 0;
    const batterySavings = Math.round(annualBill * batterySavingsPercent);

    // Rebates
    const stcRebate = Math.round(system * 38 * 14); // ~$2,000-$3,500 for typical systems
    const batteryRebate = battery * 340; // ~$340 per kWh

    // System costs (rough estimates)
    const solarCost = system * 1200;
    const batteryCost = battery * 1100;
    const totalCostBeforeRebate = solarCost + batteryCost;
    const totalCostAfterRebate = totalCostBeforeRebate - stcRebate - batteryRebate;

    // Payback
    const totalAnnualSavings = solarSavings + batterySavings;
    const paybackYears = totalAnnualSavings > 0 ? Math.round((totalCostAfterRebate / totalAnnualSavings) * 10) / 10 : 0;

    return {
      annualSavings: totalAnnualSavings,
      solarSavings,
      batterySavings,
      stcRebate,
      batteryRebate,
      totalRebate: stcRebate + batteryRebate,
      netCost: Math.max(0, totalCostAfterRebate),
      paybackYears: Math.max(2.5, Math.min(paybackYears, 7)),
    };
  }, [billAmount, systemSize, includeBattery, batterySize]);

  return (
    <section id="calculator" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-semibold">Instant Savings Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Find Your Savings — In Just <span className="text-accent">30 Seconds</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Average customers in Melbourne are saving $1,500+ every year on power bills
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl shadow-card p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Your Details</h3>

              {/* Quarterly Bill */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-muted-foreground">
                    Average Quarterly Electricity Bill
                  </label>
                  <span className="text-lg font-bold text-primary">${billAmount[0]}</span>
                </div>
                <Slider
                  value={billAmount}
                  onValueChange={setBillAmount}
                  min={100}
                  max={1000}
                  step={25}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$100</span>
                  <span>$1,000</span>
                </div>
              </div>

              {/* System Size */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-muted-foreground">
                    Solar System Size
                  </label>
                  <span className="text-lg font-bold text-primary">{systemSize[0]} kW</span>
                </div>
                <Slider
                  value={systemSize}
                  onValueChange={setSystemSize}
                  min={3}
                  max={13.3}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>3 kW (Small)</span>
                  <span>13.3 kW (Large)</span>
                </div>
              </div>

              {/* Battery Toggle */}
              <div className="mb-8">
                <button
                  onClick={() => setIncludeBattery(!includeBattery)}
                  className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                    includeBattery
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    includeBattery ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    <Battery className="w-6 h-6" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-foreground">Add Battery Storage</p>
                    <p className="text-sm text-muted-foreground">Get up to $4,000+ extra rebate</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    includeBattery ? "border-primary bg-primary" : "border-muted-foreground"
                  }`}>
                    {includeBattery && <CheckCircle className="w-4 h-4 text-primary-foreground" />}
                  </div>
                </button>
              </div>

              {/* Battery Size */}
              {includeBattery && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6"
                >
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-muted-foreground">
                      Battery Capacity
                    </label>
                    <span className="text-lg font-bold text-primary">{batterySize[0]} kWh</span>
                  </div>
                  <Slider
                    value={batterySize}
                    onValueChange={setBatterySize}
                    min={5}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5 kWh</span>
                    <span>20 kWh</span>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-hero rounded-2xl shadow-card p-6 md:p-8 text-primary-foreground"
            >
              <h3 className="text-xl font-semibold mb-6">Your Estimated Savings</h3>

              {/* Annual Savings */}
              <div className="bg-primary-foreground/10 rounded-xl p-6 mb-6 backdrop-blur-sm">
                <p className="text-sm text-primary-foreground/70 mb-1">Annual Savings</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">${calculations.annualSavings.toLocaleString()}</span>
                  <span className="text-primary-foreground/70">/year</span>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-solar-orange" />
                    <span className="text-sm">Solar Panel Savings</span>
                  </div>
                  <span className="font-semibold">${calculations.solarSavings.toLocaleString()}/yr</span>
                </div>
                {includeBattery && (
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Battery className="w-4 h-4 text-solar-orange" />
                      <span className="text-sm">Battery Savings</span>
                    </div>
                    <span className="font-semibold">${calculations.batterySavings.toLocaleString()}/yr</span>
                  </div>
                )}
                <div className="h-px bg-primary-foreground/20" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-solar-yellow" />
                    <span className="text-sm">Total Rebates</span>
                  </div>
                  <span className="font-semibold text-solar-yellow">
                    -${calculations.totalRebate.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-solar-orange" />
                    <span className="text-sm">Payback Period</span>
                  </div>
                  <span className="font-semibold">{calculations.paybackYears} years</span>
                </div>
              </div>

              {/* Net Cost */}
              <div className="bg-primary-foreground/10 rounded-xl p-4 mb-6 backdrop-blur-sm">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary-foreground/70">Est. Net System Cost</span>
                  <span className="text-2xl font-bold">${calculations.netCost.toLocaleString()}</span>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="#contact" className="group">
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <p className="text-xs text-center text-primary-foreground/50 mt-4">
                *Estimates based on average Melbourne household data. Actual savings may vary.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
