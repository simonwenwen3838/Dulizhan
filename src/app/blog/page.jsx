export default function Page() {
  return (
    <>
<div className="page-header">
    <div className="container">
        <a href="/" className="logo">MAYAMED <span className="logo-badge">Medical</span></a>
        <a href="/" className="back-link">← Back to Home</a>
    </div>
</div>

<section className="blog-hero">
    <div className="container">
        <h1>MAYAMED <span>Blog</span></h1>
        <p>Product guides, technical insights, and procurement tips for medical equipment distributors and hospital project managers.</p>
    </div>
</section>

<section className="blog-list">
    <div className="container">

        
        <a href="/blog/digital-x-ray-machine" className="blog-card">
            <div className="blog-card-img">
                <img src="https://sc02.alicdn.com/kf/H6c3440c1f7864d7fb8588ef2534becadg.jpg" alt="MAYAMED Digital X-ray Radiography System" loading="lazy" />
            </div>
            <div className="blog-card-body">
                <span className="blog-card-tag">Imaging Equipment</span>
                <h2>Digital X-ray Machine: Complete Buying Guide & Technical Specs</h2>
                <p>Everything you need to know about choosing a digital radiography system — from generator power and detector size to table movement and installation requirements.</p>
                <div className="blog-card-meta">
                    <span>📅 Sep 2026</span>
                    <span>⏱ 8 min read</span>
                    <span className="read-more">Read More →</span>
                </div>
            </div>
        </a>

        
        <a href="/blog/doppler-ultrasound-scanner" className="blog-card">
            <div className="blog-card-img">
                <img src="https://sc02.alicdn.com/kf/Hb7611cb31f8147558ea9af1419575d5dL.jpg" alt="MAYAMED Doppler Ultrasound Scanner" loading="lazy" />
            </div>
            <div className="blog-card-body">
                <span className="blog-card-tag">Diagnostic Equipment</span>
                <h2>Doppler Ultrasound Scanner: Features, Probes & Software Guide</h2>
                <p>A detailed walkthrough of our cart-based Doppler ultrasound system — probe selection, imaging modes, 3D/4D capabilities, DICOM connectivity, and software packages.</p>
                <div className="blog-card-meta">
                    <span>📅 Sep 2026</span>
                    <span>⏱ 7 min read</span>
                    <span className="read-more">Read More →</span>
                </div>
            </div>
        </a>

        
        <a href="/blog/1-5t-mri-system" className="blog-card">
            <div className="blog-card-img">
                <img src="https://sc02.alicdn.com/kf/H2ce3d780661749ce904f9bfc69fe04b9n.jpg" alt="MAYAMED 1.5T Superconducting MRI System" loading="lazy" />
            </div>
            <div className="blog-card-body">
                <span className="blog-card-tag">Imaging Equipment</span>
                <h2>1.5T MRI System: Why Zero-Helium Superconducting Design Matters</h2>
                <p>The 1.5T MRI with conductive cooling eliminates liquid helium dependence. Learn about field stability, bore size, 5G's line, installation dimensions, and recovery from quench.</p>
                <div className="blog-card-meta">
                    <span>📅 Sep 2026</span>
                    <span>⏱ 6 min read</span>
                    <span className="read-more">Read More →</span>
                </div>
            </div>
        </a>

    </div>
</section>

<footer style={{background: '#1A1A1A', color: '#B0B0B0', padding: '32px 0', textAlign: 'center'}}>
    <div className="container">
        <div style={{fontSize: '24px', fontWeight: '800', color: '#fff', marginBottom: '8px'}}>MAYAMED</div>
        <p style={{fontSize: '14px', color: '#707070'}}>© 2010-2026 MAYAMED. All Rights Reserved.</p>
    </div>
</footer>


<a href="https://wa.me/8618925044116?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details." target="_blank" rel="noopener" className="float-wa" aria-label="Chat on WhatsApp">
    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.078 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.032 6.987 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
</a>
    </>
  );
}
