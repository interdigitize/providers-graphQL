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
]

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    getProviders: () => providers,
    provider: (_, { id }) => find(providers, { id: id }),
  }
};
