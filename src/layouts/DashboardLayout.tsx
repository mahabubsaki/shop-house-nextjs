
import CustomDashboardLink from '@/components/helpers/CustomDashboardLink';
import React from 'react';
import { HiLogout } from 'react-icons/hi';
import UserLayout from './UserLayout';

const DashboardLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <UserLayout>
            <div className='max-w-[1200px] mx-auto mt-[42px] mb-[56px]'>
                <div className='px-[10px] gap-0 lg:gap-[30px] flex flex-col lg:flex-row'>
                    <div className='w-[100%] lg:w-[25%]'>
                        <div className='sticky top-24'>
                            <p className='mb-[15px] text-2xl font-bold text-[#222529]'>My Dashboard</p>
                            <div className='flex flex-col'>
                                <p className='text-[14px] leading-[14px] text-[#777]  border-b border-[#E7E7E7] cursor-pointer hover:text-[#08c] duration-500'>
                                    <CustomDashboardLink className='hover:no-underline inline-block pt-[13px] pb-[15px] focus:no-underline hover:text-[#08c]' href='/dashboard'>
                                        Dashboard
                                    </CustomDashboardLink>
                                </p>
                                {['Orders', 'Wishlist', 'Addresses', 'Refunds', 'Points History', 'Savings', 'Coupouns', 'Reviews', 'Account Details', 'Manage Products', 'Manage Categories', 'Manage Orders', 'Manage Users'].slice(0, 9).map(item =>
                                    <p key={item} className=' text-[14px] leading-[14px] text-[#777]  border-b border-[#E7E7E7] cursor-pointer hover:text-[#08c] duration-500'><CustomDashboardLink href={`/dashboard/${item.split(' ').map(each => each.toLowerCase()).join('-')}`} className='hover:no-underline inline-block pt-[13px] pb-[15px]  focus:no-underline hover:text-[#08c] '>
                                        {item}
                                    </CustomDashboardLink></p>
                                )}
                                <button className='bg-[#222529] max-w-[230px] mx-auto hover:bg-[#34393f] my-4 text-white hover:text-white duration-500 flex justify-center items-center gap-2 px-[25px] leading-10 text-[13px] font-bold'><span>Logout</span> <HiLogout className='text-2xl' /></button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] lg:w-[75%] py-8'>
                        {children}
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default DashboardLayout;