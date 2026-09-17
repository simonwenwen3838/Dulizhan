'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <>
<Header />


<section className="hero" id="home" style={{paddingTop: '80px'}}>
    <div className="container">
        <div className="hero-grid">
            <div>
                <h1>One-Stop <span>Hospital Project</span> Solution Supplier</h1>
                <p className="subtitle">Professional Medical Equipment Manufacturer Since 2010</p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn-primary">Get a Quote</a>
                    <a href="#products" className="btn-secondary">View Products</a>
                </div>
            </div>
            <div className="hero-image" style={{height: '360px', background: 'linear-gradient(135deg,#E8F5E9,#C8E6C9)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: '96px'}}>🏥</div>
                    <div style={{fontSize: '18px', color: 'var(--green)', fontWeight: '600', marginTop: '8px'}}>Complete Hospital Equipment Solution</div>
                </div>
            </div>
        </div>
    </div>
</section>


<div className="trust-bar">
    <div className="container">
        <div className="trust-items">
            <div className="trust-item"><span className="trust-icon">🏭</span> 30,000+ m² Factory</div>
            <div className="trust-item"><span className="trust-icon">👥</span> 40+ Team</div>
            <div className="trust-item"><span className="trust-icon">🌍</span> Africa After-sales</div>
            <div className="trust-item"><span className="trust-icon">⚙️</span> OEM/ODM</div>
        </div>
    </div>
</div>


<section className="products" id="products">
    <div className="container">
        <div className="section-title">
            <h2>Our <span>Products</span></h2>
            <p>Complete medical equipment range for hospital projects</p>
        </div>
        <div className="product-categories">
            <a href="/products/#xray" className="product-card">
                <div className="product-card-img"><div className="product-card-img-placeholder">📡</div></div>
                <div className="product-card-body"><h3>X-ray Machine</h3><p>Digital radiography systems</p></div>
            </a>
            <a href="/products/#ultrasound" className="product-card">
                <div className="product-card-img"><div className="product-card-img-placeholder">🔊</div></div>
                <div className="product-card-body"><h3>Ultrasound Scanner</h3><p>Doppler imaging systems</p></div>
            </a>
            <a href="/products/#mri" className="product-card">
                <div className="product-card-img"><div className="product-card-img-placeholder">🧲</div></div>
                <div className="product-card-body"><h3>MRI System</h3><p>1.5T superconducting magnet</p></div>
            </a>
        </div>
        <div className="product-grid">
            <a href="/products/#xray" className="product-mini"><div className="product-mini-icon">📡</div><div className="product-mini-name">Digital X-ray</div></a>
            <a href="/products/#ultrasound" className="product-mini"><div className="product-mini-icon">🔊</div><div className="product-mini-name">Doppler Ultrasound</div></a>
            <a href="/products/#mri" className="product-mini"><div className="product-mini-icon">🧲</div><div className="product-mini-name">MRI 1.5T</div></a>
            <a href="/products/" className="product-mini"><div className="product-mini-icon">🖥️</div><div className="product-mini-name">CT Scanner</div></a>
            <a href="/products/" className="product-mini"><div className="product-mini-icon">🩸</div><div className="product-mini-name">Hematology Analyzer</div></a>
            <a href="/products/" className="product-mini"><div className="product-mini-icon">🔬</div><div className="product-mini-name">Lab Equipment</div></a>
            <a href="/products/" className="product-mini"><div className="product-mini-icon">💉</div><div className="product-mini-name">Anesthesia Machine</div></a>
            <a href="/products/" className="product-mini"><div className="product-mini-icon">🫁</div><div className="product-mini-name">Ventilator</div></a>
            <a href="/products/" className="product-mini"><div className="product-mini-icon">🩺</div><div className="product-mini-name">Hemodialysis</div></a>
        </div>
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


<section className="applications">
    <div className="container">
        <div className="section-title">
            <h2>Applications</h2>
            <p>Equipment solutions for every hospital department</p>
        </div>
        <div className="app-grid">
            <a href="/solutions/#departments" className="app-card">
                <div className="app-card-img"><span className="app-card-icon">📡</span></div>
                <div className="app-card-body"><h3>Radiology</h3><p>X-ray, CT, MRI</p></div>
            </a>
            <a href="/solutions/#departments" className="app-card">
                <div className="app-card-img"><span className="app-card-icon">🔊</span></div>
                <div className="app-card-body"><h3>Ultrasound</h3><p>Scanner, Doppler</p></div>
            </a>
            <a href="/solutions/#departments" className="app-card">
                <div className="app-card-img"><span className="app-card-icon">🫁</span></div>
                <div className="app-card-body"><h3>ICU</h3><p>Ventilator, Monitor</p></div>
            </a>
            <a href="/solutions/#departments" className="app-card">
                <div className="app-card-img"><span className="app-card-icon">🩺</span></div>
                <div className="app-card-body"><h3>Dialysis</h3><p>Hemodialysis Machine</p></div>
            </a>
            <a href="/solutions/#departments" className="app-card">
                <div className="app-card-img"><span className="app-card-icon">🔬</span></div>
                <div className="app-card-body"><h3>Laboratory</h3><p>Analyzer, Centrifuge</p></div>
            </a>
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
                <a href="#contact" className="btn-primary">Factory Tour Inquiry</a>
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


<section className="certifications">
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





<section className="inquiry" id="contact">
    <div className="container">
        <div className="inquiry-grid">
            
            <div className="inquiry-info">
                <h2>Get a Quote</h2>
                <p>Tell us your needs. Our sales team will respond within 24 hours with a detailed quotation.</p>
                <div className="whatsapp-box">
                    <span className="whatsapp-icon">💬</span>
                    <div>
                        <div className="whatsapp-label">WhatsApp / WeChat</div>
                        <div className="whatsapp-text">+86 18925044116</div>
                    </div>
                </div>
            </div>

            
            <div className="quote-card">
                <div className="quote-card-header">
                    <div>
                        <h3>Inquiry Form</h3>
                        <p>Fields marked with * are required</p>
                    </div>
                    <div className="response-badge">⚡ 24h Response</div>
                </div>
                <div className="quote-card-body">
                    
                    <div className="qf-banner" id="qfBanner"></div>

                    <form id="quoteForm" novalidate>
                        
                        <div className="honeypot">
                            <label>Leave empty: <input type="text" name="company_website" tabindex="-1" autocomplete="off" /></label>
                        </div>

                        <div className="qf-grid">
                            
                            <div className="qf-group">
                                <label htmlFor="qf-name">Full Name <span className="req">*</span></label>
                                <input type="text" id="qf-name" name="name" required placeholder="e.g. John Smith" minlength="2" maxlength="80" />
                                <div className="qf-msg" id="qf-name-msg"></div>
                            </div>

                            
                            <div className="qf-group">
                                <label htmlFor="qf-email">Email <span className="req">*</span></label>
                                <input type="email" id="qf-email" name="email" required placeholder="e.g. john@company.com" />
                                <div className="qf-msg" id="qf-email-msg"></div>
                            </div>

                            
                            <div className="qf-group qf-full">
                                <label htmlFor="qf-phone">Phone <span className="req">*</span></label>
                                <div className="phone-wrap">
                                    <select id="qf-phone-country" name="phoneCountry">
                                        <option value="+86" data-pattern="^1[3-9]\d{9}$">🇨🇳 +86</option>
                                        <option value="+234" data-pattern="^[0-9]{7,11}$">🇳🇬 +234</option>
                                        <option value="+254" data-pattern="^[0-9]{7,10}$">🇰🇪 +254</option>
                                        <option value="+233" data-pattern="^[0-9]{7,10}$">🇬🇭 +233</option>
                                        <option value="+225" data-pattern="^[0-9]{8,10}$">🇨🇮 +225</option>
                                        <option value="+221" data-pattern="^[0-9]{8,9}$">🇸🇳 +221</option>
                                        <option value="+243" data-pattern="^[0-9]{7,9}$">🇨🇩 +243</option>
                                        <option value="+971" data-pattern="^[0-9]{7,9}$">🇦🇪 +971</option>
                                        <option value="+966" data-pattern="^[0-9]{7,9}$">🇸🇦 +966</option>
                                        <option value="+44" data-pattern="^[0-9]{10,11}$">🇬🇧 +44</option>
                                        <option value="+1" data-pattern="^[0-9]{10}$">🇺🇸 +1</option>
                                        <option value="+49" data-pattern="^[0-9]{10,11}$">🇩🇪 +49</option>
                                        <option value="+33" data-pattern="^[0-9]{9}$">🇫🇷 +33</option>
                                        <option value="+34" data-pattern="^[0-9]{9}$">🇪🇸 +34</option>
                                        <option value="+55" data-pattern="^[0-9]{10,11}$">🇧🇷 +55</option>
                                        <option value="+other" data-pattern="^[0-9]{6,15}$">🌐 Other</option>
                                    </select>
                                    <input type="tel" id="qf-phone" name="phone" required placeholder="e.g. 18925044116" />
                                </div>
                                <div className="qf-msg" id="qf-phone-msg"></div>
                            </div>

                            
                            <div className="qf-group">
                                <label htmlFor="qf-company">Company <span className="optional-tag">(optional)</span></label>
                                <input type="text" id="qf-company" name="company" placeholder="e.g. MediCare Import Ltd." maxlength="120" />
                                <div className="qf-msg"></div>
                            </div>

                            
                            <div className="qf-group">
                                <label htmlFor="qf-country">Country <span className="optional-tag">(optional)</span></label>
                                <select id="qf-country" name="country">
                                    <option value="">Select country</option>
                                    <option value="Nigeria">🇳🇬 Nigeria</option>
                                    <option value="Ghana">🇬🇭 Ghana</option>
                                    <option value="Kenya">🇰🇪 Kenya</option>
                                    <option value="Cameroon">🇨🇲 Cameroon</option>
                                    <option value="DR Congo">🇨🇩 DR Congo</option>
                                    <option value="Tanzania">🇹🇿 Tanzania</option>
                                    <option value="Cote d'Ivoire">🇨🇮 Cote d'Ivoire</option>
                                    <option value="Angola">🇦🇴 Angola</option>
                                    <option value="Senegal">🇸🇳 Senegal</option>
                                    <option value="UAE">🇦🇪 UAE</option>
                                    <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                                    <option value="Other">🌐 Other</option>
                                </select>
                                <div className="qf-msg"></div>
                            </div>

                            
                            <div className="qf-group qf-full">
                                <label htmlFor="qf-product">Product Requirement <span className="optional-tag">(optional)</span></label>
                                <select id="qf-product" name="product">
                                    <option value="">Select product (optional)</option>
                                    <optgroup label="Imaging Equipment">
                                        <option>Digital X-ray Machine</option>
                                        <option>CT Scanner</option>
                                        <option>MRI System</option>
                                    </optgroup>
                                    <optgroup label="Diagnosis & Lab">
                                        <option>Ultrasound Scanner</option>
                                        <option>Hematology Analyzer</option>
                                        <option>Lab Equipment</option>
                                    </optgroup>
                                    <optgroup label="Life Support">
                                        <option>Anesthesia Machine</option>
                                        <option>Ventilator</option>
                                        <option>Hemodialysis Machine</option>
                                    </optgroup>
                                    <optgroup label="Project">
                                        <option>Complete Hospital Project</option>
                                        <option>OEM/ODM Customization</option>
                                    </optgroup>
                                </select>
                                <div className="qf-msg"></div>
                            </div>

                            
                            <div className="qf-group qf-full">
                                <label htmlFor="qf-message">Message <span className="optional-tag">(optional)</span></label>
                                <textarea id="qf-message" name="message" placeholder="Tell us about your project requirements, quantity, target market, delivery timeline, etc." maxlength="2000"></textarea>
                                <div className="qf-msg hint">Max 2000 characters</div>
                            </div>

                            
                            <div className="qf-group qf-full">
                                <div className="antispam-box">
                                    <input type="checkbox" id="qf-agree" name="agreeTerms" required />
                                    <label htmlFor="qf-agree">I confirm this is a genuine business inquiry and not spam.</label>
                                </div>
                                <div className="qf-msg" id="qf-agree-msg"></div>
                            </div>
                        </div>

                        
                        <div className="qf-actions">
                            <button type="submit" className="btn-quote-submit" id="qf-submit-btn">
                                <span id="qf-submit-text">Submit Inquiry</span>
                            </button>
                            <p style={{fontSize: '13px', color: 'var(--grey)'}}>🔒 Your information is secure and will only be used to respond to your inquiry.</p>
                        </div>
                    </form>

                    
                    <div className="qf-summary" id="qf-summary">
                        <h4>📋 Your Submission Summary</h4>
                        <div id="qf-summary-content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="map-section">
    <div className="container">
        <div className="section-title">
            <h2>Find <span>Us</span></h2>
            <p>Visit our office or reach us through the channels below</p>
        </div>
        <div className="map-grid">
            <div className="map-info">
                <h3>MAYAMED <span>Headquarters</span></h3>
                <div className="map-info-item">
                    <div className="map-info-icon">📍</div>
                    <div className="map-info-item-text">
                        <div className="map-info-label">Address</div>
                        <div className="map-info-value">Room 102, First floor, No.2 Building, Bohou Industrial Park, No.773 Xingnan Avenue, Nancun Town, Panyu District, Guangzhou, Guangdong, China</div>
                    </div>
                </div>
                <div className="map-info-divider"></div>
                <div className="map-info-item">
                    <div className="map-info-icon">✉️</div>
                    <div className="map-info-item-text">
                        <div className="map-info-label">Email</div>
                        <div className="map-info-value">nancy@medicalequipment168.com</div>
                    </div>
                </div>
                <div className="map-info-item">
                    <div className="map-info-icon">💬</div>
                    <div className="map-info-item-text">
                        <div className="map-info-label">WhatsApp</div>
                        <div className="map-info-value">+86 18925044116</div>
                    </div>
                </div>
                <div className="map-info-divider"></div>
                <div className="map-info-item">
                    <div className="map-info-icon">🏭</div>
                    <div className="map-info-item-text">
                        <div className="map-info-label">Factory</div>
                        <div className="map-info-value">30,000+ m² production facility</div>
                    </div>
                </div>
            </div>
            <div className="map-wrapper">
                <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=113.3440%2C23.0020%2C113.3620%2C23.0120&amp;layer=mapnik&amp;marker=23.0070%2C113.3530"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="MAYAMED Office Location - Guangzhou"
                    style={{pointerEvents: 'auto'}}>
                </iframe>
                <a className="map-fullscreen-btn" href="https://www.openstreetmap.org/?mlat=23.0070&amp;mlon=113.3530#map=16/23.0070/113.3530" target="_blank" rel="noopener noreferrer">
                    <span>⛶</span> Open Full Map
                </a>
                <div className="map-badge">
                    📍 <a href="https://www.openstreetmap.org/?mlat=23.0070&amp;mlon=113.3530#map=16/23.0070/113.3530" target="_blank" rel="noopener noreferrer">View larger map</a>
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

