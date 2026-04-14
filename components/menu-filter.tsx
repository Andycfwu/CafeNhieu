"use client";
import { drinkCategories, type DrinkCategory } from "@/data/menu";

type MenuFilterProps = {
  activeCategory: DrinkCategory;
  onSelect: (category: DrinkCategory) => void;
};

export function MenuFilter({ activeCategory, onSelect }: MenuFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {drinkCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button key={category} type="button" onClick={() => onSelect(category)} className={`rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${isActive ? "bg-sage-500 text-white shadow-[0_12px_30px_rgba(95,114,95,0.22)]" : "border border-rose-300/45 bg-white/80 text-sage-500 hover:border-rose-500 hover:text-rose-500"}`}>
            {category}
          </button>
        );
      })}
    </div>
  );
}
