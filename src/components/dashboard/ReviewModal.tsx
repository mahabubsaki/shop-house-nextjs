import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
const ReviewModal = ({ isOpen, onClose, currentModalItem, setReviews, reviews }: {
    isOpen: boolean, onClose: () => void, currentModalItem: {
        img: string;
        productName: string;
        rating: number;
        review: string;
        date: string;
        id: number;
    } | null, setReviews: React.Dispatch<React.SetStateAction<{
        img: string;
        productName: string;
        rating: number;
        review: string;
        date: string;
        id: number;
    }[]>>, reviews: {
        img: string;
        productName: string;
        rating: number;
        review: string;
        date: string;
        id: number;
    }[];

}) => {
    const [countStar, setCountStar] = useState(0);
    const [modalReview, setModalReview] = useState('');
    useEffect(() => {
        if (currentModalItem) {
            setCountStar(currentModalItem.rating);
            setModalReview(currentModalItem.review);
        }

    }, [currentModalItem]);
    useEffect(() => {
        onClose();
    }, [reviews]);
    return (
        <Modal isCentered motionPreset='slideInBottom' closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader><p className='text-[18px]'>Update Your review on <b>{currentModalItem?.productName}</b></p></ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <p className='text-[12.5px] md:text-base font-bold mb-[11px]'>Your Rating *</p>
                    <p className='flex text-lg text-[#706F6C] mb-[5px]'>
                        {new Array(countStar).fill(0).map((_, index) => <AiFillStar key={index} className='cursor-pointer' onClick={() => setCountStar(index + 1)}></AiFillStar>)}
                        {new Array(5 - countStar).fill(0).map((_, index) => <AiOutlineStar key={index} className='cursor-pointer' onClick={() => setCountStar(pre => pre + (index + 1))}></AiOutlineStar>)}
                    </p>
                    <label htmlFor='review' className='text-[12.5px] md:text-base font-bold mb-[11px] cursor-pointer '>Your Review *</label>
                    <form onSubmit={(e) => e.preventDefault}>
                        <Textarea value={modalReview} onChange={(e) => setModalReview(e.target.value)} resize={'none'} autoComplete='new-password' focusBorderColor='#DFDFDF' border={'1px solid #DFDFDF'} fontSize={'sm'} size={'lg'} py={'3'} height={'2xs'} color={'option.400'} />
                    </form>

                </ModalBody>

                <ModalFooter>
                    <Button onClick={() => {
                        setReviews(pre => {
                            const previousValue = [...pre];
                            const modifiedIndex = previousValue.findIndex(item => item.id === currentModalItem?.id);
                            const modifiedItem = previousValue.find(item => item.id === currentModalItem?.id);
                            if (modifiedItem) {
                                previousValue.splice(modifiedIndex, 1, { ...modifiedItem, review: modalReview, rating: countStar });
                            }
                            return previousValue;
                        });

                    }} colorScheme='blue' mr={3}>
                        Update Review
                    </Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ReviewModal;