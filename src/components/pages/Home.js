import React from "react";
import CountriesList from "../countries/CountriesList";
import SearchCountry from "../countries/SearchCountry";

const Home = () => {
  return (
    <>
      <SearchCountry />
      <CountriesList />
    </>
  );
};

export default Home;
