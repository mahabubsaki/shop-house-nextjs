import ExternelLogin from '@/components/signup/ExternelLogin';
import { auth } from '@/configs/firebase.config';
import UserLayout from '@/layouts/UserLayout';
import { Button, FormControl, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, useDisclosure } from '@chakra-ui/react';
import { sendPasswordResetEmail } from 'firebase/auth';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const resetMail = e.currentTarget.resetMail?.value || '';
        try {
            const response = await sendPasswordResetEmail(auth, resetMail);
            toast.success(`Reset password link sent to ${resetMail}`);
        } catch (err: unknown) {
            if (err instanceof Error) {
                toast.error(err.message);
            }
        } finally {
            onClose();
        }
    };
    return (
        <>
            <Head>
                <title>{`Log In | SHOP House`}</title>
                <meta name='description' content={`Shop till you drop with our e-commerce platform! Review your shopping cart and checkout with ease. Enjoy secure payment and fast delivery options. Start shopping today!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <UserLayout>
                <div className='max-w-[clamp(320px,100%,600px)] mx-auto px-[30px] bg-[#fdfdfd] shadow-md rounded-lg my-[50px] border py-5'>
                    <h1 className='text-2xl text-[#222529] font-bold text-center'>Log In</h1>
                    <p className='text-base text-[#777] text-center'>Log in to your account for personalize</p>
                    <form autoComplete='new-password' onSubmit={(e) => {
                        e.preventDefault();
                    }} className='py-[10px] flex flex-col gap-[18px]'>




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

                        <Button type='submit' colorScheme={'cyan'}>Log In</Button>
                    </form>
                    <div className='flex justify-end'><p onClick={onOpen} className='font-bold text-right cursor-pointer text-[#08c]'>Forget Password?</p></div>
                    <p className='my-3 text-[14px] text-center text-[#222529]'>
                        New to Shophouse E-commerce? <span className='text-[#08c] font-bold'><Link className='hover:no-underline' href={'/auth/signup'}>SIGN UP</Link></span> now
                    </p>
                    <p className="flex items-center mx-0 my-5 xl:-mx-[20px]">
                        <span className="border-t block border-[#0000001a] flex-grow mr-[10px]"></span>
                        <span className={`font-bold text-[14px]`}>OR</span>
                        <span className="border-t block border-[#0000001a] flex-grow ml-[10px]"></span>
                    </p>
                    <ExternelLogin>Continue with Phone</ExternelLogin>
                </div>
                <Modal
                    isCentered
                    onClose={onClose}
                    isOpen={isOpen}
                    motionPreset='slideInBottom'
                    closeOnOverlayClick={false}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Enter your email for reset password</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                            <form autoComplete='new-password' onSubmit={handleResetPassword} className='py-[10px] flex flex-col gap-[18px]'>




                                <div>
                                    <FormControl isRequired>
                                        <FormLabel><span className='text-[14px] text-[#777] font-medium'>Email</span></FormLabel>
                                        <Input name='resetMail' placeholder={'admin@gmail.com'} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                                    </FormControl>
                                </div>

                                <Button type='submit' colorScheme={'cyan'}>Reset Password</Button>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </UserLayout>
        </>
    );
};

export default Signup;