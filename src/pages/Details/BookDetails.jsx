import React from "react";
import Dbook from "../../assets/images/dunyo.jpeg";
import BookCategory from "../../components/bookCategory/bookCategory";
import BookIcon from "../../assets/images/bookIcon.svg";
import CardBook from "../../components/UI/Card/Book/CardBook";
import { Link } from "react-router-dom";

const BookDetails = () => {
    return (
        <div className="container">
            <div className="wrapper_b flex items-start gap-x-[45px] py-[60px]">
                <div className="min-w-[519px]">
                    <img src={Dbook} className="object-contain w-full" alt="Book image" />
                </div>

                <div className="grow">
                    <h2 className="text-5xl text-[#C9AC8C]">Dunyoning ishlari</h2>
                    <div className="flex items-center gap-[10px] mb-5">
                        <p className="font-[SteinbeckRegular] text-[#C9AC8C]">
                            O'tkir Hoshimov
                        </p>
                        <span>|</span>
                        <div className="flex items-center gap-2">
                            <i className="bx bxs-star text-base"></i>
                            <span className="text-sm font-[SteinbeckRegular]">4.1</span>
                        </div>
                    </div>
                    <div className="block">
                        <p className="p-[10px] font-[SteinbeckRegular] flex gap-[10px]">
                            Sahifalar soni: <strong>376</strong>
                        </p>
                        <p className="p-[10px] font-[SteinbeckRegular] flex gap-[10px]">
                            Chop etilgan: <strong>2021</strong>
                        </p>
                        <p className="p-[10px] font-[SteinbeckRegular] flex gap-[10px]">
                            Janri: <strong>Tarixiy</strong>
                        </p>
                        <p className="p-[10px] font-[SteinbeckRegular] flex gap-[10px]">
                            Nashriyot <strong>Nihol nashr</strong>
                        </p>
                    </div>

                    <div className="flex items-center gap-5 my-[28px]">
                        <p className="min-w-[110px] font-[SteinbeckRegular] text-[#C9AC8C]">
                            To’liq ma’lumot
                        </p>
                        <i className="bx bx-down-arrow-alt text-base"></i>
                        <div className="w-full h-[1px] bg-[#C9AC8C]"></div>
                    </div>
                    <p className="p-[10px] font-[SteinbeckRegular] text-[rgba(255, 255, 255, 0.80)] text-base">
                        Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва
                        собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат
                        йигит-қизларининг хотирасига бағишланади. <br /> <br /> Роман
                        воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу
                        қадар тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига
                        ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат, кўринмас ва
                        ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган
                        ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар
                        сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва
                        аччиқ-аччиқ кулдиради. Ўтган аср бошида Германияда ўқиган талабалар,
                        улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир
                        тарозига тортилади.
                    </p>

                    <p className="font-[SteinbeckRegular] text-[#C9AC8C] text-base mt-[36px] mb-[30px]">
                        Mavjud formatlar
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex gap-[26px]">
                            <div className="flex flex-col gap-2 items-center font-[SteinbeckRegular]">
                                <i className="bx bxs-book-alt"></i>
                                <p>Qog’oz kitob</p>
                                <p>27 000 so’m</p>
                            </div>

                            <div className="flex flex-col gap-2 items-center font-[SteinbeckRegular]">
                                <i className="bx bx-headphone"></i>
                                <p>Audiokitob</p>
                                <p>26:23 soat</p>
                            </div>

                            <div className="flex flex-col gap-2 items-center font-[SteinbeckRegular]">
                                <i className="bx bx-mobile"></i>
                                <p>Elektron</p>
                                <p>pdf, epub</p>
                            </div>
                        </div>

                        <button className="py-4 px-8 bg-[#C9AC8C] text-[#3C2710] font-[SteinbeckRegular]">
                            Javonga qo’shish{" "}
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <BookCategory />

                <div className="flex gap-11 mt-10 mb-[76px] overflow-x-scroll py-5">
                    <div className="bookInfo min-w-[708px] h-fit pt-[46px] pb-4 pl-10 pr-[100px] bg-black text-white relative">
                        <img src={BookIcon} className="absolute top-[-10px] left-[35px] scale-125" alt="''" />
                        <p className="c_text text-base">
                            Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami bilan
                            bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib
                            o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot to‘lqini
                            ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza
                            olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                        </p>

                        <div className="flex items-center justify-end gap-[10px] mt-[6px]">
                            <i class='bx bxs-heart text-2xl'></i>
                            <i class='bx bxs-share-alt text-2xl' ></i>
                        </div>
                    </div>

                    <div className="bookInfo min-w-[708px] h-fit pt-[46px] pb-4 pl-10 pr-[100px] bg-black text-white relative">
                        <img src={BookIcon} className="absolute top-[-10px] left-[35px] scale-125" alt="''" />
                        <p className="c_text text-base">
                            Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami bilan
                            bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib
                            o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot to‘lqini
                            ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza
                            olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                        </p>

                        <div className="flex items-center justify-end gap-[10px] mt-[6px]">
                            <i class='bx bxs-heart text-2xl'></i>
                            <i class='bx bxs-share-alt text-2xl' ></i>
                        </div>
                    </div>

                    <div className="bookInfo min-w-[708px] h-fit pt-[46px] pb-4 pl-10 pr-[100px] bg-black text-white relative">
                        <img src={BookIcon} className="absolute top-[-10px] left-[35px] scale-125" alt="''" />
                        <p className="c_text text-base">
                            Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami bilan
                            bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib
                            o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot to‘lqini
                            ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza
                            olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                        </p>

                        <div className="flex items-center justify-end gap-[10px] mt-[6px]">
                            <i class='bx bxs-heart text-2xl'></i>
                            <i class='bx bxs-share-alt text-2xl' ></i>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between mb-[60px]">
                    <h4 className="c_text text-[25px] text-[#C9AC8C]">Sizga yoqishi mumkin</h4>
                    <button className="c_text text-[25px]">Barchasini ko’rish</button>
                </div>
                <div className="flex gap-10 overflow-x-scroll h-fit py-5 mb-20">
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
    );
};

export default BookDetails;
