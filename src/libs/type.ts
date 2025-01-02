export type WorkCardProps = {
  title: string;
  imgPath: string;
  startDate: string;
  endDate?: string;
  imgAlign?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "center"
    | "left-bottom"
    | "right-bottom"
    | "left-top"
    | "right-top";
  path: string;
};
