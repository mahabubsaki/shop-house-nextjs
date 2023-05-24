import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import UserLayout from '@/layouts/UserLayout';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import ImageSlider from '@/components/product/ImageSlider';
import ProductInformation from '@/components/product/ProductInformation';
import InformationTabs from '@/components/product/InformationTabs';
import RelatedProducts from '@/components/product/RelatedProducts';
import apolloClient from '@/configs/apollo-client.config';
import { gql } from '@apollo/client';
import LinkBuilder from '@/utils/name_to_link_builder';
import IProduct from '@/interfaces/product.interface';


export const getServerSideProps: GetServerSideProps<{ name: string; product: IProduct; }> = async (context) => {
    const { name } = context.query;
    let convertedName;
    if (typeof name === 'string') {
        convertedName = name.split('-').join(' ');
    }
    console.log(convertedName);
    const { data } = await apolloClient.query({
        query: gql`
          query ExampleQuery($name: String!) {
            getProductByName(name: $name) {
                _id
                category
                colors
                description
                dimensions
                img
                isHot
                name
                sizes
                discount
                price
                sku
                specialType
                stock
                subCategory
                weight
            }
          }
        `,
        variables: {
            name: convertedName,
        },
    });
    console.log(data);
    return {
        props: {
            name: name + '',
            product: data?.getProductByName?.[0] || {}
        }
    };
};

const SingleProductPage = ({ name, product }: { name: string; product: IProduct; }) => {

    const data = { ...product, reviews: [] };

    console.log(data);
    return (
        <>
            <Head>
                <title>{`${LinkBuilder(name)} | SHOP House`}</title>
                <meta name='description' content={`Buy the ${name} today! This high-quality widget is made from durable materials and comes with a lifetime guarantee. Order now and enjoy fast, free shipping.`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <UserLayout>
                <div className='max-w-[1200px] mx-auto'>
                    <BreadCrumpNavigator paths={['PRODUCTS']} />
                    <div className='flex flex-col md:flex-row mb-[30px]'>
                        <ImageSlider img={data.img} />
                        <ProductInformation category={data.category} description={data.description} discount={data.discount} name={LinkBuilder(name)} price={product.price} reviews={data.reviews.length} sku={data.sku} />
                    </div>
                    <div className='px-[10px]'>
                        <InformationTabs color={data.colors} name={LinkBuilder(name)} dimensions={data.dimensions} size={data.sizes} weight={data.weight} description={data.description} reviews={data.reviews} />
                    </div>
                    <RelatedProducts />
                </div>
            </UserLayout>
        </>
    );
};

export default SingleProductPage;