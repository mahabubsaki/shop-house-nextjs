import UserLayout from '@/layouts/UserLayout';
import Head from 'next/head';
import React from 'react';

const Login = () => {
    return (
        <>
            <Head>
                <title>{`Sign Up | SHOP House`}</title>
                <meta name='description' content={`Shop till you drop with our e-commerce platform! Review your shopping cart and checkout with ease. Enjoy secure payment and fast delivery options. Start shopping today!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon1.ico" />
            </Head>
            <UserLayout>

            </UserLayout>
        </>
    );
};

export default Login;