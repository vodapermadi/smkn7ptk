import React from "react";
import NavbarComponent from "../../include/NavbarComponent";
import mm from "../../include/asset/mm.jpg";
import NavbarKejuruan from "../../include/NavbarKejuruan";

const Mm = () => {
  return (
    <>
      <div>
        <NavbarKejuruan />
      </div>
      <div className="container">
        <div className="row my-5 justify-content-center text-white">
          <div className="col-md-4">
            <p className="py-2">
              <img
                src={mm}
                alt="multimedia"
                style={{
                  width: "250px",
                  margin: "30px 0 30px 0",
                  borderRadius: "50%",
                }}
              />
            </p>
          </div>
          <div className="col-md-8 mt-3 py-4">
            <p className="containerText p-4">
              <h2 className="py-2">Multimedia (mm)</h2>
              <h5>
                Merupakan salah satu jurusan SMK di bidang <br /> komputer yang
                mempelajari tentang penggunaan <br /> komputer guna untuk
                menyajikan data teks, <br /> suara, gambar, animasi, serta video
                yang dibuat <br />
                semenarik mungkin.
              </h5>
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
              Menjadi pusat pendidikan dan pengembangan keilmuan guna <br />{" "}
              untuk menyiapkan tenaga kerja tingkat menengah yang berjiwa <br />{" "}
              wirausaha dan memiliki daya saing baik pada dunia usaha dan <br />{" "}
              industry.
            </h5>
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-3">
            <h2 className="text-white containerText text-center">MISI</h2>
          </div>
        </div>
        <div className="row containerText justify-content-center py-4">
          <div className="col-md-8 containerSpesial py-4 px-5">
            <ol>
              <li>
                <h5>
                  Menyiapkan tamatan yang bertaqwa dan berbudi luhur dan <br />
                  mempunyai semanta juang dalam membangun karier dan <br />{" "}
                  memiliki etos kerja yang tinggi serta dapat bekerjasama.
                </h5>
              </li>
              <li>
                <h5>
                  Menyiapkan tamatan yang bertaqwa dan disiplin dan <br />{" "}
                  memiliki semngat kerja yang tinggi
                </h5>
              </li>
              <li>
                <h5>
                  Menyiapkan sesuai kebutuhan dan permintaan bangsa <br /> pasar
                  (industry)
                </h5>
              </li>
              <li>
                <h5>
                  Meningkatkan daya serap tamatan didunia usaha / dunia <br />{" "}
                  industry atau dapat melanjutkan jenjang pendidikan yang <br />{" "}
                  lebih tinggi tertutama dibidang Multimedia.{" "}
                </h5>
              </li>
            </ol>
          </div>
        </div>
        <div className="row mt-5 py-5 justify-content-center">
          <div className="col-md-3 text-center">
            <h2 className="containerText py-2 text-white">TUJUAN</h2>
          </div>
        </div>
        <div className="row pb-5 justify-content-center">
          <div className="col-md-5">
            <h5 className="text-center containerText py-3 text-white">
              Menghasilkan lulusan <br /> dibidang Multimedia yang <br /> dapat
              diterapkan di dunia <br /> industry
            </h5>
          </div>
          <div className="col-md-5">
            <h5 className="text-center containerText py-3 text-white">
              Menghasilkan lulusan <br /> dibidang Multimedia yang <br /> dapat
              diterapkan di dunia <br /> industry
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mm;
