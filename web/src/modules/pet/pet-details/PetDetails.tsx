"use client";

import {
  Heart,
  Share2,
  MapPin,
  Calendar,
  Clock,
  Phone,
  MessageCircle,
} from "lucide-react";
import { usePetDetailsController } from "./pet-details-controller";
import { Button } from "@/common/components/ui/button";
import { Alert, AlertDescription } from "@/common/components/ui/alert";
import { PetBadges } from "@/common/components/ui/pet-badge";
import { CustomBadge } from "@/common/components/ui/custom-badge";

export const PetDetails = () => {
  const {
    pet,
    loading,
    isLoggedIn,
    isFavorited,
    handleShare,
    handleContact,
    toggleLogin,
    handleFavorite,
  } = usePetDetailsController();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando informações do pet...</p>
        </div>
      </div>
    );
  }

  if (!pet) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Pet não encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={toggleLogin}
          variant={isLoggedIn ? "default" : "outline"}
          size="sm"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="lg:hidden order-1">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {pet.name}
                </h1>
                <PetBadges animal={pet.type} gender={pet.gender} />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleFavorite}
                  disabled={!isLoggedIn}
                  className={`h-10 w-10 ${
                    isFavorited ? "text-red-500" : "text-gray-400"
                  } ${!isLoggedIn ? "opacity-50" : ""}`}
                >
                  <Heart
                    className={`h-6 w-6 ${isFavorited ? "fill-current" : ""}`}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleShare}
                  className="h-10 w-10"
                >
                  <Share2 className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden bg-white shadow-sm">
              <img
                src="https://www.petz.com.br/blog/wp-content/uploads/2017/07/gato02.jpg"
                alt={pet.name}
                className="object-cover w-full h-80 md:h-96 lg:h-[400px] transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <CustomBadge variant="alert" className="text-white">
                  ⏰ {pet.daysPosted} dias sem dono
                </CustomBadge>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 min-h-[200px] flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Características
              </h3>
              <div className="flex-1 flex items-start">
                <PetBadges
                  age={pet.age}
                  size={pet.size}
                  breed={pet.breed}
                  vaccinated={pet.vaccinated}
                  neutered={pet.neutered}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 order-3 lg:order-2">
            <div className="hidden lg:flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {pet.name}
                </h1>
                <PetBadges animal={pet.type} gender={pet.gender} />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleFavorite}
                  disabled={!isLoggedIn}
                  className={`h-12 w-12 ${
                    isFavorited ? "text-red-500" : "text-gray-400"
                  } ${!isLoggedIn ? "opacity-50" : ""}`}
                >
                  <Heart
                    className={`h-7 w-7 ${isFavorited ? "fill-current" : ""}`}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleShare}
                  className="h-12 w-12"
                >
                  <Share2 className="h-7 w-7" />
                </Button>
              </div>
            </div>

            <div className="border-l-4 border-rose-400 bg-white rounded-lg shadow-sm p-6 min-h-[300px] flex flex-col">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Sobre mim
              </h2>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {pet.description}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 min-h-[200px] flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Adoção
              </h3>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">{pet.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">Adicionado em {pet.addedDate}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">
                    Há {pet.daysPosted} dias à procura de uma família
                  </span>
                </div>
              </div>
            </div>

            {!isLoggedIn && (
              <Alert className="border-amber-200 bg-amber-50">
                <AlertDescription className="text-amber-800">
                  Você precisa estar logado para entrar em contato com o
                  responsável pelo pet.
                </AlertDescription>
              </Alert>
            )}

            <div className="flex gap-4">
              <Button
                onClick={() => handleContact("phone")}
                disabled={!isLoggedIn}
                className="flex-1 bg-blue-600 hover:bg-blue-700 h-14 text-lg font-medium"
              >
                <Phone className="h-5 w-5 mr-2" />
                Ligar Agora
              </Button>
              <Button
                onClick={() => handleContact("whatsapp")}
                disabled={!isLoggedIn}
                className="flex-1 bg-green-600 hover:bg-green-700 h-14 text-lg font-medium"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Whatsapp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
