'use client';

export default function Page() {
  return (
    <>
<div className="container">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-msg">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/" className="btn">Back to Home</a>
        <div className="links">
            <a href="/products/">Products</a>
            <a href="/quote/">Contact Us</a>
            <a href="/quote/">Request a Quote</a>
            <a href="/faq/">FAQ</a>
        </div>
    </div>
    </>
  );
}
