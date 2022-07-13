import { Box, Flex, Heading } from '@chakra-ui/react';
import Link from 'react-router-dom';
import {ThemeToggle} from './index'

export const Header = () => {
  return (
    <Flex as='header' width='full' align='center'>
      <Heading as='h1' size='md'>
        <Link to='/'>cairopal</Link>
      </Heading>

      <Box marginLeft='auto'>
        <ThemeToggle />
        <WalletConnect />
      </Box>
    </Flex>
  );
};
