import { Center, Text } from '@mantine/core';
import dayjs from 'dayjs';
import pkg from '~/../package.json';

export const Footer = () => {
  const title = `Build ${pkg.version}-${pkg.buildRef} · ${dayjs(pkg.buildDate).format('DD-MM-YYYY HH:mm:ss')}`;
  return (
    <footer>
      <Center w={'100%'} bg={'dark'} h={'50'}>
        <Text c={'white'} title={title}>
          2024 &copy; Andrew Molyuk
        </Text>
      </Center>
    </footer>
  );
};
