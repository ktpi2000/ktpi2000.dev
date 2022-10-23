import { Container, MantineProvider, Text, Title } from '@mantine/core';
import { About } from './components/About';
import { History } from './components/History';
import { Introduction } from './components/Introduction';
import { Links } from './components/Links';

const App = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Container>
      <div style={{ marginTop: '2rem' }}>
        <Introduction />
      </div>

      <div style={{ padding: '1rem 0rem' }}>
        <Title order={2}>about</Title>
        <About />
      </div>

      <div style={{ padding: '1rem 0rem' }}>
        <Title order={2}>links</Title>
        <Links />
      </div>

      <div style={{ padding: '1rem 0rem' }}>
        <Title order={2}>skills</Title>
        <Text>
          React / Next.js / Vue.js / Nuxt.js / TypeScript / Emotion / Styled-component / Firebase
        </Text>
      </div>

      <div style={{ padding: '1rem 0rem' }}>
        <Title order={2}>history</Title>
        <History />
      </div>
    </Container>
  </MantineProvider>
);

export default App;
