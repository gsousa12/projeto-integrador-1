import { ReactNode } from "react";
import { GlobalWrapper } from "../wrappers/global-wrapper/GlobalWrapper";
import { GlobalLoader } from "../loader/GlobalLoader";
import { Header } from "../header/Header";

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <GlobalWrapper>
      <GlobalLoader />
      <>
        <Header />
        {children}
      </>
    </GlobalWrapper>
  );
};
