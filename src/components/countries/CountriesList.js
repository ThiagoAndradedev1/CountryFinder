import React from "react";
import { Link } from "react-router-dom";
import { useCountries } from "../../hooks/useCountries";
import { useIsLoggedIn } from "../../hooks/useIsLoggedIn";
import { isLoggedInVar } from "../../cache";

const CountriesList = () => {
  const { error, loading, data } = useCountries();
  const status = useIsLoggedIn();

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something went wrong...</div>;

  console.log(data);

  const login = () => {
    localStorage.setItem("token", {});
    isLoggedInVar(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    isLoggedInVar(false);
  };

  return (
    <>
      {status ? <h1>Logado!</h1> : <h1>Deslogado!</h1>}
      <button onClick={() => login()} className="btn btn-primary">
        Login
      </button>
      <button onClick={() => logout()} className="btn btn-primary">
        Logout
      </button>
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
    </>
  );
};

export default CountriesList;
