import { Accordion, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FocusableElement } from "@chakra-ui/utils";
import CustomAccordion from '../helpers/CustomAccordion';
import { categories } from '@/utils/constants';
import toaster from '@/utils/toaster';
import axios from 'axios';
import IProduct from '@/interfaces/product.interface';



const SortFilterDrawer = ({ isOpen, onClose, filterProducts, setFilterObj, setActivePage }: { isOpen: boolean, onClose: () => void, btnRef: React.RefObject<FocusableElement> | undefined, filterProducts: (pd: IProduct[]) => void, setFilterObj: React.Dispatch<React.SetStateAction<{}>>, setActivePage: React.Dispatch<React.SetStateAction<number>>; }) => {
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const [price, setPrice] = useState([0, 1000]);
    const [selectedColor, setSelectedColor] = useState<string[]>(['#000000']);
    const [selectedSize, setSelectedSize] = useState<string[]>(['XXL']);

    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement='left' >
            <DrawerOverlay />
            <DrawerContent className={`py-[13px] px-[9px] overflow-auto`}>
                <DrawerCloseButton />
                <aside className='mt-2'>
                    <div className='px-5'>
                        <Accordion allowToggle allowMultiple>
                            <CustomAccordion checkedItems={checkedItems} setCheckedItems={setCheckedItems} section='category' allCategories={
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
                            <CustomAccordion price={price} setPrice={setPrice} section='price' />
                            <CustomAccordion selectedColor={selectedColor} setSelectedColor={setSelectedColor} section='color' colors={[
                                '#808080', '#000000',
                                '#0000FF', '#964B00',
                                '#F5F5DC', '#00FF00',
                                '#FFA500', '#FFFF00',
                                '#FFFFFF', '#FF0000'
                            ]
                            } />
                            <CustomAccordion selectedSize={selectedSize} setSelectedSize={setSelectedSize} section='size' sizes={['XXL', 'XL', 'L', 'M', 'S']} />
                        </Accordion>
                    </div>
                    <button className='w-full py-3 my-6 text-[16px] font-bold bg-red-500 hover:bg-white duration-500 hover:border-red-500 text-black hover:text-red-500 border border-red-500' onClick={() => {
                        setCheckedItems([]);
                        setPrice([0, 1000]);
                        setSelectedColor(['#000000']);
                        setSelectedSize(['XXL']);
                        setFilterObj({});
                    }}>Clear Filter</button>

                    <button onClick={async () => {
                        if (!checkedItems.length) {
                            toaster('Please select categories you want to filter', false);
                        }
                        setActivePage(1);
                        setFilterObj({
                            subCategory: checkedItems, price, colors: selectedColor, sizes: selectedSize
                        });
                    }} className='w-full py-3  text-[16px] font-bold bg-white hover:bg-[#08c] duration-500 hover:border-white text-black hover:text-white border border-[#08c]'>
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