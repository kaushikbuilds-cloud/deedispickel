export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  weight: string;
  category: string;
  description: string;
  ingredients: string[];
}

export const products: Product[] = [
  { 
    id: "p1", 
    name: "Avakaya (Mango Pickle)", 
    price: 250.00, 
    image: "/product.png", 
    weight: "300g", 
    category: "Mango Pickles",
    description: "The crown jewel of Andhra cuisine. Our authentic Avakaya is made with sun-dried raw mangoes, freshly ground mustard seeds, and premium cold-pressed gingelly oil. It's fiery, tangy, and bursting with traditional flavor.",
    ingredients: ["Raw Mango", "Mustard Powder", "Red Chilli Powder", "Garlic", "Fenugreek", "Salt", "Gingelly Oil"]
  },
  { 
    id: "p2", 
    name: "Gongura Pickle", 
    price: 220.00, 
    image: "/product.png", 
    weight: "300g", 
    category: "Mixed Veg Pickles",
    description: "A tangy delight made from authentic sorrel leaves (Gongura). Known for its distinct sourness and rich iron content, this pickle is a staple in South Indian households. Best enjoyed with hot rice and ghee.",
    ingredients: ["Gongura Leaves", "Red Chillies", "Garlic", "Coriander Seeds", "Cumin", "Salt", "Groundnut Oil"]
  },
  { 
    id: "p3", 
    name: "Tomato Pickle", 
    price: 190.00, 
    image: "/product.png", 
    weight: "300g", 
    category: "Tomato Pickles",
    description: "Sweet, sour, and spicy! Made from ripe, juicy tomatoes slow-cooked to perfection with a blend of traditional spices. A versatile pickle that pairs wonderfully with rice, dosas, or parathas.",
    ingredients: ["Tomatoes", "Tamarind", "Red Chilli Powder", "Mustard Seeds", "Garlic", "Salt", "Oil"]
  },
  { 
    id: "p4", 
    name: "Lemon Pickle", 
    price: 180.00, 
    image: "/product.png", 
    weight: "300g", 
    category: "Lemon Pickles",
    description: "A classic favorite! Fresh lemons matured over weeks in their own juices and spices. This pickle is great for digestion and adds a refreshing zing to any meal.",
    ingredients: ["Lemons", "Red Chilli Powder", "Fenugreek", "Turmeric", "Salt", "Sesame Oil"]
  },
  { 
    id: "p5", 
    name: "Garlic Pickle", 
    price: 260.00, 
    image: "/product.png", 
    weight: "300g", 
    category: "Garlic Pickles",
    description: "For the garlic lovers! Hand-peeled garlic cloves marinated in a spicy, aromatic blend. It's pungent, flavorful, and incredibly healthy.",
    ingredients: ["Garlic Cloves", "Red Chilli Powder", "Mustard Seeds", "Tamarind Extract", "Salt", "Gingelly Oil"]
  },
  { 
    id: "p6", 
    name: "Ginger Pickle", 
    price: 240.00, 
    image: "/product.png", 
    weight: "300g", 
    category: "Mixed Veg Pickles",
    description: "A sweet and spicy treat (Allam Pachadi). Made with fresh ginger root and jaggery, this pickle is a brilliant balance of heat and sweetness. Perfect with breakfasts like Idli and Pesarattu.",
    ingredients: ["Fresh Ginger", "Jaggery", "Tamarind", "Red Chillies", "Salt", "Oil"]
  },
  { 
    id: "p7", 
    name: "Mixed Veg Pickle", 
    price: 210.00, 
    image: "/product.png", 
    weight: "300g", 
    category: "Mixed Veg Pickles",
    description: "A crunchy medley of fresh carrots, cauliflower, green chillies, and raw mango. Perfect for those who love variety and crunch in every bite.",
    ingredients: ["Carrot", "Cauliflower", "Green Chilli", "Mango", "Mustard Powder", "Salt", "Oil"]
  },
  { 
    id: "p8", 
    name: "Chicken Pickle", 
    price: 350.00, 
    image: "/product.png", 
    weight: "300g", 
    category: "Non-Veg Pickles",
    description: "Premium boneless chicken chunks marinated and deep-fried, then tossed in a rich, fiery masala base. A true delicacy for meat lovers.",
    ingredients: ["Boneless Chicken", "Ginger Garlic Paste", "Garam Masala", "Red Chilli Powder", "Lemon Juice", "Salt", "Groundnut Oil"]
  },
  { 
    id: "p9", 
    name: "Mutton Pickle", 
    price: 450.00, 
    image: "/product.png", 
    weight: "300g", 
    category: "Non-Veg Pickles",
    description: "Tender, high-quality mutton pieces slow-cooked in traditional spices until they melt in your mouth. Rich, spicy, and incredibly indulgent.",
    ingredients: ["Boneless Mutton", "Special Masala Blend", "Ginger Garlic Paste", "Red Chilli Powder", "Salt", "Oil"]
  },
  { 
    id: "p10", 
    name: "Prawn Pickle", 
    price: 400.00, 
    image: "/product.png", 
    weight: "300g", 
    category: "Non-Veg Pickles",
    description: "Fresh coastal prawns cleaned, fried, and preserved in a tangy, spicy masala. A coastal favorite that brings the taste of the sea to your plate.",
    ingredients: ["Fresh Prawns", "Turmeric", "Red Chilli Powder", "Coriander Powder", "Garlic", "Salt", "Oil"]
  },
];
