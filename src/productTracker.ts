interface InventoryProductTracker {
  readonly _id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const Products: InventoryProductTracker[] = [
  {
    _id: 1,
    name: "Bags of Rice",
    price: 1200,
    inStock: true,
  },

  {
    _id: 2,
    name: "Gadgets",
    price: 800,
    inStock: false,
  },

  {
    _id: 3,
    name: "Clothings",
    price: 570,
    inStock: true,
  },
];

function getAvailableProducts(
  products: InventoryProductTracker[]
): InventoryProductTracker[] {
  return products.filter((items): boolean => items.inStock);
}

const availableProducts = getAvailableProducts(Products);
console.log(availableProducts);
