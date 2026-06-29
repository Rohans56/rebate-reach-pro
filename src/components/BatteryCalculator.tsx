import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Battery, 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  ArrowRight, 
  Zap,
  MapPin,
  Info,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const batteryOptions = [
  { name: "Select a Battery", capacity: 0, efficiency: 0, price: 0 },
  { name: "Tesla Powerwall 3", capacity: 13.5, efficiency: 90, price: 14500 },
  { name: "BYD Battery Box HVM 11.0", capacity: 11, efficiency: 95, price: 9800 },
  { name: "BYD Battery Box HVM 13.8", capacity: 13.8, efficiency: 95, price: 11500 },
  { name: "Sungrow SBR HV 12.8 kWh", capacity: 12.8, efficiency: 93, price: 8900 },
  { name: "Sungrow SBR HV 16 kWh", capacity: 16, efficiency: 93, price: 10500 },
  { name: "Alpha ESS Smile-T10", capacity: 10.1, efficiency: 92, price: 8500 },
  { name: "GoodWe Lynx Home 12.8", capacity: 12.8, efficiency: 92, price: 9200 },
  { name: "Enphase IQ Battery 5P", capacity: 5, efficiency: 96, price: 7500 },
  { name: "SolarEdge Home Battery 10", capacity: 9.7, efficiency: 90, price: 9800 },
  { name: "Generic 10kWh Lithium", capacity: 10, efficiency: 90, price: 8000 },
  { name: "Generic 15kWh Lithium", capacity: 15, efficiency: 90, price: 12000 },
];

export const BatteryCalculator = () => {
  const [postcode, setPostcode] = useState("");
  const [systemSize, setSystemSize] = useState([6.6]);
  const [selectedBattery, setSelectedBattery] = useState("");
  const [dailyUsage, setDailyUsage] = useState([25]);
  const [feedInTariff, setFeedInTariff] = useState([5]);
  const [electricityRate, setElectricityRate] = useState([30]);
  const [batteryReserve, setBatteryReserve] = useState([10]);

  const battery = useMemo(() => {
    return batteryOptions.find(b => b.name === selectedBattery) || batteryOptions[0];
  }, [selectedBattery]);

  const calculations = useMemo(() => {
    if (!battery.capacity) {
      return {
        annualSavings: 0,
        selfConsumptionSavings: 0,
        exportReduction: 0,
        batteryCost: 0,
        batteryRebate: 0,
        netCost: 0,
        paybackYears: 0,
        dailyBatteryUsage: 0,
        annualCycles: 0,
      };
    }

    const usableCapacity = battery.capacity * (battery.efficiency / 100) * ((100 - batteryReserve[0]) / 100);
    const dailyBatteryUsage = Math.min(usableCapacity, dailyUsage[0] * 0.4); // Assume 40% of daily usage can be shifted to battery
    
    // Daily savings calculation
    const selfConsumptionRate = electricityRate[0] / 100; // cents to dollars
    const feedIn = feedInTariff[0] / 100;
    
    // Savings from using stored solar instead of grid
    const dailySelfConsumptionSavings = dailyBatteryUsage * selfConsumptionRate;
    
    // Avoided export (lower rate)
    const dailyExportReduction = dailyBatteryUsage * feedIn;
    
    const dailySavings = dailySelfConsumptionSavings - dailyExportReduction;
    const annualSavings = Math.round(dailySavings * 365);
    
    // Battery rebate (Victorian Home Battery Rebate ~$2,950 up to max $2,800 based on capacity)
    const rebatePerKwh = 340;
    const maxRebate = 4000; // Simplified rebate cap
    const batteryRebate = Math.min(battery.capacity * rebatePerKwh, maxRebate);
    
    const netCost = Math.max(0, battery.price - batteryRebate);
    const paybackYears = annualSavings > 0 ? netCost / annualSavings : 0;
    
    const annualCycles = Math.round((dailyBatteryUsage * 365) / battery.capacity);

    return {
      annualSavings,
      selfConsumptionSavings: Math.round(dailySelfConsumptionSavings * 365),
      exportReduction: Math.round(dailyExportReduction * 365),
      batteryCost: battery.price,
      batteryRebate,
      netCost,
      paybackYears: Math.round(paybackYears * 10) / 10,
      dailyBatteryUsage: Math.round(dailyBatteryUsage * 10) / 10,
      annualCycles,
    };
  }, [battery, dailyUsage, feedInTariff, electricityRate, batteryReserve]);

  return (
    <section id="battery-calculator" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Battery className="w-4 h-4" />
            <span className="text-sm font-semibold">Battery Savings Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Calculate Your <span className="text-primary">Battery Savings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate savings when adding a battery to your existing solar panel system, including government rebates
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Calculator Inputs - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-card rounded-2xl shadow-card p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Enter Your Details</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Postcode */}
                <div>
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4" />
                    Your Postcode
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g. 3000"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    className="text-lg"
                  />
                </div>

                {/* Solar System Size */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Solar System Size
                    </label>
                    <span className="text-lg font-bold text-primary">{systemSize[0]} kW</span>
                  </div>
                  <Slider
                    value={systemSize}
                    onValueChange={setSystemSize}
                    min={3}
                    max={15}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>3 kW</span>
                    <span>15 kW</span>
                  </div>
                </div>

                {/* Battery Selection */}
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-3">
                    <Battery className="w-4 h-4" />
                    Choose Your Battery
                  </label>
                  <Select value={selectedBattery} onValueChange={setSelectedBattery}>
                    <SelectTrigger className="w-full text-left">
                      <SelectValue placeholder="Select a battery model" />
                    </SelectTrigger>
                    <SelectContent>
                      {batteryOptions.slice(1).map((b) => (
                        <SelectItem key={b.name} value={b.name}>
                          {b.name} ({b.capacity} kWh)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Battery Specs (when selected) */}
                {battery.capacity > 0 && (
                  <>
                    <div className="md:col-span-2 bg-secondary/50 rounded-xl p-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-xs text-muted-foreground">Usable Capacity</p>
                          <p className="text-lg font-bold text-foreground">{battery.capacity} kWh</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Efficiency</p>
                          <p className="text-lg font-bold text-foreground">{battery.efficiency}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Est. Price</p>
                          <p className="text-lg font-bold text-foreground">${battery.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Daily Usage */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      Daily Usage
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-3 h-3" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Average daily electricity usage in kWh. Check your bill for this info.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <span className="text-lg font-bold text-primary">{dailyUsage[0]} kWh</span>
                  </div>
                  <Slider
                    value={dailyUsage}
                    onValueChange={setDailyUsage}
                    min={10}
                    max={60}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>10 kWh</span>
                    <span>60 kWh</span>
                  </div>
                </div>

                {/* Electricity Rate */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      Electricity Rate
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-3 h-3" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Your electricity cost per kWh (cents).</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <span className="text-lg font-bold text-primary">{electricityRate[0]}c/kWh</span>
                  </div>
                  <Slider
                    value={electricityRate}
                    onValueChange={setElectricityRate}
                    min={20}
                    max={50}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>20c</span>
                    <span>50c</span>
                  </div>
                </div>

                {/* Feed-in Tariff */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      Feed-in Tariff
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-3 h-3" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">What your retailer pays you for exported solar (cents per kWh).</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <span className="text-lg font-bold text-primary">{feedInTariff[0]}c/kWh</span>
                  </div>
                  <Slider
                    value={feedInTariff}
                    onValueChange={setFeedInTariff}
                    min={0}
                    max={15}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0c</span>
                    <span>15c</span>
                  </div>
                </div>

                {/* Battery Reserve */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      Blackout Reserve
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-3 h-3" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Energy reserved for backup during blackouts.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <span className="text-lg font-bold text-primary">{batteryReserve[0]}%</span>
                  </div>
                  <Slider
                    value={batteryReserve}
                    onValueChange={setBatteryReserve}
                    min={0}
                    max={50}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0%</span>
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-hero rounded-2xl shadow-card p-6 md:p-8 text-primary-foreground"
            >
              <h3 className="text-xl font-semibold mb-6">Your Battery Savings</h3>

              {battery.capacity > 0 ? (
                <>
                  {/* Annual Savings */}
                  <div className="bg-primary-foreground/10 rounded-xl p-6 mb-6 backdrop-blur-sm">
                    <p className="text-sm text-primary-foreground/70 mb-1">Annual Savings</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-bold">${calculations.annualSavings.toLocaleString()}</span>
                      <span className="text-primary-foreground/70">/year</span>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-primary-foreground/80">Daily Battery Usage</span>
                      <span className="font-semibold">{calculations.dailyBatteryUsage} kWh</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-primary-foreground/80">Self-Consumption Savings</span>
                      <span className="font-semibold">${calculations.selfConsumptionSavings.toLocaleString()}/yr</span>
                    </div>
                    <div className="h-px bg-primary-foreground/20" />
                    <div className="flex justify-between items-center">
                      <span className="text-primary-foreground/80">Battery Cost</span>
                      <span className="font-semibold">${calculations.batteryCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-solar-yellow" />
                        <span className="text-primary-foreground/80">Government Rebate</span>
                      </div>
                      <span className="font-semibold text-solar-yellow">
                        -${calculations.batteryRebate.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-px bg-primary-foreground/20" />
                    <div className="flex justify-between items-center">
                      <span className="text-primary-foreground/80">Net Cost After Rebate</span>
                      <span className="font-bold text-lg">${calculations.netCost.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Payback Period */}
                  <div className="bg-primary-foreground/10 rounded-xl p-4 mb-6 backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-solar-orange" />
                        <span className="text-sm text-primary-foreground/80">Payback Period</span>
                      </div>
                      <span className="text-2xl font-bold">
                        {calculations.paybackYears > 0 ? `${calculations.paybackYears} years` : '-'}
                      </span>
                    </div>
                  </div>

                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="#contact" className="group">
                      Get Your Free Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>

                  <p className="text-xs text-center text-primary-foreground/50 mt-4">
                    *Estimates based on average usage patterns. Actual savings may vary.
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <Battery className="w-16 h-16 text-primary-foreground/30 mb-4" />
                  <p className="text-primary-foreground/70 mb-2">Select a battery to see your savings</p>
                  <p className="text-sm text-primary-foreground/50">
                    Choose from popular brands like Tesla, BYD, and Sungrow
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mt-8"
          >
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Government Rebates</h4>
              <p className="text-sm text-muted-foreground">
                Victorian households can receive up to $4,000 in battery rebates through the Solar Homes Program.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Battery className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Blackout Protection</h4>
              <p className="text-sm text-muted-foreground">
                Keep your home powered during outages with battery backup, protecting essential appliances.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-solar-orange/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-solar-orange" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Rising Electricity Costs</h4>
              <p className="text-sm text-muted-foreground">
                Lock in savings as electricity prices continue to rise. Your battery pays for itself faster each year.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
