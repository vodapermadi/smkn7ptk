import React from "react";
import NavbarComponent from "../../include/NavbarComponent";
import tlas from "../../include/asset/tlas.jpg";
import NavbarKejuruan from "../../include/NavbarKejuruan";

const Tlas = () => {
  return (
    <>
      <div>
        <NavbarKejuruan />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-4">
            <p className="py-2">
              <img
                src={tlas}
                alt="teknik las"
                style={{
                  width: "150px",
                  margin: "30px 0 30px 0",
                  borderRadius: "15px",
                }}
              />
            </p>
          </div>
          <div className="col-md-8 mt-5">
            <p className="containerText text-white py-3 px-4">
              <h2>Teknik Pengelasan (TLas)</h2>
              <h5>
                Mempelajari bagaimana cara untuk mengelas yang baik, dan teori
                tentang apa – apa saja bahan untuk proses pengelasan, jursan las
                sendiri memiliki peluang kerja yang sangat dibutuhkan oleh
                beberapa perusahaan, karena tidak sedikit industri yang
                mensiagakan para pekerja di bidang engginering untuk menjaga
                kecakapan mesin – mesin yang ada di perusahaan, salah satu yang
                dibutuhkan adalah teknik las
              </h5>
            </p>
          </div>
        </div>
        <div className="row containerText justify-content-center">
          <div className="col-md-12 text-white text-center pt-5">
            <h2>APA SAJA YANG DI PELAJARI</h2>
          </div>
          <div className="col-md-6 text-center my-5">
            <h5 className="p-4 containerSpesial">
              Proses Dasar Teknik Mesin <br /> Dasar Perancangan Teknik Mesin{" "}
              <br />
              Menggambar Teknik Mesin <br /> Melakukan Proses Las <br /> Listrik
              Busur Manual, Karbit (OAW), Semiotomatis (MIG), Argon (TIG),
              Tahanan (RW), dan Pengujian Hasil Las
            </h5>
          </div>
        </div>
        <div className="row justify-content-center containerText my-5 py-4 text-center text-white">
          <div className="col-md-12 text-center py-3">
            <h2>Profesi Dan Bidang Pekerjaan</h2>
          </div>
          <div className="col-md-6">
            <h5>
              Teknisi/maintenance diberbagai macam industry manufaktur dan
              konstruksi <br /> teknisi di industry perkapalan <br /> teknisi di berbagai
              bengkel pengelasan dan permesinan <br /> teknisi/maintenance di industry
              alat berat dan otomotif <br /> wirausahawan baru.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tlas;
