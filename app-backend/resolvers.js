import { find, filter } from 'lodash';


const providers = [
  {
    id: 10001,
    name: 'SOUTHEAST ALABAMA MEDICAL CENTER',
    streetAddress: '1108 ROSS CLARK CIRCLE',
    city: 'DOTHAN',
    state: 'AL',
    zipcode: 36301,
    hospitalReferralRegionDescription: "AL - Dothan",
    totalDischarges: 91,
    averageCoveredCharges: "$32,963.07",
    averageTotalPayments:   "$5,777.24",
    averageMedicarePayments: "$4,763.73"
  },
  {
    id: 10005,
    name: "MARSHALL MEDICAL CENTER SOUTH",
    streetAddress: "2505 U S HIGHWAY 431 NORTH",
    city: "BOAZ",
    state: "AL",
    zipcode: "35957",
    hospitalReferralRegionDescription: "AL - Birmingham",
    totalDischarges: 14,
    averageCoveredCharges: "$32,963.07",
    averageTotalPayments:   "$5,777.24",
    averageMedicarePayments: "$4,763.73"
  },
  {
    id: 10006,
    name: "ELIZA COFFEE MEMORIAL HOSPITAL",
    streetAddress: "205 MARENGO STREET",
    city: "FLORENCE",
    state: "AL",
    zipcode: "35631",
    hospitalReferralRegionDescription: "AL - Birmingham",
    totalDischarges: 24,
    averageCoveredCharges: "$37,560.37",
    averageTotalPayments: "$5,434.95",
    averageMedicarePayments: "$4,453.79"
  },{
    id: 10011,
    name: "ST VINCENT'S EAST",
    streetAddress: "50 MEDICAL PARK EAST DRIVE",
    city: "BIRMINGHAM",
    state: "AL",
    zipcode: 35235,
    hospitalReferralRegionDescription: "AL - Birmingham",
    totalDischarges: 25,
    averageCoveredCharges: "$13,998.28",
    averageTotalPayments: "$5,417.56",
    averageMedicarePayments: "$4,129.16"
  },
  {
    id: 10016,
    name: "SHELBY BAPTIST MEDICAL CENTER",
    streetAddress: "1000 FIRST STREET NORTH",
    city: "ALABASTER",
    state: "AL",
    zipcode: 35007,
    hospitalReferralRegionDescription: "AL - Birmingham",
    totalDischarges: 18,
    averageCoveredCharges: "$31,633.27",
    averageTotalPayments: "$5,658.33",
    averageMedicarePayments: "$4,851.44"
  }
]

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    getProviders: () => providers,
    provider: (_, { id }) => find(providers, { id: id }),
    providers: (_, { state }) => filter(providers, { state: state }),

    //SORT BY DISCHARGES, return the first x, inclusive
    // max_discharges
    // min_discharges

    //SORT BY AVERAGE COVERED CHARGES, return the first x, inclusive
    // max_average_covered_charges
    // min_average_covered_charges

    //SORT BY AVERAGE MEDICARE PAYMENTS, return the first x, inclusive
    // max_average_medicare_payments
    // min_average_medicare_payments
  }
};
