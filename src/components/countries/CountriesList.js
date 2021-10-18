import React from "react";
import { Link } from "react-router-dom";
import { useCountries } from "../../hooks/useCountries";
import { isLoggedInVar } from "../../cache";
import EarthHappy from "../../assets/earth_happy.jpg";
import Spinner from "../layout/Spinner";
import { ERROR_REQUEST } from "../../constants/constants";

const CountriesList = () => {
  const { error, loading, data } = useCountries();

  if (loading) return <Spinner />;

  if (error) return <div>{ERROR_REQUEST}</div>;

  const logout = () => {
    localStorage.removeItem("token");
    isLoggedInVar(false);
  };

  return (
    <>
      <div className="text-center pb-10 mt-30">
        <h1>
          <i className="fas fa-house-user mr-5"></i> Página Incial
        </h1>
      </div>
      <button
        className="btn btn-danger btn-block mt-15"
        onClick={() => logout()}
      >
        <i className="fas fa-sign-out-alt mr-5"></i> Logout
      </button>
      <div className="grid-3 fade-in">
        {data.Country.map((ctr) => {
          return (
            <Link key={ctr._id} to={`/details/${ctr._id}`}>
              <div className="card text-center container">
                <div className="all-center">
                  {/* <img
                    src={ctr.flag.svgFile}
                    className="round-img widthImgAvatar mb-8"
                    alt="avatarurl"
                    width="150px"
                  /> */}
                  <img
                    src={EarthHappy}
                    className="round-img widthImgAvatar mb-8"
                    alt="avatarurl"
                    width="150px"
                  />
                </div>
                {ctr.name && (
                  <>
                    <h1 className="text-dark nameStyle text-center">País:</h1>
                    <div>
                      <h1 className="text-dark nameStyle text-center badge badge-success">
                        {ctr.name} - {ctr.flag.emoji}
                      </h1>
                    </div>
                  </>
                )}
                <>
                  <h1 className="text-dark nameStyle text-center mt-10">
                    Capital:
                  </h1>

                  <div>
                    <h1 className="text-dark nameStyle text-center badge badge-danger">
                      {ctr.capital ? ctr.capital : "Doest not exist!"}
                    </h1>
                  </div>
                </>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CountriesList;
