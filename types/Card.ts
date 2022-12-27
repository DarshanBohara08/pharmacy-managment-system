import { ReactNode } from "react";

export interface ICard {
  detailLabel: string;
  icon: string;
  heading: string;
  isAmount: boolean;
  name: string;
  link: string;
  borderColor: "red" | "green" | "yellow" | "blue";
}
