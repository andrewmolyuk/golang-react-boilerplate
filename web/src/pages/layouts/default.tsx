import { AppShell, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export const DefaultLayout = () => {
  return (
    <Container>
      <AppShell header={{ height: '60px' }} padding="md" footer={{ height: 50 }}>
        <AppShell.Header>Header</AppShell.Header>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>

        <AppShell.Footer>Footer</AppShell.Footer>
      </AppShell>
    </Container>
  );
};
