import Link from 'next/link';
import React from 'react';
import UserLayout from './UserLayout';

const DashboardLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <UserLayout>
            <div className='max-w-[1200px] mx-auto mt-[42px] mb-[56px]'>
                <div className='px-[10px] gap-0 lg:gap-[30px] flex flex-col lg:flex-row'>
                    <div className='w-[100%] lg:w-[25%]'>
                        <p className='mb-[15px] text-xl font-bold text-[#222529]'>My Dashboard</p>
                        <div className='flex flex-col'>
                            {['Orders', 'Wishlist', 'Addresses', 'Account Details', 'Manage Products', 'Manage Categories', 'Manage Orders', 'Manage Users'].map(item =>
                                <p className='pt-[13px] text-[14px] leading-[14px] text-[#777] pb-[15px] border-b border-[#E7E7E7] cursor-pointer hover:text-[#08c] duration-500'><Link href={`/dashboard/${item.split(' ').map(each => each.toLowerCase()).join('-')}`} className='hover:no-underline focus:no-underline hover:text-[#08c] '>
                                    {item}
                                </Link></p>
                            )}
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