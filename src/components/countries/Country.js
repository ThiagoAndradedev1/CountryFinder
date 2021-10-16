import React from "react";
import { useParams } from "react-router";
import { useCountry } from "../../hooks/useCountry";

const Country = () => {
  const { id } = useParams();

  const { data, loading, error } = useCountry(id);

  console.log(loading, error, data);

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something went wrong...</div>;

  return <div>{data.Country[0].capital}</div>;
};

export default Country;
