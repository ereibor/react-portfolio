import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message Sent!");

        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Something went wrong!", {
        style: { backgroundColor: "#fc1c03", color: "white" },
      }))
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen py-20">
        <div className="px-4 md:w-[80%] lg:w-[40%] ipadPro:w-[70%] lg:max-w-[900px] m-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent text-center">
            Contact Me
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full border border-gray-400 rounded px-4 py-3 text-black transition focus:outline-none focus:border-black focus:bg-blue-300/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full border border-gray-400 rounded px-4 py-3 text-black transition focus:outline-none focus:border-black focus:bg-blue-300/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full border border-gray-400 rounded px-4 py-3 text-black transition focus:outline-none focus:border-black focus:bg-blue-300/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className=" w-full md:w-1/2 bg-black/85 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                 {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
    </section>
  );
};
