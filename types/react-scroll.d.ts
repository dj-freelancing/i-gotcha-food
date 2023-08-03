declare module "react-scroll" {
  import { ComponentType, ReactNode } from "react";

  interface LinkProps {
    to: string;
    smooth?: boolean;
    children?: ReactNode;
  }

  const Link: ComponentType<LinkProps>;
}
