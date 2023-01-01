export interface IButton {
  label: string;
  icon?: string;
  showIcon?: boolean;
  bgColor: "red" | "blue";
  onClick: () => any;
}
