import { auth, facebookProvider, githubProvider, googleProvider, microsoftProvider, twitterProvider, yahooProvider } from '@/configs/firebase.init';
import { FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, PinInput, PinInputField, Spinner, useDisclosure } from '@chakra-ui/react';
import { AuthProvider, ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth';
import { E164Number } from 'libphonenumber-js/types';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaMicrosoft, FaPhone, FaTwitter, FaYahoo } from 'react-icons/fa';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import CustomDarkButton from '../helpers/CustomDarkButton';
import CustomLightButton from '../helpers/CustomLightButton';
import toast from 'react-hot-toast';
const logins = [
    {
        provider: googleProvider,
        name: 'Google',
        icon: <FaGoogle className='relative -top-[1px] text-2xl' />,
        bg: '#ffffff',
        text: '#222529',
    },
    {
        provider: githubProvider,
        name: 'Github',
        icon: <FaGithub className='relative -top-[1px] text-2xl' />,
        bg: '#24292E',
        text: '#ffffff',
    },
    {
        provider: facebookProvider,
        name: 'Facebook',
        icon: <FaFacebook className='relative -top-[1px] text-2xl' />,
        bg: '#1877F2',
        text: '#FFFAFA'
    },
    {
        provider: twitterProvider,
        name: 'Twitter',
        icon: <FaTwitter className='relative -top-[1px] text-2xl' />,
        bg: '#1DA1F2',
        text: '#FFFFF0',
    },
    {
        provider: yahooProvider,
        name: 'Yahoo',
        icon: <FaYahoo className='relative -top-[1px] text-2xl' />,
        bg: '#410093',
        text: '#FAF0E6',
    },
    {
        provider: microsoftProvider,
        name: 'Microsoft',
        icon: <FaMicrosoft className='relative -top-[1px] text-2xl' />,
        bg: '#000000',
        text: '#ffffff',
    }
];
const ExternelLogin = ({ children }: { children: React.ReactNode; }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [captchaLoading, setCaptchaLoading] = useState(false);
    const [confirmationObj, setConfirmationObj] = useState<ConfirmationResult | undefined>();
    const [flag, setFlag] = useState(false);
    const [sendBtnHide, setSendBtnHide] = useState(false);
    const [otp, setOTP] = useState('');

    const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined | string>();
    const resetState = () => {
        setCaptchaLoading(_ => false);
        setConfirmationObj(_ => undefined);
        setFlag(_ => false);
        setPhoneNumber(_ => undefined);
        setOTP(_ => '');
        setSendBtnHide(_ => false);
    };
    const handleLogin = async (provider: AuthProvider) => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
        }
        catch (err) {
            console.log(err);
        }
    };
    const setupCaptcha = async () => {
        const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', { size: 'normal' }, auth);
        try {
            setCaptchaLoading(true);
            await recaptchaVerifier.render();
            return signInWithPhoneNumber(auth, phoneNumber + '', recaptchaVerifier);
        }
        catch (err: unknown) {
            if (err instanceof Error) {
                toast.error(err.message);
                onClose();
            }
        }
        finally {
            setCaptchaLoading(false);
        }
    };
    const handlePhoneLogin = async () => {
        if (!phoneNumber) {
            toast.error("Phone number can't be empty");
            return;
        }
        try {
            setSendBtnHide(true);
            const response = await setupCaptcha();
            setConfirmationObj(response);
            setFlag(true);
        } catch (err: unknown) {
            if (err instanceof Error) {
                toast.error(err.message);
                onClose();
            }
        }
    };
    const verifyOTP = async () => {
        try {
            setCaptchaLoading(true);
            const response = await confirmationObj?.confirm(otp);

            if (response?.user) {

            }
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
            <div className='flex flex-col items-center gap-[10px] w-max mx-auto'>
                <button onClick={onOpen} className='px-[40px] bg-[#F4F4F4] text-[#222529] border border-[#222529] opacity-100 hover:opacity-75 duration-500  w-full flex items-center gap-3 leading-[50px] rounded-md text-[16px] font-bold'><FaPhone /> {children}</button>
                {logins.map(({ bg, icon: Icon, name, provider, text }) =>
                    <button onClick={() => handleLogin(provider)} style={{ backgroundColor: bg, color: text, border: `1px solid ${text}` }} type='button' className='px-[40px] opacity-100 hover:opacity-75 duration-500  w-full flex items-center gap-3 leading-[50px] rounded-md text-[16px] font-bold'>{Icon} Continue With {name}</button>
                )}

            </div>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
                closeOnOverlayClick={false}
                onCloseComplete={resetState}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{children}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {!flag ? <FormControl>
                            <PhoneInputWithCountrySelect className='chakra-input css-1s8qtbq' value={phoneNumber} limitMaxLength onChange={setPhoneNumber} smartCaret defaultCountry='BD' placeholder='Enter Your Phone Number' ></PhoneInputWithCountrySelect>
                        </FormControl> : <div>
                            <p className='text-center text-[14px] font-bold text-[#222529] my-3'>Verify OTP sent to your phone number</p>
                            <div className='flex justify-center'>
                                <PinInput otp onComplete={(value) => setOTP(value)}>
                                    {new Array(6).fill(0).map((_, index) => <PinInputField key={index} />)}
                                </PinInput>
                            </div>
                        </div>}
                        {captchaLoading ? <div className='flex justify-center my-2'>
                            <Spinner />
                        </div> : null}
                        {!flag ? <div id='recaptcha-container' ></div> : null}
                        <div className='flex justify-end my-3 gap-3'>
                            <div className='inline-block' onClick={onClose}>
                                <CustomDarkButton>Cancel</CustomDarkButton>
                            </div>
                            {(!flag && !sendBtnHide) ? <div className='inline-block' onClick={handlePhoneLogin}>
                                <CustomLightButton>Send OTP</CustomLightButton>
                            </div> : null}
                            {flag ? <div className='inline-block' onClick={verifyOTP}>
                                <CustomLightButton>Verify OTP</CustomLightButton>
                            </div> : null}
                        </div>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ExternelLogin;