import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Component/footer2";
import ChatBoot from "./Component/ChatBoot";
import { GoogleAnalytics } from "@next/third-parties/google";
import Banner from "./Component/banner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const schemaMarkup = [
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "headline": "USA Best Car Shipping",
      "name": "USA Best Car Shipping",
      "@id": "https://usabestcarshipping.com#website",
      "description": "Best and Affordable Car Shipping USA | Auto Transport Services",
      "url": "https://www.usabestcarshipping.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name": "USA Best Car Shipping",
      "url": "https://www.usabestcarshipping.com/",
      "logo": "https://www.usabestcarshipping.com/_next/static/media/Logo-01.811781c7.svg"
    }
  ];

  const schemaJsonString = JSON.stringify(schemaMarkup);
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortlink" href="https://usabestcarshipping.com" />
        <link rel="canonical" href="https://usabestcarshipping.com" />

        <meta content="USA Best Car Shipping" property="og:site_name" />
        <meta property="og:url" content="https://usabestcarshipping.com" />
        <meta content="website" property="og:type" />
        <meta
          property="og:title"
          content="USA Best Car Shipping &amp; Auto Transport Services"
        />
        <meta
          property="og:description"
          content="Looking for the best car shipping in USA? Get reliable and affordable auto transport services to safely move your vehicle. Get a FREE Quote Today!"
        />
        <meta
          property="og:image"
          content="https://www.usabestcarshipping.com/usabestcarshipping.webp"
        />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="usabestcarshipping.com" />
        <meta property="twitter:url" content="https://usabestcarshipping.com" />
        <meta
          name="twitter:title"
          content="USA Best Car Shipping &amp; Auto Transport Services"
        />
        <meta
          name="twitter:description"
          content="Looking for the best car shipping in USA? Get reliable and affordable auto transport services to safely move your vehicle. Get a FREE Quote Today!"
        />
        <meta
          name="twitter:image"
          content="https://www.usabestcarshipping.com/usabestcarshipping.webp"
        />
        <meta
          name="favicon-generator"
          content="Drupal responsive_favicons + realfavicongenerator.net"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={inter.className}>
        <Banner />
        {children}
        <Footer />
      </body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJsonString }}
      />
    </html>
  );
}