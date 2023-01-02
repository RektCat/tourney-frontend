import { ReactNode } from "react";
import CustomEventType from "../static/constants/CustomEvents";

interface CustomEventExtended extends CustomEventInit {
  cancelBubble: boolean;
  currentTarget: ReactNode;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  target: HTMLElement;
  timeStamp: number;
  type: CustomEventType;
}

export default CustomEventExtended;
