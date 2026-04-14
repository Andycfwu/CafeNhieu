export const drinkCategories = ["All", "Matcha", "Coffee", "Refreshers", "Soda"] as const;

export type DrinkCategory = (typeof drinkCategories)[number];

export type Drink = {
  name: string;
  price: string;
  category: Exclude<DrinkCategory, "All">;
  image: string;
  description: string;
  ingredients: string[];
};

export const drinks: Drink[] = [
  { name: "Honey Lavender Matcha Latte", price: "$6", category: "Matcha", image: "/drinks/honey-lavender-matcha.svg", description: "A soft floral matcha latte with mellow honey sweetness and a creamy finish.", ingredients: ["ceremonial matcha", "lavender syrup", "honey", "milk"] },
  { name: "Vanilla Matcha Latte with Lavender Cold Foam", price: "$6", category: "Matcha", image: "/drinks/vanilla-matcha-lavender-foam.svg", description: "Vanilla-kissed matcha topped with an airy lavender cold foam.", ingredients: ["matcha", "vanilla syrup", "lavender cold foam", "milk"] },
  { name: "Ube Cold Foam Macchiato", price: "$6", category: "Coffee", image: "/drinks/ube-macchiato.svg", description: "Espresso layered with sweet milk and a lilac ube cold foam crown.", ingredients: ["espresso", "milk", "ube cold foam", "vanilla"] },
  { name: "Blueberry Lemon Tart Latte", price: "$6", category: "Coffee", image: "/drinks/blueberry-lemon-latte.svg", description: "A dessert-like latte balancing blueberry, lemon zest, and silky espresso.", ingredients: ["espresso", "blueberry syrup", "lemon cream", "milk"] },
  { name: "Blueberry Lemon Tart Matcha Latte", price: "$6", category: "Matcha", image: "/drinks/blueberry-lemon-matcha.svg", description: "Bright blueberry and lemon folded into a green tea latte for a springy sip.", ingredients: ["matcha", "blueberry syrup", "lemon cream", "milk"] },
  { name: "Blueberry Lemonade", price: "$6", category: "Refreshers", image: "/drinks/blueberry-lemonade.svg", description: "A chilled lemonade splashed with juicy blueberry and a sparkling finish.", ingredients: ["blueberry puree", "lemonade", "sparkling water"] },
  { name: "Very Berry Hibiscus Refresher", price: "$6", category: "Refreshers", image: "/drinks/berry-hibiscus.svg", description: "Fruity hibiscus tea with berry notes and a vivid ruby color.", ingredients: ["hibiscus tea", "berry syrup", "strawberry pieces", "ice"] },
  { name: "Lavender Haze", price: "$5", category: "Soda", image: "/drinks/lavender-haze.svg", description: "A fizzy lavender soda with a cloudy floral glow and citrus snap.", ingredients: ["lavender syrup", "club soda", "lemon"] },
  { name: "Strawberry Sunrise", price: "$5", category: "Soda", image: "/drinks/strawberry-sunrise.svg", description: "Fresh strawberry soda layered with a citrusy sunrise gradient.", ingredients: ["strawberry syrup", "orange", "club soda"] }
];
