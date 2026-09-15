'use client';

export default function Page() {
  return (
    <>
<div className="page-header">
    <div className="container">
        <a href="/" className="logo">MAYAMED <span className="logo-badge">Medical</span></a>
        <a href="/" className="back-link">← Back to Home</a>
    </div>
</div>


<section className="page-hero">
    <div className="container">
        <h1>Request a <span>Quote</span></h1>
        <p>Fill out the form below and our sales team will get back to you within 24 hours with a detailed quotation.</p>
        <div className="hero-trust">
            <div className="hero-trust-item"><span className="hero-trust-icon">⚡</span> 24h Response</div>
            <div className="hero-trust-item"><span className="hero-trust-icon">🌍</span> Africa After-sales</div>
            <div className="hero-trust-item"><span className="hero-trust-icon">🏭</span> 30,000+ m² Factory</div>
            <div className="hero-trust-item"><span className="hero-trust-icon">✅</span> CE Certified</div>
        </div>
    </div>
</section>


<section className="form-section">
    <div className="container">
        
        <div className="feedback-banner" id="feedbackBanner"></div>

        <div className="form-card">
            
            <div className="form-card-header">
                <div>
                    <h2>Inquiry Form</h2>
                    <p>All fields marked with * are required</p>
                </div>
                <div className="response-time-badge">⚡ Response in 24h</div>
            </div>

            
            <div className="form-card-body">
                <form id="quoteForm" novalidate>
                    
                    <div className="honeypot">
                        <label>Leave this empty: <input type="text" name="company_website" tabindex="-1" autocomplete="off" /></label>
                    </div>

                    <div className="form-grid">
                        
                        <div className="form-group">
                            <label htmlFor="name">Full Name <span className="req">*</span></label>
                            <input type="text" id="name" name="name" required
                                placeholder="e.g. John Smith"
                                minlength="2" maxlength="80" />
                            <div className="field-msg" id="nameMsg"></div>
                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="email">Email Address <span className="req">*</span></label>
                            <input type="email" id="email" name="email" required
                                placeholder="e.g. john@company.com" />
                            <div className="field-msg" id="emailMsg"></div>
                        </div>

                        
                        <div className="form-group form-grid-full">
                            <label htmlFor="phone">Phone Number <span className="req">*</span></label>
                            <div className="phone-wrapper">
                                <select id="phoneCountry" name="phoneCountry">
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
                                <input type="tel" id="phone" name="phone" required
                                    placeholder="e.g. 18925044116" />
                            </div>
                            <div className="field-msg" id="phoneMsg"></div>
                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="company">Company Name <span className="optional">(optional)</span></label>
                            <input type="text" id="company" name="company"
                                placeholder="e.g. MediCare Import Ltd."
                                maxlength="120" />
                            <div className="field-msg" id="companyMsg"></div>
                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="country">Country / Region <span className="optional">(optional)</span></label>
                            <select id="country" name="country">
                                <option value="">Select your country</option>
                                <option value="Nigeria">🇳🇬 Nigeria</option>
                                <option value="Ghana">🇬🇭 Ghana</option>
                                <option value="Kenya">🇰🇪 Kenya</option>
                                <option value="Cameroon">🇨🇲 Cameroon</option>
                                <option value="DR Congo">🇨🇩 DR Congo</option>
                                <option value="Tanzania">🇹🇿 Tanzania</option>
                                <option value="Cote d'Ivoire">🇨🇮 Cote d'Ivoire</option>
                                <option value="Angola">🇦🇴 Angola</option>
                                <option value="Senegal">🇸🇳 Senegal</option>
                                <option value="Somalia">🇸🇴 Somalia</option>
                                <option value="UAE">🇦🇪 UAE</option>
                                <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                                <option value="South Africa">🇿🇦 South Africa</option>
                                <option value="Other">🌐 Other</option>
                            </select>
                            <div className="field-msg" id="countryMsg"></div>
                        </div>

                        
                        <div className="form-group form-grid-full">
                            <label htmlFor="product">Product Requirement <span className="optional">(optional)</span></label>
                            <select id="product" name="product">
                                <option value="">Select product category (optional)</option>
                                <optgroup label="Imaging Equipment">
                                    <option value="Digital X-ray Machine">Digital X-ray Machine</option>
                                    <option value="CT Scanner">CT Scanner</option>
                                    <option value="MRI System">MRI System</option>
                                </optgroup>
                                <optgroup label="Diagnosis & Lab">
                                    <option value="Ultrasound Scanner">Ultrasound Scanner</option>
                                    <option value="Hematology Analyzer">Hematology Analyzer</option>
                                    <option value="Lab Equipment">Lab Equipment</option>
                                </optgroup>
                                <optgroup label="Life Support">
                                    <option value="Anesthesia Machine">Anesthesia Machine</option>
                                    <option value="Ventilator">Ventilator</option>
                                    <option value="Hemodialysis Machine">Hemodialysis Machine</option>
                                </optgroup>
                                <optgroup label="Project">
                                    <option value="Complete Hospital Project">Complete Hospital Project</option>
                                    <option value="OEM/ODM Customization">OEM/ODM Customization</option>
                                </optgroup>
                            </select>
                            <div className="field-msg" id="productMsg"></div>
                        </div>

                        
                        <div className="form-group form-grid-full">
                            <label htmlFor="message">Message <span className="optional">(optional)</span></label>
                            <textarea id="message" name="message"
                                placeholder="Tell us about your project requirements, quantity needed, target market, delivery timeline, etc."
                                maxlength="2000"></textarea>
                            <div className="field-msg hint" id="messageMsg">Max 2000 characters</div>
                        </div>

                        
                        <div className="form-group form-grid-full">
                            <div className="anti-spam-box">
                                <input type="checkbox" id="agreeTerms" name="agreeTerms" required />
                                <label htmlFor="agreeTerms">I confirm this is a genuine business inquiry and not spam.</label>
                            </div>
                            <div className="field-msg" id="agreeMsg"></div>
                        </div>
                    </div>

                    
                    <div className="form-actions">
                        <button type="submit" className="btn-submit" id="submitBtn">
                            <span id="submitText">Submit Inquiry</span>
                        </button>
                        <p style={{fontSize: '13px', color: 'var(--grey)'}}>🔒 Your information is secure and will only be used to respond to your inquiry.</p>
                    </div>
                </form>

                
                <div className="submission-summary" id="submissionSummary">
                    <h3>📋 Your Submission Summary</h3>
                    <div id="summaryContent"></div>
                </div>
            </div>
        </div>

        
        <div className="contact-sidebar">
            <div className="sidebar-item">
                <div className="sidebar-icon">💬</div>
                <div><strong>WhatsApp:</strong> +86 18925044116</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon">✉️</div>
                <div><strong>Email:</strong> nancy@medicalequipment168.com</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon">⚡</div>
                <div><strong>Response time:</strong> Within 24 hours</div>
            </div>
        </div>
    </div>
</section>




<a href="https://wa.me/8618925044116?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details." target="_blank" rel="noopener" className="float-wa" aria-label="Chat on WhatsApp">
    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.078 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.032 6.987 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
</a>
    </>
  );
}
