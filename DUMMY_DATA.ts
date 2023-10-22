export const menu = {
  appetizers: {
    name: "Appetizers",
    items: [
      { id: 1, name: "Yakko Tofu", price: 210 },
      { id: 2, name: "Hijiki", price: 210 },
      { id: 3, name: "Edamame", price: 220 },
      { id: 4, name: "Shrimp Gyoza", price: 220 },
      { id: 5, name: "Oshitashi", price: 330 },
      { id: 6, name: "Sunomono", price: 330 },
      { id: 7, name: "Uzaku", price: 440 },
      { id: 8, name: "Pepper Tuna Tataki", price: 540 },
      { id: 9, name: "Chicken Katsu", price: 450 },
      { id: 10, name: "Shrimp Tempura", price: 350 },
    ],
  },
  entrees: {
    name: "Entrées",
    items: [
      { id: 11, name: "Oyako Don", price: 1110 },
      { id: 12, name: "Gyu Don", price: 1110 },
      { id: 13, name: "Beef Negimaki", price: 1520 },
      { id: 14, name: "Chicken Teriyaki", price: 1220 },
      { id: 15, name: "Yosenabe Sukiyaki", price: 1230 },
      { id: 16, name: "Beef Sukiyaki", price: 2530 },
      { id: 17, name: "Nabeyako Udon", price: 1240 },
      { id: 18, name: "Chicken Soba", price: 1240 },
      { id: 19, name: "Sushi Combo", price: 1750 },
      { id: 20, name: "Sashimi Combo", price: 2050 },
    ],
  },
  sides: {
    name: "Sides",
    items: [
      { id: 21, name: "Kani Salad", price: 410 },
      { id: 22, name: "Seaweed Salad", price: 310 },
      { id: 23, name: "Nori Fries", price: 320 },
      { id: 24, name: "Miso Soup", price: 220 },
      { id: 25, name: "Tamagoyaki", price: 330 },
      { id: 26, name: "Kiriboshi Daikon", price: 230 },
      { id: 27, name: "Pickled Cucumber", price: 240 },
      { id: 28, name: "Yasai Itame", price: 340 },
      { id: 29, name: "Harumaki", price: 450 },
      { id: 30, name: "Nasu Dengaku", price: 450 },
    ],
  },
  beverages: {
    name: "Beverages",
    items: [
      { id: 31, name: "Sencha", price: 280 },
      { id: 32, name: "Konbucha", price: 350 },
      { id: 33, name: "Matcha", price: 450 },
      { id: 34, name: "Amazake", price: 440 },
      { id: 35, name: "Pokari Sweat, 500ml", price: 400 },
      { id: 36, name: "Fresh Fruit Juice", price: 250 },
      { id: 37, name: "Soft Drink, 250ml", price: 60 },
      { id: 38, name: "Local Water, 500ml", price: 20 },
      { id: 39, name: "Evian, 500ml", price: 200 },
      { id: 40, name: "Perrier, 750ml", price: 300 },
    ],
  },
};

export const reviews = [
  {
    id: 1,
    message:
      "We went there to celebrate our anniversary. The food, service, and the ambience were excellent and perfectly suitable to make it a special night.",
    name: "Yushra Maryam",
  },
  {
    id: 2,
    message:
      "I can't believe that I found a Japanese restaurant like this at the heart of Dhaka. It's surprisingly authentic.",
    name: "Zed Richards",
  },
  {
    id: 3,
    message:
      "Very rich and fresh. Authentically prepared. Well-balanced flavors. Lovely presentation.",
    name: "Zib Thornberry",
  },
  {
    id: 4,
    message:
      "My wife and I are from Kyoto, and Ukiyo is the only place in this country that makes her homesick. Authenticity is their game.",
    name: "Junichi Nakamura",
  },
  {
    id: 5,
    message:
      "I really, really like all of their teas. I can't find them anywhere else here. Also you could order only their appetizers and be happy.",
    name: "Md. Harun ar Rashid",
  },
  {
    id: 6,
    message:
      "Their menu's very healthy. I have yet to eat any item that wasn't delicious. This place is hard to beat.",
    name: "Rokyea Begum",
  },
  {
    id: 7,
    message:
      "Very good service. The food is fresh, and the waiters are well-behaved.",
    name: "Mohammed Kaikobad",
  },
  {
    id: 8,
    message:
      "Very good interior and food. Looking forward to them expanding their menu. I think my favorite item so far is their Kani Salad.",
    name: "Hamida Akter",
  },
];

export const hours = {
  weekdays: {
    days: {
      start: "Monday",
      end: "Thursday",
    },
    afternoon: {
      start: "11:00 AM",
      end: "3:00 PM",
    },
    evening: {
      start: "6:00 PM",
      end: "12:00 AM",
    },
  },
  weekends: {
    days: {
      start: "Friday",
      end: "Sunday",
    },
    afternoon: {
      start: "11:00 AM",
      end: "3:00 PM",
    },
    evening: {
      start: "6:00 PM",
      end: "2:00 AM",
    },
  },
};
