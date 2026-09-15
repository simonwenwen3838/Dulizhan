import './globals.css';
import ClientScripts from './client-scripts';

export const metadata = {
  title: {
    default: 'MAYAMED - One-Stop Hospital Project Solution Supplier',
    template: '%s | MAYAMED Medical Equipment',
  },
  description: 'Professional Medical Equipment Manufacturer Since 2010. Specializing in X-ray, MRI, CT, Ultrasound, and complete hospital project solutions.',
  openGraph: {
    type: 'website',
    siteName: 'MAYAMED Medical Equipment',
    title: 'MAYAMED - One-Stop Hospital Project Solution Supplier',
    description: 'Professional Medical Equipment Manufacturer Since 2010.',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
