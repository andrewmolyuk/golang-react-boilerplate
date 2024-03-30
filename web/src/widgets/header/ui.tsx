import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Group, Button, Divider, Box, Burger, Drawer, ScrollArea, Text, rem } from '@mantine/core';
import { Logo } from '~/widgets/logo';
import { useDisclosure } from '@mantine/hooks';

import classes from './classes.module.css';

const links = [{ link: '/', label: 'Home' }];

export const Header = () => {
  const navigate = useNavigate();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const index = links.findIndex((item) => location.pathname.toLowerCase() === item.link.toLowerCase());
  const [active, setActive] = useState(index);

  const menuItems = links.map((item, index) => (
    <a
      key={index}
      href={item.link}
      className={classes.link}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
        navigate(item.link);
      }}
    >
      {item.label}
    </a>
  ));

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <a className={classes.logo} href="/">
            <Group>
              <Logo />
              <Text size="xl">Rect Golang Boilerplate</Text>
            </Group>
          </a>

          <Group h="100%" gap={0} visibleFrom="sm">
            {menuItems}
          </Group>

          <Group visibleFrom="sm">
            <Button
              onClick={() => {
                setActive(-1);
                navigate('/auth');
              }}
            >
              Log in
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="/" className={classes.link}>
            Home
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button
              onClick={() => {
                location.href = '/login';
              }}
            >
              Log in
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
