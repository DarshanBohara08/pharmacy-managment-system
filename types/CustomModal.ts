import { ReactNode } from "react";

export interface ICustomModal {
  isOpen: boolean;
  children: ReactNode;
  onRequestClose?: () => void;
  shouldCloseOnOverlayClick?: boolean;
}
