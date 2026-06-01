// src/components/PolicyPages.jsx
import { Link } from 'react-router-dom';
import Footer from './Footer';

// Privacy Policy Component
export function PrivacyPolicy() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-0">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-20 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#E67E4E] hover:text-[#FF9B5E] transition-colors mb-8">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
        
        <div className="glass p-8 rounded-2xl">
          <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-8">Last updated: January 1, 2026</p>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Information I Collect</h2>
              <p>When you contact me through the contact form, I collect:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your message/subject</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">2. How I Use Your Information</h2>
              <p>I use your information to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Respond to your inquiries</li>
                <li>Provide customer support</li>
                <li>Improve my services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">3. Data Security</h2>
              <p>I implement appropriate security measures to protect your personal information. Your data is never sold or shared with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Cookies</h2>
              <p>This website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">5. Contact Me</h2>
              <p>If you have questions about this Privacy Policy, contact me at: <a href="mailto:haymigirma26@gmail.com" className="text-[#E67E4E] hover:underline">haymigirma26@gmail.com</a></p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Terms of Service Component
export function TermsOfService() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-0">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-20 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#E67E4E] hover:text-[#FF9B5E] transition-colors mb-8">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
        
        <div className="glass p-8 rounded-2xl">
          <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-gray-400 text-sm mb-8">Last updated: January 1, 2026</p>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>By using this portfolio website, you agree to these Terms of Service. If you do not agree, please do not use this site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">2. Use of Content</h2>
              <p>All content on this site (including 3D models, code, designs, and text) is my intellectual property. You may not copy, distribute, or use my work without permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">3. Project Inquiries</h2>
              <p>When you submit a project inquiry through my contact form, I will respond within 24-48 hours. Project timelines and pricing will be discussed individually.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Limitation of Liability</h2>
              <p>I am not liable for any damages arising from your use of this website or any services provided.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">5. Changes to Terms</h2>
              <p>I reserve the right to update these terms at any time. Changes will be posted on this page.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Cookie Policy Component
export function CookiePolicy() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-0">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-20 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#E67E4E] hover:text-[#FF9B5E] transition-colors mb-8">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
        
        <div className="glass p-8 rounded-2xl">
          <h1 className="text-4xl font-bold text-white mb-6">Cookie Policy</h1>
          <p className="text-gray-400 text-sm mb-8">Last updated: January 1, 2026</p>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">1. What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit websites. They help improve your browsing experience.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">2. How I Use Cookies</h2>
              <p>This website uses cookies for:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Essential functionality (navigation, form submissions)</li>
                <li>Analytics (to understand how visitors use my site)</li>
                <li>Performance optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">3. Third-Party Cookies</h2>
              <p>I may use third-party services like EmailJS and analytics tools that set their own cookies. These are governed by their respective privacy policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Managing Cookies</h2>
              <p>You can control and delete cookies through your browser settings. Disabling cookies may affect site functionality.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">5. Contact</h2>
              <p>For questions about cookies, email me at: <a href="mailto:haymigirma26@gmail.com" className="text-[#E67E4E] hover:underline">haymigirma26@gmail.com</a></p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}