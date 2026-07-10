import { ReactNode } from "react";

import LAYOUT from "@/constants/layout";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`${LAYOUT.container} ${className}`}>
      {children}
    </div>
  );
}