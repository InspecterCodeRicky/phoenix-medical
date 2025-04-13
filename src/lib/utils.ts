import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const cn = (...inputs: ClassValue[]) =>{
  return twMerge(clsx(inputs))
}

const getColorBadge = (status: string) => {
  return {
    'Répondu': "bg-green-500 bg-opacity-20 !text-green-600",
    "En attente": "bg-orange-500 bg-opacity-20 !text-orange-600",
    "Rejeté": "bg-red-500 bg-opacity-20 !text-red-600",
  }[status];
};

export {
  getColorBadge,
  cn
}

// @hello-pangea/dnd
