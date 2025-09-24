"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import Toast from "@/components/Toast";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+234 916 926 5887" },
  { icon: <FaEnvelope />, title: "Email", description: "olumideilesanmi10@gmail.com" },
  { icon: <FaMapMarkedAlt />, title: "Address", description: "Lagos, Nigeria" },
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
        "service_xyny4fb", // ✅ your EmailJS service ID
        "template_lnadiei", // ✅ your EmailJS template ID
        form.current,
        "1Eh0Vn-V8mmLtsstO" // ✅ your public key
      );

      // reset form
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setMessage("");

      setToast({
        type: "success",
        title: "Message sent successfully!",
        message: "Thanks for reaching out, I’ll get back to you soon.",
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1.5, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto z-[10000]">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl z-[1000]"
              ref={form}
              onSubmit={sendEmail}
            >
              <h3 className="text-3xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Have a project in mind? Feel free to reach out to me.
              </p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-[1000]">
                <Input
                  type="text"
                  placeholder="Firstname"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  type="text"
                  placeholder="Phone number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <Textarea
                className="h-[200px] z-[1000]"
                placeholder="Type your message here."
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              {/* btn */}
              <Button
                size="md"
                className="max-w-40 z-[10000]"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex gap-6 items-center">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] rounded-md flex items-center justify-center text-accent">
                    <div className="text-[20px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <p className="text-xl">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
    </motion.div>
  );
};

export default Contact;
