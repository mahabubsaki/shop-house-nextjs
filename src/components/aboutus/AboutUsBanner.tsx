import React from 'react';
import styles from '@/styles/AboutUsBanner.module.css';
import CustomDarkButton from '../helpers/CustomDarkButton';


const AboutUsBanner = () => {
    return (
        <div>
            <div className={`${styles.container} py-[85px] `}>
                <div className='inset-0 max-w-[1200px] relative flex flex-col gap-6 mx-auto px-[15px] lg:px-[10px]'>
                    <div>
                        <h1 className='text-[#1e3636] text-base md:text-lg font-bold uppercase'>About Our Company</h1>
                        <h1 className='text-[#1e3636] text-3xl md:text-4xl font-black  uppercase'>SHOP House E-Commerce</h1>
                    </div>
                    <div className='inline-block'>
                        <CustomDarkButton>CONTACT US</CustomDarkButton>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AboutUsBanner;