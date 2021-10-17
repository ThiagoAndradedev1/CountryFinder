import React, { Fragment } from "react";
import { useParams } from "react-router";
import { useCountry } from "../../hooks/useCountry";
import EarthHappy from "../../assets/earth_happy.jpg";
import Spinner from "../layout/Spinner";
import { ERROR_REQUEST } from "../../constants/constants";

const Country = () => {
  const { id } = useParams();

  const { data, loading, error } = useCountry(id);

  if (loading) return <Spinner />;

  if (error) return <div>{ERROR_REQUEST}</div>;

  return (
    <>
      <h1 className="text-center">
        {" "}
        <i className="fas fa-map-marked-alt mr-5 mt-15"></i> Detalhes do País
      </h1>
      <div className="card grid-2 fade-in">
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
              <strong>Nome: </strong> {data.Country[0].name}
            </Fragment>
          </li>
          <li>
            <Fragment>
              <strong>Capital: </strong> {data.Country[0].capital}
            </Fragment>
          </li>
          <li>
            <Fragment>
              <strong>Área: </strong> {data.Country[0].area}
            </Fragment>
          </li>
          <li>
            <Fragment>
              <strong>População: </strong> {data.Country[0].population}
            </Fragment>
          </li>
          <li>
            <Fragment>
              <strong>Top Level Domain: </strong>{" "}
              {data.Country[0].topLevelDomains[0].name}
            </Fragment>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Country;
