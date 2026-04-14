import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { env } from "@/config/env";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setStatus("loading");

    try {
      const { supabaseUrl, supabasePublishableKey } = env;

      if (!supabaseUrl || !supabasePublishableKey) {
        throw new Error("Supabase environment variables are missing.");
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabasePublishableKey}`,
          apikey: supabasePublishableKey,
        },
        body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), message: form.message.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to send");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      toast.error("Failed to send message. Please try again.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">// contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's build fast, scalable web experiences together.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
              Have a project in mind or want to discuss frontend architecture?
            </p>
            <p className="text-muted-foreground">
              Feel free to reach out — I'd be happy to connect.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "tharshanr.official@gmail.com", href: "mailto:tharshanr.official@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tharshan-r-developer" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon size={16} className="group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="surface-card p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              disabled={status === "loading"}
              maxLength={100}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              disabled={status === "loading"}
              maxLength={255}
              required
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              disabled={status === "loading"}
              maxLength={1000}
              required
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {status === "loading" && <Loader2 size={14} className="animate-spin" />}
              {status === "success" && <CheckCircle size={14} />}
              {status === "error" && <AlertCircle size={14} />}
              {status === "idle" && <Send size={14} />}
              {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
