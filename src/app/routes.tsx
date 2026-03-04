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
 * ScrollToTop Component
 * Listens to the URL path and scrolls to 0,0 on change.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * RootLayout
 * The wrapper that holds the ScrollToTop logic and the page content.
 */
function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

// ROUTER DEFINITION
export const router = createBrowserRouter(
  [
    {
      // Note: Component (capital C) is the standard for React Router v7
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
