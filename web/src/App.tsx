import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./common/api/query-client";
import { AppProvider } from "./common/components/providers/app-provider/AppProvider";
import { AppLayout } from "./common/components/app-layout/AppLayout";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <AppLayout />
    </AppProvider>
  </QueryClientProvider>
);

export default App;
