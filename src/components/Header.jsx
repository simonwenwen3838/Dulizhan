'use client';

export default function Header() {
  return (
    <>
<div className="mega-overlay" id="megaOverlay"></div>
<header>
    <div className="container">
        <div className="nav">
            
            <a href="/" className="logo">MAYAMED <span className="logo-badge">Medical</span></a>

            
            <div className="nav-center">
                <ul className="nav-links">
                    
                    <li className="nav-item">
                        <a href="/">Home</a>
                    </li>

                    
                    <li className="nav-item">
                        <a href="/products/">Products <span className="caret">▼</span></a>
                        <div className="mega-panel">
                            <div className="mega-grid mega-products-grid">
                                
                                <div>
                                    <div className="mega-col-title">Imaging Equipment</div>
                                    <a href="/products/#xray" className="mega-link"><span className="mega-link-icon">📡</span><span className="mega-link-text"><span className="mega-link-name">Digital X-ray</span><span className="mega-link-desc">DR systems</span></span></a>
                                    <a href="/products/" className="mega-link"><span className="mega-link-icon">🖥️</span><span className="mega-link-text"><span className="mega-link-name">CT Scanner</span><span className="mega-link-desc">Multi-slice CT</span></span></a>
                                    <a href="/products/#mri" className="mega-link"><span className="mega-link-icon">🧲</span><span className="mega-link-text"><span className="mega-link-name">MRI System</span><span className="mega-link-desc">1.5T superconducting</span></span></a>
                                </div>
                                
                                <div>
                                    <div className="mega-col-title">Diagnosis & Lab</div>
                                    <a href="/products/#ultrasound" className="mega-link"><span className="mega-link-icon">🔊</span><span className="mega-link-text"><span className="mega-link-name">Ultrasound Scanner</span><span className="mega-link-desc">Doppler imaging</span></span></a>
                                    <a href="/products/" className="mega-link"><span className="mega-link-icon">🩸</span><span className="mega-link-text"><span className="mega-link-name">Hematology Analyzer</span><span className="mega-link-desc">3-part blood analyzer</span></span></a>
                                    <a href="/products/" className="mega-link"><span className="mega-link-icon">🔬</span><span className="mega-link-text"><span className="mega-link-name">Lab Equipment</span><span className="mega-link-desc">Centrifuge, analyzer</span></span></a>
                                </div>
                                
                                <div>
                                    <div className="mega-col-title">Life Support</div>
                                    <a href="/products/" className="mega-link"><span className="mega-link-icon">💉</span><span className="mega-link-text"><span className="mega-link-name">Anesthesia Machine</span><span className="mega-link-desc">OR ventilation</span></span></a>
                                    <a href="/products/" className="mega-link"><span className="mega-link-icon">🫁</span><span className="mega-link-text"><span className="mega-link-name">Ventilator</span><span className="mega-link-desc">ICU ventilator</span></span></a>
                                    <a href="/products/" className="mega-link"><span className="mega-link-icon">🩺</span><span className="mega-link-text"><span className="mega-link-name">Hemodialysis</span><span className="mega-link-desc">Dialysis machine</span></span></a>
                                </div>
                                
                                <div className="mega-featured">
                                    <h4>Complete Hospital Project</h4>
                                    <p>One-stop equipment supply for new hospital construction — imaging, lab, ICU, OR, and more.</p>
                                    <a href="/quote/" className="btn-mini">Get a Quote →</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    
                    <li className="nav-item">
                        <a href="/solutions/">Solutions <span className="caret">▼</span></a>
                        <div className="mega-panel">
                            <div className="mega-grid mega-solutions-grid">
                                <div>
                                    <div className="mega-col-title">By Department</div>
                                    <a href="/solutions/#departments" className="mega-link"><span className="mega-link-icon">📡</span><span className="mega-link-text"><span className="mega-link-name">Radiology</span><span className="mega-link-desc">X-ray, CT, MRI</span></span></a>
                                    <a href="/solutions/#departments" className="mega-link"><span className="mega-link-icon">🔊</span><span className="mega-link-text"><span className="mega-link-name">Ultrasound</span><span className="mega-link-desc">Scanner, Doppler</span></span></a>
                                    <a href="/solutions/#departments" className="mega-link"><span className="mega-link-icon">🫁</span><span className="mega-link-text"><span className="mega-link-name">ICU</span><span className="mega-link-desc">Ventilator, monitor</span></span></a>
                                    <a href="/solutions/#departments" className="mega-link"><span className="mega-link-icon">🩺</span><span className="mega-link-text"><span className="mega-link-name">Dialysis Center</span><span className="mega-link-desc">Hemodialysis</span></span></a>
                                </div>
                                <div>
                                    <div className="mega-col-title">By Project Type</div>
                                    <a href="/solutions/#projects" className="mega-link"><span className="mega-link-icon">🏥</span><span className="mega-link-text"><span className="mega-link-name">New Hospital</span><span className="mega-link-desc">Complete setup</span></span></a>
                                    <a href="/solutions/#projects" className="mega-link"><span className="mega-link-icon">♻️</span><span className="mega-link-text"><span className="mega-link-name">Renovation</span><span className="mega-link-desc">Equipment upgrade</span></span></a>
                                    <a href="/solutions/#projects" className="mega-link"><span className="mega-link-icon">📦</span><span className="mega-link-text"><span className="mega-link-name">Supply Only</span><span className="mega-link-desc">Bulk procurement</span></span></a>
                                    <a href="/solutions/#projects" className="mega-link"><span className="mega-link-icon">⚙️</span><span className="mega-link-text"><span className="mega-link-name">OEM/ODM</span><span className="mega-link-desc">Custom branding</span></span></a>
                                </div>
                                <div className="mega-featured">
                                    <h4>Africa After-sales</h4>
                                    <p>Local after-sales team in Africa for installation, training, and maintenance support.</p>
                                    <a href="/about/" className="btn-mini">Learn More →</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    
                    <li className="nav-item">
                        <a href="/about/">About <span className="caret">▼</span></a>
                        <div className="mega-panel">
                            <div className="mega-grid mega-about-grid">
                                <div>
                                    <div className="mega-col-title">Company</div>
                                    <a href="/about/#factory" className="mega-link"><span className="mega-link-icon">🏭</span><span className="mega-link-text"><span className="mega-link-name">Factory Tour</span><span className="mega-link-desc">30,000+ m² facility</span></span></a>
                                    <a href="/about/#advantages" className="mega-link"><span className="mega-link-icon">🛡️</span><span className="mega-link-text"><span className="mega-link-name">Our Advantages</span><span className="mega-link-desc">Why choose us</span></span></a>
                                    <a href="/cases/" className="mega-link"><span className="mega-link-icon">📊</span><span className="mega-link-text"><span className="mega-link-name">Project Cases</span><span className="mega-link-desc">Africa hospital projects</span></span></a>
                                    <a href="/about/#certifications" className="mega-link"><span className="mega-link-icon">✅</span><span className="mega-link-text"><span className="mega-link-name">Certifications</span><span className="mega-link-desc">CE certified</span></span></a>
                                </div>
                                <div className="mega-featured">
                                    <h4>Since 2010</h4>
                                    <p>15+ years of medical equipment manufacturing. 40+ elite team members serving Africa.</p>
                                    <a href="/quote/" className="btn-mini">Contact Us →</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    
                    <li className="nav-item"><a href="/cases/">Cases</a></li>
                    <li className="nav-item"><a href="/blog/">Blog</a></li>
                    <li className="nav-item"><a href="/faq/">FAQ</a></li>
                    <li className="nav-item"><a href="/quote/">Contact</a></li>
                </ul>
            </div>

            
            <div className="nav-right">
                <span className="nav-lang">🌐 EN</span>
                <a href="/quote/" className="btn-quote">Get a Quote</a>
            </div>

            
            <button className="nav-toggle" onclick="toggleMobileNav()">☰</button>
        </div>
    </div>
</header>
    </>
  );
}
