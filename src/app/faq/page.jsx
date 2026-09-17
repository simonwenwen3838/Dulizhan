import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about MAYAMED medical equipment - delivery time, installation and training, certifications, and OEM/ODM customization.'
};

export default function Page() {
  return (
    <>
<Header />

<section className="blog-hero" style={{paddingTop: '80px'}}>
    <div className="container">
        <h1>FAQ</h1>
        <p>Common questions from our buyers.</p>
    </div>
</section>

<section className="faq" id="faq">
    <div className="container">
        <div className="section-title">
            <h2>FAQ</h2>
            <p>Common questions from our buyers</p>
        </div>
        <div className="faq-list">
            <div className="faq-item">
                <div className="faq-question" onclick="toggleFAQ(this)">
                    <span>What is the delivery time?</span>
                    <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer"><p>Standard delivery time is 15-30 days depending on the product and quantity. For large hospital project orders, we provide a detailed delivery schedule. Express shipping is available upon request.</p></div>
            </div>
            <div className="faq-item">
                <div className="faq-question" onclick="toggleFAQ(this)">
                    <span>Do you provide installation and training?</span>
                    <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer"><p>Yes, we provide professional installation and training services. Our Africa after-sales team can visit your site for on-site installation, calibration, and staff training to ensure proper equipment operation.</p></div>
            </div>
            <div className="faq-item">
                <div className="faq-question" onclick="toggleFAQ(this)">
                    <span>What certifications do you have?</span>
                    <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer"><p>Our products are CE certified, meeting international medical device standards. We can provide certification documents upon request. Additional certifications can be arranged for specific market requirements.</p></div>
            </div>
            <div className="faq-item">
                <div className="faq-question" onclick="toggleFAQ(this)">
                    <span>Can you customize products (OEM/ODM)?</span>
                    <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer"><p>Yes, we support OEM/ODM customization. We can customize product appearance, branding, software interfaces, and specifications to meet your brand requirements. Minimum order quantities apply for custom projects.</p></div>
            </div>
        </div>
    </div>
</section>

<Footer />

<a href="https://wa.me/8618925044116?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details." target="_blank" rel="noopener noreferrer" className="float-wa" aria-label="Chat on WhatsApp">
    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.078 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.032 6.987 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
</a>
    </>
  );
}
