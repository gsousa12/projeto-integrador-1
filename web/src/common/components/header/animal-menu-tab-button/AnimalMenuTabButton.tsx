import { useMobileDetect } from "@/common/hooks/use-mobile-detect";
import { Cat, ChevronDown, Dog } from "lucide-react";

export type AnimalType = "dogs" | "cats";

interface AnimalMenuTabButtonProps {
  onTabClick: (animal: AnimalType) => void;
  activeAnimal: AnimalType | null;
}

export const AnimalMenuTabButton = ({
  onTabClick,
  activeAnimal,
}: AnimalMenuTabButtonProps) => {
  const isMobile = useMobileDetect();

  return (
    <nav
      className={`flex justify-center ${
        isMobile ? "gap-8" : "gap-20"
      } py-4 font-extrabold text-gray-700 bg-gray-100`}
    >
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-100 focus:outline-none hover:cursor-pointer ${
          activeAnimal === "dogs" ? "bg-gray-200" : ""
        }`}
        aria-expanded={activeAnimal === "dogs"}
        onClick={() => onTabClick("dogs")}
        type="button"
      >
        <Dog className="h-5 w-5 text-gray-500" />
        <span>Cachorros</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-200 ${
            activeAnimal === "dogs" ? "rotate-180" : ""
          }`}
        />
      </button>
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-100 focus:outline-none hover:cursor-pointer ${
          activeAnimal === "cats" ? "bg-gray-200" : ""
        }`}
        aria-expanded={activeAnimal === "cats"}
        onClick={() => onTabClick("cats")}
        type="button"
      >
        <Cat className="h-5 w-5 text-gray-500" />
        <span>Gatos</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-200 ${
            activeAnimal === "cats" ? "rotate-180" : ""
          }`}
        />
      </button>
    </nav>
  );
};
