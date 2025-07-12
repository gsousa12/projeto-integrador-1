import { AnimalMenuTabButton } from "../animal-menu-tab-button/AnimalMenuTabButton";

export const MenuHeader = () => {
  return (
    <div className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <AnimalMenuTabButton />
      </div>
    </div>
  );
};
