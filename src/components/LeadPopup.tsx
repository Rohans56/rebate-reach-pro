import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Shield, CheckCircle, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const POPUP_DELAY_MS = 8000; // 8 seconds
const STORAGE_KEY = "adsa_popup_dismissed";
const DISMISS_DAYS = 7; // Don't show again for 7 days

export const LeadPopup = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
  });

  useEffect(() => {
    // Check if already dismissed recently
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10);
      const daysSince = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24);
      if (daysSince < DISMISS_DAYS) return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        suburb: formData.suburb,
        message: "Lead via popup",
      });

      if (error) throw error;

      await Promise.allSettled([
        supabase.functions.invoke("send-to-pylon", { body: { ...formData } }),
        supabase.functions.invoke("notify-new-lead", { body: { ...formData } }),
      ]);

      setSubmitted(true);
      localStorage.setItem(STORAGE_KEY, Date.now().toString());

      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } catch (error) {
      console.error("Popup form error:", error);
      toast({
        title: "Something went wrong",
        description: "Please call us directly on 0469 312 118.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-card rounded-3xl shadow-2xl w-full max-w-md pointer-events-auto relative overflow-hidden">

              {/* Decorative top bar */}
              <div className="h-2 bg-gradient-to-r from-primary to-orange-400" />

              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                {!submitted ? (
                  <>
                    {/* Header */}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <Zap className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Find Out How Much You Could Save
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Get a <span className="font-semibold text-primary">free personalised quote</span> — most Victorian homeowners save $1,000–$2,300/year with government rebates up to $18,500.
                      </p>
                    </div>

                    {/* Trust badges */}
                    <div className="flex items-center gap-4 mb-6 p-3 bg-secondary/20 rounded-xl">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                        No obligation
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                        Reply in 24hrs
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                        CEC Accredited
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Input
                            required
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="h-11"
                          />
                        </div>
                        <div>
                          <Input
                            required
                            type="tel"
                            placeholder="Phone Number *"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="h-11"
                          />
                        </div>
                      </div>
                      <Input
                        required
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-11"
                      />
                      <Input
                        placeholder="Your Suburb (optional)"
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        className="h-11"
                      />

                      <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-orange-400 hover:from-primary/90 hover:to-orange-400/90 text-white font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Get My Free Quote
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>

                    {/* Footer */}
                    <div className="flex items-center justify-center gap-1.5 mt-4">
                      <Shield className="w-3.5 h-3.5 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">
                        No spam. Your info is 100% secure.
                      </p>
                    </div>

                    <button
                      onClick={dismiss}
                      className="w-full mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors text-center"
                    >
                      No thanks, I'll pay full price
                    </button>
                  </>
                ) : (
                  /* Success state */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-10 h-10 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      You're all set!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      We'll be in touch within 24 hours with your personalised solar quote.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      Or call us now: <a href="tel:0469312118" className="font-semibold text-primary hover:underline">0469 312 118</a>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
