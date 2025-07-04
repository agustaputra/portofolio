import { useState, useRef } from 'react';
import './App.css';
import { SkillsSection } from './SkillsSection'; // Import the SkillsSection component
import { Send } from 'lucide-react'; // Import Send icon from lucide-react

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null); // Create ref for form

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = (e.target as any).name.value;
    const email = (e.target as any).email.value;
    const message = (e.target as any).message.value;

    const mailtoLink = `mailto:your-email@example.com?subject=Message from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${name} <${email}>`;
    window.location.href = mailtoLink;

    setIsSubmitting(false); // Reset submitting state
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            My Portfolio
          </div>
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'hobi', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`${
                  activeSection === section ? 'text-blue-400' : 'text-gray-300'
                } hover:text-blue-400 transition-colors`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Nicho Agosta Putra Simamora
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
           Sebagai Front-End Developer, saya berspesialisasi dalam merekayasa UI yang indah, fungsional, dan berpusat pada pengguna menggunakan teknologi web modern.
          </p>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Hubungi saya
          </button>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
          <p className="text-lg text-gray-300">
            Saya mahasiswa informatika dari Universitas Satya Terra Bhinneka. Saya pengembang web yang cukup ahli di bidangnya. Saya juga memiliki hobi bermain game agar tidak terlalu stres karena codingan yang berwarna merah "ERROR".
          </p>
        </div>
      </section>

<section id="hobi" className="min-h-screen flex items-center justify-center">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">HOBI</h2>
    <p className="text-lg text-gray-300 mb-8">Berikut ini beberapa hobi yang saya suka:</p>
    
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      {/* Hobi 1 */}
      <div style={{ width: '200px', textAlign: 'center' }}>
        <img 
          src="\futsal.jpg" 
          alt="Futsal" 
          style={{ width: '70%', borderRadius: '10px', marginBottom: '0.5rem' }} 
        />
        <p>Futsal</p>
      </div>

      {/* Hobi 2 */}
      <div style={{ width: '200px', textAlign: 'center' }}>
        <img 
          src="\berenang.jpg" 
          alt="Berenang" 
          style={{ width: '100%', borderRadius: '10px', marginBottom: '0.5rem' }} 
        />
        <p>Berenang</p>
      </div>

      {/* Hobi 3 */}
      <div style={{ width: '200px', textAlign: 'center' }}>
        <img 
          src="/ml.jpg" 
          alt="Mobile Legend" 
          style={{ width: '100%', borderRadius: '10px', marginBottom: '0.5rem' }} 
        />
        <p>Mobile Legend</p>
      </div>
    </div>
  </div>
</section>


      <section id="skills" className="min-h-screen flex items-center justify-center">
        <SkillsSection /> {/* Include the SkillsSection component */}
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Hubungi Saya</h2>
          <p className="text-lg text-gray-300 mb-4">
            Saya antusias untuk mendengar tentang proyek Anda dan bagaimana saya dapat membantu mewujudkan visi Anda. Silakan tinggalkan pesan, dan saya akan menghubungi Anda kembali untuk menjadwalkan diskusi lebih lanjut.
          </p>
          
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nama Kamu"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="nico@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tinggalkan pesan untukku!!!"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
