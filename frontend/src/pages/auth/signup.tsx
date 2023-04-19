import CustomChakraSelect from '@/components/helpers/CustomChakraSelect';
import CustomInput from '@/components/helpers/CustomInput';
import ExternelLogin from '@/components/signup/ExternelLogin';
import uploadImgToCloudinary from '@/configs/cloudinary.config';
import uploadImgToImgBB from '@/configs/imgbb.config';
import UserLayout from '@/layouts/UserLayout';
import { signUpSchemas } from '@/schemas/yupSchema';
import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { useFormik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { FaUpload } from 'react-icons/fa';

const Signup = () => {
    const [imageLink, setImageLink] = useState<null | string>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const formInitialValues = {
        firstName: '',
        lastName: '',
        userName: '',
        avatar: null,
        gender: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        dob: ''
    };

    const { values, touched, errors, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: formInitialValues,
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: signUpSchemas,
    });

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                setImageLink(fileReader.result as string);

                setFieldValue('avatar', file);
            };
        }
    };
    const handleEmailSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (imageFile && imageLink) {
            try {
                const data = await uploadImgToCloudinary(imageFile);
                console.log(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.log(err);
                    toast.error(err.message);
                }
            }

        } else {
            toast.error("Avatar not selected");
        }
    };
    console.log(errors);
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
                    <form autoComplete="off" onSubmit={handleSubmit} className='py-[10px] flex flex-col gap-[18px]'>
                        <CustomInput isInvalid={!!errors.firstName && !!touched.firstName} handleBlur={handleBlur} handleChange={handleChange} value={values.firstName} type='text' name='firstName' inputLabel='First Name' placeholder='Mahabub' helper={<>
                            {(!!errors.firstName && !!touched.firstName) ?
                                <FormErrorMessage>{errors.firstName}</FormErrorMessage> : <FormHelperText><span className='text-[#777] text-[13px]'>
                                    Enter your First Name</span></FormHelperText>}
                        </>} />
                        <CustomInput isInvalid={!!errors.lastName && !!touched.lastName} handleBlur={handleBlur} handleChange={handleChange} value={values.lastName} type='text' name='lastName' inputLabel='Last Name' placeholder='Saki' helper={<>
                            {(!!errors.lastName && !!touched.lastName) ?
                                <FormErrorMessage>{errors.lastName}</FormErrorMessage> : <FormHelperText><span className='text-[#777] text-[13px]'>
                                    Enter your Last Name</span></FormHelperText>}

                        </>} />
                        <CustomInput isInvalid={!!errors.userName && !!touched.userName} handleBlur={handleBlur} handleChange={handleChange} value={values.userName} type='text' name='userName' inputLabel='User Name' placeholder='DestinyYT' helper={<>
                            {(!!errors.userName && !!touched.userName) ?
                                <FormErrorMessage>{errors.userName}</FormErrorMessage> : <FormHelperText><span className='text-[#777] text-[13px]'>
                                    This will be how your name will be displayed in the account section and in reviews</span></FormHelperText>}

                        </>} />
                        <div>
                            <FormControl isInvalid={!!errors.avatar && !!touched.avatar}>
                                <FormLabel><span className='text-[14px] text-[#777] font-medium'>Avatar</span></FormLabel>
                                <Input name='avatar' onChange={handleFileInputChange} ref={fileInputRef} hidden type={'file'} autoComplete="new-password" focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'xs'} size={'lg'} color={'option.400'} />
                                <Button onClick={() => (fileInputRef.current) && fileInputRef.current.click()} transitionDuration={'500ms'} display={'flex'} alignItems='center' gap={'15px'} colorScheme={'dot'} opacity='100%' color={'white'} _hover={{ opacity: '90%', color: 'black' }} width={'full'}><FaUpload className='relative -top-[2px]' />{imageLink ? 'Change Avatar' : 'Choose Avatar'}</Button>
                                <img src={imageLink ? imageLink : 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'} className='h-[128px] w-[128px] rounded-full  mt-4 border mx-auto' />

                                {(!!errors.avatar && !!touched.avatar) ?
                                    <FormErrorMessage><p className='text-center w-full'>{errors.avatar}</p></FormErrorMessage> : <FormHelperText>
                                        <p className='text-[#777] text-[13px] w-full text-center'>
                                            Choose your desired avatar</p>
                                    </FormHelperText>}
                            </FormControl>
                        </div>

                        <CustomChakraSelect isInvalid={!!errors.gender && !!touched.gender} helper={<>


                            {(!!errors.gender && !!touched.gender) ?
                                <FormErrorMessage>{errors.gender}</FormErrorMessage> : <FormHelperText><span className='text-[#777] text-[13px]'>
                                    Choose your gender</span></FormHelperText>}
                        </>} handleBlur={handleBlur} handleChange={handleChange} value={values.gender} name='gender' selectLabel='Gender' values={['Male', 'Female']} />

                        <CustomInput isInvalid={!!errors.phoneNumber && !!touched.phoneNumber} handleBlur={handleBlur} handleChange={handleChange} value={values.phoneNumber} helper={<>
                            {(!!errors.phoneNumber && !!touched.phoneNumber) ?
                                <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage> : <FormHelperText><span className='text-[#777] text-[13px]'>
                                    Only USA Phone number can be used E.g. 555-555-1234</span></FormHelperText>}

                        </>} type='text' name='phoneNumber' inputLabel='Phone Number' placeholder='+8801714269755' />
                        <CustomInput helper={<>
                            {(!!errors.email && !!touched.email) ?
                                <FormErrorMessage>{errors.email}</FormErrorMessage> : <FormHelperText><span className='text-[#777] text-[13px]'>
                                    Enter your email</span></FormHelperText>}

                        </>} isInvalid={!!errors.email && !!touched.email} handleBlur={handleBlur} handleChange={handleChange} value={values.email} type='email' name='email' inputLabel='Email' placeholder='admin@gmail.com' />
                        <CustomInput helper={<>
                            {(!!errors.password && !!touched.password) ?
                                <FormErrorMessage>{errors.password}</FormErrorMessage> : <FormHelperText><span className='text-[#777] text-[13px]'>
                                    Enter your desired password</span></FormHelperText>}

                        </>} isInvalid={!!errors.password && !!touched.password} handleBlur={handleBlur} handleChange={handleChange} value={values.password} type='password' name='password' inputLabel='Password' placeholder='User123@' />
                        <CustomInput helper={<>
                            {(!!errors.confirmPassword && !!touched.confirmPassword) ?
                                <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage> : <FormHelperText><span className='text-[#777] text-[13px]'>
                                    Confirm your password</span></FormHelperText>}

                        </>} isInvalid={!!errors.confirmPassword && !!touched.confirmPassword} handleBlur={handleBlur} handleChange={handleChange} value={values.confirmPassword} type='password' name='confirmPassword' inputLabel='Confirm Password' placeholder='User123@' />
                        <CustomInput helper={<>
                            {(!!errors.dob && !!touched.dob) ?
                                <FormErrorMessage>{errors.dob}</FormErrorMessage> : <FormHelperText><span className='text-[#777] text-[13px]'>
                                    Select your date of birth</span></FormHelperText>}

                        </>} isInvalid={!!errors.dob && !!touched.dob} handleBlur={handleBlur} handleChange={handleChange} value={values.dob} type='date' name='dob' inputLabel='Date of Birth' placeholder='07-04-2002' />
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