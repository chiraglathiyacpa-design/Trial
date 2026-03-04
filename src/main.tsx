import { RouterProvider } from 'react-router';
import { router } from './routes'; // This pulls in the router from src/app/routes.tsx

export default function App() {
  // We pass the 'router' variable into the Provider
  return <RouterProvider router={router} />;
}
