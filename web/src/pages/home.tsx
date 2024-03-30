import { Button, Group } from '@mantine/core';

import { useAuth } from '~/shared/auth';

export const HomePage = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <>
      <h1>Home</h1>
      <p>{isAuthenticated ? 'You are authenticated' : 'You are not authenticated'}</p>

      <Group>
        <Button color="blue" onClick={() => login()}>
          Login
        </Button>
        <Button color="red" onClick={() => logout()}>
          Logout
        </Button>
      </Group>
    </>
  );
};
