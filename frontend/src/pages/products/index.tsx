import CategoryBanner from '@/components/category/CategoryBanner';
import ProductArea from '@/components/category/ProductArea';
import SortFilterDrawer from '@/components/category/SortFilterDrawer';
import SortFilterSection from '@/components/category/SortFilterSection';
import SortFilterSectionDesktop from '@/components/category/SortFilterSectionDesktop';
import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import UserLayout from '@/layouts/UserLayout';
import { useDisclosure } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import IProduct from '@/interfaces/product.interface';
import { fetchProducts } from '@/fetchers/fetchProducts.fetcher';
interface PageProps {
    products: IProduct[];
    pageSize: number;
    pageNumber: number;
    totalProduct: number;
    sort: string;
    type: boolean;
}

const Category = ({ products, pageNumber, pageSize, totalProduct, sort, type }: PageProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [totalProducts, setTotalProducts] = useState(totalProduct);
    const [currentPageSize, setCurrentPageSize] = useState(pageSize);
    const [currentPageNumber, setCurrentPageNumber] = useState(pageNumber);
    const [currentType, setCurrentType] = useState(type);
    const [currentSort, setCurrentSort] = useState(sort);
    const [currentProducts, setCurrentProducts] = useState(products);
    const [activePage, setActivePage] = useState(1);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        try {

            (async function fetchPageData() {
                setLoading(true);
                const { products, totalProduct } = await fetchProducts(Number(currentPageSize || 12), Number(currentPageNumber || 1), (currentSort || 'name').toString(), !!(currentType));
                console.log(products);
                setCurrentProducts(products);
                setTotalProducts(totalProduct);
                setLoading(false);
            })();
        }
        catch (err) {

        }
    }, [currentPageSize, currentPageNumber, currentSort, currentType]);
    const btnRef = useRef<HTMLButtonElement>(null);
    return (
        <>
            <Head>
                <title>Category | SHOP HOUSE</title>
                <meta name='description' content="SHOP HOUSE category page is an essential section that houses all the products belonging to a particular category. In this section, customers can browse through a vast range of items related to a specific category, such as electronics, fashion, beauty, home and kitchen, sports, and outdoor, to mention a few. The category page is a crucial section of the ecommerce site that helps customers navigate through the different products and find what they are looking for with ease.The category page usually displays products in a grid format with clear images, product titles, and prices. The page's layout is designed to be visually appealing, user-friendly, and mobile-responsive, ensuring that customers have an enjoyable browsing experience. Customers can filter products by different attributes such as price, color, size, and brand, making it easier to find what they want.A well-organized category page provides customers with the flexibility to browse and compare products and make informed purchase decisions. The page also allows customers to view product ratings and reviews from other customers, providing them with additional information to help them make a decision. Customers can add items to their cart and continue browsing, making the shopping experience seamless.In conclusion, the category page is an essential section of an ecommerce site that provides customers with a user-friendly interface to browse and shop for products. It helps customers find what they are looking for quickly and efficiently, and allows them to make informed purchase decisions by providing product information, ratings, and reviews. A well-organized category page can enhance the overall shopping experience, leading to increased customer satisfaction and sales for the ecommerce site." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <UserLayout>
                <CategoryBanner />
                <div className='max-w-[1200px] mx-auto'>
                    <BreadCrumpNavigator paths={['Category']} />
                    <SortFilterSection setActivePage={setActivePage} setCurrentPageNumber={setCurrentPageNumber} setCurrentPageSize={setCurrentPageSize} setCurrentSort={setCurrentSort} setCurrentType={setCurrentType} btnRef={btnRef} onOpen={onOpen} />
                    <SortFilterSectionDesktop setActivePage={setActivePage} setCurrentPageNumber={setCurrentPageNumber} setCurrentPageSize={setCurrentPageSize} setCurrentSort={setCurrentSort} setCurrentType={setCurrentType} btnRef={btnRef} onOpen={onOpen} />
                    <SortFilterDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
                    <ProductArea loading={loading} setActivePage={setActivePage} activePage={activePage} setCurrentPageNumber={setCurrentPageNumber} currentProducts={currentProducts} totalProducts={totalProducts} currentPageSize={currentPageSize} />
                </div>
            </UserLayout>
        </>
    );
};


export const getServerSideProps: GetServerSideProps<PageProps> = async ({ query }) => {
    const { pageSize = 12, pageNumber = 1, sort = 'name', type = true } = query;
    const { products, totalProduct } = await fetchProducts(Number(pageSize), Number(pageNumber), sort.toString(), !!type);

    return {
        props: { products, pageSize: Number(pageSize), pageNumber: Number(pageNumber), totalProduct: Number(totalProduct), sort: sort.toString(), type: !!type },
    };
};




export default Category;