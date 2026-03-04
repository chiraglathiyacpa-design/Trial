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
    // This tells React Router: "My app starts at /trial/, not at the root"
    basename: "/trial",
  }
);
