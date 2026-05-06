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
  { id: 1, name: "Оверсайз блейзер", image: "/images/baggy.webp", color: "#e8d5e8" },
  { id: 2, name: "Шёлковое мини платье", image: "/images/blouse.webp", color: "#f0e0ef" },
  { id: 3, name: "Широкие штаны", image: "/images/jeans.webp", color: "#d8d0e8" },
  { id: 4, name: "Кроп-топ", image: "/images/shirts.webp", color: "#f0d8ec" },
  { id: 5, name: "Кожаный жакет", image: "/images/blouse2.webp", color: "#ddd0d0" },
  { id: 6, name: "Юбка", image: "/images/jeans2.webp", color: "#f0e8f0" },
];

export const screens = ["signup", "loading", "pick", "summary", "home"] as const;
