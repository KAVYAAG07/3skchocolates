import { ChocolateProduct } from './types';
import heroChocolate from "./assets/images/hero_chocolate_1783853146302.jpg";
import pistachioSizes from "./assets/images/pistachio_sizes_new_1785488478959.jpg";
import hazelnutKunafa from "./assets/images/hazelnut_kunafa_1783853175537.jpg";
import logo3sk from "./assets/images/logo_3sk_1783869391019.jpg";
import pistachioKunafaGallery from "./assets/images/pistachio_kunafa_gallery_1783946698595.jpg";
import hazelnutKunafaGallery from "./assets/images/hazelnut_kunafa_gallery_1783946496085.jpg";

export const WHATSAPP_NUMBER = '917296937881';

export const IMAGE_PATHS = {
  hero: heroChocolate,
  pistachio: pistachioKunafaGallery,
  hazelnut: hazelnutKunafaGallery,
  pistachioSizeChart: pistachioSizes,
  hazelnutSizeChart: pistachioSizes,
  logo: logo3sk,
  pistachioPure: pistachioKunafaGallery,
  hazelnutPure: hazelnutKunafaGallery
};

export const SIZES_DATA = [
  { weight: '15g', priceInr: 45, dimensions: '3cm x 3cm', description: 'Bite-sized luxury. Ideal for tasting.' },
  { weight: '25g', priceInr: 75, dimensions: '3.5cm x 8cm', description: 'Perfect snack size for quick cravings.' },
  { weight: '50g', priceInr: 150, dimensions: '6cm x 12.5cm', description: 'Generous mid-size bar to share or savour.' },
  { weight: '100g', priceInr: 300, dimensions: '7.5cm x 15cm', description: 'The signature grand bar. Pure indulgence.' }
];

export const CHOCOLATE_PRODUCTS: ChocolateProduct[] = [
  {
    id: 'pistachio-kunafa',
    name: '3SK Pistachio Kunafa Chocolate',
    flavour: 'pistachio',
    description: 'The Original Dubai Sensation: Crispy toasted kunafa pastry shredded and mixed with premium pistachio butter, encased in rich, silky milk chocolate.',
    longDescription: 'A masterpiece of textures and flavours. Our signature bar combines the crispy, golden crunch of toasted kunafa pastry with the rich, nutty creaminess of 100% pure pistachio b[...]',
    image: IMAGE_PATHS.pistachio,
    accentColor: 'emerald',
    sizes: SIZES_DATA
  },
  {
    id: 'hazelnut-kunafa',
    name: '3SK Hazelnut Kunafa Chocolate',
    flavour: 'hazelnut',
    description: 'Crispy toasted kunafa pastry combined with rich, creamy hazelnut filling, enrobed in our signature premium smooth milk chocolate.',
    longDescription: 'For the lovers of rich, chocolatey hazelnut spreads. We fold our perfectly golden, crispy kunafa pastry threads into a velvety, decadent hazelnut cream, then lock it inside o[...]',
    image: IMAGE_PATHS.hazelnut,
    accentColor: 'amber',
    sizes: SIZES_DATA
  }
];

export const INDIA_SHIPPING_INFO = {
  title: 'Pan-India Luxury Shipping',
  description: 'We pack all our kunafa chocolates with food-grade cooling gel packs and thermal insulated bags to ensure they arrive in pristine, perfect-to-melt condition, anywhere in India.',
  details: [
    { title: 'All India Delivery', text: 'Express shipping across Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, and all other states.' },
    { title: 'Temperature Controlled', text: 'Thermal bubble wraps and cooling packs protect against weather shifts during transit.' },
    { title: 'Real-time Tracking', text: 'Tracking details shared immediately upon dispatch via WhatsApp / SMS.' }
  ]
};
