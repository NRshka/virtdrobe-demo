import baggy from "./assets/baggy.webp";
import silkDress from "./assets/blouse.webp";
import widePants from "./assets/jeans.webp";
import cropTop from "./assets/shirts.webp";
import leatherJacket from "./assets/blouse2.webp";
import skirt from "./assets/jeans2.webp";

export const PINK = "#dd33d4";
export const PINK_LIGHT = "#f5d0f4";
export const BLACK = "#0a0a0a";
export const WHITE = "#ffffff";
export const GRAY = "#f2f2f2";

export interface ClothingItem {
  id: number;
  name: string;
  image: string;
  color: string;
}

export const clothes: ClothingItem[] = [
  { id: 1, name: "Оверсайз блейзер", image: baggy, color: "#e8d5e8" },
  { id: 2, name: "Шёлковое мини платье", image: silkDress, color: "#f0e0ef" },
  { id: 3, name: "Широкие штаны", image: widePants, color: "#d8d0e8" },
  { id: 4, name: "Кроп-топ", image: cropTop, color: "#f0d8ec" },
  { id: 5, name: "Кожаный жакет", image: leatherJacket, color: "#ddd0d0" },
  { id: 6, name: "Юбка", image: skirt, color: "#f0e8f0" },
];

export const screens = ["signup", "loading", "pick", "summary", "home"] as const;
