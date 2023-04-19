import { homeProductsFeatured, newArrival } from '@/utils/constants';
import { it } from 'node:test';
import React, { useState } from 'react';
import { Pagination } from 'rsuite';
import HomeSingleProduct from '../common/map/HomeSingleProduct';
import CustomSelect from '../helpers/CustomSelect';

const ProductArea = () => {
    const [activePage, setActivePage] = useState(1);
    return (
        <>
            <div className='px-[10px] mb-[20px] grid mt-[20px] gap-[20px] grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                {[...newArrival, ...homeProductsFeatured].map((item, i) => <HomeSingleProduct delay={i} item={item} key={i} />)}
            </div>
            <div className='py-[25px] pb-[50px] border-t border-x-0 border-b-0 border flex justify-end'>
                <Pagination
                    prev
                    last
                    next
                    first
                    size="md"
                    total={100}
                    limit={10}
                    activePage={activePage}
                    onChangePage={setActivePage}
                    maxButtons={5}
                />

            </div>
        </>
    );
};

export default ProductArea;