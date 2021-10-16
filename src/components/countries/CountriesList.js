import React from "react";
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

const CountriesList = () => {
  const { error, loading, data } = useQuery(GET_COUNTRIES);

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something went wrong...</div>;

  console.log(data.Country[0]);

  return (
    <div>
      {data.Country.map((ctr) => {
        return <h1>{ctr.name}</h1>;
      })}
    </div>
  );
};

export default CountriesList;
