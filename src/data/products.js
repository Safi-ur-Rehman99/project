export const products = [
  {
    id: '1',
    name: 'Wooden Rainbow Stacker',
    price: 899,
    originalPrice: 1299,
    image: '/images/products/wooden-rainbow-stacker.jpg', // TODO: Add actual image
    images: [
      '/images/products/wooden-rainbow-stacker.jpg', // TODO: Add actual image
      '/images/products/wooden-rainbow-stacker-2.jpg' // TODO: Add additional angle
    ],
    category: 'Wooden Toys',
    condition: 'Like New',
    description: 'Beautiful wooden rainbow stacker that helps develop hand-eye coordination and color recognition. Made from sustainable wood with non-toxic paint.',
    ageRange: '12+ months',
    material: 'Sustainable Wood',
    size: '20cm x 15cm',
    featured: true
  },
  {
    id: '2',
    name: 'Soft Plush Teddy Bear',
    price: 649,
    originalPrice: 999,
    image: '/images/products/teddy-bear.jpg', // TODO: Add actual image
    images: [
      '/images/products/teddy-bear.jpg', // TODO: Add actual image
      '/images/products/teddy-bear-2.jpg' // TODO: Add additional angle
    ],
    category: 'Soft Toys',
    condition: 'Pre-loved',
    description: 'Cuddly teddy bear perfect for naptime and playtime. Super soft and huggable, this bear has been loved and is ready for a new home.',
    ageRange: '0+ months',
    material: 'Soft Fabric',
    size: '30cm tall',
    featured: true
  },
  {
    id: '3',
    name: 'Wooden Building Blocks Set',
    price: 1199,
    originalPrice: 1799,
    image: '/images/products/building-blocks.jpg', // TODO: Add actual image
    images: [
      '/images/products/building-blocks.jpg', // TODO: Add actual image
      '/images/products/building-blocks-2.jpg' // TODO: Add additional angle
    ],
    category: 'Educational',
    condition: 'Good',
    description: 'Classic wooden building blocks set that encourages creativity and spatial thinking. Perfect for developing fine motor skills and imagination.',
    ageRange: '18+ months',
    material: 'Natural Wood',
    size: 'Various sizes',
    featured: true
  },
  {
    id: '4',
    name: 'Colorful Musical Xylophone',
    price: 799,
    originalPrice: 1199,
    image: '/images/products/musical-xylophone.jpg', // TODO: Add actual image
    images: [
      '/images/products/musical-xylophone.jpg', // TODO: Add actual image
      '/images/products/musical-xylophone-2.jpg' // TODO: Add additional angle
    ],
    category: 'Musical',
    condition: 'Like New',
    description: 'Colorful wooden xylophone that introduces little ones to music and rhythm. Each key produces a clear, pleasant sound.',
    ageRange: '6+ months',
    material: 'Metal & Wood',
    size: '25cm x 15cm',
    featured: false
  },
  {
    id: '5',
    name: 'Educational Shape Sorter',
    price: 549,
    originalPrice: 849,
    image: '/images/products/shape-sorter.jpg', // TODO: Add actual image
    images: [
      '/images/products/shape-sorter.jpg', // TODO: Add actual image
      '/images/products/shape-sorter-2.jpg' // TODO: Add additional angle
    ],
    category: 'Educational',
    condition: 'Pre-loved',
    description: 'Educational shape sorter that helps develop problem-solving skills and shape recognition. Comes with multiple colorful shapes.',
    ageRange: '12+ months',
    material: 'Safe Plastic',
    size: '20cm x 20cm',
    featured: false
  },
  {
    id: '6',
    name: 'Children\'s Storybook Collection',
    price: 399,
    originalPrice: 699,
    image: '/images/products/storybooks.jpg', // TODO: Add actual image
    images: [
      '/images/products/storybooks.jpg', // TODO: Add actual image
      '/images/products/storybooks-2.jpg' // TODO: Add additional angle
    ],
    category: 'Board Books',
    condition: 'Good',
    description: 'Collection of beloved children\'s stories perfect for bedtime reading. Gently used but full of magical adventures.',
    ageRange: '2+ years',
    material: 'Paper',
    size: '15cm x 15cm',
    featured: true
  },
  {
    id: '7',
    name: 'Wooden Animal Puzzle Set',
    price: 699,
    originalPrice: 1099,
    image: '/images/products/wooden-puzzle.jpg', // TODO: Add actual image
    images: [
      '/images/products/wooden-puzzle.jpg', // TODO: Add actual image
      '/images/products/wooden-puzzle-2.jpg' // TODO: Add additional angle
    ],
    category: 'Wooden Toys',
    condition: 'Like New',
    description: 'Engaging wooden animal puzzle that promotes problem-solving and concentration. Features bright colors and smooth edges.',
    ageRange: '18+ months',
    material: 'Sustainable Wood',
    size: '25cm x 20cm',
    featured: false
  },
  {
    id: '8',
    name: 'Pretend Play Tea Party Set',
    price: 849,
    originalPrice: 1399,
    image: '/images/products/tea-party-set.jpg', // TODO: Add actual image
    images: [
      '/images/products/tea-party-set.jpg', // TODO: Add actual image
      '/images/products/tea-party-set-2.jpg' // TODO: Add additional angle
    ],
    category: 'Party Play Kits',
    condition: 'Pre-loved',
    description: 'Complete tea party set for imaginative play. Includes teapot, cups, saucers, and play treats for hosting friends.',
    ageRange: '3+ years',
    material: 'Safe Plastic',
    size: 'Various pieces',
    featured: false
  },
  {
    id: '9',
    name: 'Wooden Train Set',
    price: 1299,
    originalPrice: 1899,
    image: '/images/products/wooden-train.jpg', // TODO: Add actual image
    images: [
      '/images/products/wooden-train.jpg' // TODO: Add actual image
    ],
    category: 'Wooden Toys',
    condition: 'Like New',
    description: 'Classic wooden train set with tracks and multiple cars. Perfect for imaginative play and storytelling.',
    ageRange: '2+ years',
    material: 'Natural Wood',
    size: '50cm track length',
    featured: true
  },
  {
    id: '10',
    name: 'Colorful Stacking Rings',
    price: 449,
    originalPrice: 699,
    image: '/images/products/stacking-rings.jpg', // TODO: Add actual image
    images: [
      '/images/products/stacking-rings.jpg' // TODO: Add actual image
    ],
    category: 'Educational',
    condition: 'Good',
    description: 'Classic stacking rings toy that helps develop hand-eye coordination and color recognition.',
    ageRange: '6+ months',
    material: 'Safe Plastic',
    size: '15cm tall',
    featured: false
  }
];

export const categories = [
  { name: 'Wooden Toys', icon: '🪵', count: 12 },
  { name: 'Soft Toys', icon: '🧸', count: 8 },
  { name: 'Educational', icon: '📚', count: 15 },
  { name: 'Musical', icon: '🎵', count: 6 },
  { name: 'Board Books', icon: '📖', count: 10 },
  { name: 'Party Play Kits', icon: '🎉', count: 5 }
];

export const instagramFeed = [
  '/images/instagram/insta-1.jpg', // TODO: Add Instagram feed image
  '/images/instagram/insta-2.jpg', // TODO: Add Instagram feed image
  '/images/instagram/insta-3.jpg', // TODO: Add Instagram feed image
  '/images/instagram/insta-4.jpg', // TODO: Add Instagram feed image
  '/images/instagram/insta-5.jpg', // TODO: Add Instagram feed image
  '/images/instagram/insta-6.jpg'  // TODO: Add Instagram feed image
];