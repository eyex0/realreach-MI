export interface PostcodeSector {
  code: string;
  name: string;
  region: string;
  letterboxes: number;
  demographic: string;
  density: 'Urban' | 'Suburban' | 'Semi-Rural';
  homeownerPercent: number;
  avgHouseholdIncome: string;
}

export const POSTCODE_SECTORS: PostcodeSector[] = [
  {
    code: 'IP1 1',
    name: 'Ipswich Town Centre & Waterfront',
    region: 'Suffolk',
    letterboxes: 3840,
    demographic: 'Young Professionals & Urban Residents',
    density: 'Urban',
    homeownerPercent: 48,
    avgHouseholdIncome: '£36,500',
  },
  {
    code: 'IP1 2',
    name: 'Ipswich Central North',
    region: 'Suffolk',
    letterboxes: 4210,
    demographic: 'Family Neighbourhoods & Commuters',
    density: 'Suburban',
    homeownerPercent: 68,
    avgHouseholdIncome: '£42,000',
  },
  {
    code: 'IP2 8',
    name: 'Ipswich South / Chantry',
    region: 'Suffolk',
    letterboxes: 5120,
    demographic: 'Established Families & Local Workers',
    density: 'Suburban',
    homeownerPercent: 62,
    avgHouseholdIncome: '£35,200',
  },
  {
    code: 'IP3 0',
    name: 'Ipswich East / Ravenswood',
    region: 'Suffolk',
    letterboxes: 4950,
    demographic: 'Modern Housing Developments & Families',
    density: 'Suburban',
    homeownerPercent: 74,
    avgHouseholdIncome: '£46,800',
  },
  {
    code: 'IP4 2',
    name: 'Ipswich Christchurch Park & Rushmere',
    region: 'Suffolk',
    letterboxes: 4680,
    demographic: 'High-Net-Worth Homeowners & Retirees',
    density: 'Suburban',
    homeownerPercent: 82,
    avgHouseholdIncome: '£58,400',
  },
  {
    code: 'NR1 1',
    name: 'Norwich City Centre & Riverside',
    region: 'Norfolk',
    letterboxes: 4320,
    demographic: 'Professionals & Students',
    density: 'Urban',
    homeownerPercent: 45,
    avgHouseholdIncome: '£38,900',
  },
  {
    code: 'NR2 2',
    name: 'Norwich Golden Triangle',
    region: 'Norfolk',
    letterboxes: 5210,
    demographic: 'Affluent Professionals & Families',
    density: 'Suburban',
    homeownerPercent: 71,
    avgHouseholdIncome: '£49,200',
  },
  {
    code: 'CB1 2',
    name: 'Cambridge Central & Station Area',
    region: 'Cambridgeshire',
    letterboxes: 4890,
    demographic: 'Tech Professionals & Researchers',
    density: 'Urban',
    homeownerPercent: 58,
    avgHouseholdIncome: '£62,000',
  },
  {
    code: 'EC1V',
    name: 'London Clerkenwell & Old Street',
    region: 'Greater London',
    letterboxes: 6150,
    demographic: 'City Professionals & High Income Tech',
    density: 'Urban',
    homeownerPercent: 39,
    avgHouseholdIncome: '£74,500',
  },
  {
    code: 'SW1A',
    name: 'London Westminster & Victoria',
    region: 'Greater London',
    letterboxes: 3420,
    demographic: 'Ultra-High-Net-Worth Residents & B2B',
    density: 'Urban',
    homeownerPercent: 52,
    avgHouseholdIncome: '£88,000',
  },
  {
    code: 'B1 1',
    name: 'Birmingham City Centre & Jewellery Qtr',
    region: 'West Midlands',
    letterboxes: 5780,
    demographic: 'Young Professionals & Urban Living',
    density: 'Urban',
    homeownerPercent: 42,
    avgHouseholdIncome: '£37,800',
  },
  {
    code: 'M1 2',
    name: 'Manchester Piccadilly & Northern Quarter',
    region: 'Greater Manchester',
    letterboxes: 5430,
    demographic: 'Creative Industries & Professionals',
    density: 'Urban',
    homeownerPercent: 44,
    avgHouseholdIncome: '£39,100',
  },
];

export interface VerifiedDistributor {
  id: string;
  name: string;
  location: string;
  rating: number;
  completedJobs: number;
  letterboxesDelivered: number;
  onTimeRate: number;
  gpsAccuracyRate: number;
  badge: string;
  availableNextWeek: boolean;
  ratePerThousand: number;
  experienceYears: number;
}

export const VERIFIED_DISTRIBUTORS: VerifiedDistributor[] = [
  {
    id: 'dist-1',
    name: 'Sarah Miller & Team',
    location: 'Ipswich, Suffolk & Colchester',
    rating: 4.98,
    completedJobs: 184,
    letterboxesDelivered: 428000,
    onTimeRate: 99.8,
    gpsAccuracyRate: 100,
    badge: 'Premier Verified Distributor',
    availableNextWeek: true,
    ratePerThousand: 62,
    experienceYears: 6,
  },
  {
    id: 'dist-2',
    name: 'David Reynolds Direct',
    location: 'Norwich & East Anglia',
    rating: 4.94,
    completedJobs: 122,
    letterboxesDelivered: 295000,
    onTimeRate: 99.2,
    gpsAccuracyRate: 99.7,
    badge: 'Senior GPS Courier',
    availableNextWeek: true,
    ratePerThousand: 60,
    experienceYears: 4,
  },
  {
    id: 'dist-3',
    name: 'East Coast Distribution Ltd',
    location: 'Ipswich, Felixstowe & Woodbridge',
    rating: 4.97,
    completedJobs: 260,
    letterboxesDelivered: 710000,
    onTimeRate: 100,
    gpsAccuracyRate: 99.9,
    badge: 'Accredited Agency Round',
    availableNextWeek: false,
    ratePerThousand: 65,
    experienceYears: 8,
  },
  {
    id: 'dist-4',
    name: 'James Thornton Round',
    location: 'Cambridge & Newmarket',
    rating: 4.91,
    completedJobs: 98,
    letterboxesDelivered: 215000,
    onTimeRate: 98.9,
    gpsAccuracyRate: 99.8,
    badge: 'GPS Verified Courier',
    availableNextWeek: true,
    ratePerThousand: 64,
    experienceYears: 3,
  },
  {
    id: 'dist-5',
    name: 'Metro Door Drop Services',
    location: 'Greater London & M25 East',
    rating: 4.95,
    completedJobs: 340,
    letterboxesDelivered: 980000,
    onTimeRate: 99.6,
    gpsAccuracyRate: 99.9,
    badge: 'High-Density Specialist',
    availableNextWeek: true,
    ratePerThousand: 68,
    experienceYears: 9,
  },
];
