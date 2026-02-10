/* NeoGadgetHubPro – Ultra-Premium Gadgets Data (2025–2026) */

const GADGETS = [

/* ================= SMARTPHONES ================= */
{
  category: "Smartphones",
  items: [
    { brand: "Apple", model: "iPhone 16 Pro Max", year: 2025, price: 1399, storage: "512GB", chip: "A19 Pro", battery: "4700mAh", display: "6.9 OLED", os: "iOS 19" },
    { brand: "Samsung", model: "Galaxy S25 Ultra", year: 2026, price: 1299, storage: "512GB", chip: "Snapdragon 8 Gen 5", battery: "5200mAh", display: "6.8 AMOLED", os: "Android 15" },
    { brand: "Samsung", model: "Galaxy Z Fold 7", year: 2026, price: 1899, storage: "1TB", chip: "Snapdragon 8 Gen 5", battery: "4800mAh" },
    { brand: "OnePlus", model: "OnePlus 13 Pro", year: 2025, price: 999, storage: "256GB", chip: "Snapdragon 8 Gen 4", battery: "5400mAh" },
    { brand: "Vivo", model: "Vivo X300 Pro", year: 2026, price: 1099, storage: "512GB", chip: "Dimensity 9400", battery: "5500mAh" },
    { brand: "Google", model: "Pixel 10 Pro XL", year: 2026, price: 1099, storage: "256GB", chip: "Tensor G5", battery: "4800mAh" },
    { brand: "Infinix", model: "Zero Ultra 5G 2025", year: 2025, price: 499, storage: "256GB", chip: "Dimensity 920", battery: "5000mAh" },
    { brand: "Xiaomi", model: "Xiaomi 15 Ultra", year: 2025, price: 1199, storage: "512GB", chip: "Snapdragon 8 Gen 4", battery: "5300mAh" }
  ]
},

/* ================= LAPTOPS ================= */
{
  category: "Laptops",
  items: [
    { brand: "Apple", model: "MacBook Pro M4 Max", year: 2026, price: 3499, ram: "64GB", storage: "2TB SSD", cpu: "Apple M4 Max", display: "Mini-LED" },
    { brand: "Dell", model: "XPS 16 (2026)", year: 2026, price: 2599, ram: "32GB", storage: "1TB SSD", cpu: "Intel Core Ultra 9" },
    { brand: "HP", model: "Spectre x360 AI", year: 2025, price: 2199, ram: "32GB", storage: "1TB SSD", cpu: "Intel Lunar Lake" },
    { brand: "Lenovo", model: "ThinkPad X1 Carbon Gen 13", year: 2026, price: 2399, ram: "32GB", storage: "1TB SSD", cpu: "Intel Core Ultra 9" },
    { brand: "Asus", model: "ROG Zephyrus G16 AI", year: 2025, price: 2899, ram: "32GB", storage: "2TB SSD", gpu: "RTX 5090" },
    { brand: "Microsoft", model: "Surface Laptop 7 AI+", year: 2025, price: 1999, ram: "32GB", storage: "1TB SSD" },
    { brand: "Acer", model: "Swift Edge AI", year: 2025, price: 1699, ram: "16GB", storage: "1TB SSD" }
  ]
},

/* ================= AI & ROBOTS ================= */
{
  category: "AI Devices & Robots",
  items: [
    { brand: "Tesla", model: "Optimus Gen 3", year: 2026, price: 19999, purpose: "Humanoid AI Robot" },
    { brand: "Figure AI", model: "Figure 02", year: 2025, price: 24999, purpose: "Industrial AI Robot" },
    { brand: "Samsung", model: "Ballie 2.0", year: 2025, price: 2999, purpose: "Home AI Assistant Robot" },
    { brand: "Amazon", model: "Astro Pro", year: 2025, price: 1999, purpose: "Smart Home Robot" },
    { brand: "Xiaomi", model: "CyberDog 3", year: 2026, price: 3499, purpose: "AI Robotic Pet" }
  ]
},

/* ================= SMART HOME ================= */
{
  category: "Smart Home",
  items: [
    { brand: "Amazon", model: "Echo AI Hub Max", year: 2025, price: 399 },
    { brand: "Google", model: "Nest Home AI+", year: 2026, price: 349 },
    { brand: "Apple", model: "HomePod Vision", year: 2025, price: 499 },
    { brand: "Samsung", model: "SmartThings AI Hub", year: 2025, price: 299 },
    { brand: "TP-Link", model: "Tapo AI Security System", year: 2026, price: 599 }
  ]
},

/* ================= WEARABLES ================= */
{
  category: "Wearables",
  items: [
    { brand: "Apple", model: "Apple Watch Ultra 3", year: 2025, price: 899 },
    { brand: "Samsung", model: "Galaxy Watch X", year: 2026, price: 799 },
    { brand: "Meta", model: "Meta AI Glasses Pro", year: 2025, price: 699 },
    { brand: "Xiaomi", model: "Mi Band 9 Pro", year: 2025, price: 199 }
  ]
}

];

/* EXPORT */
export default GADGETS;