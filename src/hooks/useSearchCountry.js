import { gql, useLazyQuery } from "@apollo/client";

const GET_COUNTRY_BY_NAME = gql`
  query GetCountryByName($name: String!) {
    Country(name: $name) {
      _id
      capital
      name
      flag {
        svgFile
      }
      topLevelDomains {
        name
      }
    }
  }
`;

export const useSearchCountry = (name) => {
  const [getCountry, { loading, error, data }] = useLazyQuery(
    GET_COUNTRY_BY_NAME,
    {
      variables: {
        name,
      },
    }
  );

  return { getCountry, loading, error, data };
};
