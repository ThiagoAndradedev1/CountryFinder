import React from "react";
import { Link } from "react-router-dom";
import { useCountries } from "../../hooks/useCountries";

const CountriesList = () => {
  const { error, loading, data } = useCountries();

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something went wrong...</div>;

  console.log(data);

  return (
    <div>
      {data.Country.map((ctr) => {
        return (
          <Link to={`/${ctr._id}`}>
            <h1 key={ctr._id}>{ctr.name}</h1>;
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
