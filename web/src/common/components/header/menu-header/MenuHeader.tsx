import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------------------- //

export type ItemMenuOption = "dogs" | "cats";

interface MenuHeaderItemProps {
  handleOpenItemMenu: (itemOption: ItemMenuOption) => void;
}

export const MenuHeaderItem = ({ handleOpenItemMenu }: MenuHeaderItemProps) => {
  return (
    <div className="flex justify-center gap-20 py-4 font-extrabold text-gray-600 hover:cursor-pointer">
      <div className="flex gap-1" onClick={() => handleOpenItemMenu("dogs")}>
        <span>Cachorros</span>
        <ChevronDown className="h-6 w-6" />
      </div>
      <div className="flex gap-1" onClick={() => handleOpenItemMenu("cats")}>
        <span>Gatos</span>
        <ChevronDown className="h-6 w-6" />
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------------------- //

interface ItemMenuProps {
  open: boolean;
  menuOption: ItemMenuOption;
  onClose: () => void;
}

export const ItemMenu = ({ open, menuOption, onClose }: ItemMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return <Fragment></Fragment>;

  return (
    <div
      ref={menuRef}
      className="absolute left-0 right-0 bg-white shadow-lg p-4"
    >
      {menuOption == "dogs" ? <DogsMenu /> : <CatsMenu />}
    </div>
  );
};

// ----------------------------------------------------------------------------------- //

interface MenuTitleProps {
  title: string;
}
export const MenuTitle = ({ title }: MenuTitleProps) => {
  return <h2 className="font-bold text-xl mb-4 ">{title}</h2>;
};

// ----------------------------------------------------------------------------------- //

interface AnimalMenuItemProps {
  title: string;
  description: string;
  href: string;
}

export const AnimalMenuItem = ({
  title,
  description,
  href,
}: AnimalMenuItemProps) => {
  const nagivate = useNavigate();
  return (
    <div className="flex flex-row" onClick={() => nagivate(href)}>
      <span>{title}</span>
      <span>{description}</span>
    </div>
  );
};
// ----------------------------------------------------------------------------------- //

export const DogsMenu = () => {
  return (
    <div className="flex mx-[30rem] gap-[15rem]">
      <div className="flex flex-col ">
        <MenuTitle title="Ache um doguinho para adotar" />
        <AnimalMenuItem
          title="Veja todos os doguinhos"
          description="Procure pelos amiguinho que estão procurando um lar"
          href=""
        />
        <AnimalMenuItem
          title="Veja os doguinhos idosos"
          description="Ache um idoso para dar muito amor"
          href=""
        />
        <AnimalMenuItem
          title="Veja os doguinhos filhotes"
          description="Ache filhotes que estão cheio de amor para dar."
          href=""
        />
      </div>
      <div className="flex flex-col ">
        <MenuTitle title="Dicas" />
        <AnimalMenuItem
          title="Dicas de adoção"
          description="Veja dicas para realizar uma adoção de forma correta"
          href=""
        />
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------------------- //

export const CatsMenu = () => {
  return (
    <div className="flex mx-[30rem] gap-[15rem]">
      <div className="flex flex-col ">
        <MenuTitle title="Ache um gatinho para adotar" />
        <AnimalMenuItem
          title="Veja todos os gatinhos"
          description="Procure pelos amiguinho que estão procurando um lar"
          href=""
        />
        <AnimalMenuItem
          title="Veja os gatinhos idosos"
          description="Ache um idoso para dar muito amor"
          href=""
        />
        <AnimalMenuItem
          title="Veja os gatinhos filhotes"
          description="Ache filhotes que estão cheio de amor para dar."
          href=""
        />
      </div>
      <div className="flex flex-col ">
        <MenuTitle title="Dicas" />
        <AnimalMenuItem
          title="Dicas de adoção"
          description="Veja dicas para realizar uma adoção de forma correta"
          href=""
        />
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------------------- //

export const MenuHeader = () => {
  const [currentMenu, setCurrentMenu] = useState<ItemMenuOption | null>(null);

  const handleOpenItemMenu = (itemOption: ItemMenuOption) => {
    setCurrentMenu((prev) => (prev === itemOption ? null : itemOption));
  };

  const handleCloseMenu = () => {
    setCurrentMenu(null);
  };

  return (
    <div className="relative">
      <MenuHeaderItem handleOpenItemMenu={handleOpenItemMenu} />
      <ItemMenu
        open={currentMenu !== null}
        onClose={handleCloseMenu}
        menuOption={currentMenu ?? "dogs"}
      />
    </div>
  );
};
