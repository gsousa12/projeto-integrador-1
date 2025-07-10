import { Dog, PawPrint } from "lucide-react";
import { DropdownSectionTitle } from "../dopdown-section-title/DropdownSectionTitle";
import { DropdownMenuItem } from "../dropdown-menu-item/DropdownMenuItem";

export const DogDropdownContent = () => (
  <div className="flex flex-col md:flex-row gap-8 md:gap-20 min-w-[280px]">
    <div className="flex flex-col gap-2">
      <DropdownSectionTitle
        title="Ache um doguinho para adotar"
        icon={<Dog className="h-5 w-5" />}
      />
      <DropdownMenuItem
        title="Veja todos os doguinhos"
        description="Procure pelos amiguinhos que estão procurando um lar"
        href=""
        icon={<PawPrint className="h-4 w-4" />}
      />
      <DropdownMenuItem
        title="Veja os doguinhos idosos"
        description="Ache um idoso para dar muito amor"
        href=""
        icon={<PawPrint className="h-4 w-4" />}
      />
      <DropdownMenuItem
        title="Veja os doguinhos filhotes"
        description="Ache filhotes que estão cheios de amor para dar."
        href=""
        icon={<PawPrint className="h-4 w-4" />}
      />
    </div>
  </div>
);
