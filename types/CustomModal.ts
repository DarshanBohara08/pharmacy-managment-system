import { ReactNode } from "react";

export interface ICustomModal {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onRequestClose?: () => void;
  shouldCloseOnOverlayClick?: boolean;
}
