import React from "react";
import NavbarComponent from "../include/NavbarComponent.js";
import { Link } from "react-router-dom";
import rpl from "../include/asset/rpl2.jpg";
import tkj from "../include/asset/tkj2.jpg";
import mm from "../include/asset/mm.jpg";
import ak from "../include/asset/ak.jpg";
import tlas from "../include/asset/tlas.jpg";

export const ContentBlog = () => {
  return (
    <>
      <div>
        <NavbarComponent />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 text-center mt-5">
            <h4 className="containerText py-2 text-white">VISI DAN MISI</h4>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-10">
            <p className="containerText p-4 text-white">
              <h4>VISI</h4>
              Smk Negeri 7 Pontianak Sebagai Pusat Pendidikan dan Pelatihan
              Kejuruan Bermutu, Membentuk Peserta Didik yang Berakhlaq Mulia dan
              Berdaya Saing Tinggi
            </p>
          </div>
          <div className="col-md-10">
            <p className="containerText p-4 text-white">
              <h4>MISI</h4>
              <ol>
                <li>
                  Meningkatkan mutu pembelajaran dengan pendekatan life skill
                  education
                </li>
                <li>
                  Meningkatkan ketersediaan sarana prasarana secara bertahap dan
                  berkelanjutan
                </li>
                <li>
                  Meningkatkan pemberdayaan Pendidik dan Tenaga Kependidikan
                </li>
                <li>
                  Melaksanakan tata Kelola pelayanan yang mudah, cepat, akurat,
                  transparan dan akuntabel
                </li>
                <li>Mengembangkan unit produksi/teaching factory</li>
                <li>
                  Menumbuhkembangkan minat, bakat, prestasi, budaya jujur,
                  disiplin, taat beribadah, peduli lingkungan dan peduli sesame,
                  terhadap seluruh warga sekolah melalui kegiatan
                  ekstrakurikuler dan interaksi social kehidupan sekolah{" "}
                </li>
                <li>
                  Meningkatkan sinergisitas kemitraan dengan Dunia Usaha/Dunia
                  Industri dan pemangku kepentingan lainnya
                </li>
              </ol>
            </p>
          </div>
        </div>
        <div className="row justify-content-center py-5 mt-4">
          <div className="col-md-4">
            <h4 className="text-center containerText py-2 text-white">
              JURUSAN
            </h4>
          </div>
        </div>

        {/* rekayasa perangkat lunak */}

        <div className="row justify-content-center my-4">
          <div className="col-md-6 text-center">
            <p>
              <img
                src={rpl}
                alt="rekayasa perangkat lunak"
                style={{ width: "300px", borderRadius: "15px" }}
              />
            </p>
            <Link to={`/jurusan/rpl`} className="buttonRPL text-white">
              Rekayasa Perangkat Lunak
            </Link>
          </div>

          {/* teknik komputer jaringan */}

          <div className="col-md-6 text-center">
            <p className="py-2">
              <img
                src={tkj}
                alt="teknik komputer jaringan"
                style={{
                  width: "400px",
                  margin: "30px 0 30px 0",
                  borderRadius : "15px"
                }}
              />
            </p>
            <Link to={`/jurusan/tkj`} className="buttonTKJ text-white">
              Teknik Komputer Jaringan
            </Link>
          </div>

          {/* multimedia */}

          <div className="col-md-6 text-center">
            <p className="py-2">
              <img
                src={mm}
                alt="multimedia"
                style={{
                  width: "300px",
                  margin: "30px 0 30px 0",
                  borderRadius : "15px"
                }}
              />
            </p>
            <Link to={`/jurusan/mm`} className="buttonTKJ text-white">
              Multimedia
            </Link>
          </div>

          {/* akutansi */}

          <div className="col-md-6 text-center">
            <p className="py-2">
              <img
                src={ak}
                alt="akutansi"
                style={{
                  width: "265px",
                  margin: "30px 0 30px 0",
                  borderRadius : "15px"
                }}
              />
            </p>
            <Link to={`/jurusan/ak`} className="buttonTKJ text-white">
              Akutansi
            </Link>
          </div>

          {/* teknik las */}

          <div className="col-md-6 text-center">
            <p className="py-2">
              <img
                src={tlas}
                alt="teknik las"
                style={{
                  width: "150px",
                  margin: "30px 0 30px 0",
                  borderRadius : "15px"
                }}
              />
            </p>
            <Link to={`/jurusan/tlas`} className="buttonTKJ text-white">
              Teknik Pengelasan
            </Link>
          </div>

          {/* teknik bengkel */}

          <div className="col-md-6 text-center">
            <p className="py-2 mt-4">
              <div className="kotak">
                <h2>No Logo</h2>
              </div>
            </p>
            <Link to={`/jurusan/tbsm`} className="buttonTBSM text-white">
              Teknik Bisnis Sepeda Motor
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentBlog;
