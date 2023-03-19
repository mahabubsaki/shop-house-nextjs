import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Checkbox, Icon, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const CustomSubItem = ({ checkedItems, ci, pi, subitem, setCheckedItems }: { checkedItems: string[], pi: number, ci: number, subitem: string, setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>; }) => {
    console.log(checkedItems);
    return (
        <p>
            <Checkbox defaultChecked={checkedItems.includes(subitem)}> <div className='cursor-pointer hover:text-[#08c] duration-500' key={ci}>
                <span>{subitem}</span>
            </div></Checkbox>
        </p>
    );
};


const CustomItem = ({ item, pi, checkedItems, setCheckedItems }: { item: { name: string, subCategory: string[]; }, pi: number, checkedItems: string[], setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>; }) => {
    return (<AccordionItem key={pi} border={0}>
        <AccordionButton _hover={{}} className='border-0 flex justify-between items-center text-[#777]  text-[14px]'>
            <span>
                <Checkbox onChange={(e) => {
                    const checked = e.target.checked;
                    if (checked) {
                        setCheckedItems([...checkedItems, ...item.subCategory]);
                    } else {
                        const temp = [];
                        for (const x of checkedItems) {
                            if (!item.subCategory.includes(x)) {
                                temp.push(x);
                            }
                        }
                        setCheckedItems([...temp]);
                    }
                }} id='parent' className='relative top-1'> </Checkbox> <span className='hover:text-[#08c] cursor-pointer duration-500'>{item.name} <span className='ml-[3px] '>({item.subCategory.length})</span></span>
            </span>
            {item.subCategory.length ? <AccordionIcon /> : null}
        </AccordionButton>
        {item.subCategory.length ? <AccordionPanel pb={'5px'} className='flex flex-col gap-3 text-[#777] ml-[14px]'>
            {item.subCategory.map((subitem, ci) => <CustomSubItem setCheckedItems={setCheckedItems} checkedItems={checkedItems} ci={ci} pi={pi} subitem={subitem} key={ci} />)}
        </AccordionPanel> : null}
    </AccordionItem>);
};

const CustomAccordion = ({ section, allCategories }: { section: string, allCategories?: { name: string, subCategory: string[]; }[]; }) => {
    const [open, setOpen] = useState(true);
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const [price, setPrice] = useState([0, 1000]);
    return (
        <AccordionItem border={0} borderBottom={'1px'} paddingY={'20px'} paddingX={'-30px'} marginX={'-10px'} borderColor={'#E7E7E7'}>

            <AccordionButton onClick={() => setOpen(!open)} _hover={{}} className='border-0 flex justify-between text-[#313131] text-[17px] items-center font-bold'>
                <span className='uppercase'>{section}</span>
                <Icon as={open ? AiOutlinePlus : AiOutlineMinus} />
            </AccordionButton>

            <AccordionPanel p={0} className='ml-[14px]'>
                {section === 'category' ? <Accordion allowToggle allowMultiple >
                    {allCategories?.map((item, pi) => <CustomItem item={item} pi={pi} key={pi} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />)}
                </Accordion> : null}
                {section === 'price' ?
                    <div>
                        <div className='py-[10px] px-[5px]'>
                            <RangeSlider onChange={(value) => setPrice([...value])} w={'95%'} mx='auto' colorScheme={'brand'} aria-label={['min', 'max']} max={1000} min={0} defaultValue={[0, 1000]}>
                                <RangeSliderTrack>
                                    <RangeSliderFilledTrack />
                                </RangeSliderTrack>
                                <RangeSliderThumb bgColor={'dot.400'} color={'darkseagreen'} index={0} />
                                <RangeSliderThumb bgColor={'dot.400'} index={1} />
                            </RangeSlider>
                        </div>
                        <div className='mt-[10px] flex justify-between items-center px-2'>
                            <p className='text-[13px] leading-8 text-[#777]'>Select Price range</p>
                            <p className='text-[#777] text-[13px]'>-</p>
                            <p className='text-[13px] text-[#777] '>
                                ${price[0]} - ${price[1]}
                            </p>
                        </div>
                    </div>
                    : null}
            </AccordionPanel>
        </AccordionItem>
    );
};

export default CustomAccordion;