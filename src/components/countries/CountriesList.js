import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { useCountries } from "../../hooks/useCountries";

const CountriesList = () => {
  const { error, loading, data } = useCountries();

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something went wrong...</div>;

  console.log(data);

  return (
    <Fragment>
      {/* <img src={git} className="gitImg" alt="usergit" /> */}
      {/* <h1 className="text-center pb-10">CONHEÇA MAIS DO MUNDO!</h1> */}
      <div className="grid-3">
        {data.Country.map((ctr) => {
          return (
            <Link to={`/details/${ctr._id}`}>
              <div key={ctr._id} className="card text-center container">
                {/* <div className="all-center">
                  <img
                    src={ctr.flag.svgFile}
                    className="round-img widthImgAvatar"
                    alt="avatarurl"
                    width="150px"
                  />
                </div> */}
                <h1 className="text-dark nameStyle text-center">{ctr.name}</h1>
                <h1 className="text-dark nameStyle text-center">
                  {ctr.capital}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CountriesList;
