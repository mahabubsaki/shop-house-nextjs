import React from 'react';
import UserLayout from './UserLayout';
import { MdNavigateNext } from 'react-icons/md';
const CartLayout = ({ children, route }: { children: React.ReactNode, route: string; }) => {
    return (
        <UserLayout>
            <div className='max-w-[1200px] mx-auto'>
                <div className='mt-[47px] mb-[21px] flex flex-wrap gap-[22px] justify-center font-bold items-center text-[20px] leading-7 px-10 text-[#919292]'>
                    <span className={`cursor-pointer ${route === 'cart' ? 'text-[#08c]' : route === 'checkout' ? 'text-[#222524]' : route === 'order-complete' ? 'text-[#222524]' : 'text-inherit'}`}>Cart</span>
                    <MdNavigateNext className='text-4xl' />
                    <span className={` cursor-pointer ${route === 'checkout' ? 'text-[#08c]' : route === 'order-complete' ? 'text-[#222524]' : 'text-inherit'}`}>Checkout</span>
                    <MdNavigateNext className='text-4xl' />
                    <span className={`cursor-pointer ${route === 'order-complete' ? 'text-[#08c]' : 'text-inherit'}`}>Order Complete</span>
                </div>

                {children}

            </div>
        </UserLayout>
    );
};

export default CartLayout;