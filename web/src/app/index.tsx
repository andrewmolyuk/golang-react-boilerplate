import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppRoutes } from './app-routes';
import { AuthProvider } from '~/shared/auth';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

export const App = () => (
  <MantineProvider>
    <AuthProvider>
      <QueryClientProvider client={new QueryClient()}>
        <ModalsProvider>
          <Notifications position="top-center" />
          <AppRoutes />
        </ModalsProvider>
      </QueryClientProvider>
    </AuthProvider>
  </MantineProvider>
);
