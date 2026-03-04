import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { useEffect, type ReactElement } from "react";

// Page Imports - ENSURE THESE FILENAMES MATCH YOUR FILES EXACTLY (Case-Sensitive)
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
 * ScrollToTop: Forces the browser to the top of the page on route changes.
 */
function ScrollToTop(): null {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * RootLayout: The main wrapper for the application.
 */
function RootLayout(): ReactElement {
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
    basename: "/trial",
  }
);
