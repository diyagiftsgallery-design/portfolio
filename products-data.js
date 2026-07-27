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
  { category: 'frames', name: 'Frame 1', img: 'product images/frames/f1.png', alt: 'Frame 1' },
  { category: 'frames', name: 'Frame 2', img: 'product images/frames/f2.png', alt: 'Frame 2' },
  { category: 'frames', name: 'Frame 3', img: 'product images/frames/f3.png', alt: 'Frame 3' },
  { category: 'frames', name: 'Frame 4', img: 'product images/frames/f4.png', alt: 'Frame 4' },
  { category: 'frames', name: 'Frame 5', img: 'product images/frames/f5.png', alt: 'Frame 5' },
  { category: 'frames', name: 'Frame 6', img: 'product images/frames/f6.jpeg', alt: 'Frame 6' },
  { category: 'frames', name: 'Frame 7', img: 'product images/frames/f7.jpeg', alt: 'Frame 7' },
  { category: 'frames', name: 'Frame 8', img: 'product images/frames/f8.jpeg', alt: 'Frame 8' },
  { category: 'frames', name: 'Frame 9', img: 'product images/frames/f9.jpeg', alt: 'Frame 9' },
  { category: 'frames', name: 'Frame 10', img: 'product images/frames/f10.jpeg', alt: 'Frame 10' },
  { category: 'frames', name: 'Frame 11', img: 'product images/frames/f11.jpeg', alt: 'Frame 11' },
  { category: 'frames', name: 'Frame 12', img: 'product images/frames/f12.png', alt: 'Frame 12' },

  // ================= PHONE COVERS =================
  { category: 'phone-covers', name: 'Phone Cover 1',  img: 'product images/phone covers/pc1.jpeg',  alt: 'Phone Cover 1' },
  { category: 'phone-covers', name: 'Phone Cover 2',  img: 'product images/phone covers/pc2.jpeg',  alt: 'Phone Cover 2' },
  { category: 'phone-covers', name: 'Phone Cover 3',  img: 'product images/phone covers/pc3.jpeg',  alt: 'Phone Cover 3' },
  { category: 'phone-covers', name: 'Phone Cover 4',  img: 'product images/phone covers/pc4.jpeg',  alt: 'Phone Cover 4' },
  { category: 'phone-covers', name: 'Phone Cover 5',  img: 'product images/phone covers/pc5.jpeg',  alt: 'Phone Cover 5' },
  { category: 'phone-covers', name: 'Phone Cover 6',  img: 'product images/phone covers/pc6.jpeg',  alt: 'Phone Cover 6' },
  { category: 'phone-covers', name: 'Phone Cover 7',  img: 'product images/phone covers/pc7.jpeg',  alt: 'Phone Cover 7' },
  { category: 'phone-covers', name: 'Phone Cover 8',  img: 'product images/phone covers/pc8.jpeg',  alt: 'Phone Cover 8' },
  { category: 'phone-covers', name: 'Phone Cover 9',  img: 'product images/phone covers/pc9.jpeg',  alt: 'Phone Cover 9' },
  { category: 'phone-covers', name: 'Phone Cover 10', img: 'product images/phone covers/pc10.png', alt: 'Phone Cover 10' },
  { category: 'phone-covers', name: 'Phone Cover 11', img: 'product images/phone covers/pc11.jpeg', alt: 'Phone Cover 11' },
  { category: 'phone-covers', name: 'Phone Cover 12', img: 'product images/phone covers/pc12.jpeg', alt: 'Phone Cover 12' },
  { category: 'phone-covers', name: 'Phone Cover 13', img: 'product images/phone covers/pc13.png', alt: 'Phone Cover 13' },

  // ================= HAMPERS =================
  { category: 'hampers', name: 'Hamper 1',  img: 'product images/hampers/h1.jpeg',  alt: 'Hamper 1' },
  { category: 'hampers', name: 'Hamper 2',  img: 'product images/hampers/h2.jpeg',  alt: 'Hamper 2' },
  { category: 'hampers', name: 'Hamper 3',  img: 'product images/hampers/h3.png',   alt: 'Hamper 3' },
  { category: 'hampers', name: 'Hamper 4',  img: 'product images/hampers/h4.jpeg',  alt: 'Hamper 4' },
  { category: 'hampers', name: 'Hamper 5',  img: 'product images/hampers/h5.jpeg',  alt: 'Hamper 5' },
  { category: 'hampers', name: 'Hamper 6',  img: 'product images/hampers/h6.png',   alt: 'Hamper 6' },
  { category: 'hampers', name: 'Hamper 7',  img: 'product images/hampers/h7.jpeg',  alt: 'Hamper 7' },
  { category: 'hampers', name: 'Hamper 8',  img: 'product images/hampers/h8.jpeg',  alt: 'Hamper 8' },
  { category: 'hampers', name: 'Hamper 9',  img: 'product images/hampers/h9.jpeg',  alt: 'Hamper 9' },
  { category: 'hampers', name: 'Hamper 10', img: 'product images/hampers/h10.png',  alt: 'Hamper 10' },
  { category: 'hampers', name: 'Hamper 11', img: 'product images/hampers/h11.jpeg', alt: 'Hamper 11' },
  { category: 'hampers', name: 'Hamper 12', img: 'product images/hampers/h12.jpeg', alt: 'Hamper 12' },
  { category: 'hampers', name: 'Hamper 13', img: 'product images/hampers/h13.jpg',  alt: 'Hamper 13' },
  { category: 'hampers', name: 'Hamper 14', img: 'product images/hampers/h14.jpeg', alt: 'Hamper 14' },

  // ================= ACCESSORIES =================
  { category: 'accessories', name: 'Accessories 1',  img: 'product images/accessories/a1.jpeg', alt: 'Accessories 1' },
  { category: 'accessories', name: 'Accessories 2',  img: 'product images/accessories/a2.png',  alt: 'Accessories 2' },
  { category: 'accessories', name: 'Accessories 3',  img: 'product images/accessories/a3.png',  alt: 'Accessories 3' },
  { category: 'accessories', name: 'Accessories 4',  img: 'product images/accessories/a4.jpeg', alt: 'Accessories 4' },
  { category: 'accessories', name: 'Accessories 5',  img: 'product images/accessories/a5.png',  alt: 'Accessories 5' },
  { category: 'accessories', name: 'Accessories 6',  img: 'product images/accessories/a6.jpeg', alt: 'Accessories 6' },
  { category: 'accessories', name: 'Accessories 7',  img: 'product images/accessories/a7.jpeg', alt: 'Accessories 7' },
  { category: 'accessories', name: 'Accessories 8',  img: 'product images/accessories/a8.jpeg', alt: 'Accessories 8' },
  { category: 'accessories', name: 'Accessories 9',  img: 'product images/accessories/a9.jpg',  alt: 'Accessories 9' },
  { category: 'accessories', name: 'Accessories 10', img: 'product images/accessories/a10.png', alt: 'Accessories 10' },
  { category: 'accessories', name: 'Accessories 11', img: 'product images/accessories/a11.jpg', alt: 'Accessories 11' },
  { category: 'accessories', name: 'Accessories 12', img: 'product images/accessories/a12.jpeg', alt: 'Accessories 12' },
  { category: 'accessories', name: 'Accessories 13', img: 'product images/accessories/a13.jpeg', alt: 'Accessories 13' },
  { category: 'accessories', name: 'Accessories 14', img: 'product images/accessories/a14.jpg', alt: 'Accessories 14' },
  { category: 'accessories', name: 'Accessories 15', img: 'product images/accessories/a15.jpeg', alt: 'Accessories 15' },
  { category: 'accessories', name: 'Accessories 16', img: 'product images/accessories/a16.jpg', alt: 'Accessories 16' },
  { category: 'accessories', name: 'Accessories 17', img: 'product images/accessories/a17.jpeg', alt: 'Accessories 17' },
  { category: 'accessories', name: 'Accessories 20', img: 'product images/accessories/a20.jpg', alt: 'Accessories 20' },
  { category: 'accessories', name: 'Accessories 21', img: 'product images/accessories/a21.jpg', alt: 'Accessories 21' },
  { category: 'accessories', name: 'Accessories 22', img: 'product images/accessories/a22.jpeg', alt: 'Accessories 22' },
  { category: 'accessories', name: 'Accessories 23', img: 'product images/accessories/a23.jpg', alt: 'Accessories 23' },
  { category: 'accessories', name: 'Accessories 24', img: 'product images/accessories/a24.jpg', alt: 'Accessories 24' },
  { category: 'accessories', name: 'Accessories 25', img: 'product images/accessories/a25.jpg', alt: 'Accessories 25' },
  { category: 'accessories', name: 'Accessories 26', img: 'product images/accessories/a26.jpg', alt: 'Accessories 26' },


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
  { category: 'portraits-sketch', name: 'Portrait & Sketch 1',  img: 'product images/portraits & sketches/ps1.jpeg',  alt: 'Portrait & Sketch 1' },
  { category: 'portraits-sketch', name: 'Portrait & Sketch 2',  img: 'product images/portraits & sketches/ps2.jpeg',  alt: 'Portrait & Sketch 2' },
  { category: 'portraits-sketch', name: 'Portrait & Sketch 3',  img: 'product images/portraits & sketches/ps3.jpeg',  alt: 'Portrait & Sketch 3' },
  { category: 'portraits-sketch', name: 'Portrait & Sketch 4',  img: 'product images/portraits & sketches/ps4.png',   alt: 'Portrait & Sketch 4' },
  { category: 'portraits-sketch', name: 'Portrait & Sketch 5',  img: 'product images/portraits & sketches/ps5.png',   alt: 'Portrait & Sketch 5' },
  { category: 'portraits-sketch', name: 'Portrait & Sketch 6',  img: 'product images/portraits & sketches/ps6.png',   alt: 'Portrait & Sketch 6' },
  { category: 'portraits-sketch', name: 'Portrait & Sketch 7',  img: 'product images/portraits & sketches/ps7.jpg',   alt: 'Portrait & Sketch 7' },
  { category: 'portraits-sketch', name: 'Portrait & Sketch 8',  img: 'product images/portraits & sketches/ps8.jpeg',  alt: 'Portrait & Sketch 8' },
  { category: 'portraits-sketch', name: 'Portrait & Sketch 9',  img: 'product images/portraits & sketches/ps9.jpg',   alt: 'Portrait & Sketch 9' },
  { category: 'portraits-sketch', name: 'Portrait & Sketch 10', img: 'product images/portraits & sketches/ps10.png',  alt: 'Portrait & Sketch 10' },
  { category: 'portraits-sketch', name: 'Portrait & Sketch 11', img: 'product images/portraits & sketches/ps11.png',  alt: 'Portrait & Sketch 11' },
  { category: 'portraits-sketch', name: 'Portrait & Sketch 12', img: 'product images/portraits & sketches/ps12.png',  alt: 'Portrait & Sketch 12' },
  { category: 'portraits-sketch', name: 'Portrait & Sketch 13', img: 'product images/portraits & sketches/ps13.jpeg', alt: 'Portrait & Sketch 13' },

];