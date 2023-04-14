import UserLayout from '@/layouts/UserLayout';
import Head from 'next/head';
import React from 'react';

const Signup = () => {
    return (
        <>
            <Head>
                <title>{`Sign Up | SHOP House`}</title>
                <meta name='description' content={`Shop till you drop with our e-commerce platform! Review your shopping cart and checkout with ease. Enjoy secure payment and fast delivery options. Start shopping today!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <UserLayout>
                <div className='max-w-[clamp(320px,100%,500px)] mx-auto px-[10px] bg-[#fdfdfd] shadow-md rounded-lg my-[50px] border py-5'>
                    <h1 className='text-2xl text-[#222529] font-bold text-center'>Sign Up</h1>
                    <p className='text-base text-[#777] text-center'>Create a new account</p>
                </div>
            </UserLayout>
        </>
    );
};

export default Signup;