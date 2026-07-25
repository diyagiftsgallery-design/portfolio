// ==========================================================
// DIYA GIFTS GALLERY — PRODUCT CATALOGUE DATA
// ==========================================================
// This is the ONLY file you need to touch to add, edit, or
// remove a product. products.html reads this file and builds
// the product grid automatically.
//
// TO ADD A PRODUCT:
//   Copy one object below and paste it inside the right
//   category block, then change name / img / alt.
//
// TO EDIT A PRODUCT:
//   Change its name / img / alt directly.
//
// TO REMOVE A PRODUCT:
//   Delete its whole { ... } line.
//
// FIELDS:
//   category — must be exactly one of the keys in
//              CATEGORY_META below:
//              faceless-portrait | frames | phone-covers |
//              hampers | accessories | unique-creations |
//              cards | portraits-sketch
//   name     — shown under the photo
//   img      — path to the product photo
//   alt      — accessible description (also used in the
//              WhatsApp enquiry message)
// ==========================================================

const CATEGORY_META = {
  'faceless-portrait': { label: 'Faceless Portrait',  icon: 'fa-user-large' },
  'frames':             { label: 'Frames',             icon: 'fa-images' },
  'phone-covers':       { label: 'Phone Covers',       icon: 'fa-mobile-screen-button' },
  'hampers':            { label: 'Hampers',            icon: 'fa-basket-shopping' },
  'accessories':        { label: 'Accessories',        icon: 'fa-gem' },
  'unique-creations':   { label: 'Unique Creations',   icon: 'fa-wand-magic-sparkles' },
  'cards':              { label: 'Cards',               icon: 'fa-envelope-open-text' },
  'portraits-sketch':   { label: 'Portraits/Sketch',   icon: 'fa-pen-nib' },
};

const PRODUCTS = [

  // ================= FACELESS PORTRAIT =================
  { category: 'faceless-portrait', name: 'Product 1',  img: 'product images/faceless portraits/fp1.jpeg',  alt: 'Custom Faceless Couple Portrait' },
  { category: 'faceless-portrait', name: 'Product 2',  img: 'product images/faceless portraits/fp2.jpeg',  alt: 'Faceless Family Portrait' },
  { category: 'faceless-portrait', name: 'Product 3',  img: 'product images/faceless portraits/fp3.jpeg',  alt: 'Faceless Line Art Print' },
  { category: 'faceless-portrait', name: 'Product 4',  img: 'product images/faceless portraits/fp4.jpeg',  alt: 'Faceless Silhouette Wall Art' },
  { category: 'faceless-portrait', name: 'Product 5',  img: 'product images/faceless portraits/fp5.jpeg',  alt: 'Faceless Silhouette Wall Art' },
  { category: 'faceless-portrait', name: 'Product 6',  img: 'product images/faceless portraits/fp6.jpeg',  alt: 'Faceless Silhouette Wall Art' },
  { category: 'faceless-portrait', name: 'Product 7',  img: 'product images/faceless portraits/fp7.jpeg',  alt: 'Faceless Silhouette Wall Art' },
  { category: 'faceless-portrait', name: 'Product 8',  img: 'product images/faceless portraits/fp8.jpeg',  alt: 'Faceless Silhouette Wall Art' },
  { category: 'faceless-portrait', name: 'Product 9',  img: 'product images/faceless portraits/fp9.jpeg',  alt: 'Faceless Silhouette Wall Art' },
  { category: 'faceless-portrait', name: 'Product 10', img: 'product images/faceless portraits/fp10.jpeg', alt: 'Faceless Silhouette Wall Art' },
  { category: 'faceless-portrait', name: 'Product 11', img: 'product images/faceless portraits/fp11.jpeg', alt: 'Faceless Silhouette Wall Art' },
  { category: 'faceless-portrait', name: 'Product 12', img: 'product images/faceless portraits/fp12.jpeg', alt: 'Faceless Silhouette Wall Art' },
  { category: 'faceless-portrait', name: 'Product 13', img: 'product images/faceless portraits/fp13.jpeg', alt: 'Faceless Silhouette Wall Art' },
  { category: 'faceless-portrait', name: 'Product 14', img: 'product images/faceless portraits/fp14.jpeg', alt: 'Faceless Silhouette Wall Art' },
  { category: 'faceless-portrait', name: 'Product 15', img: 'product images/faceless portraits/fp15.jpeg', alt: 'Faceless Silhouette Wall Art' },
  { category: 'faceless-portrait', name: 'Product 16', img: 'product images/faceless portraits/fp16.jpeg', alt: 'Faceless Silhouette Wall Art' },

  // ================= FRAMES =================
  { category: 'frames', name: 'Personalised Photo Frame', img: 'images/products/frames/1.jpg', alt: 'Personalised Photo Frame' },
  { category: 'frames', name: 'Wooden Collage Frame',      img: 'images/products/frames/2.jpg', alt: 'Wooden Collage Frame' },
  { category: 'frames', name: 'LED Light-Up Photo Frame',  img: 'images/products/frames/3.jpg', alt: 'LED Light-Up Photo Frame' },
  { category: 'frames', name: 'Vintage Ornate Frame',      img: 'images/products/frames/4.jpg', alt: 'Vintage Ornate Frame' },

  // ================= PHONE COVERS =================
  { category: 'phone-covers', name: 'Custom Name Phone Cover',     img: 'images/products/phone-covers/1.jpg', alt: 'Custom Name Phone Cover' },
  { category: 'phone-covers', name: 'Photo Print Phone Cover',     img: 'images/products/phone-covers/2.jpg', alt: 'Photo Print Phone Cover' },
  { category: 'phone-covers', name: 'Marble Pattern Phone Cover',  img: 'images/products/phone-covers/3.jpg', alt: 'Marble Pattern Phone Cover' },
  { category: 'phone-covers', name: 'Initial Monogram Phone Cover',img: 'images/products/phone-covers/4.jpg', alt: 'Initial Monogram Phone Cover' },

  // ================= HAMPERS =================
  { category: 'hampers', name: 'Birthday Gift Hamper',       img: 'images/products/hampers/1.jpg', alt: 'Birthday Gift Hamper' },
  { category: 'hampers', name: 'Wedding Welcome Hamper',     img: 'images/products/hampers/2.jpg', alt: 'Wedding Welcome Hamper' },
  { category: 'hampers', name: 'Diwali Festive Hamper',      img: 'images/products/hampers/3.jpg', alt: 'Diwali Festive Hamper' },
  { category: 'hampers', name: 'Chocolate & Candle Hamper',  img: 'images/products/hampers/4.jpg', alt: 'Chocolate and Candle Hamper' },

  // ================= ACCESSORIES =================
  { category: 'accessories', name: 'Personalised Keychain',     img: 'images/products/accessories/1.jpg', alt: 'Personalised Keychain' },
  { category: 'accessories', name: 'Engraved Wallet',           img: 'images/products/accessories/2.jpg', alt: 'Engraved Wallet' },
  { category: 'accessories', name: 'Custom Photo Coffee Mug',   img: 'images/products/accessories/3.jpg', alt: 'Custom Photo Coffee Mug' },
  { category: 'accessories', name: 'Photo Print Cushion',       img: 'images/products/accessories/4.jpg', alt: 'Photo Print Cushion' },

  // ================= UNIQUE CREATIONS =================
  { category: 'unique-creations', name: 'Resin Photo Art',            img: 'images/products/unique-creations/1.jpg', alt: 'Resin Photo Art' },
  { category: 'unique-creations', name: '3D Pop-up Card Box',         img: 'images/products/unique-creations/2.jpg', alt: '3D Pop-up Card Box' },
  { category: 'unique-creations', name: 'Custom Caricature Print',    img: 'images/products/unique-creations/3.jpg', alt: 'Custom Caricature Print' },
  { category: 'unique-creations', name: 'Personalised Photo Puzzle',  img: 'images/products/unique-creations/4.jpg', alt: 'Personalised Photo Puzzle' },

  // ================= CARDS =================
  { category: 'cards', name: 'Handmade Greeting Card',          img: 'images/products/cards/1.jpg', alt: 'Handmade Greeting Card' },
  { category: 'cards', name: 'Pop-up Birthday Card',            img: 'images/products/cards/2.jpg', alt: 'Pop-up Birthday Card' },
  { category: 'cards', name: 'Custom Wedding Invitation Card',  img: 'images/products/cards/3.jpg', alt: 'Custom Wedding Invitation Card' },
  { category: 'cards', name: 'Festive Diwali Card',             img: 'images/products/cards/4.jpg', alt: 'Festive Diwali Card' },

  // ================= PORTRAITS / SKETCH =================
  { category: 'portraits-sketch', name: 'Pencil Sketch Portrait', img: 'images/products/portraits-sketch/1.jpg', alt: 'Pencil Sketch Portrait' },
  { category: 'portraits-sketch', name: 'Charcoal Portrait',      img: 'images/products/portraits-sketch/2.jpg', alt: 'Charcoal Portrait' },
  { category: 'portraits-sketch', name: 'Watercolor Portrait',    img: 'images/products/portraits-sketch/3.jpg', alt: 'Watercolor Portrait' },
  { category: 'portraits-sketch', name: 'Couple Sketch Portrait', img: 'images/products/portraits-sketch/4.jpg', alt: 'Couple Sketch Portrait' },

];