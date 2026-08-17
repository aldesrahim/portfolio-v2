export interface GalleryProject {
  slug: string;
  title: string;
  year: string;
  client: string;
  stack: string[];
  cover: string;
  images: string[];
  desc: string;
  featured?: boolean;
  liveUrl?: string;
  repo?: string;
}

export const gallery: GalleryProject[] = [
  {
    slug: 'monogram-ai',
    title: 'Monogram AI',
    year: '2024',
    client: 'Side Project',
    stack: ['Laravel', 'AI'],
    cover: '',
    images: [],
    desc: 'Type your initials. An AI model draws a monogram you can use as a logo or a brand mark.',
    featured: true,
    liveUrl: 'https://monogram.aldes.dev/',
  },
  {
    slug: 'wedding-invitation',
    title: 'Wedding Invitation',
    year: '2024',
    client: 'Side Project',
    stack: ['Laravel', 'FilamentPHP'],
    cover: '',
    images: [],
    desc: 'A configurable wedding invitation app. Hosts edit the invitation, manage the guest list, send it out, and check guests in at the door. In real use it cut check-in time by about half.',
    featured: true,
    liveUrl: 'https://theweddingofbelizaand.aldes.dev/',
  },
  {
    slug: 'pesawaran-tax-checker',
    title: 'Pesawaran Tax Checker',
    year: '2021',
    client: 'PT. FTF Globalindo',
    stack: ['Laravel', 'Livewire', 'MySQL'],
    cover: '/projects/pesawaran-tax-checker/1.png',
    images: [
      '/projects/pesawaran-tax-checker/1.png',
      '/projects/pesawaran-tax-checker/2.png',
      '/projects/pesawaran-tax-checker/3.png',
      '/projects/pesawaran-tax-checker/4.png',
      '/projects/pesawaran-tax-checker/5.png',
      '/projects/pesawaran-tax-checker/6.png',
      '/projects/pesawaran-tax-checker/7.png',
      '/projects/pesawaran-tax-checker/8.png',
      '/projects/pesawaran-tax-checker/9.png',
      '/projects/pesawaran-tax-checker/10.png',
      '/projects/pesawaran-tax-checker/11.png',
      '/projects/pesawaran-tax-checker/12.png',
      '/projects/pesawaran-tax-checker/13.png',
      '/projects/pesawaran-tax-checker/14.png',
      '/projects/pesawaran-tax-checker/15.png',
    ],
    desc: 'A tax status checker for Pesawaran regency in Lampung. Citizens look up what they owe online instead of going to the tax office. It is one of several e-tax applications I built and maintained for local governments across several regencies. This one runs on Laravel and Livewire. The rest of the suite is older: the core e-tax system runs on PHP 5.6 with a Java service for tax calculation, and a second checker runs on CodeIgniter 3. I maintained and modernized both while building the newer ones.',
    featured: true,
  },
  {
    slug: 'asset-management',
    title: 'Asset Management & Tracking',
    year: '2020',
    client: 'PT. FTF Globalindo',
    stack: ['Laravel', 'RFID', 'MySQL', 'Bootstrap'],
    cover: '/projects/asset-management/1.png',
    images: [
      '/projects/asset-management/1.png',
      '/projects/asset-management/2.png',
      '/projects/asset-management/3.png',
      '/projects/asset-management/4.png',
      '/projects/asset-management/5.png',
      '/projects/asset-management/6.png',
      '/projects/asset-management/7.png',
      '/projects/asset-management/8.0.png',
      '/projects/asset-management/8.1.png',
      '/projects/asset-management/8.2.png',
      '/projects/asset-management/8.3.png',
      '/projects/asset-management/8.4.png',
      '/projects/asset-management/8.5.png',
      '/projects/asset-management/9.png',
      '/projects/asset-management/10.0.png',
      '/projects/asset-management/10.1.png',
      '/projects/asset-management/11.png',
      '/projects/asset-management/12.png',
      '/projects/asset-management/13.png',
      '/projects/asset-management/14.0.png',
      '/projects/asset-management/14.1.png',
      '/projects/asset-management/14.2.png',
      '/projects/asset-management/15.0.png',
      '/projects/asset-management/15.1.png',
      '/projects/asset-management/15.2.png',
    ],
    desc: 'An asset tracking system for government facilities. Every asset carries an RFID tag. Staff scan the tag at any site, and the system checks the scan against a central registry. It also handles check-out and check-in, shows where each asset is now, tracks depreciation, and prints audit reports for compliance.',
    featured: true,
  },
  {
    slug: 'facility-reservation',
    title: 'Public Facility Reservation',
    year: '2020',
    client: 'PT. FTF Globalindo',
    stack: ['Laravel', 'Livewire', 'MySQL', 'Bootstrap'],
    cover: '/projects/facility-reservation/1.png',
    images: [
      '/projects/facility-reservation/1.png',
      '/projects/facility-reservation/2.0.png',
      '/projects/facility-reservation/2.1.png',
      '/projects/facility-reservation/3.0.png',
      '/projects/facility-reservation/3.1.png',
      '/projects/facility-reservation/4.0.png',
      '/projects/facility-reservation/4.1.png',
      '/projects/facility-reservation/5.png',
      '/projects/facility-reservation/6.png',
      '/projects/facility-reservation/7.0.png',
      '/projects/facility-reservation/7.1.png',
      '/projects/facility-reservation/8.png',
      '/projects/facility-reservation/9.png',
      '/projects/facility-reservation/10.png',
      '/projects/facility-reservation/11.png',
      '/projects/facility-reservation/12.png',
    ],
    desc: 'A booking system for public facilities, built for a local government client. Citizens browse the available spaces — courts, halls, community rooms — and request a booking online. Admins review each request, manage the schedule, catch double bookings, and generate occupancy reports. Livewire drives the interactive parts, so the project needs no separate frontend build.',
  },
  {
    slug: 'inventory-jr',
    title: 'Enterprise Inventory — Jasa Raharja',
    year: '2020',
    client: 'PT. FTF Globalindo',
    stack: ['Yii2', 'MySQL', 'Bootstrap'],
    cover: '/projects/inventory-jr/1.png',
    images: [
      '/projects/inventory-jr/1.png',
      '/projects/inventory-jr/2.png',
      '/projects/inventory-jr/3.png',
      '/projects/inventory-jr/4.png',
      '/projects/inventory-jr/5.png',
      '/projects/inventory-jr/6.png',
      '/projects/inventory-jr/7.png',
    ],
    desc: 'An inventory system for Jasa Raharja, a state-owned insurance company. It tracks stock movement across regional warehouses, manages procurement and supplier records, and keeps an audit trail for government reporting. Built on Yii2 to match the client\'s existing stack, which is where I learned the framework.',
  },
  {
    slug: 'alfa-pos',
    title: 'Alfa POS',
    year: '2020',
    client: 'PT. FTF Globalindo',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    cover: '/projects/alfa-pos/1.PNG',
    images: [
      '/projects/alfa-pos/1.PNG',
      '/projects/alfa-pos/2.PNG',
      '/projects/alfa-pos/3.PNG',
    ],
    desc: 'A point-of-sale system for a retail client who wanted every sale to move stock straight away. The cashier screen handles transactions, discounts, and receipt printing. The back office holds the product catalog, stock adjustments, and daily sales reports.',
  },
  {
    slug: 'handovers-and-filing',
    title: 'Handovers & Filing',
    year: '2021',
    client: 'Side Project',
    stack: ['Laravel', 'Jetstream', 'Livewire', 'MySQL'],
    cover: '/projects/handovers-and-filing/1.PNG',
    images: [
      '/projects/handovers-and-filing/1.PNG',
      '/projects/handovers-and-filing/2.PNG',
      '/projects/handovers-and-filing/3.PNG',
      '/projects/handovers-and-filing/4.PNG',
      '/projects/handovers-and-filing/5.PNG',
      '/projects/handovers-and-filing/6.PNG',
      '/projects/handovers-and-filing/7.PNG',
      '/projects/handovers-and-filing/8.PNG',
      '/projects/handovers-and-filing/9.PNG',
      '/projects/handovers-and-filing/10.PNG',
      '/projects/handovers-and-filing/11.PNG',
    ],
    desc: 'A shipment and document tracker for a friend\'s fulfillment operation. It records incoming and outgoing shipments by air waybill (AWB) and keeps the paperwork attached to each one. Operators write a handover log at the end of a shift, so the next shift knows what happened. Each document carries its own filing status. Built with Laravel Jetstream and Livewire, so the screens update without a page reload.',
  },
  {
    slug: 'cluster-residence',
    title: 'Cluster Residence',
    year: '2021',
    client: 'Side Project',
    stack: ['WordPress'],
    cover: '/projects/cluster-residence/1.png',
    images: [
      '/projects/cluster-residence/1.png',
      '/projects/cluster-residence/2.png',
      '/projects/cluster-residence/3.png',
    ],
    desc: 'A management system for a housing developer\'s residential cluster. It holds the records for units, residents, monthly fees, and maintenance requests. Admins send announcements, check who has paid, and generate occupancy summaries.',
  },
  {
    slug: 'inventory-eureka',
    title: 'Eureka Inventory',
    year: '2020',
    client: 'PT. Eureka Logistics',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    cover: '/projects/inventory-eureka/1.png',
    images: [
      '/projects/inventory-eureka/1.png',
      '/projects/inventory-eureka/2.png',
    ],
    desc: 'An inventory system for Eureka, a logistics and distribution company. It covers the product catalog, stock levels, suppliers, and purchase orders. It warns staff when stock runs low and keeps a movement history for each item.',
  },
  {
    slug: 'activity-scheduler',
    title: 'Activity Scheduler',
    year: '2020',
    client: 'Side Project',
    stack: ['Laravel', 'AJAX', 'MySQL'],
    cover: '/projects/activity-scheduler/1.png',
    images: [
      '/projects/activity-scheduler/1.png',
      '/projects/activity-scheduler/2.png',
      '/projects/activity-scheduler/3.png',
      '/projects/activity-scheduler/4.0.png',
      '/projects/activity-scheduler/4.1.png',
      '/projects/activity-scheduler/5.0.png',
      '/projects/activity-scheduler/5.1.png',
      '/projects/activity-scheduler/5.2.png',
      '/projects/activity-scheduler/5.3.png',
      '/projects/activity-scheduler/6.png',
      '/projects/activity-scheduler/7.png',
      '/projects/activity-scheduler/8.png',
    ],
    desc: 'A shift task tracker for a clinic that was still running on paper. Staff tick off their daily tasks, sorted by category and time slot. Managers read the completion history by task and by employee. My first side project, and the first thing I built end to end for people to use every day.',
  },
  {
    slug: 'idm-schedule-generator',
    title: 'IDM Schedule Generator',
    year: '2021',
    client: 'Side Project',
    stack: ['Laravel', 'Livewire', 'MySQL'],
    cover: '/projects/idm-schedule-generator/1.PNG',
    images: [
      '/projects/idm-schedule-generator/1.PNG',
      '/projects/idm-schedule-generator/2.png',
    ],
    desc: 'A weekly staff schedule generator. It builds the roster from the shift rules and who is available, instead of a planner working it out by hand.',
  },
];

export interface StackRow {
  label: string;
  items: string;
}

export interface Project {
  name: string;
  desc: string;
  host: string;
  url: string;
  tag: 'LIVE' | 'REPO';
}

export const stack: StackRow[] = [
  { label: 'LANGUAGES',    items: 'PHP · JavaScript · Go' },
  { label: 'FRAMEWORK',    items: 'Laravel' },
  { label: 'DATA & CACHE', items: 'MySQL · Redis' },
  { label: 'INFRA & OPS',  items: 'Linux · Docker' },
];

export const oss: Project[] = [
  {
    name: 'Wilayah Indonesia',
    desc: 'Provinces, cities, districts, and villages of Indonesia. GitHub Actions builds the data from BPS sources and publishes it as JSON.',
    host: 'github.com/aldesrahim/wilayah-indonesia',
    url: 'https://github.com/aldesrahim/wilayah-indonesia',
    tag: 'REPO',
  },
  {
    name: 'Filament Compass',
    desc: 'Filament v5 documentation, written for LLMs and AI-assisted development.',
    host: 'github.com/aldesrahim/filament-compass-pkg',
    url: 'https://github.com/aldesrahim/filament-compass-pkg',
    tag: 'REPO',
  },
  {
    name: 'Localdev',
    desc: 'A Docker-based local development environment for PHP and Laravel, with a choice of databases. Laradock, cut down for personal use.',
    host: 'github.com/aldesrahim/localdev',
    url: 'https://github.com/aldesrahim/localdev',
    tag: 'REPO',
  },
];
