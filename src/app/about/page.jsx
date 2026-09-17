import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About Us',
  description: 'MAYAMED - Guangzhou Maya Medical Equipment Co., Ltd. One-stop hospital project solution supplier since 2010, with a 30,000+ m2 factory and CE certified products.'
};

export default function Page() {
  return (
    <>
<Header />

<section className="blog-hero" style={{paddingTop: '80px'}}>
    <div className="container">
        <h1>About <span>Us</span></h1>
        <p>Professional medical equipment manufacturer since 2010, serving hospital projects across Africa.</p>
    </div>
</section>

<section className="advantages" id="advantages">
    <div className="container">
        <div className="section-title">
            <h2>Why Choose <span>MAYAMED</span></h2>
            <p>Trusted by hospital projects across Africa</p>
        </div>
        <div className="advantage-grid">
            <div className="advantage-card featured">
                <div className="advantage-badge">Key Differentiator</div>
                <div className="advantage-icon">🌍</div>
                <h3>Africa After-sales Team</h3>
                <p>Local after-sales team in Africa for quick response and professional support</p>
            </div>
            <div className="advantage-card">
                <div className="advantage-icon">🏥</div>
                <h3>Hospital Project Experience</h3>
                <p>Extensive experience in new hospital construction projects</p>
            </div>
            <div className="advantage-card">
                <div className="advantage-icon">🛡️</div>
                <h3>Outstanding Quality</h3>
                <p>Strict quality control system, reliable performance</p>
            </div>
            <div className="advantage-card">
                <div className="advantage-icon">⚙️</div>
                <h3>OEM/ODM Support</h3>
                <p>Customization to meet your brand requirements</p>
            </div>
            <div className="advantage-card">
                <div className="advantage-icon">✅</div>
                <h3>CE Certified</h3>
                <p>All products CE certified, meeting international standards</p>
            </div>
        </div>
    </div>
</section>

<section className="factory" id="factory">
    <div className="container">
        <div className="factory-grid">
            <div>
                <div className="section-title" style={{textAlign: 'left'}}>
                    <h2>Factory <span>Strength</span></h2>
                </div>
                <div className="factory-stats">
                    <div className="factory-stat"><div className="num">30,000+</div><div className="label">m² Factory Area</div></div>
                    <div className="factory-stat"><div className="num">2010</div><div className="label">Established</div></div>
                </div>
                <p style={{fontSize: '16px', color: 'var(--grey)', marginBottom: '24px'}}>
                    Our 30,000+ square meter production facility is equipped with advanced manufacturing equipment and staffed by a professional team of 40+ elite members. Every product undergoes strict quality inspection before shipping.
                </p>
                <a href="/quote/" className="btn-primary">Factory Tour Inquiry</a>
            </div>
            <div className="factory-gallery">
                <div className="factory-img">🏭</div>
                <div className="factory-img">🔧</div>
                <div className="factory-img">✅</div>
                <div className="factory-img">👥</div>
            </div>
        </div>
    </div>
</section>

<section className="certifications" id="certifications">
    <div className="container">
        <div className="section-title">
            <h2>Certifications</h2>
            <p>International quality standards compliance</p>
        </div>
        <div className="cert-display">
            <div className="cert-card">
                <div className="cert-badge">CE</div>
                <h3>CE Certified</h3>
                <p>Our products are CE certified, ensuring safety and reliability for medical use.</p>
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
