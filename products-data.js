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
  { category: 'faceless-portrait', name: 'A4 COUPLE POTRAIT', img: 'product images/faceless portraits/fp1.jpeg', alt: 'A4 COUPLE POTRAIT' },
  { category: 'faceless-portrait', name: 'FRIENDS FOREVER', img: 'product images/faceless portraits/fp2.jpeg', alt: 'FRIENDS FOREVER' },
  { category: 'faceless-portrait', name: 'A4 COUPLE POTRAIT', img: 'product images/faceless portraits/fp3.jpeg', alt: 'A4 COUPLE POTRAIT' },
  { category: 'faceless-portrait', name: '2 PEOPLE', img: 'product images/faceless portraits/fp4.jpeg', alt: '2 PEOPLE' },
  { category: 'faceless-portrait', name: 'FAMILY POTRAIT', img: 'product images/faceless portraits/fp5.jpeg', alt: 'FAMILY POTRAIT' },
  { category: 'faceless-portrait', name: '4 FRIENDS POTRAIT', img: 'product images/faceless portraits/fp6.jpeg', alt: '4 FRIENDS POTRAIT' },
  { category: 'faceless-portrait', name: 'MEMORIES POTRAIT', img: 'product images/faceless portraits/fp7.jpeg', alt: 'MEMORIES POTRAIT' },
  { category: 'faceless-portrait', name: 'FAMILY POTRAIT', img: 'product images/faceless portraits/fp8.jpeg', alt: 'FAMILY POTRAIT' },
  { category: 'faceless-portrait', name: 'FAMILY POTRAIT', img: 'product images/faceless portraits/fp9.jpeg', alt: 'FAMILY POTRAIT' },
  { category: 'faceless-portrait', name: '4*4 POTRAIT', img: 'product images/faceless portraits/fp10.jpeg', alt: '4*4 POTRAIT' },
  { category: 'faceless-portrait', name: 'MINI COUPLE POTRAIT', img: 'product images/faceless portraits/fp11.jpeg', alt: 'MINI COUPLE POTRAIT' },
  { category: 'faceless-portrait', name: 'SINGLE PERSON POTRAIT', img: 'product images/faceless portraits/fp12.jpeg', alt: 'SINGLE PERSON POTRAIT' },
  { category: 'faceless-portrait', name: 'COUPLE POTRAIT', img: 'product images/faceless portraits/fp13.jpeg', alt: 'COUPLE POTRAIT' },
  { category: 'faceless-portrait', name: 'FRIENDS FOREVER', img: 'product images/faceless portraits/fp14.jpeg', alt: 'FRIENDS FOREVER' },
  { category: 'faceless-portrait', name: 'FRIENDS FOREVER', img: 'product images/faceless portraits/fp15.jpeg', alt: 'FRIENDS FOREVER' },
  { category: 'faceless-portrait', name: 'Product 16', img: 'product images/faceless portraits/fp16.jpeg', alt: 'Product 16' },
  // ================= FRAMES =================
  { category: 'frames', name: 'SPOTIFY FRAME', img: 'product images/frames/f1.png', alt: 'SPOTIFY FRAME' },
  { category: 'frames', name: 'CAR FRAME', img: 'product images/frames/f2.png', alt: 'CAR FRAME' },
  { category: 'frames', name: 'BIRTHDAY CALENDER FRAME', img: 'product images/frames/f3.png', alt: 'BIRTHDAY CALENDER FRAME' },
  { category: 'frames', name: 'SPOTIFY FRAME', img: 'product images/frames/f4.png', alt: 'SPOTIFY FRAME' },
  { category: 'frames', name: 'VIRAT KOLHI FRAME', img: 'product images/frames/f5.png', alt: 'VIRAT KOLHI FRAME' },
  { category: 'frames', name: 'SINGLE PHOTO FRAME', img: 'product images/frames/f6.jpeg', alt: 'SINGLE PHOTO FRAME' },
  { category: 'frames', name: 'COLLAGE FRAME', img: 'product images/frames/f7.jpeg', alt: 'COLLAGE FRAME' },
  { category: 'frames', name: 'SPOTIFY FRAME', img: 'product images/frames/f8.jpeg', alt: 'SPOTIFY FRAME' },
  { category: 'frames', name: '5*5 COLLAGE', img: 'product images/frames/f9.jpeg', alt: '5*5 COLLAGE' },
  { category: 'frames', name: 'HANDMADE FRAME', img: 'product images/frames/f10.jpeg', alt: 'HANDMADE FRAME' },
  { category: 'frames', name: 'HANDMADE FRAME', img: 'product images/frames/f11.jpeg', alt: 'HANDMADE FRAME' },
  { category: 'frames', name: 'REUNION FRAME', img: 'product images/frames/f12.png', alt: 'REUNION FRAME' },

  // ================= PHONE COVERS =================
  { category: 'phone-covers', name: 'KRISHNA THEME COVER', img: 'product images/phone covers/pc1.jpeg', alt: 'KRISHNA THEME COVER' },
  { category: 'phone-covers', name: 'SHIV THEME COVER', img: 'product images/phone covers/pc2.jpeg', alt: 'SHIV THEME COVER' },
  { category: 'phone-covers', name: 'KRISHNA THEME COVER', img: 'product images/phone covers/pc3.jpeg', alt: 'KRISHNA THEME COVER' },
  { category: 'phone-covers', name: 'RADHA KRISHNA THEME COVER', img: 'product images/phone covers/pc4.jpeg', alt: 'RADHA KRISHNA THEME COVER' },
  { category: 'phone-covers', name: 'KRISHNA THEME COVER', img: 'product images/phone covers/pc5.jpeg', alt: 'KRISHNA THEME COVER' },
  { category: 'phone-covers', name: 'BTS THEME COVER', img: 'product images/phone covers/pc6.jpeg', alt: 'BTS THEME COVER' },
  { category: 'phone-covers', name: 'VIRAT KOLHI THEME COVER', img: 'product images/phone covers/pc7.jpeg', alt: 'VIRAT KOLHI THEME COVER' },
  { category: 'phone-covers', name: 'THEME COVERS', img: 'product images/phone covers/pc8.jpeg', alt: 'THEME COVERS' },
  { category: 'phone-covers', name: 'GANPATI THEME COVER', img: 'product images/phone covers/pc9.jpeg', alt: 'GANPATI THEME COVER' },
  { category: 'phone-covers', name: 'MAHADEV THEME COVER', img: 'product images/phone covers/pc10.png', alt: 'MAHADEV THEME COVER' },
  { category: 'phone-covers', name: 'KRISHNA PAINTING COVER', img: 'product images/phone covers/pc11.jpeg', alt: 'KRISHNA PAINTING COVER' },
  { category: 'phone-covers', name: 'SURESH RAINA THEME COVER', img: 'product images/phone covers/pc12.jpeg', alt: 'SURESH RAINA THEME COVER' },
  { category: 'phone-covers', name: 'KOLHI TAB THEME COVER', img: 'product images/phone covers/pc13.png', alt: 'KOLHI TAB THEME COVER' },

  // ================= HAMPERS =================
  { category: 'hampers', name: 'CHOCOLATE HAMPER', img: 'product images/hampers/h1.jpeg', alt: 'CHOCOLATE HAMPER' },
  { category: 'hampers', name: 'BIRTHDAY HAMPER', img: 'product images/hampers/h2.jpeg', alt: 'BIRTHDAY HAMPER' },
  { category: 'hampers', name: 'MINI HAMPER', img: 'product images/hampers/h3.png', alt: 'MINI HAMPER' },
  { category: 'hampers', name: 'BANGLE HAMPER', img: 'product images/hampers/h4.jpeg', alt: 'BANGLE HAMPER' },
  { category: 'hampers', name: 'EARINGS HAMPER', img: 'product images/hampers/h5.jpeg', alt: 'EARINGS HAMPER' },
  { category: 'hampers', name: '36 GIFTS HAMPER', img: 'product images/hampers/h6.png', alt: '36 GIFTS HAMPER' },
  { category: 'hampers', name: 'SIPPER HAMPER', img: 'product images/hampers/h7.jpeg', alt: 'SIPPER HAMPER' },
  { category: 'hampers', name: 'CUSTOM HAMPER', img: 'product images/hampers/h8.jpeg', alt: 'CUSTOM HAMPER' },
  { category: 'hampers', name: 'MINI HAMPER', img: 'product images/hampers/h9.jpeg', alt: 'MINI HAMPER' },
  { category: 'hampers', name: 'MINI HAMPER', img: 'product images/hampers/h10.png', alt: 'MINI HAMPER' },
  { category: 'hampers', name: 'MINI HAMPER', img: 'product images/hampers/h11.jpeg', alt: 'MINI HAMPER' },
  { category: 'hampers', name: 'CHOCOLATE HAMPER', img: 'product images/hampers/h12.jpeg', alt: 'CHOCOLATE HAMPER' },
  { category: 'hampers', name: 'CLAW HAMPER', img: 'product images/hampers/h13.jpg', alt: 'CLAW HAMPER' },
  { category: 'hampers', name: 'NEW YEAR HAMPER', img: 'product images/hampers/h14.jpeg', alt: 'NEW YEAR HAMPER' },

  // ================= ACCESSORIES =================
  { category: 'accessories', name: 'OXIDISED EARRINGS', img: 'product images/accessories/a1.jpeg', alt: 'OXIDISED EARRINGS' },
  { category: 'accessories', name: 'TRENDING EARRING', img: 'product images/accessories/a2.png', alt: 'TRENDING EARRING' },
  { category: 'accessories', name: 'MINIMAL CHAINS', img: 'product images/accessories/a3.png', alt: 'MINIMAL CHAINS' },
  { category: 'accessories', name: 'BOW', img: 'product images/accessories/a4.jpeg', alt: 'BOW' },
  { category: 'accessories', name: '4 COMBO EARRINGS', img: 'product images/accessories/a5.png', alt: '4 COMBO EARRINGS' },
  { category: 'accessories', name: '6 COMBO BOW', img: 'product images/accessories/a6.jpeg', alt: '6 COMBO BOW' },
  { category: 'accessories', name: 'TRENDING CHAINS', img: 'product images/accessories/a7.jpeg', alt: 'TRENDING CHAINS' },
  { category: 'accessories', name: 'SCRUNCHIES', img: 'product images/accessories/a8.jpeg', alt: 'SCRUNCHIES' },
  { category: 'accessories', name: 'VIRAL EARRING 1', img: 'product images/accessories/a9.jpg', alt: 'VIRAL EARRING 1' },
  { category: 'accessories', name: '4 COMBO EARRINGS', img: 'product images/accessories/a10.png', alt: '4 COMBO EARRINGS' },
  { category: 'accessories', name: 'VIRAL EARRING 2', img: 'product images/accessories/a11.jpg', alt: 'VIRAL EARRING 2' },
  { category: 'accessories', name: 'HEART CHAIN', img: 'product images/accessories/a12.jpeg', alt: 'HEART CHAIN' },
  { category: 'accessories', name: 'COUPLE BRACELET', img: 'product images/accessories/a13.jpeg', alt: 'COUPLE BRACELET' },
  { category: 'accessories', name: 'CHAIN', img: 'product images/accessories/a14.jpg', alt: 'CHAIN' },
  { category: 'accessories', name: 'HEART CHAIN', img: 'product images/accessories/a15.jpeg', alt: 'HEART CHAIN' },
  { category: 'accessories', name: 'VIRAL EARRING 3', img: 'product images/accessories/a16.jpg', alt: 'VIRAL EARRING 3' },
  { category: 'accessories', name: '6 CHAINS COMBO', img: 'product images/accessories/a17.jpeg', alt: '6 CHAINS COMBO' },
  { category: 'accessories', name: 'BOW CHAIN', img: 'product images/accessories/a20.jpg', alt: 'BOW CHAIN' },
  { category: 'accessories', name: 'INFINITY CHAIN', img: 'product images/accessories/a21.jpg', alt: 'INFINITY CHAIN' },
  { category: 'accessories', name: 'PHONE CHARMS', img: 'product images/accessories/a22.jpeg', alt: 'PHONE CHARMS' },
  { category: 'accessories', name: 'HEART DIAMOND CHAIN', img: 'product images/accessories/a23.jpg', alt: 'HEART DIAMOND CHAIN' },
  { category: 'accessories', name: 'NAVRATRI BOW', img: 'product images/accessories/a24.jpg', alt: 'NAVRATRI BOW' },
  { category: 'accessories', name: 'DOUBLE CHAIN', img: 'product images/accessories/a25.jpg', alt: 'DOUBLE CHAIN' },
  { category: 'accessories', name: 'MORPANKH CHAIN', img: 'product images/accessories/a26.jpg', alt: 'MORPANKH CHAIN' },


  // ================= UNIQUE CREATIONS =================
  { category: 'unique-creations', name: 'Resin Photo Art',            img: 'images/products/unique-creations/1.jpg', alt: 'Resin Photo Art' },
  { category: 'unique-creations', name: '3D Pop-up Card Box',         img: 'images/products/unique-creations/2.jpg', alt: '3D Pop-up Card Box' },
  { category: 'unique-creations', name: 'Custom Caricature Print',    img: 'images/products/unique-creations/3.jpg', alt: 'Custom Caricature Print' },
  { category: 'unique-creations', name: 'Personalised Photo Puzzle',  img: 'images/products/unique-creations/4.jpg', alt: 'Personalised Photo Puzzle' },

  // ================= CARDS =================
  { category: 'cards', name: 'Card 1',  img: 'product images/cards/card1.jpeg',  alt: 'Card 1' },
  { category: 'cards', name: 'Card 2',  img: 'product images/cards/card2.jpg',  alt: 'Card 2' },
  { category: 'cards', name: 'Card 3',  img: 'product images/cards/card3.jpg',  alt: 'Card 3' },
  { category: 'cards', name: 'Card 4',  img: 'product images/cards/card4.jpeg',  alt: 'Card 4' },
  { category: 'cards', name: 'Card 5',  img: 'product images/cards/card7.jpeg',  alt: 'Card 5' },
  { category: 'cards', name: 'Card 6',  img: 'product images/cards/card8.jpeg',  alt: 'Card 6' },
  { category: 'cards', name: 'Card 7',  img: 'product images/cards/card9.jpeg',  alt: 'Card 7' },
  { category: 'cards', name: 'Card 8', img: 'product images/cards/card10.jpeg', alt: 'Card 8' },
  { category: 'cards', name: 'Card 9', img: 'product images/cards/card11.jpeg', alt: 'Card 9' },
  { category: 'cards', name: 'Card 10', img: 'product images/cards/card12.jpg', alt: 'Card 10' },
  { category: 'cards', name: 'Card 11', img: 'product images/cards/card13.jpg', alt: 'Card 11' },
  { category: 'cards', name: 'Card 12', img: 'product images/cards/card14.jpeg', alt: 'Card 12' },

  // ================= PORTRAITS / SKETCH =================
  { category: 'portraits-sketch', name: 'MOON SKETCH', img: 'product images/portraits & sketches/ps1.jpeg', alt: 'MOON SKETCH' },
  { category: 'portraits-sketch', name: 'BABY POTRAIT', img: 'product images/portraits & sketches/ps2.jpeg', alt: 'BABY POTRAIT' },
  { category: 'portraits-sketch', name: 'CHARCOAL POTRAIT', img: 'product images/portraits & sketches/ps3.jpeg', alt: 'CHARCOAL POTRAIT' },
  { category: 'portraits-sketch', name: 'CHARMINAR POTRAIT', img: 'product images/portraits & sketches/ps4.png', alt: 'CHARMINAR POTRAIT' },
  { category: 'portraits-sketch', name: 'SUNITA WILLIAMS POTRAIT', img: 'product images/portraits & sketches/ps5.png', alt: 'SUNITA WILLIAMS POTRAIT' },
  { category: 'portraits-sketch', name: 'VIRAT KOLHI SKETCH', img: 'product images/portraits & sketches/ps6.png', alt: 'VIRAT KOLHI SKETCH' },
  { category: 'portraits-sketch', name: 'SNOW FALLL SKETCH', img: 'product images/portraits & sketches/ps7.jpg', alt: 'SNOW FALLL SKETCH' },
  { category: 'portraits-sketch', name: 'LION SKETCH', img: 'product images/portraits & sketches/ps8.jpeg', alt: 'LION SKETCH' },
  { category: 'portraits-sketch', name: '2 PERSON SKETCH', img: 'product images/portraits & sketches/ps9.jpg', alt: '2 PERSON SKETCH' },
  { category: 'portraits-sketch', name: 'MOTHER AND SON SKETCH', img: 'product images/portraits & sketches/ps10.png', alt: 'MOTHER AND SON SKETCH' },
  { category: 'portraits-sketch', name: 'BABY GIRL SKETCH', img: 'product images/portraits & sketches/ps11.png', alt: 'BABY GIRL SKETCH' },
  { category: 'portraits-sketch', name: 'HAIRS SKETCH', img: 'product images/portraits & sketches/ps12.png', alt: 'HAIRS SKETCH' },
  { category: 'portraits-sketch', name: 'BABY POTRAIT', img: 'product images/portraits & sketches/ps13.jpeg', alt: 'BABY POTRAIT' },

];
