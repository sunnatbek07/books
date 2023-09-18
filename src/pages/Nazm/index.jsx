import React from "react";
import CardWrapper from "../../components/Layout/CardWrapper";
import { Link } from "react-router-dom";
import CardBook from "../../components/UI/Card/Book/CardBook";

const index = () => {
    return (
        <div className='container'>
            <div className='my-10'>
                <div className='grid grid-cols-7 justify-between gap-x-5 gap-y-[50px]'>
                    {"HELLOWORLDDddd".split("").map((item) => {
                        return (
                            <Link to='/books/1'>
                                <CardBook />
                            </Link>
                        ) 
                    })}
                </div>
            </div>
        </div>
    );
};

export default index;
