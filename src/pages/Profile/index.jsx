import React from 'react';
import avatar from "../../assets/images/avatar.png";
import avatar_star from "../../assets/images/avatar_star.svg";
import { Tabs, Table } from "flowbite-react";
import CardBook from './../../components/UI/Card/Book/CardBook';

const index = () => {
    return (
        <div className="container">
            <div className='pb-10'>
                <div className='profileCard flex py-10 px-[76px] border gap-[34px] my-[21px] rounded-xl'>
                    <div>
                        <div className='relative'>
                            <img src={avatar} alt="avatar" />
                            <img src={avatar_star} className='absolute bottom-0 right-0' alt="avatar star" />
                        </div>
                        <h4 className='text-center mt-[11px] mb-[6px] c_text text-[22px] text-[#C9AC8C]'>Oltin kitobxon</h4>
                        <h5 className='text-center c_text text-[22px]'>186 ta kitob o’qigan</h5>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h2 className='c_text text-[32px] text-[#C9AC8C]'>Farruxbek Abdullayev</h2>
                        <p className='c_text text-[22px]'><strong>Tavallud:</strong>February 08, 1999</p>
                        <p className='c_text text-[22px]'><strong>Manzili:</strong>Jizzax</p>
                        <p className='c_text text-[22px]'><strong>Bio:</strong>Graphic designer and Developer</p>
                    </div>
                </div>
                <div className='flex gap-x-9'>
                    <div>
                        <div className='w-[345px] py-4 px-7 rounded-[14px] h-[425px] mb-4 border'>
                            <div className='flex items-center justify-between'>
                                <h4>Hozir o’qilmoqda...</h4>
                                <i className='bx bxs-grid-alt text-2xl text-[#6c6c6c]'></i>
                            </div>
                        </div>

                        <div className='py-4 px-7 rounded-[14px] border h-[550px]'>
                            <h4>Audio kitob</h4>
                        </div>
                    </div>
                    <div className='grow'>
                        <Tabs.Group aria-label="Pills" style="pills">
                            <Tabs.Item title="O’qilganlar" className='c_text'>

                            </Tabs.Item>
                            <Tabs.Item title="O’qishni xohlayman" className='c_text'>

                            </Tabs.Item>
                            <Tabs.Item title="O’qilmoqda" className='c_text'>

                            </Tabs.Item>
                            <Tabs.Item title="Adiblar" className='c_text'>

                            </Tabs.Item>
                        </Tabs.Group>

                        <div className='grid grid-cols-5 gap-y-[50px] gap-x-4'>
                            <CardBook />
                            <CardBook />
                            <CardBook />
                            <CardBook />
                            <CardBook />
                            <CardBook />
                            <CardBook />
                            <CardBook />
                            <CardBook />
                            <CardBook />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;