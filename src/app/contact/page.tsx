"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useRef, useState } from "react";
import Toast from "@/components/Toast";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "olumideilesanmi10@gmail.com",
    href: "mailto:olumideilesanmi10@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+234 916 926 5887",
    href: "tel:+2349169265887",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Lagos, Nigeria",
    href: null,
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    title: string;
    message?: string;
  } | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setToast(null);

    try {
      await emailjs.sendForm(
        "service_xyny4fb",
        "template_lnadiei",
        form.current,
        "1Eh0Vn-V8mmLtsstO",
      );

      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setMessage("");

      setToast({
        type: "success",
        title: "Message sent successfully!",
        message: "Thanks for reaching out, I'll get back to you soon.",
      });
    } catch (error) {
      console.error(error);
      setToast({
        type: "error",
        title: "Failed to send message",
        message: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      className="min-h-[80vh] flex items-center py-12 xl:py-5"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-12 items-start">
          {/* ── Left: contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="xl:w-[36%] order-2 xl:order-none flex flex-col gap-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-3">
                Let&apos;s <span className="text-accent">Connect</span>
              </h2>
              <p className="text-white/50 leading-relaxed text-sm">
                Have a project in mind, or just want to say hello? Drop me a
                message — I typically respond within 24 hours.
              </p>
            </div>

            {/* Info cards */}
            <ul className="flex flex-col gap-4">
              {info.map((item, index) => (
                <li key={index}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 bg-[#232329] rounded-xl px-5 py-4 border border-white/5 hover:border-accent/30 group transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-base group-hover:bg-accent group-hover:text-primary transition-all duration-300 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">
                          {item.title}
                        </p>
                        <p className="text-white text-sm font-medium group-hover:text-accent transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 bg-[#232329] rounded-xl px-5 py-4 border border-white/5">
                      <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-base shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">
                          {item.title}
                        </p>
                        <p className="text-white text-sm font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="xl:flex-1 w-full order-1 xl:order-none"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5 bg-[#232329] rounded-2xl p-8 border border-white/5"
            >
              <div className="mb-2">
                <h3 className="text-2xl font-bold text-white mb-1">
                  Send a Message
                </h3>
                <p className="text-white/40 text-sm">
                  Fill in the form below and I&apos;ll get back to you.
                </p>
              </div>

              {/* Name row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/40 text-xs uppercase tracking-widest">
                    First Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/40 text-xs uppercase tracking-widest">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email + Phone row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/40 text-xs uppercase tracking-widest">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/40 text-xs uppercase tracking-widest">
                    Phone{" "}
                    <span className="normal-case text-white/20">
                      (optional)
                    </span>
                  </label>
                  <Input
                    type="text"
                    placeholder="+1 234 567 890"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white/40 text-xs uppercase tracking-widest">
                  Message
                </label>
                <Textarea
                  className="h-[160px]"
                  placeholder="Tell me about your project..."
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {/* Submit */}
              <Button
                size="lg"
                type="submit"
                disabled={loading}
                className="w-full flex items-center cursor-pointer justify-center gap-2 group relative overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FiSend className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <Toast
          type={toast.type}
          title={toast.title}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </motion.section>
  );
};

export default Contact;
