import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbec',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieille Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Michelin Star',
    subtitle: 'Awarded for exceptional quality and consistency in our cuisine.',
  },
  {
    imgUrl: images.award01,
    title: 'Best New Restaurant',
    subtitle: 'Named "Best New Restaurant" by Food & Wine Magazine .',
  },
  {
    imgUrl: images.award05,
    title: 'Top Chef Award',
    subtitle: 'For our chef’s creativity, skill, and dedication to exceptional dishes.',
  },
  {
    imgUrl: images.award03,
    title: 'Gold Plate Award',
    subtitle: 'For excellence in food quality and service.',
  },
];

// Create an object with the data
const data = { wines, cocktails, awards };

// Export the object as the default export
export default data;
