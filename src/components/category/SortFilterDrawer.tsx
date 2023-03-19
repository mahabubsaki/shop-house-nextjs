import { Accordion, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import React from 'react';
import { FocusableElement } from "@chakra-ui/utils";
import CustomAccordion from '../helpers/CustomAccordion';
import { categories } from '@/utils/constants';



const SortFilterDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void, btnRef: React.RefObject<FocusableElement> | undefined; }) => {
    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement='left' >
            <DrawerOverlay />
            <DrawerContent className='py-[13px] px-[9px] overflow-auto'>
                <DrawerCloseButton />
                <aside className='mt-2'>
                    <div className='px-5'>
                        <Accordion allowToggle allowMultiple>
                            <CustomAccordion section='category' allCategories={
                                [
                                    { name: 'Clothing', subCategory: ["Shirts", "Pants", "Kid's"] },
                                    { name: 'Electronics', subCategory: ['Speaker', 'Machine', 'Headphone'] },
                                    { name: 'Beauty', subCategory: ['Skincare', 'Haircare', 'Makeup', 'Fragrances'] },
                                    { name: 'Kitchen', subCategory: ['Furniture', 'Cleaning Supply'] },
                                    { name: 'Sports', subCategory: ['Spors Gear', 'Sports Shoes', 'Fitness Equipment'] },
                                    { name: 'Toys', subCategory: ['Dolls', 'Board Games', 'Building'] },
                                    { name: 'Health', subCategory: ['Vitamins', 'Supplements', 'Medical Supply'] },
                                    { name: 'Books', subCategory: ['Fiction', 'Kids', 'Magazine'] },
                                    { name: 'Food', subCategory: ['Snacks', 'Sweets', 'Spices'] },
                                    { name: 'Fashion', subCategory: ['Bag'] },
                                    { name: 'Accessories', subCategory: ['Shoes', 'Caps', 'Watch'] }
                                ]
                            } />
                            <CustomAccordion section='price' />
                        </Accordion>
                    </div>
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