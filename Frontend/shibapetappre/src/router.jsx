import { createBrowserRouter} from 'react-router-dom';
import App from './App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import AccountPage from './components/AccountPage';
import InventoryPage from './components/InventoryPage';

      
      const router = createBrowserRouter([
        {
          path: '/',
          element: <App />,
        //   errorElement: <Error404Page/>,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: '/about',
              element: <AboutPage />
            },
            {
              path: '/signup',
              element: <SignUpPage />
            },
            {
              path: '/login',
              element: <LoginPage />
            },
            {
              path: '/account',
              element: <AccountPage />
            },
            {
              path: '/userInventory',
              element: <InventoryPage />
            }
          ],
        },
      ],);
      
      export default router;
      