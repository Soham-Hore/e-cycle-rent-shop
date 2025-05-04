export interface Cycle {
  id: number;
  name: string;
  price: number;
  rentPrice: number;
  image: string;
  category: string;
  features: string[];
  colors: string[];
  battery: string;
  range: string;
  maxSpeed: string;
  weight: string;
  description: string;
  bestseller?: boolean;
  isAvailable: boolean;
}

const cycles: Cycle[] = [
  {
    id: 1,
    name: "Urban Glide 7",
    price: 5000,
    rentPrice: 1500,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890",
    category: "city",
    features: ["Lightweight", "Removable Battery", "LED Lights"],
    colors: ["Black", "White", "Blue"],
    battery: "48V 10.4Ah Lithium-ion",
    range: "50-60 km",
    maxSpeed: "25 km/h",
    weight: "21 kg",
    description: "Perfect for city commutes with smart features like app connectivity and integrated lights. The Urban Glide 7 is designed for comfortable daily rides.",
    bestseller: true,
    isAvailable: true
  },
  {
    id: 2,
    name: "Mountain Explorer X5",
    price: 9000,
    rentPrice: 2000,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7",
    category: "mountain",
    features: ["Suspension Fork", "Disc Brakes", "Fat Tires"],
    colors: ["Red", "Green", "Black"],
    battery: "48V 14Ah Lithium-ion",
    range: "60-80 km",
    maxSpeed: "30 km/h",
    weight: "25 kg",
    description: "Conquer any terrain with the powerful Mountain Explorer X5. Features include hydraulic disc brakes and all-terrain tires for the ultimate outdoor adventure.",
    isAvailable: true
  },
  {
    id: 3,
    name: "Folding Commuter Pro",
    price: 15000,
    rentPrice: 1500,
    image: "https://images.unsplash.com/photo-1623216216626-f8bfd191552d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "folding",
    features: ["Foldable", "Compact", "Portable"],
    colors: ["Silver", "Black", "Yellow"],
    battery: "36V 8Ah Lithium-ion",
    range: "40-50 km",
    maxSpeed: "20 km/h",
    weight: "16 kg",
    description: "The ultimate portable solution for mixed-commute city dwellers. Folds in seconds and fits easily on public transport or in your car trunk.",
    bestseller: true,
    isAvailable: true
  },
  {
    id: 4,
    name: "Cruiser Deluxe",
    price: 25000,
    rentPrice: 1800,
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8",
    category: "cruiser",
    features: ["Comfortable Seat", "Upright Position", "Basket"],
    colors: ["Blue", "Teal", "Red"],
    battery: "48V 12Ah Lithium-ion",
    range: "55-65 km", 
    maxSpeed: "25 km/h",
    weight: "23 kg",
    description: "Experience ultimate comfort with the Cruiser Deluxe, featuring an ergonomic design and comfortable wide seat for leisurely rides.",
    isAvailable: true
  },
  {
    id: 5,
    name: "Speed Demon RS",
    price: 78000,
    rentPrice: 2500,
    image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a",
    category: "sport",
    features: ["High Performance", "Carbon Frame", "Racing Design"],
    colors: ["Red", "Black", "White"],
    battery: "52V 17Ah Lithium-ion",
    range: "70-90 km",
    maxSpeed: "45 km/h",
    weight: "19 kg",
    description: "For those who crave speed and performance. The Speed Demon RS features a lightweight carbon frame and powerful motor for thrilling rides.",
    isAvailable: true
  },
  {
    id: 6,
    name: "voltez",
    price: 85000,
    rentPrice: 2800,
    image: "https://images.unsplash.com/photo-1705333651164-c3a132317f2b?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cargo",
    features: ["Heavy Duty", "Cargo Space", "High Capacity"],
    colors: ["Black", "Green", "Orange"],
    battery: "48V 20Ah Lithium-ion",
    range: "60-70 km",
    maxSpeed: "25 km/h",
    weight: "32 kg",
    description: "Designed to carry everything you need. The perfect e-bike for deliveries, shopping trips, or family outings with its extended carrying capacity.",
    isAvailable: false
  },
  {
    id: 7,
    name: "Eco Urban Lite",
    price: 32000,
    rentPrice: 1200,
    image: "https://images.unsplash.com/photo-1570865116909-d358c47f1806?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "city",
    features: ["Lightweight", "Quick Charge", "LED Display"],
    colors: ["Gray", "Blue"],
    battery: "36V 7.8Ah Lithium-ion",
    range: "35-45 km",
    maxSpeed: "22 km/h",
    weight: "18 kg",
    description: "A budget-friendly city e-cycle with all the essentials for daily commuting and errands.",
    isAvailable: true
  },
  {
    id: 8,
    name: "Trail Blazer 2.0",
    price: 45000,
    rentPrice: 2300,
    image: "https://m.media-amazon.com/images/I/71Z6hewWHtL._AC_UF894,1000_QL80_.jpg",
    category: "mountain",
    features: ["Full Suspension", "Hydraulic Brakes", "Wide Tires"],
    colors: ["Black", "Orange"],
    battery: "48V 15Ah Lithium-ion",
    range: "65-85 km",
    maxSpeed: "32 km/h",
    weight: "27 kg",
    description: "Take on the toughest trails with the Trail Blazer 2.0, built for adventure and durability.",
    bestseller: true,
    isAvailable: true
  },
  {
    id: 9,
    name: "david putra 2000",
    price: 90000,
    rentPrice: 30000,
    image: "https://i.redd.it/cjw8e1eloo0d1.jpeg",
    category: "cargo",
    features: ["fantasy car", "2 Seat", "Sturdy Frame", "powerful engine"],
    colors: ["Red", "Black"],
    battery: "520V 180Ah nuclear powered",
    range: "80-800 km",
    maxSpeed: "250 km/h",
    weight: "380 kg",
    description: "Perfect for families and businesses, the Family Cargo XL offers unmatched space and safety.",
    isAvailable: false
  }
];

export default cycles;
