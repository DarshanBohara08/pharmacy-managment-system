type borderColors = "red" | "green" | "blue" | string;

export interface ICard {
  detailLabel: string;
  icon: string;
  heading: string;
  name: string;
  link: string;
  borderColor?: borderColors;
}
