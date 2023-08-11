import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import NewPlotOwner from './components/plots/NewPlotOwner';
import NewInstallment from './components/installment/NewInstallment';
import InstallmentPage from './pages/InstallmentPage';
import Detail from './components/plots/Detail';
import InstallmentDetail from './components/plots/InstallmentDetail';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'plot', element: <UserPage /> },
        { path: 'plot/newplot', element: <NewPlotOwner /> },
        { path: 'plot/detail', element: <Detail /> },
        { path: 'plot/newinstallment', element: <NewInstallment /> },
        { path: 'plot/installment_detail', element: <InstallmentDetail /> },
        { path: 'installment', element: <InstallmentPage /> },
        { path: 'installment/createInstallment', element: <NewInstallment /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
