import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const ContactForm = () => {
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
      // Save to local database
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

      // Send to Pylon CRM and email notification in parallel (don't block each other)
      const [pylonResponse, notifyResponse] = await Promise.allSettled([
        supabase.functions.invoke("send-to-pylon", {
          body: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            streetAddress: formData.streetAddress,
            suburb: formData.suburb,
            postcode: formData.postcode,
            message: formData.message,
          },
        }),
        supabase.functions.invoke("notify-new-lead", {
          body: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            streetAddress: formData.streetAddress,
            suburb: formData.suburb,
            postcode: formData.postcode,
            message: formData.message,
          },
        }),
      ]);

      if (pylonResponse.status === "rejected" || pylonResponse.value?.error) {
        console.error("Pylon sync error:", pylonResponse.status === "rejected" ? pylonResponse.reason : pylonResponse.value?.error);
      }
      if (notifyResponse.status === "rejected" || notifyResponse.value?.error) {
        console.error("Email notification error:", notifyResponse.status === "rejected" ? notifyResponse.reason : notifyResponse.value?.error);
      }

      toast({
        title: "Quote Request Received!",
        description: "We'll contact you within 24 hours with your free quote.",
      });

      // Google Ads conversion tracking
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-18081553067/YfhRCPig3qEcEKu1-q1D'
        });
      }
      
      setFormData({ name: "", email: "", phone: "", streetAddress: "", suburb: "", postcode: "", message: "" });
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
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Installer on roof — background image */}
      <div className="absolute inset-0">
        <img
          src="/install-3.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(46,184,122,0.95) 0%, rgba(30,58,95,0.92) 100%)"
        }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Get Your <span className="text-solar-orange">Free Quote</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              See exactly how much you could save with government rebates. No obligation, no pressure — just honest advice.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-solar-orange" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Call Us</p>
                  <a href="tel:0469312118" className="text-xl font-semibold text-primary-foreground hover:text-solar-orange transition-colors">
                    0469 312 118
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-solar-orange" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email Us</p>
                  <a href="mailto:info@adsaaustraliansolar.com.au" className="text-lg font-semibold text-primary-foreground hover:text-solar-orange transition-colors">
                    info@adsaaustraliansolar.com.au
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-solar-orange" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Address</p>
                  <p className="text-xl font-semibold text-primary-foreground">82 Yale Dr, Epping, 3076</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-solar-orange" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Response Time</p>
                  <p className="text-xl font-semibold text-primary-foreground">Within 24 Hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Request Your Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone Number *</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0400 000 000"
                    className="h-12"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email Address *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Street Address *</label>
                <Input
                  required
                  value={formData.streetAddress}
                  onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                  placeholder="123 Main Street"
                  className="h-12"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Suburb *</label>
                  <Input
                    required
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                    placeholder="e.g. Point Cook"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Postcode *</label>
                  <Input
                    required
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    placeholder="3030"
                    className="h-12"
                    maxLength={4}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Tell us about your needs</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Current quarterly bill, roof type, interested in solar/battery..."
                  rows={4}
                  className="resize-none"
                />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Get My Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                No spam, no obligation. Your information is secure.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
