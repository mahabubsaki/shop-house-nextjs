import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styles from '@/styles/BottomStickyNav.module.css';
import { brands, categories } from '@/utils/constants';
import Link from 'next/link';

const BottomStickyNav = () => {
    const [isFixed, setIsFixed] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [x, setX] = useState(0);
    useEffect(() => {
        if (navRef.current) {
            setX(navRef.current.getBoundingClientRect().top);
        }
    }, [navRef]);


    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                setIsFixed(window.scrollY > x);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [x]);


    return (
        <div className={`${isFixed ? `${styles.myFixed}` : `${styles.mySticky}`} hidden lg:block duration-500 left-0 right-0 py-[10px] z-30 bg-white border-b border-b-[#f4f4f4]`} ref={navRef}>
            <div className='max-w-[1200px] mx-auto'>
                <nav className={`flex px-[10px] justify-between   relative ${styles.nav}`}>
                    <ul className='flex gap-[35px] text-[12px] font-semibold'>
                        <li className=' border-t-[3px] duration-500 border-[#08C] z-20 py-[20px] cursor-pointer'>HOME</li>
                        <li className={`border-transparent gap-1 border-t-[3px] duration-500 hover:border-[#08C] z-20 py-[20px] relative cursor-pointer flex items-center ${styles['lang-title']}`}>
                            <Link href={'/category'}><span>CATEGORIES</span></Link>
                            <MdOutlineKeyboardArrowDown />
                            <ul className={`absolute z-1 -left-[10px] flex flex-col -right-[10px] shadow-md duration-500 ${styles['lang-dropdown']}`}>
                                {categories.map((item, index) => <li key={index}>{item.name}</li>)}
                            </ul>
                        </li>
                        <li className={`border-transparent relative border-t-[3px] duration-500 hover:border-[#08C] z-20 py-[20px] cursor-pointer flex items-center gap-1 ${styles['lang-title']}`}>
                            <span>BRANDS</span>
                            <MdOutlineKeyboardArrowDown />
                            <ul className={`absolute z-1 -left-[20px] flex flex-col -right-[20px] shadow-md duration-500 ${styles['lang-dropdown']}`}>
                                {brands.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </li>
                        <li className='border-transparent border-t-[3px] duration-500 hover:border-[#08C] z-20 py-[20px] cursor-pointer'>BLOGS</li>
                        <li className='border-transparent border-t-[3px] duration-500 hover:border-[#08C] z-20 py-[20px] cursor-pointer'>ABOUT US</li>
                        <li className='border-transparent border-t-[3px] cursor-pointer duration-500 hover:border-[#08C] z-20 py-[20px]'>CONTACT US</li>
                    </ul>
                    <span className='text-[12px] font-semibold border-transparent border-t-[3px] duration-500 hover:border-[#08C] z-20 py-[20px] cursor-pointer'>
                        SPECIAL OFFER!
                    </span>
                </nav>
            </div>
        </div>
    );
};

export default BottomStickyNav;