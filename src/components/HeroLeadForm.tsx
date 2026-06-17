import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const HeroLeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    streetAddress: "",
    suburb: "",
    postcode: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        street_address: formData.streetAddress,
        suburb: formData.suburb,
        postcode: formData.postcode,
        message: formData.message || null,
      });

      if (error) throw error;

      const [, notifyResponse] = await Promise.allSettled([
        supabase.functions.invoke("send-to-pylon", {
          body: { ...formData },
        }),
        supabase.functions.invoke("notify-new-lead", {
          body: { ...formData },
        }),
      ]);

      if (notifyResponse.status === "rejected" || notifyResponse.value?.error) {
        console.error(
          "Email notification error:",
          notifyResponse.status === "rejected"
            ? notifyResponse.reason
            : notifyResponse.value?.error
        );
      }

      toast({
        title: "Quote Request Received!",
        description: "We'll contact you within 24 hours with your free quote.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        streetAddress: "",
        suburb: "",
        postcode: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      <div className="relative bg-card rounded-3xl shadow-float p-6 md:p-8 border border-border">
        {/* Floating badge */}
        <div className="absolute -top-4 -right-4 bg-[#1e3a5f] text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold">
          #HurryUp
        </div>

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Find out exactly what you'd save.
          </h2>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
            Free · No obligation · Response within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Full Name *"
              className="h-11"
            />
            <Input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Phone Number *"
              className="h-11"
            />
          </div>
          <Input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email Address *"
            className="h-11"
          />
          <Input
            required
            value={formData.streetAddress}
            onChange={(e) =>
              setFormData({ ...formData, streetAddress: e.target.value })
            }
            placeholder="Street Address *"
            className="h-11"
          />
          <div className="grid sm:grid-cols-2 gap-3">
            <Input
              required
              value={formData.suburb}
              onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
              placeholder="Suburb *"
              className="h-11"
            />
            <Input
              required
              value={formData.postcode}
              onChange={(e) =>
                setFormData({ ...formData, postcode: e.target.value })
              }
              placeholder="Postcode *"
              className="h-11"
              maxLength={4}
            />
          </div>
          <Textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your needs (optional)"
            rows={2}
            className="resize-none"
          />
          <Button
            variant="hero"
            size="lg"
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Show Me My Savings →
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>
          <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
            <Shield className="w-3 h-3" />
            Joined by 500+ Melbourne families · 100% free, no pressure
          </p>
        </form>
      </div>

      <div className="absolute -z-10 top-6 left-6 right-6 bottom-0 bg-solar-mint rounded-3xl" />
    </motion.div>
  );
};
