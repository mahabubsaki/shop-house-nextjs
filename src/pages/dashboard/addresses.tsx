import ShippingBillingForm from '@/components/shared/ShippingBillingForm';
import DashboardLayout from '@/layouts/DashboardLayout';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import fs from 'fs';
import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';


type DataType = {
    abbreviation: string;
    name: string;
};

type PropsType = {
    data: {
        states: DataType[];
    };
};

export const getStaticProps: GetStaticProps<PropsType> = async () => {
    const { states } = JSON.parse(fs.readFileSync('public/states.json', 'utf8')) as { states: DataType[]; };

    return {
        props: {
            data: {
                states,
            },
        },
    };
};


const Addresses = ({ data }: PropsType) => {
    return (
        <>
            <Head>
                <title>{`Shipping & Billing Address | SHOP House`}</title>
                <meta name='description' content={`Find the products you need and want online with ease. Shop our extensive selection of items, compare prices, and make purchases with confidence. Get the best deals on the latest trends, brands, and styles. Free shipping available on eligible orders. Start shopping now!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <DashboardLayout>
                <BreadCrumpNavigator paths={['dashboard', 'addresses']} />
                <div className='py-5 px-0 md:px-[20px]'>
                    <ShippingBillingForm notes={false} data={data} >
                        <div className='flex justify-end mt-4'>
                            <button className='bg-[#222529] hover:bg-[#34393f] text-white hover:text-white duration-500 px-[24px] py-[15px] leading-5 text-[17px] font-bold'>Save Address</button>
                        </div>
                    </ShippingBillingForm>
                </div>
            </DashboardLayout>
        </>
    );
};

export default Addresses;