import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage, NotFoundPage } from '@pages';
import { Layout, Loader } from '@components';
import { Routes } from '@constants';

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Layout />,
    children: [
      {
        path: Routes.HOME,
        element: <HomePage />,
      },
      {
        path: Routes.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const Routing = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
