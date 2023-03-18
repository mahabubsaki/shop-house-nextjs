import React from 'react';
import styles from '@/styles/CategoryBanner.module.css';

const CategoryBanner = () => {
    return (
        <div>
            <div className={`${styles.container} py-[68px] relative`}>
                <div className='inset-0 max-w-[1200px] mx-auto px-[15px] lg:px-[10px]'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='ml-[8%] pb-[27px] md:pb-0 px-[10px] flex-[0_0_100%] md:flex-[0_0_42%] lg:flex-[0_0_33.33%]'>
                            <h3 className='uppercase ml-0 md:ml-[18px] text-[#222529] text-[38px] md:text-[42px] xl:text-[48px] font-bold mb-[14px] md:mb-[18px]'>Electronic <br /> Deals</h3>
                            <button className='ml-0 md:ml-[18px] hover:bg-[#34393f] duration-500 hover:border-[#34393f] bg-[#222529] border border-[#222529] py-[10px] px-[16px] lg:py-[12px] lg:px-[20px] text-white text-[10px] lg:text-[12px] font-bold'>GET YOURS!</button>
                        </div>
                        <div className='ml-[8%] md:ml-0 pt-[10px] px-[10px] flex-[0_0_100%] md:flex-[0_0_42%] lg:flex-[0_0_33.33%]'>
                            <div>
                                <h3 className='w-fit mb-1 py-[5px] px-2 -rotate-2 bg-white text-[#222529] text-[14px] md:text-[18px] font-bold leading-7'>Exclusive COUPON</h3>
                                <div className='relative'>
                                    <p className='w-fit absolute text-white xs:text-inherit bottom-2 -left-6 text-[10px] font-bold -rotate-90'>UP TO</p>
                                    <p className='w-fit mb-1 py-[5px] px-2 -rotate-2 bg-white text-[#222529] text-[20px] md:text-[25px] font-bold leading-7'>$100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryBanner;;