import ExternelLogin from '@/components/signup/ExternelLogin';
import UserLayout from '@/layouts/UserLayout';
import { Button, FormControl, FormHelperText, FormLabel, Input, Select } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Signup = () => {
    return (
        <>
            <Head>
                <title>{`Sign Up | SHOP House`}</title>
                <meta name='description' content={`Shop till you drop with our e-commerce platform! Review your shopping cart and checkout with ease. Enjoy secure payment and fast delivery options. Start shopping today!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <UserLayout>
                <div className='max-w-[clamp(320px,100%,600px)] mx-auto px-[30px] bg-[#fdfdfd] shadow-md rounded-lg my-[50px] border py-5'>
                    <h1 className='text-2xl text-[#222529] font-bold text-center'>Sign Up</h1>
                    <p className='text-base text-[#777] text-center'>Create a new account</p>
                    <form autoComplete='new-password' onSubmit={(e) => {
                        e.preventDefault();
                    }} className='py-[10px] flex flex-col gap-[18px]'>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>First Name</span></FormLabel>
                                <Input placeholder='Mahabub' autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Last Name</span></FormLabel>
                                <Input placeholder='Saki' autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Display Name</span></FormLabel>
                                <Input placeholder='Destiny YT' autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                                <FormHelperText><span className='text-[#777] text-[13px]'>
                                    This will be how your name will be displayed in the account section and in reviews</span></FormHelperText>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Gender</span></FormLabel>
                                <Select defaultValue={'male'} focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Phone Number</span></FormLabel>
                                <Input placeholder={'+8801714269755'} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Email</span></FormLabel>
                                <Input placeholder={'admin@gmail.com'} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Password</span></FormLabel>
                                <Input type={'password'} placeholder={'12345678'} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isRequired>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Date Of Birth</span></FormLabel>
                                <Input autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} placeholder={'2002-07-04'} size={'lg'} color={'option.400'} type="date" />
                            </FormControl>
                        </div>

                        <Button type='submit' colorScheme={'cyan'}>Sign Up</Button>
                    </form>
                    <p className='my-3 text-[14px] text-center text-[#222529]'>
                        Already have an account? <span className='text-[#08c] font-bold'><Link className='hover:no-underline' href={'/auth/login'}>LOGIN</Link></span> now
                    </p>
                    <p className="flex items-center mx-0 my-5 xl:-mx-[20px]">
                        <span className="border-t block border-[#0000001a] flex-grow mr-[10px]"></span>
                        <span className={`font-bold text-[14px]`}>OR</span>
                        <span className="border-t block border-[#0000001a] flex-grow ml-[10px]"></span>
                    </p>
                    <ExternelLogin>Continue with Phone</ExternelLogin>
                </div>
            </UserLayout>
        </>
    );
};

export default Signup;