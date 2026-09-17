import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Page() {
  return (
    <>
<Header />


<section className="blog-hero" style={{paddingTop: '80px'}}>
    <div className="container">
        <h1>Medical Equipment <span>Product Specifications</span></h1>
        <p>Complete technical parameters for MAYAMED's core product line — designed for hospital procurement teams and medical equipment distributors.</p>
        <div className="blog-meta">
            <span>📅 Published: Sep 2026</span>
            <span>🏢 MAYAMED Medical Equipment</span>
            <span>📋 Product Spec Sheet</span>
        </div>
    </div>
</section>


<section className="blog-content">
    <div className="container">
        <p className="blog-intro">
            Below are the detailed specifications for three of our flagship medical imaging systems.
            Each product section includes the product image followed by a complete parameter table.
            For procurement inquiries, <a href="/quote/" style={{color: 'var(--green)', fontWeight: '600'}}>contact our sales team</a> for a customized quotation.
        </p>

        
        <div className="product-block" id="xray">
            <div className="product-header">
                <div className="product-header-left">
                    <div className="product-number">1</div>
                    <div>
                        <h2>Digital X-ray Radiography System (DR)</h2>
                        <div className="product-tag">High-frequency X-ray imaging system with flat panel detector</div>
                    </div>
                </div>
                <div className="product-category-badge">Imaging Equipment</div>
            </div>

            <div className="product-image-wrap">
                <img src="https://sc02.alicdn.com/kf/H6c3440c1f7864d7fb8588ef2534becadg.jpg"
                     alt="MAYAMED Digital X-ray Radiography System with high-frequency generator, flat panel detector, 4-way floating table, and wall bucky stand"
                     loading="lazy" />
                <div className="product-image-caption">MAYAMED Digital X-ray Radiography System — complete setup with chest stand, examination table, and tube stand</div>
            </div>

            <div className="product-specs">
                <table className="spec-table">
                    <tbody>
                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>System Overview</td></tr>
                        <tr><td>Touch Screen</td><td>10.4 inch touch screen</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>High Frequency Generator</td></tr>
                        <tr><td>Power Rating</td><td>32KW</td></tr>
                        <tr><td>Line Nominal, Phase</td><td>220VAC ± 10%</td></tr>
                        <tr><td>Working Frequency</td><td>80kHz - 300kHz</td></tr>
                        <tr><td>kV Range</td><td>40 ~ 150KV</td></tr>
                        <tr><td>mA Range</td><td>10 ~ 400mA</td></tr>
                        <tr><td>mAs Range</td><td>0.4 ~ 320mAs</td></tr>
                        <tr><td>Exposure Time Range</td><td>1ms ~ 10000ms</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>X-Ray Tube</td></tr>
                        <tr><td>Anode Heat Capacity</td><td>900kJ</td></tr>
                        <tr><td>Focus Spot Size</td><td>1.0 / 2.0mm</td></tr>
                        <tr><td>Voltage</td><td>150kV</td></tr>
                        <tr><td>Anode Rotating Speed</td><td>2800r/min (50Hz)</td></tr>
                        <tr><td>X-ray Coverage</td><td>420 × 420mm at SID 1000mm</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>Flat Panel Detector</td></tr>
                        <tr><td>Type</td><td>17" × 17" Wired plate detector</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>4-Way Floating Table</td></tr>
                        <tr><td>Tabletop Size</td><td>2200 × 740 × 680mm</td></tr>
                        <tr><td>Longitudinal Movement Range</td><td>570mm</td></tr>
                        <tr><td>Lateral Movement Range</td><td>210mm</td></tr>
                        <tr><td>Movement Control Mode</td><td>EM lock</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>Wall Bucky Stand</td></tr>
                        <tr><td>Vertical Moving Range</td><td>610mm</td></tr>
                        <tr><td>Movement Control Mode</td><td>Mechanical lock</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>Accessories</td></tr>
                        <tr><td>Computer</td><td>Desktop computer included</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="product-cta">
                <a href="/quote/">💬 Inquire About This Product</a>
            </div>
        </div>

        <div className="product-divider">— — —</div>

        
        <div className="product-block" id="ultrasound">
            <div className="product-header">
                <div className="product-header-left">
                    <div className="product-number">2</div>
                    <div>
                        <h2>Doppler Ultrasound Scanner</h2>
                        <div className="product-tag">Cart-based color Doppler ultrasound with 3D/4D capability</div>
                    </div>
                </div>
                <div className="product-category-badge">Ultrasound Equipment</div>
            </div>

            <div className="product-image-wrap">
                <img src="https://sc02.alicdn.com/kf/Hb7611cb31f8147558ea9af1419575d5dL.jpg"
                     alt="MAYAMED Doppler Ultrasound Scanner with 19-inch HD monitor, 10.4-inch touch screen, 4 activated transducer ports, and multiple probes"
                     loading="lazy" />
                <div className="product-image-caption">MAYAMED Doppler Ultrasound Scanner — cart-based system with dual displays and full control panel</div>
            </div>

            <div className="product-specs">
                <table className="spec-table">
                    <tbody>
                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>Probes & Display</td></tr>
                        <tr><td>Standard Probes</td><td>2 probes included (choose 2 from below)</td></tr>
                        <tr className="spec-sub"><td>— Convex Array Probe</td><td>Included in selection</td></tr>
                        <tr className="spec-sub"><td>— Linear Array Probe</td><td>Included in selection</td></tr>
                        <tr className="spec-sub"><td>— Intracavity Probe</td><td>Included in selection</td></tr>
                        <tr className="spec-sub"><td>— Micro-convex Probe</td><td>Included in selection</td></tr>
                        <tr><td>Main Monitor</td><td>19" High Definition LED monitor</td></tr>
                        <tr><td>Touch Screen</td><td>10.4" Touch screen</td></tr>
                        <tr><td>Activated Transducer Ports</td><td>4 ports</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>Features & Technology</td></tr>
                        <tr><td>Gel Heating Cup</td><td>Standard configured</td></tr>
                        <tr><td>USB Port & Keyboard</td><td>Preposed USB port and draw-out keyboard</td></tr>
                        <tr><td>Carotid IMT</td><td>Auto measurement</td></tr>
                        <tr><td>Imaging Mode</td><td>Linear independent defection imaging</td></tr>
                        <tr><td>Speckle Noise Removal</td><td>Supported</td></tr>
                        <tr><td>Dual/Triple Synchronous</td><td>Supported</td></tr>
                        <tr><td>Probe Auto-Frozen Protection</td><td>Supported</td></tr>
                        <tr><td>Intelligent Navigation</td><td>Supported</td></tr>
                        <tr><td>One Touch Optimize</td><td>Supported</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>Advanced & Optional</td></tr>
                        <tr><td>3D/4D Imaging</td><td>Available — Zlive (Optional)</td></tr>
                        <tr><td>DICOM</td><td>DICOM 3.0 supported</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>Software Packages</td></tr>
                        <tr><td>Included Packages</td><td>Abdomen, Obstetrics, Gynecology, Urology, Small Parts, Vascular, Orthopedics</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>Data Interface</td></tr>
                        <tr><td>Interfaces</td><td>Video, S-Video, USB 2.0 (×8), VGA, RS-232, RJ45</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="product-cta">
                <a href="/quote/">💬 Inquire About This Product</a>
            </div>
        </div>

        <div className="product-divider">— — —</div>

        
        <div className="product-block" id="mri">
            <div className="product-header">
                <div className="product-header-left">
                    <div className="product-number">3</div>
                    <div>
                        <h2>1.5T Superconducting MRI System</h2>
                        <div className="product-tag">Permanent magnet MRI with conductive cooling, zero liquid helium</div>
                    </div>
                </div>
                <div className="product-category-badge">MRI System</div>
            </div>

            <div className="product-image-wrap">
                <img src="https://sc02.alicdn.com/kf/H2ce3d780661749ce904f9bfc69fe04b9n.jpg"
                     alt="MAYAMED 1.5T Superconducting MRI System with 850mm bore, patient table, head coil, and dual control panels"
                     loading="lazy" />
                <div className="product-image-caption">MAYAMED 1.5T MRI System — superconducting magnet with wide bore and conductive cooling design</div>
            </div>

            <div className="product-specs">
                <table className="spec-table">
                    <tbody>
                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>Magnet Specifications</td></tr>
                        <tr><td>Field Strength</td><td>1.5T</td></tr>
                        <tr><td>Stability</td><td>≤ 0.1 ppm / hour</td></tr>
                        <tr><td>Homogeneity</td><td>≤ 2.0ppm @ 45cm DSV VRMMS</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>5G's Line (Fringe Field)</td></tr>
                        <tr><td>5G's Line Distance</td><td>&lt; 2.5m, 2.5m, 4.0m</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>Physical Dimensions</td></tr>
                        <tr><td>Weight</td><td>≤ 4.4 ton</td></tr>
                        <tr><td>Bore Size</td><td>850mm</td></tr>
                        <tr><td>Dimensions (L×W×H)</td><td>1570mm × 1891mm × 2150mm</td></tr>
                        <tr><td>Minimum Service Height</td><td>2500mm</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>Cooling System</td></tr>
                        <tr><td>Cooling Type</td><td>Conductive cooling</td></tr>
                        <tr><td>Liquid Helium Volume</td><td>0L (Zero LHe — helium-free design)</td></tr>
                        <tr><td>Boil-off Rate</td><td>N/A</td></tr>
                        <tr><td>LHe Replenish Time</td><td>N/A</td></tr>
                        <tr><td>Quench Tube</td><td>N/A</td></tr>

                        <tr><td colspan="2" style={{background: 'var(--grey-light)', fontWeight: '700', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '14px', padding: '14px 28px'}}>Recovery</td></tr>
                        <tr><td>Recovery Time from Quench</td><td>&lt; 3 days</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="product-cta">
                <a href="/quote/">💬 Inquire About This Product</a>
            </div>
        </div>

        
        <div style={{textAlign: 'center', marginTop: '64px', padding: '32px', background: 'linear-gradient(135deg,#E8F5E9,#C8E6C9)', borderRadius: '16px'}}>
            <h2 style={{fontSize: '24px', fontWeight: '800', color: 'var(--grey-darker)', marginBottom: '12px'}}>Need a Complete Hospital Equipment Solution?</h2>
            <p style={{fontSize: '16px', color: 'var(--grey)', marginBottom: '24px'}}>We supply X-ray, Ultrasound, MRI, CT, Anesthesia Machines, Ventilators, and more — all from one manufacturer.</p>
            <a href="/quote/" style={{display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '16px 40px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '17px', boxShadow: '0 4px 16px rgba(46,125,50,0.25)'}}>Get a Quote →</a>
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
