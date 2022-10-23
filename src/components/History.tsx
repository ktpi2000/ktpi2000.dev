import { Text, Title, Mark, Anchor, Box } from '@mantine/core';

interface THistory {
  period: string;
  title: string;
  description: string;
  link?: string;
}

const list: THistory[] = [
  {
    period: '2022/02 ~ 現在',
    title: '自社サービスの管理画面開発業務',
    description: `TypeScript, Next.js, Emotion, Storybook, Cypress`,
  },
  {
    period: '2021/12 ~ 2022/03',
    title: '某教育機関LP制作',
    description: 'TypeScript, Next.js, Styled-component, Firebase',
  },
  {
    period: '2021/11 ~ 2022/02',
    title: '某自治体LP制作',
    description: 'TypeScript, Next.js, Emotion',
  },
  {
    period: '2021/07 ~ 2021/11',
    title: '某企業Webアプリケーション開発',
    description: 'TypeScript, Next.js, Styled-component',
  },
  {
    period: '2021/05 ~ 2021/10',
    title: '某コンテンツクイズアプリケーション開発',
    description: 'Nuxt.js, Vue.js, TypeScript, リプレイス作業',
  },
  {
    period: '2021/04 ~ 2021/06',
    title: '某企業LP制作',
    description: 'Next.js, Styled-component',
  },
  {
    period: '2021/03',
    title: '小山高専 卒業',
    description: '卒業',
  },
  {
    period: '2021/01 ~ 2021/02',
    title: '多言語音声コンテストでNICT賞受賞',
    description:
      '感染症対策で着用するマスクによるコミュニケーションの課題を技術力で解決する試作プロダクトを発表',
    link: 'https://www.shimotsuke.co.jp/articles/-/431463',
  },
  {
    period: '2019/08',
    title: 'Web x iot メイカーズチャレンジで最優秀賞',
    description: '街中で AED を必要とする人に対し効率的に救助活動を行うための試作システムを開発',
    link: 'https://webiotmakers.github.io/2019/winners/#ibaraki',
  },
];

export const History = () => (
  <div>
    {list.map((item) => (
      <Box
        key={item.title}
        sx={() => ({
          margin: '1rem 0',
        })}
      >
        <Text size="sm">
          <Mark color="green">{item.period}</Mark>
        </Text>
        <Title order={3}>
          {item.title} {item.link && <Anchor href={item.link}>[URL]</Anchor>}
        </Title>
        <div style={{ whiteSpace: 'pre-wrap' }}>
          <Text>{item.description}</Text>
        </div>
      </Box>
    ))}
  </div>
);
