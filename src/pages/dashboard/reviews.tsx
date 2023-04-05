import DashboardLayout from '@/layouts/DashboardLayout';
import Head from 'next/head';
import React from 'react';
import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';

const Reviews = () => {
    return (
        <>
            <Head>
                <title>{`Orders | SHOP House`}</title>
                <meta name='description' content={`Find the products you need and want online with ease. Shop our extensive selection of items, compare prices, and make purchases with confidence. Get the best deals on the latest trends, brands, and styles. Free shipping available on eligible orders. Start shopping now!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <DashboardLayout>
                <BreadCrumpNavigator paths={['dashboard', 'reviews']} />
                <div className='py-[20px]'>
                    <p>My Reviews</p>
                </div>
            </DashboardLayout>
        </>
    );
};

export default Reviews;