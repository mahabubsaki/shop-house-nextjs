import { Accordion, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import React from 'react';
import { FocusableElement } from "@chakra-ui/utils";
import CustomAccordion from '../helpers/CustomAccordion';
import { categories } from '@/utils/constants';



const SortFilterDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void, btnRef: React.RefObject<FocusableElement> | undefined; }) => {
    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement='left' >
            <DrawerOverlay />
            <DrawerContent className={`py-[13px] px-[9px] overflow-auto`}>
                <DrawerCloseButton />
                <aside className='mt-2'>
                    <div className='px-5'>
                        <Accordion allowToggle allowMultiple>
                            <CustomAccordion section='category' allCategories={
                                [
                                    { name: 'Clothing', subCategory: ["Men's", "Women's", "Kid's"] },
                                    { name: 'Electronics', subCategory: ['Speakers', 'Machines', 'Headphones'] },
                                    { name: 'Beauty', subCategory: ['Skincare', 'Haircare', 'Makeup', 'Fragrances'] },
                                    { name: 'Kitchen', subCategory: ['Cleaning Supply'] },
                                    { name: 'Sports', subCategory: ['Spors Gear', 'Sports Shoes', 'Fitness Equipment'] },
                                    { name: 'Toys', subCategory: ['Dolls', 'Board Games', 'Building Games'] },
                                    { name: 'Health', subCategory: ['Vitamins', 'Supplements', 'Medical Supply'] },
                                    { name: 'Books', subCategory: ['Fiction', 'Comic', 'Magazine'] },
                                    { name: 'Food', subCategory: ['Snacks', 'Sweets', 'Spices'] },
                                    { name: 'Fashion', subCategory: ['Ladies Bag', 'Belts', 'Glasses'] },
                                    { name: 'Accessories', subCategory: ['Shoes', 'Caps', 'Watches', 'Backpacks', 'Sofa'] }
                                ]
                            } />
                            <CustomAccordion section='price' />
                            <CustomAccordion section='color' colors={['#000000', '#0188CC', '#81D742', '#6085A5', '#AB6E6E']} />
                            <CustomAccordion section='size' sizes={['XXL', 'XL', 'L', 'M', 'S']} />
                        </Accordion>
                    </div>
                    <button className='w-full py-4 mt-8 text-[16px] font-bold bg-white hover:bg-[#08c] duration-500 hover:border-white text-black hover:text-white border border-[#08c]'>
                        Filter
                    </button>
                </aside>
            </DrawerContent>
        </Drawer>
    );
};

export default SortFilterDrawer;
// Men's clothing: shirts, t-shirts, pants, jeans, shorts, jackets, coats, sweaters, hoodies, blazers, suits, underwear, socks, swimwear, activewear, sleepwear
// Women's clothing: dresses, skirts, blouses, t-shirts, pants, jeans, shorts, jackets, coats, sweaters, hoodies, blazers, suits, lingerie, swimwear, activewear, sleepwear
// Kids clothing: boys' clothing, girls' clothing, baby clothing
// Electronics:

// Phones: iPhones, Samsung phones, Android phones, flip phones
// Computers: laptops, desktops, tablets, gaming laptops, 2-in-1 laptops, Macbooks
// TV & Home Theater: Smart TVs, 4K TVs, soundbars, home theater systems, projectors, TV mounts
// Cameras & Camcorders: DSLR cameras, mirrorless cameras, point-and-shoot cameras, action cameras, camcorders
// Video Games: Xbox, PlayStation, Nintendo, PC games, VR games, gaming accessories
// Smart Home: Smart speakers, smart displays, smart thermostats, smart locks, smart light bulbs, smart security cameras