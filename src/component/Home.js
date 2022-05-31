import React from "react";
import { Link } from "react-router-dom";
import smkn7 from "../include/asset/smk.jpg";
import "../style/style.css";

const Home = () => {
  return (
    <>
      <div>
        <div className="container py-5">
          <div className="row py-3 justify-content-center">
            <div className="col-md-12 text-center">
              <h1>SMK NEGERI 7 PONTIANAK</h1>
            </div>
            <div className="col-md-3 text-center">
              <p>
                <img
                  src={smkn7}
                  alt="smkn7ptk"
                  className="img py-4"
                  style={{ width: "250px" ,borderRadius : "40%" }}
                />
              </p>
              <Link to={`/profil/smkn7ptk`} className="buttonColor text-white">
                Welcome
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
