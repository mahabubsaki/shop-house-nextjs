import { homeProductsFeatured, newArrival } from '@/utils/constants';
import { it } from 'node:test';
import React, { useState } from 'react';
import { Pagination } from 'rsuite';
import HomeSingleProduct from '../common/map/HomeSingleProduct';
import CustomSelect from '../helpers/CustomSelect';
import IProduct from '@/interfaces/product.interface';
import { Spinner } from '@chakra-ui/react';

const ProductArea = ({ setCurrentPageNumber, currentProducts, totalProducts, currentPageSize, setActivePage, activePage, loading }: { setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>; currentProducts: IProduct[]; totalProducts: number; currentPageSize: number; setActivePage: React.Dispatch<React.SetStateAction<number>>; activePage: number; loading: boolean; }) => {

    return (
        <>
            {!loading ? <div className='px-[10px] mb-[20px] grid mt-[20px] gap-[20px] grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                {currentProducts.map((item, i) => <HomeSingleProduct delay={i} item={item} key={i} />)}
            </div> : <div className='h-[500px] flex justify-center items-center'>
                <Spinner />
            </div>}
            <div className='py-[25px] pb-[50px] border-t border-x-0 border-b-0 border flex justify-end'>
                <Pagination
                    prev
                    last
                    next
                    first
                    size="md"
                    total={totalProducts}
                    limit={currentPageSize}
                    activePage={activePage}
                    onChangePage={(pageNum) => {
                        setActivePage(pageNum);
                        setCurrentPageNumber(pageNum);
                    }}
                    maxButtons={5}
                />

            </div>
        </>
    );
};

export default ProductArea;