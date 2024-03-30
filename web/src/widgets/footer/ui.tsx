import { Center, Text } from '@mantine/core';
import pkg from '~/../package.json';

export const Footer = () => {
  return (
    <footer>
      <Center w={'100%'} bg={'dark'} h={'50'}>
        <Text c={'white'}>
          2024 &copy; Andrew Molyuk &middot; v{pkg.version}-{pkg.buildRef} &middot; {pkg.buildDate}
        </Text>
      </Center>
    </footer>
  );
};
