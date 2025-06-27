"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface Pet {
  id: string;
  name: string;
  type: string;
  gender: string;
  age: string;
  size: string;
  breed: string;
  description: string;
  location: string;
  addedDate: string;
  daysPosted: number;
  vaccinated: boolean;
  neutered: boolean;
  image: string;
  phone: string;
  whatsapp: string;
}

export const usePetDetailsController = () => {
  const { id } = useParams<{ id: string }>();
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const mockPetData: Pet = {
          id: id || "",
          name: "Pereirinha",
          type: "Gato",
          gender: "Macho",
          age: "2 anos de idade",
          size: "Pequeno porte",
          breed: "Raça Ocicat",
          description:
            "Sou uma gatinho muito carinhoso e brincalhão! Adoro crianças e me dou super bem com outros animais. Estou procurando uma família que me dê muito amor e carinho. Sou muito dócil e gosto de fazer companhia. Que tal me dar uma chance? 🐾",
          location: "Crateús - CE",
          addedDate: "14/01/2025",
          daysPosted: 30,
          vaccinated: true,
          neutered: true,
          image: "/images/pet-sample.png",
          phone: "(85) 99999-9999",
          whatsapp: "5585999999999",
        };

        setPet(mockPetData);
      } catch (error) {
        console.error("Erro ao buscar dados do pet:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPetData();
    }
  }, [id]);

  const handleFavorite = () => {
    if (!isLoggedIn) return;
    setIsFavorited(!isFavorited);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Adote o ${pet?.name}`,
        text: pet?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleContact = (type: "phone" | "whatsapp") => {
    if (!isLoggedIn) return;

    if (type === "phone") {
      window.open(`tel:${pet?.phone}`);
    } else {
      window.open(`https://wa.me/${pet?.whatsapp}`);
    }
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return {
    pet,
    loading,
    isLoggedIn,
    isFavorited,
    handleFavorite,
    handleShare,
    handleContact,
    toggleLogin,
  };
};
