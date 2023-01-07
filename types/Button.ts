type buttonColor = "red" | "blue" | "redWhite";

export interface IButton {
  label: string;
  icon?: string;
  showIcon?: boolean;
  bgColor: buttonColor;
  onClick: () => any;
  width: boolean;
}
