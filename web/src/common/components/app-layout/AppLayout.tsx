import { AppRoutes } from "../app-routes/AppRoutes";
import { GlobalWrapper } from "../wrappers/global-wrapper/GlobalWrapper";
import { GlobalLoader } from "../loader/GlobalLoader";
import { Header } from "../header/Header";

export const AppLayout = () => {
  return (
    <GlobalWrapper>
      <GlobalLoader />
      <>
        <Header />
        <AppRoutes />
      </>
    </GlobalWrapper>
  );
};
