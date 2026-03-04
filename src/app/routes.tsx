import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { useEffect } from "react";

// Page Imports
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { BlogPage } from "./pages/BlogPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";

/**
 * Ensures the window scrolls to the top whenever the URL path changes.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * The RootLayout wraps all pages to provide consistent behavior (like ScrollToTop)
 * and uses <Outlet /> to render the specific child route components.
 */
function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

// FINAL ROUTER CONFIGURATION
export const router = createBrowserRouter(
  [
    {
      Component: RootLayout,
      children: [
        // 'index: true' tells the router this is the default component for the base path
        { index: true, Component: HomePage },
        { path: "services", Component: ServicesPage },
        { path: "about", Component: AboutPage },
        { path: "contact", Component: ContactPage },
        { path: "faq", Component: FAQPage },
        { path: "resources", Component: BlogPage },
        { path: "privacy-policy", Component: PrivacyPolicyPage },
        { path: "terms-of-service", Component: TermsOfServicePage },
        { path: "cookie-policy", Component: CookiePolicyPage },
      ],
    },
  ],
  {
    // CRITICAL: Tells the router your app lives in the /trial/ subfolder on GitHub Pages
    basename: "/trial",
  }
);
