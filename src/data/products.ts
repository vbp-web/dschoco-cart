export interface ProductOption {
  size: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  options?: ProductOption[];
  price?: number;
  popular?: boolean;
}

export const categories = [
  "Kunafa Special",
  "Classic Chocolate Bars",
  "Signature Blends",
  "Inspired Bars",
  "Premium Chocolate",
  "Special Bar",
  "Filling Chocolates",
];

export const products: Product[] = [
  // Kunafa Special
  {
    id: "kunafa-pista",
    name: "Pista Kunafa",
    category: "Kunafa Special",
    description: "Crispy kunafa filled with rich pistachio cream",
    image: "/placeholder.svg",
    options: [
      { size: "Small", price: 79 },
      { size: "Medium", price: 279 },
      { size: "Large", price: 299 },
    ],
    popular: true,
  },
  {
    id: "kunafa-biscoff",
    name: "Biscoff Kunafa",
    category: "Kunafa Special",
    description: "Decadent kunafa with creamy Biscoff filling",
    image: "/placeholder.svg",
    options: [
      { size: "Medium", price: 349 },
      { size: "Large", price: 599 },
    ],
    popular: true,
  },

  // Classic Chocolate Bars
  {
    id: "dark-chocolate",
    name: "Plain Dark Chocolate Bar",
    category: "Classic Chocolate Bars",
    description: "Pure, intense dark chocolate experience",
    image: "/placeholder.svg",
    options: [
      { size: "Small", price: 30 },
      { size: "Medium", price: 70 },
      { size: "Large", price: 100 },
    ],
  },
  {
    id: "milk-chocolate",
    name: "Plain Milk Chocolate Bar",
    category: "Classic Chocolate Bars",
    description: "Smooth and creamy milk chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "Small", price: 35 },
      { size: "Medium", price: 75 },
      { size: "Large", price: 105 },
    ],
  },
  {
    id: "white-chocolate",
    name: "Plain White Chocolate Bar",
    category: "Classic Chocolate Bars",
    description: "Sweet and velvety white chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "Small", price: 40 },
      { size: "Medium", price: 85 },
      { size: "Large", price: 120 },
    ],
  },

  // Signature Blends
  {
    id: "marvel-double",
    name: "Marvel Double",
    category: "Signature Blends",
    description: "A marvelous blend of chocolate perfection",
    image: "/placeholder.svg",
    options: [
      { size: "Medium", price: 139 },
      { size: "Large", price: 210 },
    ],
    popular: true,
  },
  {
    id: "dark-milk",
    name: "Dark+Milk",
    category: "Signature Blends",
    description: "The perfect harmony of dark and milk chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "Medium", price: 149 },
      { size: "Large", price: 219 },
    ],
  },
  {
    id: "milk-white",
    name: "Milk+White",
    category: "Signature Blends",
    description: "Creamy fusion of milk and white chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "Medium", price: 139 },
      { size: "Large", price: 210 },
    ],
  },
  {
    id: "white-dark",
    name: "White+Dark",
    category: "Signature Blends",
    description: "Contrasting flavors in perfect balance",
    image: "/placeholder.svg",
    price: 149,
  },
  {
    id: "bubbly",
    name: "Bubbly",
    category: "Signature Blends",
    description: "Light and airy chocolate delight",
    image: "/placeholder.svg",
    price: 149,
  },
  {
    id: "heart-shape",
    name: "Heart Shape",
    category: "Signature Blends",
    description: "Share the love with our heart-shaped chocolate",
    image: "/placeholder.svg",
    price: 149,
  },

  // Inspired Bars
  {
    id: "bounty-bar",
    name: "Bounty Bar",
    category: "Inspired Bars",
    description: "Coconut paradise wrapped in chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "2 Pcs", price: 130 },
      { size: "5 Pcs", price: 249 },
    ],
  },
  {
    id: "pan-chocolate",
    name: "Pan Chocolate",
    category: "Inspired Bars",
    description: "Traditional pan flavors meet chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "3 Pcs", price: 100 },
      { size: "1 Pc", price: 150 },
    ],
  },
  {
    id: "crazy-crunch",
    name: "Crazy Crunch",
    category: "Inspired Bars",
    description: "Irresistible crunch in every bite",
    image: "/placeholder.svg",
    options: [
      { size: "3 Pcs", price: 100 },
      { size: "1 Pc", price: 150 },
    ],
  },
  {
    id: "cornflakes-rocks",
    name: "Cornflakes Rocks",
    category: "Inspired Bars",
    description: "Crispy cornflakes clusters in chocolate",
    image: "/placeholder.svg",
    options: [{ size: "2 Pcs", price: 50 }],
  },
  {
    id: "chocolate-nutty-rock",
    name: "Chocolate Nutty Rock",
    category: "Inspired Bars",
    description: "Crunchy nuts in rich chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "Small", price: 120 },
      { size: "Medium", price: 190 },
    ],
  },

  // Premium Chocolate
  {
    id: "truffle-chocolate",
    name: "Truffle Chocolate",
    category: "Premium Chocolate",
    description: "Luxurious handmade chocolate truffles",
    image: "/placeholder.svg",
    options: [
      { size: "3 Pcs", price: 179 },
      { size: "5 Pcs", price: 249 },
    ],
    popular: true,
  },
  {
    id: "ferrao-rocher",
    name: "Ferrao Rocher Chocolate Bar",
    category: "Premium Chocolate",
    description: "Premium hazelnut chocolate experience",
    image: "/placeholder.svg",
    price: 249,
    popular: true,
  },
  {
    id: "coated-nuts",
    name: "Coated Nuts",
    category: "Premium Chocolate",
    description: "Caramelised almonds, raisins, and cashews (50gm)",
    image: "/placeholder.svg",
    price: 160,
  },
  {
    id: "roasted-almond",
    name: "Roasted Almond Chocolate Bar",
    category: "Premium Chocolate",
    description: "Crunchy roasted almonds in smooth chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "Medium", price: 99 },
      { size: "Large", price: 210 },
    ],
  },
  {
    id: "cashew-crunch",
    name: "Cashew Crunch Chocolate Bar",
    category: "Premium Chocolate",
    description: "Premium cashews with rich chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "Medium", price: 130 },
      { size: "Large", price: 210 },
    ],
  },
  {
    id: "hazelnut",
    name: "Hazelnut Chocolate Bar",
    category: "Premium Chocolate",
    description: "Smooth hazelnut chocolate perfection",
    image: "/placeholder.svg",
    options: [
      { size: "Medium", price: 130 },
      { size: "Large", price: 210 },
    ],
  },
  {
    id: "butterscotch",
    name: "Butterscotch Chocolate Bar",
    category: "Premium Chocolate",
    description: "Sweet butterscotch meets chocolate",
    image: "/placeholder.svg",
    options: [{ size: "Medium", price: 130 }],
  },
  {
    id: "exotic-bites",
    name: "Exotic Chocolate Bites",
    category: "Premium Chocolate",
    description: "White chocolate with delicate rose petals (6 Pcs)",
    image: "/placeholder.svg",
    price: 150,
  },

  // Special Bar
  {
    id: "nutty-temptation",
    name: "Nutty Temptation",
    category: "Special Bar",
    description: "An irresistible blend of nuts and chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "Small", price: 140 },
      { size: "Medium", price: 209 },
    ],
  },
  {
    id: "oreo-crunch",
    name: "Oreo Crunch Chocolate Bar",
    category: "Special Bar",
    description: "Cookies and cream chocolate delight",
    image: "/placeholder.svg",
    options: [
      { size: "Small", price: 130 },
      { size: "Large", price: 210 },
    ],
  },
  {
    id: "mixed-dryfruit",
    name: "Mixed Dryfruit Chocolate Bar",
    category: "Special Bar",
    description: "Premium dry fruits in rich chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "Small", price: 150 },
      { size: "Medium", price: 199 },
    ],
  },
  {
    id: "soft-jelly",
    name: "Soft Jelly Centered Chocolate Bar",
    category: "Special Bar",
    description: "Soft jelly center wrapped in chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "6 Pcs", price: 150 },
      { size: "Bar", price: 199 },
    ],
  },
  {
    id: "wafer",
    name: "Wafer Chocolate Bar",
    category: "Special Bar",
    description: "Crispy wafer layers in chocolate",
    image: "/placeholder.svg",
    options: [
      { size: "Medium", price: 120 },
      { size: "Large", price: 170 },
    ],
  },
  {
    id: "choco-pop",
    name: "Choco Pop Lollipop",
    category: "Special Bar",
    description: "Fun chocolate lollipop treat",
    image: "/placeholder.svg",
    price: 60,
  },
  {
    id: "golden-bite",
    name: "Golden Bite Caramelised Choco",
    category: "Special Bar",
    description: "Luxurious caramelised chocolate",
    image: "/placeholder.svg",
    price: 140,
  },
  {
    id: "proti-bar",
    name: "Proti Bar (Sugar Free)",
    category: "Special Bar",
    description: "Guilt-free sugar-free chocolate bar",
    image: "/placeholder.svg",
    price: 170,
  },
  {
    id: "puffed-quinoa",
    name: "Puffed Quinoa & Pistachio Bars",
    category: "Special Bar",
    description: "Healthy quinoa and pistachio chocolate",
    image: "/placeholder.svg",
    price: 150,
  },

  // Filling Chocolates
  {
    id: "mango-filling",
    name: "Mango Filling",
    category: "Filling Chocolates",
    description: "Tropical mango cream in chocolate",
    image: "/placeholder.svg",
    price: 39,
  },
  {
    id: "honey-filling",
    name: "Honey Filling",
    category: "Filling Chocolates",
    description: "Sweet honey center in chocolate",
    image: "/placeholder.svg",
    price: 39,
  },
  {
    id: "nutella-filling",
    name: "Nutella Filling",
    category: "Filling Chocolates",
    description: "Creamy Nutella filled chocolate",
    image: "/placeholder.svg",
    price: 49,
  },
  {
    id: "rose-filling",
    name: "Rose Filling",
    category: "Filling Chocolates",
    description: "Delicate rose flavored chocolate",
    image: "/placeholder.svg",
    price: 39,
  },
];
