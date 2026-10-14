export interface CAPSector {
  code: string;
  name: string;
  region: string;
  letterboxes: number;
  demographic: string;
  density: 'Urban' | 'Suburban' | 'Semi-Rural';
  homeownerPercent: number;
  avgHouseholdIncome: string;
}

export const POSTCODE_SECTORS: CAPSector[] = [
  {
    code: '20121',
    name: 'Milan Centro & Navigli',
    region: 'Lombardy',
    letterboxes: 3840,
    demographic: 'Young Professionals & Urban Residents',
    density: 'Urban',
    homeownerPercent: 48,
    avgHouseholdIncome: '€36,500',
  },
  {
    code: '20122',
    name: 'Porta Venezia & Centrale',
    region: 'Lombardy',
    letterboxes: 4210,
    demographic: 'Family Neighbourhoods & Commuters',
    density: 'Suburban',
    homeownerPercent: 68,
    avgHouseholdIncome: '€42,000',
  },
  {
    code: '20123',
    name: 'Navigli & Ticinese',
    region: 'Lombardy',
    letterboxes: 5120,
    demographic: 'Established Families & Local Workers',
    density: 'Suburban',
    homeownerPercent: 62,
    avgHouseholdIncome: '€35,200',
  },
  {
    code: '20124',
    name: 'Città Studi & Lambrate',
    region: 'Lombardy',
    letterboxes: 4950,
    demographic: 'Modern Housing Developments & Families',
    density: 'Suburban',
    homeownerPercent: 74,
    avgHouseholdIncome: '€46,800',
  },
  {
    code: '20125',
    name: 'Brera & Moscova',
    region: 'Lombardy',
    letterboxes: 4680,
    demographic: 'High-Net-Worth Homeowners & Retirees',
    density: 'Suburban',
    homeownerPercent: 82,
    avgHouseholdIncome: '€58,400',
  },
  {
    code: '20900',
    name: 'Monza Centro',
    region: 'Brianza',
    letterboxes: 4320,
    demographic: 'Professionals & Students',
    density: 'Urban',
    homeownerPercent: 45,
    avgHouseholdIncome: '€38,900',
  },
  {
    code: '20901',
    name: 'Monza San Biagio',
    region: 'Brianza',
    letterboxes: 5210,
    demographic: 'Affluent Professionals & Families',
    density: 'Suburban',
    homeownerPercent: 71,
    avgHouseholdIncome: '€49,200',
  },
  {
    code: '22100',
    name: 'Como Centro & Stazione',
    region: 'Como Province',
    letterboxes: 4890,
    demographic: 'Tech Professionals & Researchers',
    density: 'Urban',
    homeownerPercent: 58,
    avgHouseholdIncome: '€62,000',
  },
  {
    code: '20129',
    name: 'Porta Nuova & Isola',
    region: 'Milan Metropolitan Area',
    letterboxes: 6150,
    demographic: 'City Professionals & High Income Tech',
    density: 'Urban',
    homeownerPercent: 39,
    avgHouseholdIncome: '€74,500',
  },
  {
    code: '20146',
    name: 'Duomo & San Babila',
    region: 'Milan Metropolitan Area',
    letterboxes: 3420,
    demographic: 'Ultra-High-Net-Worth Residents & B2B',
    density: 'Urban',
    homeownerPercent: 52,
    avgHouseholdIncome: '€88,000',
  },
  {
    code: '24121',
    name: 'Brescia Centro',
    region: 'Lombardy',
    letterboxes: 5780,
    demographic: 'Young Professionals & Urban Living',
    density: 'Urban',
    homeownerPercent: 42,
    avgHouseholdIncome: '€37,800',
  },
  {
    code: '25121',
    name: 'Bergamo Alta & Centro',
    region: 'Greater Bergamo',
    letterboxes: 5430,
    demographic: 'Creative Industries & Professionals',
    density: 'Urban',
    homeownerPercent: 44,
    avgHouseholdIncome: '€39,100',
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
    location: 'Milan, Lombardy & Seregno',
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
    location: 'Monza & Brianza',
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
    location: 'Milan, Rho & Legnano',
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
    location: 'Como & Lecco',
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
    location: 'Milan Metropolitan Area & Monza & Brianza',
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
