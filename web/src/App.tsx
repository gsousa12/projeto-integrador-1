import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./common/api/query-client";
import { AppProvider } from "./common/components/providers/app-provider/AppProvider";
import { AppLayout } from "./common/components/app-layout/AppLayout";
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { AuthWrapper } from "./context/AuthWrapper";

import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import EsqueceuSenha from "./components/EsqueceuSenha";
import RedefinirSenha from "./components/RedefinirSenha";
import TelaInicial from "./components/TelaInicial";
import TelaPet from "./components/TelaPet";
import CadastrarPet from "./components/CadastrarPet";
import MeusPets from "./components/MeusPets";
import Doacoes from "./components/Doacoes";
import Contato from "./components/Contato";

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AppProvider>
        <AuthWrapper> {/* AGORA envolve tudo! */}
          <AppLayout>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/esqueceusenha" element={<EsqueceuSenha />} />
              <Route path="/redefinirsenha" element={<RedefinirSenha />} />
              <Route path="/telainicial" element={<TelaInicial />} />
              <Route path="/telapet" element={<TelaPet />} />
              <Route path="/cadastrarpet" element={<CadastrarPet />} />
              <Route path="/meuspets" element={<MeusPets />} />
              <Route path="/doações" element={<Doacoes />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </AppLayout>
        </AuthWrapper>
      </AppProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
