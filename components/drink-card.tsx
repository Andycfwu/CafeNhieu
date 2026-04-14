import Image from "next/image";
import type { Drink } from "@/data/menu";

export function DrinkCard({ drink }: { drink: Drink }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-rose-300/30 bg-white/82 shadow-[0_20px_55px_rgba(126,107,94,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(126,107,94,0.14)]">
      <div className="relative aspect-[5/4] overflow-hidden bg-cream-100">
        <Image src={drink.image} alt={drink.name} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-kicker mb-2">{drink.category}</p>
            <h3 className="font-heading text-3xl leading-none text-sage-500">{drink.name}</h3>
          </div>
          <p className="font-heading text-3xl text-rose-500">{drink.price}</p>
        </div>
        <p className="text-base leading-7 text-sage-500/80">{drink.description}</p>
        <div className="flex flex-wrap gap-2">
          {drink.ingredients.map((ingredient) => <span key={ingredient} className="rounded-full border border-sage-300/55 bg-sage-200/30 px-3 py-1.5 text-sm capitalize text-sage-500">{ingredient}</span>)}
        </div>
      </div>
    </article>
  );
}
