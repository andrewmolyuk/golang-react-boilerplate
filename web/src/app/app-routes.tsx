import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { DefaultLayout, HomePage, NotFoundPage } from '~/pages';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
