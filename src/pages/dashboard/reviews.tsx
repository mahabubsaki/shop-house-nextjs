import DashboardLayout from '@/layouts/DashboardLayout';
import Head from 'next/head';
import React, { useState } from 'react';
import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import { useDisclosure } from '@chakra-ui/react';
import ReviewModal from '@/components/dashboard/ReviewModal';
import ReviewCard from '@/components/common/map/ReviewCard';
import DeleteAlert from '@/components/dashboard/DeleteAlert';
import CustomSelect from '@/components/helpers/CustomSelect';

const Reviews = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure();
    const cancelRef: React.RefObject<HTMLButtonElement> = React.useRef(null);
    const [currentModalItem, setCurrentModalItem] = useState<null | { img: string, productName: string, rating: number, review: string, date: string, id: number; }>(null);
    const [deleteId, setDeleteId] = useState(0);
    const [reviews, setReviews] = useState([{ img: 'https://i.ibb.co/ZH6SJpF/category-1.jpg', productName: "Men's suits", rating: 4, review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet eaque omnis commodi. Amet ducimus quaerat corrupti sed quae! At mollitia illum quibusdam esse nihil ad et nam assumenda earum.', date: '2022-04-02', id: 1 }, { img: 'https://i.ibb.co/ZH6SJpF/category-1.jpg', productName: "Men's suits", rating: 3, review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet eaque omnis commodi. Amet ducimus quaerat corrupti sed quae! At mollitia illum quibusdam esse nihil ad et nam assumenda earum.', date: '2021-04-02', id: 2 }, { img: 'https://i.ibb.co/ZH6SJpF/category-1.jpg', productName: "Men's suits", rating: 5, review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet eaque omnis commodi. Amet ducimus quaerat corrupti sed quae! At mollitia illum quibusdam esse nihil ad et nam assumenda earum.', date: '2023-04-02', id: 3 }, { img: 'https://i.ibb.co/ZH6SJpF/category-1.jpg', productName: "Men's suits", rating: 1, review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet eaque omnis commodi. Amet ducimus quaerat corrupti sed quae! At mollitia illum quibusdam esse nihil ad et nam assumenda earum.', date: '2022-07-02', id: 4 }, { img: 'https://i.ibb.co/ZH6SJpF/category-1.jpg', productName: "Men's suits", rating: 4, review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet eaque omnis commodi. Amet ducimus quaerat corrupti sed quae! At mollitia illum quibusdam esse nihil ad et nam assumenda earum.', date: '2022-12-02', id: 5 }].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    const handleDeleteReview = (id: number) => setReviews(pre => pre.filter(item => item.id !== id));
    const handleOnSelectChange = (option: string) => {
        console.log(option);
        if (option === 'Sort By Date (Descending)') {
            setReviews(pre => {
                const newState = [...pre].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                return newState;
            });
        } else if (option === 'Sort By Date (Ascending)') {
            console.log(option);
            setReviews(pre => {
                const newState = [...pre].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                return newState;
            });
        } else if (option === 'Sort By Rating (Ascending)') {
            setReviews(pre => {
                const newState = [...pre].sort((a, b) => a.rating - b.rating);
                return newState;
            });
        } else {
            setReviews(pre => {
                const newState = [...pre].sort((a, b) => b.rating - a.rating);
                return newState;
            });
        }
    };
    return (
        <>
            <Head>
                <title>{`Orders | SHOP House`}</title>
                <meta name='description' content={`Find the products you need and want online with ease. Shop our extensive selection of items, compare prices, and make purchases with confidence. Get the best deals on the latest trends, brands, and styles. Free shipping available on eligible orders. Start shopping now!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <DashboardLayout>
                <BreadCrumpNavigator paths={['dashboard', 'reviews']} />
                <ReviewModal reviews={reviews} setReviews={setReviews} currentModalItem={currentModalItem} isOpen={isOpen} onClose={onClose} />
                <DeleteAlert deleteId={deleteId} handleDeleteReview={handleDeleteReview} cancelRef={cancelRef} isOpen={isOpen1} onClose={onClose1} />
                <div className='py-[20px]'>
                    <p className='flex mt-2 mb-4 text-[22px] font-bold gap-[10px] items-center'>Reviews Given</p>
                    <div className='flex justify-center my-4'>
                        <CustomSelect handleOnSelectChange={handleOnSelectChange} defaults='Sort By Date (Descending)' width='250px' options={['Sort By Date (Descending)', 'Sort By Date (Ascending)', 'Sort By Rating (Ascending)', 'Sort By Rating (Descending)']} />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:grid-cols-3'>
                        {reviews.map(item => <ReviewCard onOpen1={onOpen1} setDeleteId={setDeleteId} currentModalItem={currentModalItem} setCurrentModalItem={setCurrentModalItem} key={item.id} date={item.date} img={item.img} onOpen={onOpen} productName={item.productName} id={item.id} rating={item.rating} review={item.review} />)}
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

export default Reviews;