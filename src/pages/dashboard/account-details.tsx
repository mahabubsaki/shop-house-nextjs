import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Checkbox, FormControl, FormHelperText, FormLabel, Input, Select } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';

const AccountDetails = () => {
    const [edit, setEdit] = useState(true);

    return (
        <>
            <Head>
                <title>{`Account Information | SHOP House`}</title>
                <meta name='description' content={`Find the products you need and want online with ease. Shop our extensive selection of items, compare prices, and make purchases with confidence. Get the best deals on the latest trends, brands, and styles. Free shipping available on eligible orders. Start shopping now!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <DashboardLayout>
                <BreadCrumpNavigator paths={['dashboard', 'account-details']} />
                <div className='py-[20px]'>
                    <p className='flex items-center text-[22px] gap-[10px] ml-1 mb-4 text-[#222529] font-bold'><BiUser className='text-[#D3D3D4] text-4xl' /><span>Account Details</span></p>
                    <form autoComplete='new-password' onSubmit={(e) => e.preventDefault()} className='py-[10px] flex flex-col gap-[18px]'>
                        <div className='flex gap-[20px] flex-col sm:flex-row'>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>First name</span></FormLabel>
                                <Input defaultValue={'Mahabub'} disabled={edit} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Last name</span></FormLabel>
                                <Input defaultValue={'Saki'} disabled={edit} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Display Name</span></FormLabel>
                                <Input defaultValue={'Destiny YT'} disabled={edit} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                                <FormHelperText><span className='text-[#777] text-[13px]'>
                                    This will be how your name will be displayed in the account section and in reviews</span></FormHelperText>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Gender</span></FormLabel>
                                <Select defaultValue={'male'} disabled={edit} focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Phone Number</span></FormLabel>
                                <Input defaultValue={'+8801714269755'} disabled={edit} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Email</span></FormLabel>
                                <Input defaultValue={'admin@gmail.com'} disabled={edit} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Date Of Birth</span></FormLabel>
                                <Input disabled={edit} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} defaultValue={'2002-07-04'} size={'lg'} color={'option.400'} type="date" />
                            </FormControl>
                        </div>
                        <div>
                            {edit ? <span onClick={() => setEdit(false)} className='bg-[#222529] hover:bg-[#34393f] text-white hover:text-white inline-block cursor-pointer duration-500 px-[25px] leading-10 text-[13px] font-bold'>Edit Address</span> :
                                <span className='bg-[#F4F4F4] inline-block cursor-pointer hover:bg-[#08C] text-inherit hover:text-white duration-500 px-[25px] leading-10 text-[13px] font-bold' onClick={() => setEdit(true)}>Update Address</span>
                            }
                        </div>
                    </form>
                    <form autoComplete='new-password' onSubmit={(e) => e.preventDefault()} className='mt-10 px-[30px] border-2 border-[#e7e7e7] pt-[26px] pb-[22px]'>
                        <p className='mb-5 text-base font-bold text-[#222529]'>PASSWORD CHANGE</p>
                        <div className='flex flex-col gap-[18px]'>
                            <div>
                                <FormControl isRequired>
                                    <FormLabel><span className='text-[14px] text-[#777] font-medium'>Current Password</span></FormLabel>
                                    <Input type={'password'} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl isRequired>
                                    <FormLabel><span className='text-[14px] text-[#777] font-medium'>New Password</span></FormLabel>
                                    <Input type={'password'} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl isRequired>
                                    <FormLabel><span className='text-[14px] text-[#777] font-medium'>Confirm New Password</span></FormLabel>
                                    <Input type={'password'} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                                </FormControl>
                            </div>
                            <div>

                                <span className='bg-[#F4F4F4] inline-block cursor-pointer hover:bg-[#08C] text-inherit hover:text-white duration-500 px-[25px] leading-10 text-[13px] font-bold'>Update Password</span>

                            </div>
                        </div>
                    </form>
                </div>
            </DashboardLayout>
        </>
    );
};

export default AccountDetails;