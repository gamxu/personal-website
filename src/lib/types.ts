export type CardProps = {
  slug: string;
  title: string;
  imgPath: string;
  startDate: string;
  endDate?: string;
  category: string;
};

export type Props = {
  params: Promise<{ slug: string }>;
};
