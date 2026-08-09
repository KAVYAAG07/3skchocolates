export interface ProductSize {
  weight: string; // e.g. "15g", "25g", "50g", "100g"
  priceInr: number;
  dimensions: string; // e.g. "3cm x 3cm"
  description: string;
}

export interface ChocolateProduct {
  id: string;
  name: string; // "Pistachio Kunafa Chocolate" or "Hazelnut Kunafa Chocolate"
  flavour: 'pistachio' | 'hazelnut';
  description: string;
  longDescription: string;
  image: string;
  accentColor: string; // for UI highlighting (e.g., emerald or amber)
  sizes: ProductSize[];
}

export interface CustomWrapperDesign {
  text: string;
  subtext: string;
  themeColor: 'black' | 'gold' | 'emerald' | 'burgundy' | 'navy';
  foilColor: 'gold' | 'silver' | 'rose-gold';
  pattern: 'plain' | 'damask' | 'geometric' | 'leaves';
  quantity: number;
  selectedSize: string;
  selectedFlavour: 'pistachio' | 'hazelnut' | 'assorted';
}

export interface B2BInquiryForm {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  interestType: 'wholesale' | 'cafe-supply' | 'corporate-gifting' | 'custom-recipe';
  estimatedQuantity: string;
  message: string;
}
