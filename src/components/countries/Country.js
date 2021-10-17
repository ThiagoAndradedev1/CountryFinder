import React, { Fragment } from "react";
import { useParams } from "react-router";
import { useCountry } from "../../hooks/useCountry";

const Country = () => {
  const { id } = useParams();

  const { data, loading, error } = useCountry(id);

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something went wrong...</div>;

  console.log(data);
  console.log(data.Country[0].capital);

  return (
    <>
      <h1 className="text-center">
        {" "}
        <i className="fas fa-map-marked-alt mr-5 mt-15"></i> Detalhes do País
      </h1>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={data.Country[0].flag.svgFile}
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
        {/* <Link
              to={`/repos/${login}`}
              className="btn btn-dark btn-sm text-center"
            >
              <i className="fas fa-box-open mr-5"></i> Repos
            </Link>
            <Link
              to={`/starred/${login}`}
              className="btn btn-dark btn-sm text-center"
            >
              <i className="fas fa-star mr-5"></i> Starred
            </Link> */}
      </div>
    </>
  );
};

export default Country;
