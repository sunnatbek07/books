import "./style.scss";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const index = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") || false);
    const navigate = useNavigate()

    const logout = (() => {

        if (localStorage.getItem("token")) {
            localStorage.clear();
            toast.info("Logged out");
        } else {
            setIsLoggedIn(false)
        }

        setTimeout(() => {
            navigate('/signin');
        }, 1600)
    })

    return (
        <header className="border-b-2">
            <div className="container">
                <ToastContainer />
                <nav className="flex justify-between h-[80px] items-center">
                    <Link to="/">
                        <span className="header_txt text-[#C9AC8C] uppercase text-[25px]">Badiiyat</span>
                    </Link>

                    <div className="flex items-center  gap-x-[130px]">
                        <ul className="flex gap-x-[43.5px]">
                            <li>
                                <NavLink className="link font-[HelveticaNeueCyr_Light]" to="/">
                                    Bosh sahifa
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link font-[HelveticaNeueCyr_Light]" to="/nasr">
                                    Nasr
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link font-[HelveticaNeueCyr_Light]" to="/nazm">
                                    Nazm
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link font-[HelveticaNeueCyr_Light]" to="/maqola">
                                    Maqolalar
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link font-[HelveticaNeueCyr_Light]" to="/forum">
                                    Forum
                                </NavLink>
                            </li>
                        </ul>

                        <Dropdown label={localStorage.getItem("username")} className="drop">
                            <ul>
                                <li>
                                    <Link
                                        className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 font-[HelveticaNeueCyr_Light] block m-1"
                                        to="/profile"
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 font-[HelveticaNeueCyr_Light] block m-1"
                                        to="/dashboard"
                                    >
                                        Maydon
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 font-[HelveticaNeueCyr_Light] block m-1"
                                        to="/settings"
                                    >
                                        Sozlanmalar
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => logout()}
                                        className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 font-[HelveticaNeueCyr_Light] block m-1"
                                    >
                                        {isLoggedIn ? "Chiqish" : "Kirish"}
                                    </button>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default index;
