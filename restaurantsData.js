// start of my code
// Hardcoded restaurant data
export const RESTAURANTS = [
  {
    title: "Joe's Gelato",
    tagline: "Desert, Ice cream, £££",
    eta: "10-30",
    imgUri: require("./assets/images/1.jpeg"),
    menu: [
      {
        title: "Classic Gelato",
        contents: [
          { title: "Vanilla Bean", price: "£4.50" },
          { title: "Rich Chocolate", price: "£4.50" },
          { title: "Strawberry Fresh", price: "£4.50" },
          { title: "Pistachio", price: "£5.00" },
          { title: "Hazelnut", price: "£5.00" },
        ],
      },
      {
        title: "Special Flavors",
        contents: [
          { title: "Salted Caramel", price: "£5.50" },
          { title: "Tiramisu", price: "£5.50" },
          { title: "Stracciatella", price: "£5.50" },
          { title: "Mint Chocolate Chip", price: "£5.50" },
          { title: "Amarena Cherry", price: "£5.50" },
        ],
      },
      {
        title: "Toppings & Extras",
        contents: [
          { title: "Chocolate Sprinkles", price: "£1.00" },
          { title: "Crushed Nuts", price: "£1.00" },
          { title: "Fresh Berries", price: "£1.50" },
          { title: "Whipped Cream", price: "£1.00" },
          { title: "Hot Fudge Sauce", price: "£1.50" },
        ],
      },
    ],
  },
  {
    title: "Joe's Diner",
    tagline: "American, burgers, ££",
    eta: "50+",
    imgUri: require("./assets/images/2.jpeg"),
    menu: [
      {
        title: "Burgers",
        contents: [
          { title: "Classic Cheeseburger", price: "£8.99" },
          { title: "Bacon Double Deluxe", price: "£10.99" },
          { title: "Mushroom Swiss Burger", price: "£9.99" },
          { title: "BBQ Ranch Burger", price: "£9.99" },
          { title: "Veggie Burger", price: "£8.99" },
        ],
      },
      {
        title: "Mains",
        contents: [
          { title: "Chicken & Waffles", price: "£11.99" },
          { title: "Classic Club Sandwich", price: "£8.99" },
          { title: "Philly Cheesesteak", price: "£10.99" },
          { title: "Buffalo Wings (12pc)", price: "£12.99" },
          { title: "Mac & Cheese", price: "£7.99" },
        ],
      },
      {
        title: "Sides & Drinks",
        contents: [
          { title: "Curly Fries", price: "£3.99" },
          { title: "Onion Rings", price: "£3.99" },
          { title: "Milkshake", price: "£4.99" },
          { title: "Coleslaw", price: "£2.99" },
          { title: "Soft Drinks", price: "£2.49" },
        ],
      },
    ],
  },
  {
    title: "Joe's Fine Dining",
    tagline: "French, steak, £££££",
    eta: "30-50",
    imgUri: require("./assets/images/3.jpeg"),
    menu: [
      {
        title: "Entrées",
        contents: [
          { title: "Escargots de Bourgogne", price: "£16.00" },
          { title: "Foie Gras au Torchon", price: "£24.00" },
          { title: "Soupe à l'Oignon", price: "£14.00" },
          { title: "Tartare de Saumon", price: "£18.00" },
          { title: "Salade Niçoise", price: "£15.00" },
        ],
      },
      {
        title: "Plats Principaux",
        contents: [
          { title: "Filet Mignon (8oz)", price: "£42.00" },
          { title: "Canard à l'Orange", price: "£38.00" },
          { title: "Bouillabaisse", price: "£36.00" },
          { title: "Côte de Boeuf", price: "£45.00" },
          { title: "Coq au Vin", price: "£32.00" },
        ],
      },
      {
        title: "Desserts",
        contents: [
          { title: "Crème Brûlée", price: "£12.00" },
          { title: "Tarte Tatin", price: "£14.00" },
          { title: "Mousse au Chocolat", price: "£11.00" },
          { title: "Profiteroles", price: "£13.00" },
          { title: "Soufflé au Chocolat", price: "£15.00" },
        ],
      },
    ],
  },
];
//end of my code