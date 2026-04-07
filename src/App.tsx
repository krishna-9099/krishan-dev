import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Router configuration for the portfolio application
 * - / : Home page with all section components
 * - * : 404 Not Found page
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

/**
 * App component - Root component with React Router setup
 * ThemeProvider is already included in MainLayout
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
