export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
             <span className="font-black text-xl tracking-tight text-gray-900">ConsumeSkills</span>
          </div>
          <div className="text-gray-500 font-semibold space-x-6">
            <a href="https://www.consumerskills.org/terms-and-conditions/" className="hover:text-green-700 transition">Terms of Use</a>
            <a href="https://www.consumerskills.org/privacy/" className="hover:text-green-700 transition">Privacy Policy</a>
            <a href="https://www.consumerskills.org/#contact" className="hover:text-green-700 transition">Contact</a>
          </div>
          <div className="text-gray-500 font-medium">
            © 2026 ConsumeSkills. All rights reserved.
          </div>
        </div>
        
        <div className="text-xs text-gray-400 space-y-4 leading-relaxed max-w-5xl mx-auto text-justify">
          <p>This is an advertisement and not an actual news article, blog, or consumer protection update.</p>
          <p>Affiliate Disclosure: This website contains affiliate links. If you click on these links and make a purchase, we may receive a commission at no additional cost to you. We only recommend products or services that we believe will add value to our readers.</p>
          <p>Results Disclaimer: This article reflects the personal experience and opinions of the author. The results described, including personal experiences and user reviews, represent individual outcomes and are not typical. Your results may vary. Individual results will depend on many factors including the severity of staining, existing enamel condition, consistency of use, dietary habits, and other variables outside our control.</p>
          <p>Health Disclaimer: The statements made on this page have not been evaluated by the Food and Drug Administration. Gleam Mint is not intended to diagnose, treat, cure, or prevent any disease. This product is a cosmetic teeth whitening powder and is not a substitute for professional dental care. Consult your dentist before making changes to your oral care routine, especially if you have existing dental conditions.</p>
          <p>Testimonial Disclaimer: User reviews and testimonials featured on this site reflect individual experiences and have not been independently verified. They may not reflect typical user experiences and should not be considered as guarantees of similar results.</p>
          <p>Third-Party Disclaimer: When you click links on this site, you may be directed to third-party merchant websites. We are not responsible for the content, products, services, or practices of these third-party sites. Please review their terms and policies before making any purchase.</p>
        </div>
      </div>
    </footer>
  );
}
