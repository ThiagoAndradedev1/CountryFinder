import { useQuery, gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query {
    Country {
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

export const useCountries = () => {
  const { error, loading, data } = useQuery(GET_COUNTRIES);

  return {
    error,
    loading,
    data,
  };
};
