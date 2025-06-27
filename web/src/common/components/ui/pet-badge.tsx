import { CustomBadge } from "./custom-badge";

interface PetBadgesProps {
  // Informações básicas
  animal?: "Gato" | "Cachorro" | string;
  gender?: "Macho" | "Fêmea" | string;

  // Características (podem ser nulas)
  age?: string | null;
  size?: string | null;
  breed?: string | null;

  // Status fixos
  vaccinated?: boolean;
  neutered?: boolean;

  className?: string;
}

export function PetBadges({
  animal,
  gender,
  age,
  size,
  breed,
  vaccinated,
  neutered,
  className,
}: PetBadgesProps) {
  const getAnimalVariant = (animal: string) => {
    switch (animal.toLowerCase()) {
      case "gato":
        return "yellow";
      case "cachorro":
        return "lightBlue";
      default:
        return "secondary";
    }
  };

  const getGenderVariant = (gender: string) => {
    switch (gender.toLowerCase()) {
      case "macho":
        return "blue";
      case "fêmea":
        return "pink";
      default:
        return "secondary";
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex gap-2">
        {animal && (
          <CustomBadge variant={getAnimalVariant(animal)}>{animal}</CustomBadge>
        )}
        {gender && (
          <CustomBadge variant={getGenderVariant(gender)}>{gender}</CustomBadge>
        )}
      </div>

      {(age || size || breed) && (
        <div className="flex flex-wrap gap-2">
          {age && <CustomBadge variant="outline">{age}</CustomBadge>}
          {size && <CustomBadge variant="outline">{size}</CustomBadge>}
          {breed && <CustomBadge variant="outline">{breed}</CustomBadge>}
        </div>
      )}

      {(vaccinated || neutered) && (
        <div className="flex gap-2">
          {vaccinated && <CustomBadge variant="green">Vacinado</CustomBadge>}
          {neutered && <CustomBadge variant="green">Castrado</CustomBadge>}
        </div>
      )}
    </div>
  );
}
