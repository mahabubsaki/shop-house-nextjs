import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import UserLayout from '@/layouts/UserLayout';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import ImageSlider from '@/components/product/ImageSlider';
import ProductInformation from '@/components/product/ProductInformation';
import InformationTabs from '@/components/product/InformationTabs';
import RelatedProducts from '@/components/product/RelatedProducts';


export const getServerSideProps: GetServerSideProps<{ name: string; }> = async (context) => {
    const { name } = context.query;
    return {
        props: {
            name: name + '',
        }
    };
};

const SingleProductPage = ({ name }: { name: string; }) => {
    const data = {
        img: ['https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-1-big.jpg', 'https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2-big.jpg', 'https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-3-big.jpg', 'https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-4-big.jpg', 'https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-5-big.jpg'],
        reviews: [{ avatar: 'https://portotheme.com/html/porto_ecommerce/assets/images/blog/author.jpg', star: 3, comment: 'Excellent.', name: 'Joe Doe', date: "2018-4-12" }, { avatar: 'https://portotheme.com/html/porto_ecommerce/assets/images/blog/author.jpg', star: 3, comment: 'Excellent.', name: 'Joe Doe', date: "2018-4-12" }, { avatar: 'https://portotheme.com/html/porto_ecommerce/assets/images/blog/author.jpg', star: 3, comment: 'Excellent.', name: 'Joe Doe', date: "2018-4-12" }, { avatar: 'https://portotheme.com/html/porto_ecommerce/assets/images/blog/author.jpg', star: 3, comment: 'Excellent.', name: 'Joe Doe', date: "2018-4-12" }, { avatar: 'https://portotheme.com/html/porto_ecommerce/assets/images/blog/author.jpg', star: 3, comment: 'Excellent.', name: 'Joe Doe', date: "2018-4-12" }, { avatar: 'https://portotheme.com/html/porto_ecommerce/assets/images/blog/author.jpg', star: 3, comment: 'Excellent.', name: 'Joe Doe', date: "2018-4-12" }],
        price: 1999,
        discount: 15,
        sku: 654613612,
        category: 'shoes',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
        weight: 23,
        dimensions: [12, 24, 35],
        color: ['Black', 'Green', 'Indigo'],
        size: ['L', 'M', 'S']
    };


    return (
        <>
            <Head>
                <title>{`${name} | SHOP House`}</title>
                <meta name='description' content={`Buy the ${name} today! This high-quality widget is made from durable materials and comes with a lifetime guarantee. Order now and enjoy fast, free shipping.`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <UserLayout>
                <div className='max-w-[1200px] mx-auto'>
                    <BreadCrumpNavigator paths={['PRODUCTS']} />
                    <div className='flex flex-col md:flex-row mb-[30px]'>
                        <ImageSlider img={data.img} />
                        <ProductInformation category={data.category} description={data.description} discount={data.discount} name={name} price={data.price} reviews={data.reviews.length} sku={data.sku} />
                    </div>
                    <div className='px-[10px]'>
                        <InformationTabs color={data.color} name={name} dimensions={data.dimensions} size={data.size} weight={data.weight} description={data.description} reviews={data.reviews} />
                    </div>
                    <RelatedProducts />
                </div>
            </UserLayout>
        </>
    );
};

export default SingleProductPage;