import { useApolloClient } from "@apollo/client";
import React, { Fragment, useState } from "react";
import {
  GET_COUNTRY_BY_NAME,
  useSearchCountry,
} from "../../hooks/useSearchCountry";
import { convertToPascalCase } from "../../utils/utils";
import EarthHappy from "../../assets/earth_happy.jpg";
import Spinner from "../layout/Spinner";
import { ERROR_EMPTY_SEARCH, ERROR_REQUEST } from "../../constants/constants";

const SearchCountry = () => {
  const [name, setName] = useState("");

  const [searchError, setSearchError] = useState(false);

  const [country, setCountry] = useState("");
  const [capital, setCapital] = useState("");
  const [area, setArea] = useState("");
  const [population, setPopulation] = useState("");
  const [topLevelDomain, setTopLevelDomain] = useState("");

  const [openForm, setOpenForm] = useState(false);

  const { data, loading, getCountry } = useSearchCountry();

  const client = useApolloClient();

  const cleanState = () => {
    setCountry("");
    setCapital("");
    setArea("");
    setPopulation("");
    setTopLevelDomain("");
  };
  const openFormInfo = () => {
    setOpenForm(!openForm);
    cleanState();
  };

  const searchCountryInfo = (e) => {
    e.preventDefault();
    setOpenForm(false);
    if (name !== "") {
      getCountry({ variables: { name: convertToPascalCase(name).trim() } });
      cleanState();
      setSearchError(false);
    } else {
      setSearchError(true);
    }
  };

  const modifyCache = () => {
    client.writeQuery({
      query: GET_COUNTRY_BY_NAME,
      variables: { name },
      data: {
        Country: [
          {
            _id: data.Country[0]._id,
            capital: !!capital ? capital : data.Country[0].capital,
            name: !!country ? country : data.Country[0].name,
            area: !!area ? area : data.Country[0].area,
            population: !!population ? population : data.Country[0].population,
            flag: {
              svgFile: data.Country[0].flag.svgFile,
              __typename: "Flag",
            },
            topLevelDomains: [
              {
                name: !!topLevelDomain
                  ? topLevelDomain
                  : data.Country[0].topLevelDomains[0].name,
                __typename: "TopLevelDomain",
              },
            ],
            __typename: "Country",
          },
        ],
      },
    });
  };

  return (
    <>
      <h1 className="text-center">
        <i className="fas fa-map-marker-alt mr-5 mt-30"></i> Pesquisar por
        países
      </h1>
      <form className="form">
        {searchError && (
          <div className="alert alert-danger">
            <h4 className="text-center">{ERROR_EMPTY_SEARCH}</h4>
          </div>
        )}
        {data?.Country.length === 0 && (
          <div className="alert alert-danger">
            <h4 className="text-center">{ERROR_REQUEST}</h4>
          </div>
        )}
        <input
          type="text"
          name="text"
          placeholder="Pesquisar por países..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => searchCountryInfo(e)}
          className="btn btn-dark-blue btn-block"
        >
          <i className="fas fa-search mr-5"></i> Pesquisar
        </button>
      </form>
      {loading && <Spinner />}
      {data?.Country.length > 0 && (
        <div className="fade-in">
          <button
            onClick={() => openFormInfo()}
            className="btn btn-warning btn-block mt-10"
          >
            <i className="far fa-edit mr-5"></i> Editar Informações
          </button>
          <div className="card grid-2">
            <div className="all-center">
              {/* <img
                src={data?.Country[0].flag.svgFile}
                className="round-img widthImgAvatar"
                alt="avatarurl"
                width="150px"
              /> */}
              <img
                src={EarthHappy}
                className="round-img widthImgAvatar"
                alt="avatarurl"
                width="150px"
              />
            </div>
            <ul>
              <li>
                <Fragment>
                  <strong>País: </strong> {data?.Country[0].name}
                </Fragment>
              </li>
              <li>
                <Fragment>
                  <strong>Capital: </strong> {data?.Country[0].capital}
                </Fragment>
              </li>
              <li>
                <Fragment>
                  <strong>Área: </strong> {data?.Country[0].area}
                </Fragment>
              </li>
              <li>
                <Fragment>
                  <strong>População: </strong> {data?.Country[0].population}
                </Fragment>
              </li>
              <li>
                <Fragment>
                  <strong>Top Level Domain: </strong>{" "}
                  {data?.Country[0].topLevelDomains[0].name}
                </Fragment>
              </li>
            </ul>
          </div>
        </div>
      )}
      {openForm && data && (
        <div className="fade-in">
          <h1 className="text-center">
            <i className="far fa-edit mr-5 mt-30"></i> Editar Informações
          </h1>
          <div className="card grid-2">
            <div>
              <h4>País:</h4>
              <input
                type="text"
                name="text"
                placeholder="Alterar país..."
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div>
              <h4>Capital:</h4>
              <input
                type="text"
                name="text"
                placeholder="Alterar capital..."
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
              />
            </div>
            <div>
              <h4>Área:</h4>
              <input
                type="text"
                name="text"
                placeholder="Alterar área..."
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div>
              <h4>População:</h4>
              <input
                type="text"
                name="text"
                placeholder="Alterar população..."
                value={population}
                onChange={(e) => setPopulation(e.target.value)}
              />
            </div>
            <div>
              <h4>Top Level Domain:</h4>
              <input
                type="text"
                name="text"
                placeholder="Alterar Top Level Domain..."
                value={topLevelDomain}
                onChange={(e) => setTopLevelDomain(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={() => modifyCache()}
            className="btn btn-dark-blue btn-block"
          >
            <i className="fas fa-pencil-alt mr-5"></i> Editar
          </button>
          <button
            type="submit"
            onClick={() => openFormInfo()}
            className="btn btn-danger btn-block mt-15"
          >
            <i className="far fa-times-circle mr-5"></i> Fechar
          </button>
        </div>
      )}
    </>
  );
};

export default SearchCountry;
