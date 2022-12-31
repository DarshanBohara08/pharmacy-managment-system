import { ReactNode } from "react";

export interface ICard {
  detailLabel: string;
  icon: string;
  heading: string;
  name: string;
  link: string;
  borderColor?: "red" | "green" | "blue";
}
