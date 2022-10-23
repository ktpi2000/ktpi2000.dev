import { Anchor, List } from '@mantine/core';

const lists = [
  {
    url: 'https://twitter.com/ktpi2000',
    name: 'Twitter',
  },
  {
    url: 'https://github.com/ktpi2000',
    name: 'GitHub',
  },
  {
    url: 'https://zenn.dev/ktpi2000',
    name: 'Zenn',
  },
  {
    url: 'https://blog.ktpi2000.dev/',
    name: 'Blog',
  },
];

export const Links = () => (
  <List>
    {lists.map((item) => (
      <List.Item key={item.name}>
        <Anchor href={item.url}>{item.name}</Anchor>
      </List.Item>
    ))}
  </List>
);
