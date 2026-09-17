import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Project Cases',
  description: 'MAYAMED hospital equipment supply projects across Africa - Nigeria, Kenya, and Ghana case studies covering imaging, ICU, laboratory, and dialysis departments.'
};

export default function Page() {
  return (
    <>
<Header />

<section className="blog-hero" style={{paddingTop: '80px'}}>
    <div className="container">
        <h1>Project <span>Cases</span></h1>
        <p>Successful hospital equipment supply projects across Africa.</p>
    </div>
</section>

<section className="cases" id="cases">
    <div className="container">
        <div className="section-title">
            <h2>Project <span>Cases</span></h2>
            <p>Successful hospital equipment supply across Africa</p>
        </div>
        <div className="case-grid">
            <div className="case-card">
                <div className="case-card-header">
                    <span className="case-flag">🇳🇬</span>
                    <span className="case-country">Nigeria</span>
                </div>
                <div className="case-card-body">
                    <div className="case-type">Project Type: New Hospital</div>
                    <div className="case-equipment">
                        <ul>
                            <li>Digital X-ray Machine</li>
                            <li>Ultrasound Scanner</li>
                            <li>Anesthesia Machine</li>
                            <li>Ventilator</li>
                            <li>Lab Equipment</li>
                        </ul>
                    </div>
                    <div className="case-result">Improved diagnostic capabilities for regional hospital</div>
                </div>
            </div>
            <div className="case-card">
                <div className="case-card-header">
                    <span className="case-flag">🇰🇪</span>
                    <span className="case-country">Kenya</span>
                </div>
                <div className="case-card-body">
                    <div className="case-type">Project Type: County Hospital</div>
                    <div className="case-equipment">
                        <ul>
                            <li>Digital X-ray System</li>
                            <li>Doppler Ultrasound</li>
                            <li>Hematology Analyzer</li>
                            <li>Anesthesia Machine</li>
                            <li>ICU Equipment</li>
                        </ul>
                    </div>
                    <div className="case-result">Complete ICU and diagnostic department setup</div>
                </div>
            </div>
            <div className="case-card">
                <div className="case-card-header">
                    <span className="case-flag">🇬🇭</span>
                    <span className="case-country">Ghana</span>
                </div>
                <div className="case-card-body">
                    <div className="case-type">Project Type: Medical Center</div>
                    <div className="case-equipment">
                        <ul>
                            <li>X-ray Machine</li>
                            <li>Ultrasound Scanner</li>
                            <li>Hemodialysis Machine</li>
                            <li>Lab Equipment</li>
                        </ul>
                    </div>
                    <div className="case-result">Dialysis center successfully operational</div>
                </div>
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
