import { useState } from "react";
import { useMobileDetect } from "@/common/hooks/use-mobile-detect";
import { Cat, ChevronDown, Dog } from "lucide-react";
import { AnimalDropdownMenu } from "../animal-dropdown-menu/AnimalDropdownMenu";

export type AnimalType = "dogs" | "cats";

export const AnimalMenuTabButton = () => {
  const isMobile = useMobileDetect();
  const [activeAnimal, setActiveAnimal] = useState<AnimalType | null>(null);

  const toggleMenu = (animal: AnimalType) => {
    setActiveAnimal((prev) => (prev === animal ? null : animal));
  };

  const closeMenu = () => setActiveAnimal(null);

  return (
    <nav
      className={`flex justify-center ${
        isMobile ? "gap-8" : "gap-20"
      } font-extrabold text-gray-700 bg-gray-100`}
    >
      {/* Botão Cachorros */}
      <div className="relative py-4">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 ${
            activeAnimal === "dogs" ? "bg-gray-200" : ""
          }`}
          onClick={() => toggleMenu("dogs")}
        >
          <Dog className="h-5 w-5 text-gray-500" />
          <span>Cachorros</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-200 ${
              activeAnimal === "dogs" ? "rotate-180" : ""
            }`}
          />
        </button>

        {activeAnimal === "dogs" && (
          <div className="absolute inset-x-0 mt-2 z-50 flex justify-center sm:justify-start">
            <AnimalDropdownMenu animal="dogs" onClose={closeMenu} open />
          </div>
        )}
      </div>

      <div className="relative py-4">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 ${
            activeAnimal === "cats" ? "bg-gray-200" : ""
          }`}
          onClick={() => toggleMenu("cats")}
        >
          <Cat className="h-5 w-5 text-gray-500" />
          <span>Gatos</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-200 ${
              activeAnimal === "cats" ? "rotate-180" : ""
            }`}
          />
        </button>

        {activeAnimal === "cats" && (
          <div className="absolute inset-x-0 mt-2 z-50 flex justify-center sm:justify-start">
            <AnimalDropdownMenu animal="cats" onClose={closeMenu} open />
          </div>
        )}

      </div>
    </nav>
  );
};
