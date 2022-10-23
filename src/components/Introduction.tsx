import { Grid, Image, Text, Title } from '@mantine/core';

export const Introduction = () => (
  <Grid justify="center" align="center">
    <Grid.Col span={3}>
      <Image src="https://avatars.githubusercontent.com/u/30472855?v=4" radius={20} alt="avator" />
    </Grid.Col>
    <Grid.Col span="auto">
      <Title order={1}>Kataoka Yuya</Title>
      <Text weight={500} color="green">
        ktpi2000
      </Text>
    </Grid.Col>
  </Grid>
);
