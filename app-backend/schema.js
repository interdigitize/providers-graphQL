const schema = `
type Provider {
  id: Int
  name: String
  streetAddress: String
  city: String
  state: String
  zipcode: Int
  hospitalReferralRegionDescription: String
  totalDischarges: Int
  averageCoveredCharges: String
  averageTotalPayments: String
  averageMedicarePayments: String
}

type Query {
  getProviders: [Provider]
}`;

// eslint-disable-next-line import/prefer-default-export
export { schema };
