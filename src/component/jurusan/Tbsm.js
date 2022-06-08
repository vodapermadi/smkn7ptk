import React from "react";
import NavbarComponent from "../../include/NavbarComponent";
import NavbarKejuruan from "../../include/NavbarKejuruan";

const Tbsm = () => {
  return (
    <>
      <div>
        <NavbarKejuruan />
      </div>
      <div className="container">
        <div className="row my-5 justify-content-center text-white">
          <div className="col-md-8 mt-3 py-4">
            <p className="containerText p-4">
              <h2 className="py-2 text-center">Teknik Sepeda Motor (TSM)</h2>
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 text-center">
            <h2 className="containerText py-2 text-white">VISI</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h5 className="containerText py-4 text-white">
              Menjadi penyelenggara pendidikan dan pelatihan dibidang <br />{" "}
              otomotif yang menghasilkan tenaga kerja siap pakai di bidang{" "}
              <br /> mekanik sepeda motor yang profesional, dipercaya oleh{" "}
              <br /> masyarakat dan Dunia Usaha/ Dunia Industri
            </h5>
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-3">
            <h2 className="text-white containerText py-2 text-center">MISI</h2>
          </div>
        </div>
        <div className="row containerText justify-content-center py-4">
          <div className="col-md-8 containerSpesial py-4 px-5">
            <h5>
              <ol>
                <li>
                  Menyiapkan tenaga kerja yang terampil di bidang mekanik sepeda
                  motor serta beriman dan bertaqwa kepada Tuhan Yang Maha Esa.
                </li>
                <li>
                  Membina kerjasama yang selaras dengan pelaku industri dan
                  bisnis sepeda motor dalam rangka implementasi link and match.
                </li>
                <li>
                  Mendidik peserta didik agar mampu berkompetisi dan
                  mengembangkan sikap profesional dalam bidang mekanik sepeda
                  motor
                </li>
              </ol>
            </h5>
          </div>
        </div>
        <div className="row mt-5 py-3 justify-content-center">
          <div className="col-md-3 text-center">
            <h2 className="containerText py-2 text-white">TUJUAN</h2>
          </div>
        </div>
        <div className="row pb-5 justify-content-center">
          <div className="col-md-5 containerText m-2">
            <h5 className="text-center py-3 text-white">
              Menghasilkan lulusan yang <br /> profesional khususnya <br /> bidang mekanik
              sepeda <br /> motor.
            </h5>
          </div>
          <div className="col-md-5 containerText m-2">
            <h5 className="text-center py-3 text-white">
            Mampu memanfaatkan <br /> ilmu yang telah didapat
            </h5>
          </div>
          <div className="col-md-5 containerText m-2">
            <h5 className="text-center py-3 text-white">
            Mampu bersaing dari segi <br /> kompetensi, baik lokal <br /> maupun nasional.
            </h5>
          </div>
          <div className="col-md-5 containerText m-2">
            <h5 className="text-center py-3 text-white">
            Menyiapkan peserta didik <br /> untuk melanjutkan ke <br /> perguruan tinggi
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tbsm;
