import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookCategory = () => {
    const [bookCategory, setBookCategory] = useState([
        {
            title: "Muallif haqida",
            link: "/"
        },
        {
            title: "Kitobdan iqtiboslar",
            link: "/"
        },
        {
            title: "Kitobxonlar taqrizi",
            link: "/"
        }
    ]);

    return (
        <div>
            <ul className='flex items-center gap-x-[50px]'>
                {
                    bookCategory.length ? bookCategory.map((link) => {
                        return (
                            <li className='p-[10px]' key={link.title}>
                                <Link to='/' className='c_text text-[20px] text-[rgba(255, 255, 255, 0.60)]'>
                                    {link?.title}
                                </Link>
                            </li>
                        )
                    }) : ""
                }
            </ul>
        </div>
    )
}

export default BookCategory