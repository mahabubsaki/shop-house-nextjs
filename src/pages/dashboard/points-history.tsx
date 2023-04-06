import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import DashboardLayout from '@/layouts/DashboardLayout';
import Head from 'next/head';
import React from 'react';

const PointsHistory = () => {
    return (
        <>
            <Head>
                <title>{`Points History | SHOP House`}</title>
                <meta name='description' content={`Find the products you need and want online with ease. Shop our extensive selection of items, compare prices, and make purchases with confidence. Get the best deals on the latest trends, brands, and styles. Free shipping available on eligible orders. Start shopping now!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <DashboardLayout>
                <BreadCrumpNavigator paths={['Dashboard', 'Points History']} />
                <div>
                    <p>Points History</p>
                </div>
            </DashboardLayout>
        </>
    );
};

export default PointsHistory;