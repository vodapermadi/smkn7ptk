import React from "react";
import NavbarComponent from "../../include/NavbarComponent";
import ak from "../../include/asset/ak.jpg";

const Ak = () => {
  return (
    <>
      <div>
        <NavbarComponent />
      </div>
      <div className="container">
        <div className="row justify-content-center my-4">
          <div className="col-md-4 mt-4">
            <p className="py-2">
              <img
                src={ak}
                alt="akutansi"
                style={{
                  width: "225px",
                  margin: "30px 0 30px 0",
                  borderRadius: "15px",
                }}
              />
            </p>
          </div>
          <div className="col-md-8 py-2 px-3 mt-5">
            <p className="containerText py-3 px-4 mt-2 text-white">
              <h2>Akutansi (AK)</h2>
              <h5>
                Adalah suatu proses mencatat, mengklasifikasi, <br /> meringkas,
                mengolah dan menyajikan data, <br /> transaksi serta kejadian
                yang berhubungan <br /> dengan keuangan sehingga dapat digunakan{" "}
                <br /> oleh orang yang menggunakannya dengan <br /> mudah
                dimengerti
              </h5>
            </p>
          </div>
        </div>
        <div className="row containerText justify-content-center py-3 px-5">
          <div className="col-md-12 text-center text-white py-4">
            <h2>APA SAJA YANG DI PELAJARI</h2>
          </div>
          <div className="col-md-5 containerSpesial mx-2 text-center">
            <h5 className="p-4">
              Ekonomi bisnis <br /> Administrasi umum <br /> Etika Profesi{" "}
              <br /> Perbankan dasar <br />
              Spreadsheet <br /> Akuntansi perusahaan jasa <br /> Akuntansi
              Lembaga
            </h5>
          </div>
          <div className="col-md-5 containerSpesial mx-2 text-center">
            <h5 className="p-4">
              Akuntansi perusahaan dagang <br /> Akuntansi perusahaan manufaktur{" "}
              <br />
              Akuntansi keuangan <br /> Komputer akuntansi <br /> Administrasi
              Pajak
            </h5>
          </div>
        </div>
        <div className="row containerText justify-content-center my-5 p-5">
          <div className="col-md-12 text-center text-white">
            <h2>Profesi Dan Bidan Pekerjaan</h2>
          </div>
          <div className="col-md-12 text-center containerSpesial py-4">
            <h5>
              Penata buku muda dalam lingkup akuntansi <br /> Kasir / teller <br /> Juru
              pengkajian <br /> Operator mesin hitung <br /> Administrasi gudang <br /> Menyusun
              laporan keuangan
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ak;
