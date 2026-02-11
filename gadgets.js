/* NeoGadgetHubPro – Ultra-Premium Gadgets Data (2025–2026) */

const gadgets = [
  // Apple iPhones
  {
    name: "Apple iPhone 15",
    category: "smartphone",
    price: "$799",
    specs: "A16 Bionic, 128GB, 6.1\" OLED",
    year: 2025
  },
  {
    name: "Apple iPhone 15 Pro",
    category: "smartphone",
    price: "$999",
    specs: "A17 Bionic, 256GB, 6.1\" ProMotion",
    year: 2025
  },
  {
    name: "Apple iPhone 15 Pro Max",
    category: "smartphone",
    price: "$1,199",
    specs: "A17 Bionic, 512GB, 6.7\" ProMotion",
    year: 2025
  },
  {
    name: "Apple iPhone 16",
    category: "smartphone",
    price: "$849",
    specs: "A18 Bionic, 128GB, 6.1\" OLED",
    year: 2026
  },
  {
    name: "Apple iPhone 16 Pro",
    category: "smartphone",
    price: "$1,049",
    specs: "A18 Bionic, 256GB, 6.1\" ProMotion",
    year: 2026
  },
  {
    name: "Apple iPhone 16 Pro Max",
    category: "smartphone",
    price: "$1,249",
    specs: "A18 Bionic, 512GB, 6.7\" ProMotion",
    year: 2026
  },
  {
    name: "Apple iPhone 17 Pro Max",
    category: "smartphone",
    price: "$1,399",
    specs: "A19 Bionic, 512GB, 6.7\" ProMotion",
    year: 2026
  }
];// Continuing the gadgets array
gadgets.push(
  // Samsung Galaxy Series
  {
    name: "Samsung Galaxy S25",
    category: "smartphone",
    price: "$799",
    specs: "Snapdragon 8 Gen 3, 128GB, 50MP camera",
    year: 2025
  },
  {
    name: "Samsung Galaxy S25 Ultra",
    category: "smartphone",
    price: "$1,199",
    specs: "Snapdragon 8 Gen 3, 512GB, 200MP camera",
    year: 2025
  },
  {
    name: "Samsung Galaxy S26",
    category: "smartphone",
    price: "$899",
    specs: "New Gen 4 chip, 256GB, AI features",
    year: 2026
  },
  {
    name: "Samsung Galaxy S26 Ultra",
    category: "smartphone",
    price: "$1,299",
    specs: "Snapdragon Gen 4, 512GB, 200MP+ camera",
    year: 2026
  },
  {
    name: "Samsung Galaxy Z Flip 7",
    category: "smartphone",
    price: "$1,099",
    specs: "Foldable, 5G, 8GB RAM",
    year: 2026
  }
);// Adding more Samsung models to the gadgets array
gadgets.push(
  {
    name: "Samsung Galaxy Z Fold 6",
    category: "smartphone",
    price: "$1,499",
    specs: "Foldable, Snapdragon Gen 4, 512GB, 7.6\" Dynamic AMOLED",
    year: 2026
  },
  {
    name: "Samsung Galaxy A55",
    category: "smartphone",
    price: "$499",
    specs: "Mid-range, 128GB, 64MP camera",
    year: 2026
  },
  {
    name: "Samsung Galaxy Note 20",
    category: "smartphone",
    price: "$899",
    specs: "S Pen, Snapdragon 8 Gen 3, 256GB, 6.7\" AMOLED",
    year: 2025
  },
  {
    name: "Samsung Galaxy Z Flip 8",
    category: "smartphone",
    price: "$1,199",
    specs: "Foldable, 5G, 8GB RAM, 256GB",
    year: 2026
  },
  {// Adding OnePlus models to the gadgets array
gadgets.push(
  {
    name: "OnePlus 11",
    category: "smartphone",
    price: "$699",
    specs: "Snapdragon 8 Gen 2, 256GB, 6.7\" AMOLED",
    year: 2025
  },
  {
    name: "OnePlus 12",
    category: "smartphone",
    price: "$799",
    specs: "Snapdragon 8 Gen 4, 256GB, 120Hz display",
    year: 2026
  },
  {
    name: "OnePlus 13",
    category: "smartphone",
    price: "$899",
    specs: "Snapdragon 8 Gen 4, 12GB RAM, 256GB storage",
    year: 2026
  },
  {
    name: "OnePlus 14 Pro",
    category: "smartphone",
    price: "$999",
    specs: "Snapdragon 8 Gen 4, 120W fast charging, 256GB",
    year: 2026
  },
  {
    name: "OnePlus 14 Pro Max",
    category: "smartphone",
    price: "$1,099",
    specs: "Snapdragon 8 Gen 4, 512GB, 6.8\" AMOLED",
    year: 2026
  }
);// Adding Vivo models to the gadgets array
gadgets.push(
  {
    name: "Vivo X100 Pro",
    category: "smartphone",
    price: "$799",
    specs: "Dimensity 2000, 6.78\" AMOLED, 50MP main camera",
    year: 2025
  },
  {
    name: "Vivo X100 Ultra",
    category: "smartphone",
    price: "$999",
    specs: "Dimensity 2000+, 6.9\" AMOLED, flagship specs",
    year: 2026
  },
  {
    name: "Vivo X300 Pro",
    category: "smartphone",
    price: "$899",
    specs: "Next-gen AI imaging, 120Hz display",
    year: 2026
  },
  {
    name: "Vivo Y99 5G",
    category: "smartphone",
    price: "$399",
    specs: "Budget AI, 8GB RAM, 128GB storage",
    year: 2026
  },
  {
    name: "Vivo Z1 Elite",
    category: "smartphone",
    price: "$499",
    specs: "Midrange 5G, 48MP camera",
    year: 2026
  }
);// Adding laptop models to the gadgets array
gadgets.push(
  // Dell Laptops
  {
    name: "Dell XPS 15",
    category: "laptop",
    price: "$1,299",
    specs: "Intel i7, 16GB RAM, 512GB SSD, 15.6\" OLED",
    year: 2025
  },
  {
    name: "Dell Inspiron 15",
    category: "laptop",
    price: "$749",
    specs: "Intel i5, 8GB RAM, 256GB SSD, 15.6\" Full HD",
    year: 2025
  },

  // HP Laptops
  {
    name: "HP Spectre x360",
    category: "laptop",
    price: "$1,199",
    specs: "Intel i7, 16GB RAM, 512GB SSD, 13.3\" 4K AMOLED",
    year: 2026
  },
  {
    name: "HP Pavilion 14",
    category: "laptop",
    price: "$699",
    specs: "AMD Ryzen 5, 8GB RAM, 256GB SSD, 14\" Full HD",
    year: 2026
  },

  // Lenovo Laptops
  {
    name: "Lenovo ThinkPad X1 Carbon",
    category: "laptop",
    price: "$1,499",
    specs: "Intel i7, 16GB RAM, 1TB SSD, 14\" UHD",
    year: 2026
  },
  {
    name: "Lenovo IdeaPad 5",
    category: "laptop",
    price: "$599",
    specs: "AMD Ryzen 5, 8GB RAM, 256GB SSD, 15.6\" Full HD",
    year: 2026
  }
);// Adding AI devices to the gadgets array
gadgets.push(
  {
    name: "Amazon Echo AI",
    category: "AI device",
    price: "$99",
    specs: "Voice assistant, smart home integration, AI-powered",
    year: 2025
  },
  {
    name: "Google Nest Hub Max",
    category: "AI device",
    price: "$229",
    specs: "Smart display, Google Assistant, AI features",
    year: 2026
  },
  {
    name: "Apple HomePod AI",
    category: "AI device",
    price: "$299",
    specs: "Voice assistant, smart home hub, AI integration",
    year: 2026
  },
  {
    name: "Samsung SmartThings Hub",
    category: "AI device",
    price: "$149",
    specs: "Smart home automation, AI control, IoT integration",
    year: 2026
  },
  {
    name: "Sony AI Robot Assistant",
    category: "AI device",
    price: "$899",
    specs: "AI-powered personal assistant, home integration",
    year: 2026
  }
);
