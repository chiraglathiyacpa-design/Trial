// 1. Ensure createBrowserRouter is in this list!
import { createBrowserRouter, Outlet, useLocation } from "react-router"; 
import { useEffect } from "react";
// ... (keep all your Page imports exactly as they are)

// ... (keep ScrollToTop and RootLayout exactly as they are)

// 2. Updated Export with the correct syntax
export const router = createBrowserRouter(
  [
    {
      Component: RootLayout,
      children: [
        { path: "/", Component: HomePage },
        { path: "/services", Component: ServicesPage },
        { path: "/about", Component: AboutPage },
        { path: "/contact", Component: ContactPage },
        { path: "/faq", Component: FAQPage },
        { path: "/resources", Component: BlogPage },
        { path: "/privacy-policy", Component: PrivacyPolicyPage },
        { path: "/terms-of-service", Component: TermsOfServicePage },
        { path: "/cookie-policy", Component: CookiePolicyPage },
      ],
    },
  ],
  {
    basename: "/trial", // This fixes the 404 on GitHub Pages
  }
);
