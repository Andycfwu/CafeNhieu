"use client";
import { useState } from "react";
import { DrinkCard } from "@/components/drink-card";
import { MenuFilter } from "@/components/menu-filter";
import { SectionHeading } from "@/components/section-heading";
import { drinks, type DrinkCategory } from "@/data/menu";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<DrinkCategory>("All");
  const filteredDrinks = activeCategory === "All" ? drinks : drinks.filter((drink) => drink.category === activeCategory);
  return (
    <section id="menu" className="poster-shell rounded-[3rem] px-6 py-10 md:px-10 md:py-12">
      <SectionHeading eyebrow="Menu" title="The full cafe board." description="Browse the current lineup with roomy drink cards, soft category filters, and enough space for customers to read ingredients comfortably from a laptop screen." centered />
      <div className="mt-10">
        <MenuFilter activeCategory={activeCategory} onSelect={setActiveCategory} />
      </div>
      <div className="mt-10 grid gap-6 xl:grid-cols-2 2xl:grid-cols-3">
        {filteredDrinks.map((drink) => <DrinkCard key={drink.name} drink={drink} />)}
      </div>
    </section>
  );
}
