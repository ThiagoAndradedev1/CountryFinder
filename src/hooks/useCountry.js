import { useQuery, gql } from "@apollo/client";

const GET_COUNTRY = gql`
  query GetCountry($id: String!) {
    Country(_id: $id) {
      _id
      capital
      flag {
        svgFile
      }
      topLevelDomains {
        name
      }
    }
  }
`;

export const useCountry = (id) => {
  console.log(id);
  const { error, loading, data } = useQuery(GET_COUNTRY, {
    variables: {
      id,
    },
  });

  return {
    data,
    error,
    loading,
  };
};