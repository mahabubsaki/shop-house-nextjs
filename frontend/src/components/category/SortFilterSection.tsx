import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/SortFilterSection.module.css';
import { VscSettings } from 'react-icons/vsc';
import CustomSelect from '../helpers/CustomSelect';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';
import { ImList } from 'react-icons/im';
import { FocusableElement } from "@chakra-ui/utils";

const SortFilterSection = ({ btnRef, onOpen, setActivePage, setCurrentPageNumber, setCurrentPageSize, setCurrentSort, setCurrentType }: { btnRef: React.RefObject<FocusableElement> | undefined, onOpen: () => void; setCurrentType: React.Dispatch<React.SetStateAction<boolean>>; setCurrentPageSize: React.Dispatch<React.SetStateAction<number>>; setCurrentSort: React.Dispatch<React.SetStateAction<string>>; setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>; setActivePage: React.Dispatch<React.SetStateAction<number>>; }) => {
    const [isFixed, setIsFixed] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [x, setX] = useState(0);
    useEffect(() => {

        const handleScroll = () => {
            if (navRef.current) {
                setIsFixed(window.scrollY + 170 > x);
            }
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [x]);
    useEffect(() => {
        if (navRef.current) {
            setX(navRef.current.getBoundingClientRect().top);
        }
    }, [navRef]);
    useEffect(() => {

    }, [isFixed]);
    return (
        <div ref={navRef} className={`mb-[18px] z-30 block md:hidden  md:mb-[10px] ${isFixed ? styles.myFixed : styles.mySticky}`}>
            <div className='bg-[#f4f4f4] px-[10px] py-[10px] md:p-0 md:bg-white flex justify-between text-[#222529] md:text-[#777]'>
                <button onClick={onOpen} className='flex items-center border hover:text-[#08c] duration-500 gap-[6px] border-[#DFDFDF] pl-[6px] pr-[11px] mr-2'>
                    <VscSettings className='rotate-90 text-xl' />
                    <span className='text-[12px] leading-9 uppercase tracking-wide'>Filter</span>
                </button>
                <div className='flex items-center gap-1 xs:gap-3'>
                    <span className='hidden md:block'>Sort By:</span>
                    <CustomSelect handleOnSelectChange={(option) => {
                        switch (option) {
                            case 'Z-A':
                                setCurrentPageNumber(() => 1);
                                setActivePage(() => 1);
                                setCurrentType(() => false);
                                setCurrentSort(() => 'name');
                                break;
                            case 'Popularity-Ascending':
                                setCurrentPageNumber(() => 1);
                                setActivePage(() => 1);
                                setCurrentType(() => false);
                                setCurrentSort(() => 'visits');
                                break;
                            case 'Popularity-Descending':
                                setCurrentPageNumber(() => 1);
                                setActivePage(() => 1);
                                setCurrentType(() => true);
                                setCurrentSort(() => 'visits');
                                break;
                            case 'Rating-Ascending':
                                setCurrentPageNumber(() => 1);
                                setActivePage(() => 1);
                                setCurrentType(() => true);
                                setCurrentSort(() => 'rating');
                                break;
                            case 'Rating-Descending':
                                setCurrentPageNumber(() => 1);
                                setActivePage(() => 1);
                                setCurrentType(() => false);
                                setCurrentSort(() => 'rating');
                                break;
                            case 'Newest':
                                setCurrentPageNumber(() => 1);
                                setActivePage(() => 1);
                                setCurrentType(() => false);
                                setCurrentSort(() => 'addedDate');
                                break;
                            case 'Oldest':
                                setCurrentPageNumber(() => 1);
                                setActivePage(() => 1);
                                setCurrentType(() => true);
                                setCurrentSort(() => 'addedDate');
                                break;
                            case 'Price-Ascending':
                                setCurrentPageNumber(() => 1);
                                setActivePage(() => 1);
                                setCurrentType(() => true);
                                setCurrentSort(() => 'price');
                                break;
                            case 'Price-Descending':
                                setCurrentPageNumber(() => 1);
                                setActivePage(() => 1);
                                setCurrentType(() => false);
                                setCurrentSort(() => 'price');
                                break;
                            default:
                                setCurrentPageNumber(() => 1);
                                setActivePage(() => 1);
                                setCurrentType(() => true);
                                setCurrentSort(() => 'name');
                                break;
                        }
                    }} width='150px' defaults='A-Z' options={['A-Z', 'Z-A', 'Popularity-Ascending', 'Popularity-Descending', 'Rating-Ascending', 'Rating-Descending', 'Newest', 'Oldest', 'Price-Ascending', 'Price-Descending']} />
                    <span className='hidden md:block'>Sort By:</span>
                    <CustomSelect handleOnSelectChange={(option) => {
                        setCurrentPageNumber(() => 1);
                        setActivePage(() => 1);
                        setCurrentPageSize(Number(option));
                    }} width='60px' defaults='12' options={['12', '24', '36', '48']} />
                    <div className='hidden md:flex gap-1 items-center text-[18px]'>
                        <TfiLayoutGrid3Alt className='text-[#08c] cursor-pointer hover:text-[#08c]' />
                        <ImList className='cursor-pointer  hover:text-[#08c]' />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SortFilterSection;