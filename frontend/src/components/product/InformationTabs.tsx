import { hexToColorName } from '@/utils/extract_color_name';
import { Checkbox, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Tr } from '@chakra-ui/react';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const InformationTabs = ({ reviews, description, color, dimensions, size, weight, name }: { reviews: { avatar: string, star: number, comment: string, name: string, date: string; }[], description: string, weight: number, dimensions: number[], color: string[], size: string[], name: string; }) => {
    const [countStar, setCountStar] = useState(0);
    return (
        <>
            <Tabs>
                <TabList flexWrap={'wrap'} className='font-bold'>
                    <Tab _selected={{ borderColor: '#222529' }} marginX={'10px'} _hover={{ borderColor: "#222529", borderBottom: '2px' }} fontSize={'13px'}>DESCRIPTION</Tab>
                    <Tab _selected={{ borderColor: '#222529' }} marginX={'10px'} _hover={{ borderColor: "#222529", borderBottom: '2px' }} fontSize={'13px'}>ADDITIONAL <br /> INFORMATION</Tab>
                    <Tab _selected={{ borderColor: '#222529' }} marginX={'10px'} _hover={{ borderColor: "#222529", borderBottom: '2px' }} fontSize={'13px'}>REVIEWS ({reviews.length})</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel paddingY={'30px'} paddingX={'0px'}>
                        <p className='text-[#7b858a] text-[14px]'>{description}</p>
                    </TabPanel>
                    <TabPanel paddingY={'30px'} paddingX={'0px'}>
                        <TableContainer>
                            <Table variant='striped' colorScheme={'stripe'}>
                                <Tbody>
                                    <Tr>
                                        <Td><span className='font-bold text-[#7b858a]'>Weight</span></Td>
                                        <Td><span className='text-[#7b858a]'>{weight} kg</span></Td>
                                    </Tr>
                                    <Tr>
                                        <Td><span className='font-bold text-[#7b858a]'>Dimensions</span></Td>
                                        <Td><span className='text-[#7b858a]'>{dimensions.join(' x ')} cm</span></Td>
                                    </Tr>
                                    <Tr>
                                        <Td><span className='font-bold text-[#7b858a]'>Color</span></Td>
                                        <Td><span className='text-[#7b858a]'>{color.map(each => hexToColorName(each)).join(' , ')}</span></Td>
                                    </Tr>
                                    <Tr>
                                        <Td><span className='font-bold text-[#7b858a]'>Size</span></Td>
                                        <Td><span className='text-[#7b858a]'>{size.join(' , ')}</span></Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                    <TabPanel paddingY={'30px'} paddingX={'0px'}>
                        <div>
                            <p className='text-[#222529] text-[18px] md:text-[20px] mb-4'>{reviews.length} review for {name}</p>
                            <div>
                                {reviews.map((item, index) => <div key={index} className='pb-1 relative flex  gap-[20px] md:gap-[35px]'>
                                    <img src={item.avatar} alt="commmenter-avatar" className='h-[80px] w-[80px]' />
                                    <div className=' w-full bg-[#F5F7F7] relative p-[18px] pb-[20px] md:p-[20px] md:pb-[23px] flex md:justify-between flex-col md:flex-row'>
                                        <div>
                                            <p className='pb-1'><span className='text-[12.5px] md:text-[14px] font-bold text-[#7B858A]'>{item.name}</span><span className='text-[11.7px] md:text-[13px] text-[#999999]'> - {format(new Date(item.date), 'PP')}</span></p>
                                            <p className='text-[#7b858a] text-[11.5px] md:text-[12.5px]'>{item.comment}</p>
                                        </div>
                                        <div className='flex'>
                                            {new Array(item.star).fill(0).map((_, index) => <AiFillStar className='text-[#6A6A6D]' key={index}></AiFillStar>)}
                                            {new Array(5 - item.star).fill(0).map((_, index) => <AiFillStar className='text-[#CED0D0]' key={index}></AiFillStar>)}
                                        </div>
                                        <div className='w-0 h-0 absolute border-l-0 border-y-[15px] border-r-[15px] border-r-[#F5F7F7] border-y-transparent top-[25px] left-[-15px]'>

                                        </div>
                                    </div>
                                </div>)}
                                <div className='divider my-10 h-0 w-full bg-[#7B858A] border-t border-t-[#E7E7E7]'>
                                </div>
                                <div className='review-section '>
                                    <p className='text-lg md:text-xl text-[#222529] mb-4'>Add a review</p>
                                    <form onSubmit={(e) => e.preventDefault()} className='px-[18px] py-[30px] md:px-[30px] md:py-[34px] bg-[#F4F4F4] rounded-[3px]'>
                                        <p className='text-[12.5px] md:text-[14px] font-bold mb-[11px]'>Your Rating *</p>
                                        <p className='flex text-lg text-[#706F6C] mb-[5px]'>
                                            {new Array(countStar).fill(0).map((_, index) => <AiFillStar key={index} className='cursor-pointer' onClick={() => setCountStar(index + 1)}></AiFillStar>)}
                                            {new Array(5 - countStar).fill(0).map((_, index) => <AiOutlineStar key={index} className='cursor-pointer' onClick={() => setCountStar(pre => pre + (index + 1))}></AiOutlineStar>)}
                                        </p>
                                        <label htmlFor='review' className='text-[12.5px] md:text-[14px] font-bold mb-[11px] cursor-pointer '>Your Review *</label>
                                        <textarea name="review" id="review" className='block my-[15px] w-full resize-none py-2 px-3 border border-[#EBEBEB] text-[12.5px] md:text-[14px] text-[#777777] h-[150px] overflow-y-auto'></textarea>
                                        <label htmlFor="name" className='text-[12.5px] md:text-[14px] font-bold mb-[11px] cursor-pointer '>Display Name *</label>
                                        <input type={'text'} name="name" id="name" className='block my-[15px] w-full resize-none py-2 px-3 border border-[#EBEBEB] text-[12.5px] md:text-[14px] text-[#777777] ' />
                                        <label htmlFor="email" className='text-[12.5px] md:text-[14px] font-bold mb-[11px] cursor-pointer '>Email *</label>
                                        <input type={'text'} name="email" id="email" className='block my-[15px] w-full resize-none py-2 px-3 border border-[#EBEBEB] text-[12.5px] md:text-[14px] text-[#777777] ' />
                                        <div className='text-[10.5px] md:text-[12px] font-bold mb-[10px]'>
                                            <Checkbox><span className='text-[12.5px] md:text-[14px]'>Save my name and email in this browser for the next time I comment.</span></Checkbox>
                                        </div>
                                        <button type='submit' className='bg-[#08c] px-[10px] py-[7px] border border-[#08c] leading-5 text-[12.5px] md:text-[14px] hover:bg-[#00a3f5] hover:border-[#00a3f5] duration-500 cursor-pointer text-white'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
};

export default InformationTabs;