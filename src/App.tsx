import { MantineProvider, Text } from '@mantine/core';

const App = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Text>Welcome to Mantine!</Text>
  </MantineProvider>
);

export default App;
