import { Button } from "./ui/button";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
        {/* Header */}
        <div className="text-center flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let’s Build Something Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have an idea, feedback, or collaboration in mind? I’m always open to connecting. Just drop me a message — I’d love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Info Section */}
          <div className="bg-white p-10 rounded-3xl shadow-xl flex-1 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-gray-900">Ways to Reach Me</h3>
            <div className="space-y-5 text-gray-600">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span>hassan.dev@example.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <span>+92 300 0000000</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold">Location:</span>
                <span>Remote / Pakistan</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold">Open to:</span>
                <span>Frontend, Full-Stack, Freelance & Side Projects</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary to-green-700 text-white p-10 rounded-3xl shadow-xl flex-1 flex flex-col justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let’s Talk</h3>
              <p className="opacity-90">
                I’m always happy to chat about web development, cool ideas, or collaboration opportunities. Reach out — I’ll get back to you as soon as I can.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <Button className="bg-white text-primary px-6 py-3 font-semibold hover:bg-gray-100 h-auto">
                Say Hello
              </Button>
              <div className="flex items-center text-white opacity-90">
                <Mail className="h-4 w-4 mr-2" />
                <span>hassan.dev@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
