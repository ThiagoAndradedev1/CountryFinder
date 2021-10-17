import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1 className="mt-10 text-center">Essa rota não existe! :(</h1>
      <Link to="/">
        <h3 className="text-center">Voltar para a página principal</h3>
      </Link>
    </>
  );
};

export default NotFound;
