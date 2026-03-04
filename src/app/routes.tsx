import { createBrowserRouter } from 'react-router';
// ... your other imports (Home, About, etc.)

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />, // Or whatever your main wrapper is
      children: [
        { path: '/', element: <Home /> },
        { path: '/services', element: <Services /> },
        { path: '/about', element: <About /> },
        { path: '/faq', element: <FAQ /> },
        { path: '/resources', element: <Resources /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ],
  {
    // THIS IS THE FIX: It tells React Router your site is in the /trial/ folder
    basename: '/trial', 
  }
);
