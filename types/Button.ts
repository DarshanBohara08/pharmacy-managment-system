type buttonColor = "red" | "blue";

export interface IButton {
  label: string;
  icon?: string;
  showIcon?: boolean;
  bgColor: buttonColor;
  onClick: () => any;
  width: boolean;
}
