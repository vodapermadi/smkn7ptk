import React from "react";
import NavbarComponent from "../include/NavbarComponent.js";

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
      </div>
    </>
  );
};

export default ContentBlog;