import React from "react";
import author from "../../assets/images/Hoshimov.jpeg";
import "./style.scss";
import CardBook from "../../components/UI/Card/Book/CardBook";
import { Link } from "react-router-dom";

const AuthorDetails = () => {
    return (
        <div className="container">
            <div className="wrapper_d flex items-start gap-[100px]">
                <div className="min-w-[582px]">
                    <img src={author} alt="Author image" />
                    <div className="flex items-center">
                        <div className="mt-10 flex flex-col gap-y-1">
                            <p className="text-[rgba(255, 255, 255, 0.60)] text-xs font-[VisueltPro-Light]">Tavallud sanasi</p>
                            <h3 className="text-[#C9AC8C] text-[39px]">5-Avg 1941</h3>
                            <p className="text-[rgba(255, 255, 255, 0.60)] text-xs font-[VisueltPro-Light]">Toshkent, Uzbekistan</p>
                        </div>
                    </div>
                </div>
                <div className="pt-[52px]">
                    <h2 className="mb-5 text-[#C9AC8C] text-5xl">O’tkir Hoshimov</h2>
                    <p className="mb-8 p-[10px] font-[SteinbeckRegular]">
                        Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi
                        Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov
                        mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti
                        (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika
                        kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959
                        yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”,
                        “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih,
                        tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy
                        xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri
                        (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida
                        bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda
                        “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005
                        yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va
                        axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“
                        jurnalida bosh muharrir boʻlib ishladi.
                    </p>
                    <div className="mb-12">
                        <div className="flex items-center gap-[10px] mb-1">
                            <i className="bx bxs-bookmark text-3xl text-[#C9AC8C]"></i>
                            <span className="text-xl text-[#C9AC8C]">Ijodi</span>
                        </div>
                        <p className="ml-10 font-[SteinbeckRegular]">
                            Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida
                            ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga
                            muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
                            qaytmaydi“ qissasi boʻldi.
                        </p>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-[31px] text-[#C9AC8C]">Asarlari</h3>
                        <button className="font-[SteinbeckRegular] text-base">Barchasini ko’rish</button>
                    </div>
                    <div className="max-w-[578px] h-[345px] flex gap-x-10 mb-5 overflow-x-scroll">
                        <Link to='/books/1'>
                            <CardBook />
                        </Link>
                        <Link to='/books/1'>
                            <CardBook />
                        </Link>
                        <Link to='/books/1'>
                            <CardBook />
                        </Link>
                        <Link to='/books/1'>
                            <CardBook />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorDetails;
