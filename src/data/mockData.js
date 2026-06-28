export const mockCenters = [
  {
    id: 1,
    name: 'EcoTech Recycling Hub',
    address: '123 Green Street, Downtown',
    distance: '2.4 km',
    acceptedItems: ['Phones', 'Laptops', 'Batteries', 'Chargers'],
    hours: 'Mon-Fri: 9am-6pm, Sat: 10am-4pm',
    certified: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Urban E-Waste Center',
    address: '456 Tech Avenue, Midtown',
    distance: '5.1 km',
    acceptedItems: ['Monitors', 'Keyboards', 'Printers', 'Cables'],
    hours: 'Mon-Sat: 8am-5pm',
    certified: true,
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Green Circle Electronics',
    address: '789 Sustainability Blvd, Westside',
    distance: '8.3 km',
    acceptedItems: ['TVs', 'Game Consoles', 'Tablets', 'Phones'],
    hours: 'Tue-Sun: 10am-7pm',
    certified: true,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'NextGen Recyclers',
    address: '321 Innovation Way, Tech Park',
    distance: '3.9 km',
    acceptedItems: ['Laptops', 'Monitors', 'Routers', 'Cables'],
    hours: 'Mon-Fri: 7am-6pm',
    certified: true,
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Earth Restoration Lab',
    address: '654 Nature Road, East District',
    distance: '12.1 km',
    acceptedItems: ['Batteries', 'Chargers', 'Small Appliances'],
    hours: 'Wed-Sun: 11am-5pm',
    certified: true,
    rating: 4.5,
  },
  {
    id: 6,
    name: 'Circular Economy Center',
    address: '987 Future Lane, North Hub',
    distance: '6.7 km',
    acceptedItems: ['Phones', 'Tablets', 'Cameras', 'Batteries'],
    hours: 'Mon-Sat: 9am-5pm',
    certified: true,
    rating: 4.8,
  },
];

export const acceptedItems = [
  { name: 'Smartphones', category: 'Phones' },
  { name: 'Laptops', category: 'Computers' },
  { name: 'Tablets', category: 'Tablets' },
  { name: 'Monitors', category: 'Displays' },
  { name: 'Printers', category: 'Peripherals' },
  { name: 'Keyboards', category: 'Peripherals' },
  { name: 'Cables & Chargers', category: 'Accessories' },
  { name: 'Batteries', category: 'Batteries' },
  { name: 'TVs', category: 'Displays' },
  { name: 'Game Consoles', category: 'Gaming' },
  { name: 'Cameras', category: 'Photography' },
  { name: 'Routers & Modems', category: 'Networking' },
];

export const testimonials = [
  {
    id: 1,
    initials: 'SK',
    name: 'Sarah Khan',
    city: 'Bihar, Nepal',
    rating: 5,
    quote: 'I was impressed by how easy it was to find a recycling center. ReCircuit made me feel like I was actually making a difference for the planet.',
  },
  {
    id: 2,
    initials: 'JM',
    name: 'James Morrison',
    city: 'Seattle, WA',
    rating: 5,
    quote: 'The team was professional and helpful. I loved getting a confirmation email showing exactly how my old laptop would be responsibly recycled.',
  },
  {
    id: 3,
    initials: 'AM',
    name: 'Amira Patel',
    city: 'Portland, OR',
    rating: 4,
    quote: 'Finally, a straightforward way to recycle electronics without guilt. The center staff knew exactly what to do with my old devices.',
  },
];

export const faqItems = [
  {
    id: 1,
    question: 'Is my data wiped before recycling?',
    answer: 'Yes, absolutely. All personal data is securely wiped from your devices using industry-standard methods before recycling begins. We comply with NIST SP 800-88 guidelines to ensure complete data destruction. You\'ll receive a certificate of data destruction upon request.',
  },
  {
    id: 2,
    question: 'Do you accept broken or damaged devices?',
    answer: 'Yes, we accept both working and non-working electronics. Whether your device is broken, cracked, or just won\'t power on, our certified recyclers can safely handle it. Some components may still be salvageable for refurbishment or material recovery.',
  },
  {
    id: 3,
    question: 'Is there a drop-off fee?',
    answer: 'Drop-off is completely free for individuals. We believe electronics recycling should be accessible to everyone. Our revenue comes from recovered materials, not from charging customers. Bulk business drops may have different arrangements—contact us for details.',
  },
  {
    id: 4,
    question: 'Can businesses drop off bulk electronics?',
    answer: 'Absolutely! We work with businesses, schools, and organizations to manage large quantities of e-waste. For bulk orders, we offer scheduled pickups and special handling. Please contact our corporate team at corporate@recircuit.com for a custom quote.',
  },
  {
    id: 5,
    question: 'How do I know my device was properly recycled?',
    answer: 'Every drop-off receives a unique tracking ID. You can check the status of your device on our website using this ID. You\'ll receive email updates as your device moves through the recycling process, and you can request a final certification report.',
  },
  {
    id: 6,
    question: 'What happens to the materials after recycling?',
    answer: 'Recovered materials are sold to manufacturers and commodity traders. Precious metals like gold and silver are extracted and reused in new electronics. Plastics are processed into pellets for manufacturing. Glass and other materials are used in construction or refabricated. About 98% of materials are recovered and reused.',
  },
];

export const steps = [
  {
    id: 1,
    title: 'Search',
    description: 'Enter your location to find the nearest certified collection center in your area.',
    icon: 'Search',
  },
  {
    id: 2,
    title: 'Drop Off',
    description: 'Bring your old electronics—we accept 50+ device types, from phones to appliances.',
    icon: 'Recycle2',
  },
  {
    id: 3,
    title: 'Track',
    description: 'Get a confirmation and track your device\'s recycling journey with real-time updates.',
    icon: 'BarChart3',
  },
];

export const stats = [
  {
    number: '12000',
    unit: 'tons',
    label: 'E-waste Diverted from Landfills',
  },
  {
    number: '98',
    unit: '%',
    label: 'Material Recovery Rate',
  },
  {
    number: '500000',
    unit: '+',
    label: 'Happy Recyclers',
  },
];
