import React from 'react';
import { ImList } from 'react-icons/im';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';
import { VscSettings } from 'react-icons/vsc';
import CustomSelect from '../helpers/CustomSelect';
import { FocusableElement } from "@chakra-ui/utils";

const SortFilterSectionDesktop = ({ btnRef, onOpen }: { btnRef: React.RefObject<FocusableElement> | undefined; onOpen: () => void; }) => {
    return (
        <div className={`mb-[18px] px-[20px] hidden md:block z-[999999999] md:mb-[10px]`}>
            <div className='bg-[#f4f4f4] px-[10px] py-[10px] md:p-0 md:bg-white flex justify-between text-[#222529] md:text-[#777]'>
                <button onClick={onOpen} className='flex items-center border hover:text-[#08c] duration-500 gap-[6px] border-[#DFDFDF] pl-[6px] pr-[11px] mr-2'>
                    <VscSettings className='rotate-90 text-xl' />
                    <span className='text-[12px] leading-9 uppercase tracking-wide'>Filter</span>
                </button>
                <div className='flex items-center gap-1 xs:gap-3'>
                    <span className='hidden md:block'>Sort By:</span>
                    <CustomSelect width='150px' defaults='Default sorting' options={['Default', 'Popularity', 'Rating', 'New', 'Price-Ascending', 'Price-Descending']} />
                    <span className='hidden md:block'>Sort By:</span>
                    <CustomSelect width='60px' defaults='12' options={['12', '24', '36', '48', '60']} />
                    <div className='hidden md:flex gap-1 items-center text-[18px]'>
                        <TfiLayoutGrid3Alt className='text-[#08c] cursor-pointer hover:text-[#08c]' />
                        <ImList className='cursor-pointer  hover:text-[#08c]' />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SortFilterSectionDesktop;