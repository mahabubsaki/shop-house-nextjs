import MapLocation from '@/components/contactus/MapLocation';
import CustomDarkButton from '@/components/helpers/CustomDarkButton';
import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import UserLayout from '@/layouts/UserLayout';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { FaCalendarAlt, FaMobileAlt } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';

const ContactUs = () => {
    const contactinfo = [
        {
            icon: <SlLocationPin className="text-6xl text-[#08c] mb-4" />,
            title: 'Address',
            text: 'Boro Dewra, Tongi, Gazipur-1711'
        },
        {
            icon: <FaMobileAlt className="text-6xl text-[#08c] mb-4" />,
            title: 'Phone Number',
            text: '+8801234567891'

        },
        {
            icon: <BiEnvelope className="text-6xl text-[#08c] mb-4" />,
            title: 'Mail',
            text: 'mail@shophouse.com'
        },
        {
            icon: <FaCalendarAlt className="text-6xl text-[#08c] mb-4" />,
            title: 'Working Days',
            text: 'Mon - Sun / 9:00AM - 8:00PM'
        }
    ];
    return (
        <>
            <Head>
                <title>{`Contact Us | SHOP House`}</title>
                <meta name='description' content={`Shop till you drop with our e-commerce platform! Review your shopping cart and checkout with ease. Enjoy secure payment and fast delivery options. Start shopping today!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon1.ico" />
            </Head>
            <UserLayout>

                <div className='max-w-[1200px] mx-auto px-[10px]'>
                    <BreadCrumpNavigator paths={['Contact-Us']} />

                </div>
                <div className='mb-[50px]'>
                    <MapLocation />
                </div>
                <div className='max-w-[1200px] mx-auto px-[10px]'>
                    <div>
                        <p className='text-[24px] font-bold text-[#222529] mb-2'>Contact Info</p>
                        <p className='text-[14px] text-[#777] mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quaerat? Laudantium, assumenda voluptate beatae maiores placeat perferendis adipisci ex nobis temporibus minus provident dolorum quam non ea, odit rem. Dolor.</p>
                    </div>
                    <div className='px-[10px] mb-[40px] gap-x-5 gap-y-8 grid grid-flow-dense' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                        {contactinfo.map(({ icon: Icons, text, title }) => <div className='flex flex-col items-center'>
                            {Icons}
                            <p className='text-[20px] font-bold mb-1 leading-5 text-[#222529]'>{title}</p>
                            <p className='text-[#777] text-[14px] leading-5 mb-5'>{text}</p>
                        </div>)}
                    </div>
                    <div className='px-[10px] pb-[6px] mb-20 border-t flex flex-col lg:flex-row gap-[10px] border-[#eee]'>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-[24px] text-[#222529] font-bold mt-[60px] mb-[20px]'>Send Us a Message</p>
                            <form autoComplete='new-password' onSubmit={(e) => e.preventDefault()} className='py-[10px] flex flex-col gap-[18px]'>
                                <div>
                                    <FormControl isRequired>
                                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Your Name </span></FormLabel>
                                        <Input autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl isRequired>
                                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Your E-mail </span></FormLabel>
                                        <Input autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl isRequired>
                                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Your Message </span></FormLabel>
                                        <Textarea resize={'none'} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} py={'3'} height={'2xs'} color={'option.400'} />
                                    </FormControl>
                                </div>
                                <div className='inline-block'>
                                    <CustomDarkButton>SEND MESSAGE</CustomDarkButton>
                                </div>
                            </form>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-[24px] text-[#222529] font-bold mt-[60px] mb-[20px]'>Frequently Asked Questions</p>
                            <Accordion allowToggle>
                                {new Array(6).fill(0).map((_, index) => <AccordionItem key={index}>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" fontSize={'16px'} fontWeight={'semibold'} flex='1' textAlign='left'>
                                                Section 1 title
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel color={'#777'} fontSize={'14px'} pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>)}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
};

export default ContactUs;