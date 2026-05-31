export interface ProductVariant {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;       // default price (200g)
  image: string;
  weight: string;      // default weight
  category: string;
  description: string;
  ingredients: string[];
  variants: ProductVariant[];
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Mango Pickle",
    price: 120,
    image: "/pickels/7bef52c0-e7d4-4ed4-87a6-dfe63f21d4d5.png",
    weight: "200g",
    category: "Mango Pickles",
    description: "Classic handcrafted mango pickle made from fresh raw mangoes with traditional Nilgiris spices. No added color, no preservatives.",
    ingredients: ["Raw Mango", "Red Chilli Powder", "Mustard Seeds", "Salt", "Gingelly Oil"],
    variants: [
      { weight: "200g", price: 120 },
      { weight: "500g", price: 270 },
    ],
  },
  {
    id: "p2",
    name: "Vadu Mango Pickle",
    price: 120,
    image: "/pickels/6b4b4d3c-1265-4970-b740-e18323020c4c.png",
    weight: "200g",
    category: "Mango Pickles",
    description: "Tender baby mangoes (Vadu Mangai) preserved whole in a rich spiced oil — a traditional Tamil Nadu specialty straight from Ooty.",
    ingredients: ["Baby Mango", "Mustard Seeds", "Red Chilli Powder", "Turmeric", "Salt", "Gingelly Oil"],
    variants: [
      { weight: "200g", price: 120 },
      { weight: "500g", price: 270 },
    ],
  },
  {
    id: "p3",
    name: "Raw Mango Rice Thokku",
    price: 120,
    image: "/pickels/a8eea341-fc8a-4aa9-9a18-4f99da46ecda.png",
    weight: "200g",
    category: "Mango Pickles",
    description: "A thick, deeply flavored mango thokku perfect for mixing into hot rice. Made with green mangoes, spices and gingelly oil.",
    ingredients: ["Raw Mango", "Red Chilli Powder", "Mustard Seeds", "Turmeric", "Salt", "Gingelly Oil"],
    variants: [
      { weight: "200g", price: 120 },
      { weight: "500g", price: 270 },
    ],
  },
  {
    id: "p4",
    name: "Tomato Thokku",
    price: 110,
    image: "/pickels/d85f552f-3264-417a-a356-b53462c59d49.png",
    weight: "200g",
    category: "Vegetable Pickles",
    description: "Slow-cooked ripe tomatoes blended with aromatic spices into a thick, tangy thokku. Versatile — pairs with rice, dosa, or parathas.",
    ingredients: ["Tomatoes", "Red Chilli Powder", "Mustard Seeds", "Garlic", "Salt", "Oil"],
    variants: [
      { weight: "200g", price: 110 },
      { weight: "500g", price: 250 },
    ],
  },
  {
    id: "p5",
    name: "Ooty Special Tree Tomato Thokku",
    price: 125,
    image: "/pickels/dfb8b144-0f8b-4b91-9518-3d76d14e087b.png",
    weight: "200g",
    category: "Vegetable Pickles",
    description: "A rare Ooty specialty made from locally grown tree tomatoes (Tamarillo). Uniquely tangy with a deep, rich flavor unlike any ordinary tomato pickle.",
    ingredients: ["Tree Tomatoes", "Red Chilli Powder", "Mustard Seeds", "Garlic", "Salt", "Gingelly Oil"],
    variants: [
      { weight: "200g", price: 125 },
      { weight: "500g", price: 280 },
    ],
  },
  {
    id: "p6",
    name: "Salad Onion Thokku",
    price: 110,
    image: "/pickels/0de03ed8-29ad-4d89-bdf9-647e5b170231.png",
    weight: "200g",
    category: "Vegetable Pickles",
    description: "Made with fresh Ooty salad onions sautéed with chillies and spices into a flavour-packed thokku. Best with curd rice or hot rotis.",
    ingredients: ["Salad Onions", "Red Chillies", "Mustard Seeds", "Curry Leaves", "Salt", "Oil"],
    variants: [
      { weight: "200g", price: 110 },
      { weight: "500g", price: 250 },
    ],
  },
  {
    id: "p7",
    name: "Ooty Garlic Pickle",
    price: 110,
    image: "/pickels/307e9045-6fa7-46be-8460-ba7c1ea09033.png",
    weight: "200g",
    category: "Vegetable Pickles",
    description: "Plump garlic cloves from the Nilgiris marinated in a fiery, aromatic spice blend. Rich in flavour and health benefits.",
    ingredients: ["Garlic Cloves", "Red Chilli Powder", "Mustard Seeds", "Tamarind", "Salt", "Gingelly Oil"],
    variants: [
      { weight: "200g", price: 110 },
      { weight: "500g", price: 250 },
    ],
  },
  {
    id: "p8",
    name: "Ginger Pickle",
    price: 120,
    image: "/pickels/008d08fb-7cb2-4bbf-91ee-0fa6ca4e5c6a.png",
    weight: "200g",
    category: "Vegetable Pickles",
    description: "Fresh ginger root from the Nilgiris hills pickled with a perfect balance of heat and tang. Great for digestion and absolutely delicious.",
    ingredients: ["Fresh Ginger", "Red Chilli Powder", "Mustard Seeds", "Tamarind", "Salt", "Gingelly Oil"],
    variants: [
      { weight: "200g", price: 120 },
      { weight: "500g", price: 270 },
    ],
  },
  {
    id: "p9",
    name: "Coriander Thokku",
    price: 115,
    image: "/pickels/4c504d2d-0879-4785-8b71-d81739b02a2c.png",
    weight: "200g",
    category: "Vegetable Pickles",
    description: "Fresh green coriander leaves ground and cooked into a deeply aromatic thokku. A beautiful burst of herb freshness with every spoonful.",
    ingredients: ["Coriander Leaves", "Green Chillies", "Garlic", "Tamarind", "Salt", "Oil"],
    variants: [
      { weight: "200g", price: 115 },
      { weight: "500g", price: 260 },
    ],
  },
  {
    id: "p10",
    name: "Wild Amla Pickle",
    price: 120,
    image: "/pickels/6ec408ca-8290-43b3-a289-33b400bf50b8.png",
    weight: "200g",
    category: "Vegetable Pickles",
    description: "Mountain gooseberries (Malai Nellikai) handpicked from the Nilgiris forests, pickled in traditional spices. Exceptionally rich in Vitamin C.",
    ingredients: ["Wild Amla", "Red Chilli Powder", "Mustard Seeds", "Turmeric", "Salt", "Gingelly Oil"],
    variants: [
      { weight: "200g", price: 120 },
      { weight: "500g", price: 270 },
    ],
  },
  {
    id: "p11",
    name: "Citron Pickle",
    price: 120,
    image: "/pickels/05fd1674-048c-4849-8b28-86b912e73dfe.png",
    weight: "200g",
    category: "Vegetable Pickles",
    description: "Aromatic citron (Naarthangai) pickle with a bold citrus punch. A rare traditional recipe that elevates any meal instantly.",
    ingredients: ["Citron", "Red Chilli Powder", "Mustard Seeds", "Fenugreek", "Salt", "Gingelly Oil"],
    variants: [
      { weight: "200g", price: 120 },
      { weight: "500g", price: 270 },
    ],
  },
  {
    id: "p12",
    name: "Pineapple Pickle",
    price: 125,
    image: "/pickels/109047dc-2f92-4a72-b49e-97286d56c31b.png",
    weight: "200g",
    category: "Vegetable Pickles",
    description: "A unique sweet-and-spicy Ooty specialty made with fresh pineapple. The tropical tang balanced with bold spices makes this totally irresistible.",
    ingredients: ["Pineapple", "Red Chilli Powder", "Mustard Seeds", "Turmeric", "Salt", "Oil"],
    variants: [
      { weight: "200g", price: 125 },
      { weight: "500g", price: 280 },
    ],
  },
  {
    id: "p13",
    name: "Lemon Rice Thokku",
    price: 115,
    image: "/pickels/dfa23c8f-6ee6-400e-9296-c864d7ed3549.png",
    weight: "200g",
    category: "Vegetable Pickles",
    description: "A zesty lemon-based thokku designed to mix into plain rice for an instant flavourful meal. Bright, tangy and utterly satisfying.",
    ingredients: ["Lemon", "Red Chilli Powder", "Mustard Seeds", "Turmeric", "Curry Leaves", "Salt", "Oil"],
    variants: [
      { weight: "200g", price: 115 },
      { weight: "500g", price: 260 },
    ],
  },
  {
    id: "p14",
    name: "Puliogare Rice Paste",
    price: 120,
    image: "/pickels/f8b1f328-d1e4-436c-83d9-b12bb46a03e7.png",
    weight: "200g",
    category: "Rice Pastes",
    description: "Traditional tamarind rice paste (Puliogare) made from a secret family recipe. Just mix with cooked rice for an authentic South Indian feast.",
    ingredients: ["Tamarind", "Peanuts", "Sesame Seeds", "Red Chillies", "Mustard Seeds", "Curry Leaves", "Salt", "Oil"],
    variants: [
      { weight: "200g", price: 120 },
      { weight: "500g", price: 270 },
    ],
  },
];
