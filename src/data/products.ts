export type ProductCategory =
  | 'Cakes'
  | 'Pastries & Cupcakes'
  | 'Bread & Buns'
  | 'Cookies & Biscuits'
  | 'Savoury Snacks'
  | 'Seasonal Treats';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  image: string;
  /** Optional price — leave empty to hide. */
  price?: string;
  featured?: boolean;
}

/**
 * Product data for Jai Punjab Bakery (demo concept).
 * Photos are illustrative stock imagery, NOT actual bakery photos.
 * Prices are intentionally unset until verified.
 */
export const products: Product[] = [
  {
    id: 'chocolate-truffle-cake',
    name: 'Chocolate Truffle Cake',
    description: 'Rich chocolate sponge layered with silky ganache.',
    category: 'Cakes',
    image:
      'https://images.pexels.com/photos/7381533/pexels-photo-7381533.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'chocolate-slice',
    name: 'Chocolate Pastry Slice',
    description: 'A decadent single-serve chocolate treat.',
    category: 'Pastries & Cupcakes',
    image:
      'https://images.pexels.com/photos/37857738/pexels-photo-37857738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'berry-cupcakes',
    name: 'Fresh Berry Cupcakes',
    description: 'Vanilla cupcakes topped with cream and fresh berries.',
    category: 'Pastries & Cupcakes',
    image:
      'https://images.pexels.com/photos/20677473/pexels-photo-20677473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'assorted-cookies',
    name: 'Assorted Cookies',
    description: 'A box of butter, chocolate-chip and jam cookies.',
    category: 'Cookies & Biscuits',
    image:
      'https://images.pexels.com/photos/37817590/pexels-photo-37817590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'artisan-bread',
    name: 'Fresh Artisan Bread',
    description: 'Hand-shaped loaves baked to a golden crust.',
    category: 'Bread & Buns',
    image:
      'https://images.pexels.com/photos/5567093/pexels-photo-5567093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'samosa',
    name: 'Punjabi Samosa',
    description: 'Crisp pastry filled with spiced potato and peas.',
    category: 'Savoury Snacks',
    image:
      'https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'chocolate-cake-cherry',
    name: 'Cherry Chocolate Cake',
    description: 'Moist chocolate cake crowned with cherries.',
    category: 'Cakes',
    image:
      'https://images.pexels.com/photos/7381533/pexels-photo-7381533.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'strawberry-cupcake',
    name: 'Strawberry Cream Cupcake',
    description: 'Cupcake with strawberry frosting and chocolate curls.',
    category: 'Pastries & Cupcakes',
    image:
      'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'vanilla-cupcake',
    name: 'Classic Vanilla Cupcake',
    description: 'Light vanilla sponge with a swirl of cream.',
    category: 'Pastries & Cupcakes',
    image:
      'https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'jam-cookies',
    name: 'Jam-Filled Cookies',
    description: 'Tender shortbread with a sweet fruit centre.',
    category: 'Cookies & Biscuits',
    image:
      'https://images.pexels.com/photos/5599465/pexels-photo-5599465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pistachio-biscuits',
    name: 'Pistachio Biscuits',
    description: 'Nutty, fragrant biscuits with a delicate crunch.',
    category: 'Cookies & Biscuits',
    image:
      'https://images.pexels.com/photos/38377150/pexels-photo-38377150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'artisan-tomato-bread',
    name: 'Tomato Herb Bread',
    description: 'Savoury loaf with sun-dried tomato and herbs.',
    category: 'Bread & Buns',
    image:
      'https://images.pexels.com/photos/14122639/pexels-photo-14122639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'homemade-bread',
    name: 'Country Loaf',
    description: 'Rustic bread with a chewy, open crumb.',
    category: 'Bread & Buns',
    image:
      'https://images.pexels.com/photos/18647862/pexels-photo-18647862.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'cinnamon-rolls',
    name: 'Cinnamon Buns',
    description: 'Soft, swirled buns with cinnamon and pecans.',
    category: 'Seasonal Treats',
    image:
      'https://images.pexels.com/photos/8651023/pexels-photo-8651023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'chocolate-swirl-pastry',
    name: 'Chocolate Swirl Puff',
    description: 'Flaky puff pastry with a chocolate twist.',
    category: 'Savoury Snacks',
    image:
      'https://images.pexels.com/photos/27819874/pexels-photo-27819874.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'stuffed-puff',
    name: 'Stuffed Puff Pastry',
    description: 'Golden, flaky pastry with a savoury filling.',
    category: 'Savoury Snacks',
    image:
      'https://images.pexels.com/photos/29185236/pexels-photo-29185236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'berry-tart',
    name: 'Mixed Berry Tart',
    description: 'Buttery tart shell with fresh berries and custard.',
    category: 'Pastries & Cupcakes',
    image:
      'https://images.pexels.com/photos/2693448/pexels-photo-2693448.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'berry-pie',
    name: 'Strawberry Berry Pie',
    description: 'Seasonal pie filled with fresh strawberries.',
    category: 'Seasonal Treats',
    image:
      'https://images.pexels.com/photos/7368045/pexels-photo-7368045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const productCategories: ('All Products' | ProductCategory)[] = [
  'All Products',
  'Cakes',
  'Pastries & Cupcakes',
  'Bread & Buns',
  'Cookies & Biscuits',
  'Savoury Snacks',
  'Seasonal Treats',
];

/**
 * Celebration cake showcase — illustrative concepts only.
 */
export interface CelebrationCake {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const celebrationCakes: CelebrationCake[] = [
  {
    id: 'birthday-cake',
    name: 'Birthday Cakes',
    description:
      'Bright, joyful cakes for milestone birthdays and celebrations.',
    image:
      'https://images.pexels.com/photos/32191355/pexels-photo-32191355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cakes',
    description: 'Deep, indulgent chocolate cakes for the true cocoa lover.',
    image:
      'https://images.pexels.com/photos/37418888/pexels-photo-37418888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'floral-cake',
    name: 'Floral Cakes',
    description: 'Elegant cakes decorated with delicate floral details.',
    image:
      'https://images.pexels.com/photos/6363069/pexels-photo-6363069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'anniversary-cake',
    name: 'Anniversary Cakes',
    description: 'Refined, tiered designs for anniversaries and milestones.',
    image:
      'https://images.pexels.com/photos/33756083/pexels-photo-33756083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

/**
 * Gallery images — a mix of cakes, pastries, bread and savoury items.
 */
export interface GalleryImage {
  src: string;
  alt: string;
  span: 'wide' | 'tall' | 'normal';
}

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/7405059/pexels-photo-7405059.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Assorted pastries and breads in a bakery display case',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/20677473/pexels-photo-20677473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Colourful cupcakes topped with raspberries and blueberries',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/5567093/pexels-photo-5567093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Rustic loaf of bread on a wooden board',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/32191353/pexels-photo-32191353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Festive birthday cake with colourful icing',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/27819874/pexels-photo-27819874.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Chocolate swirl puff pastries fresh from the oven',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/37817590/pexels-photo-37817590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Circular arrangement of assorted cookies',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Punjabi samosas served with chutney and lime',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/2693448/pexels-photo-2693448.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Mixed berry tart with a golden crust',
    span: 'normal',
  },
];
