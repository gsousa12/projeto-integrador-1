import { useEffect, useRef } from "react";
import { AnimalType } from "../animal-menu-tab-button/AnimalMenuTabButton";
import { useMobileDetect } from "@/common/hooks/use-mobile-detect";
import { DogDropdownContent } from "../dog-dropdown-content/DogDropdownContent";
import { CatDropdownContent } from "../cat-dropdown-content/CatDropdownContent";

interface AnimalDropdownMenuProps {
  open: boolean;
  animal: AnimalType;
  onClose: () => void;
}

export const AnimalDropdownMenu = ({
  open,
  animal,
  onClose,
}: AnimalDropdownMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetect();

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

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      className={`
        ${isMobile ? "fixed inset-x-0 top-[150px]" : "absolute left-0 mt-2"}
        z-50 flex ${isMobile ? "justify-center" : ""}
        transition-all duration-300
        ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }
      `}
      aria-modal="true"
      role="menu"
    >
      <div
        className={`
          bg-white shadow-2xl rounded-xl p-4
          ${isMobile ? "w-[95vw] mx-2" : "w-auto"}
          animate-fade-in
        `}
      >
        {animal === "dogs" ? <DogDropdownContent /> : <CatDropdownContent />}
      </div>
    </div>
  );
};
