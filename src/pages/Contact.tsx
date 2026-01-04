import { Mail, Instagram, Linkedin, Twitter, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@designer.com',
      href: 'mailto:hello@designer.com',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@designer',
      href: 'https://instagram.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Designer Name',
      href: 'https://linkedin.com',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@designer',
      href: 'https://twitter.com',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have a project in mind or just want to chat about design? I'm always open to new opportunities and collaborations.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you. Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      <p className="text-gray-900 font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-serif font-bold mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors"
                  >
                    <option>Brand Design</option>
                    <option>Logo Design</option>
                    <option>Visual Communication</option>
                    <option>Video Production</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] font-medium flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            I'm currently available for freelance projects and collaborations. If you're looking for a designer who can bring your vision to life with creativity and precision, let's connect.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/brand-designing"
              className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-gray-900 transition-all duration-300 hover:scale-105 font-medium"
            >
              View Portfolio
            </a>
            <a
              href="/about"
              className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-gray-900 transition-all duration-300 hover:scale-105 font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
