import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Button, CircularProgress, Input, Textarea } from '@chakra-ui/react';
import axios, { AxiosError } from 'axios';
import Head from 'next/head';
import React, { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import toaster from '@/utils/toaster';
import isErrorResponse from '@/utils/errorResponseChecker';

interface DataType {

    img: string[];
    price: number;
    discount: number;
    category: string;
    name: string;
    specialType: string;
    isHot: boolean;
    description: string;
    weight: number;
    dimensions: number[];
    colors: string[];
    sizes: string[];
    subCategory: string;
    stock: number;
}


const AddProduct = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const formRef = useRef<HTMLFormElement>(null);
    const { mutate, isLoading, reset } = useMutation(async (data: DataType) => {
        const response = await axios({ method: 'POST', data: { ...data }, baseURL: 'http://localhost:6969/api/add-product', });
        return response.data;

    }, {
        onSettled: () => {
            reset();
        },
        onError: (err: AxiosError) => {
            toaster(err.response ? err.response?.statusText : err.message, false);
            if (err.response && err.response.data && isErrorResponse(err.response.data)) {
                setErrorMsg(err.response.data.message);
            }
        },
        onSuccess: (data) => {
            console.log(data);
            toaster('Successfully added product', true);
            formRef.current && formRef.current.reset();
        },
    });
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg('');
        const { img0, img1, img2, img3, img4, price, discount, category, names, specialType, isHot, weight, dimensions, colors, sizes, description, subCategory, stock } = e.target;
        const data: DataType = {
            img: [img0.value || undefined, img1.value || undefined, img2.value || undefined, img3.value || undefined, img4.value || undefined],
            price: Number(price.value),
            discount: Number(discount.value),
            category: category.value,
            name: names.value,
            subCategory: subCategory.value,
            specialType: specialType.value,
            isHot: !!isHot.value,
            description: description.value,
            weight: Number(weight.value),
            dimensions: [...(dimensions.value.split(','))].map(i => Number(i)),
            colors: [...(colors.value.split(','))],
            sizes: [...(sizes.value.split(','))],
            stock: Number(stock.value)
        };
        mutate(data);
    };

    return (
        <>
            <Head>
                <title>{`Shipping & Billing Address | SHOP House`}</title>
                <meta name='description' content={`Find the products you need and want online with ease. Shop our extensive selection of items, compare prices, and make purchases with confidence. Get the best deals on the latest trends, brands, and styles. Free shipping available on eligible orders. Start shopping now!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <DashboardLayout>
                <BreadCrumpNavigator paths={['dashboard', 'add-product']} />
                <p>_ formal weight,color (hexcode) an dimensions in L*W*H</p>
                <p>write 250 length of a description on _</p>
                <form ref={formRef} onSubmit={handleSubmit} className='text-center'>
                    <div className='flex flex-col w-1/2 mx-auto'>
                        {new Array(5).fill(0).map((_, i) => <div className='flex flex-col'>
                            <label htmlFor={`img${i}`}>Img Field - {i}</label>
                            <Input id={`img${i.toString()}`} name={`img${i.toString()}`} type='text' />
                        </div>)}
                        <div>
                            <label htmlFor='price'>Price Field</label>
                            <Input name='price' id='price' />
                        </div>
                        <div>
                            <label htmlFor='discount'>Discount Field</label>
                            <Input name='discount' id='discount' />
                        </div>
                        <div>
                            <label htmlFor='category'>Category Field</label>
                            <Input name='category' id='category' />
                        </div>
                        <div>
                            <label htmlFor='subCategory'>Sub Category Field</label>
                            <Input name='subCategory' id='subCategory' />
                        </div>
                        <div>
                            <label htmlFor='stock'>Stock Field</label>
                            <Input name='stock' id='stock' />
                        </div>
                        <div>
                            <label htmlFor='names'>Name Field</label>
                            <Input name='names' id='names' />
                        </div>
                        <div>
                            <label htmlFor='specialType'>Special Type Field</label>
                            <Input name='specialType' id='specialType' />
                        </div>
                        <div>
                            <label htmlFor='isHot'>Is Hot Field</label>
                            <Input name='isHot' id='isHot' />
                        </div>
                        <div>
                            <label htmlFor='weight'>weight Field</label>
                            <Input name='weight' id='weight' />
                        </div>
                        <div>
                            <label htmlFor='dimensions'>Dimensions Field</label>
                            <Input name='dimensions' id='dimensions' />
                        </div>
                        <div>
                            <label htmlFor='colors'>Colors Field</label>
                            <Input name='colors' id='colors' />
                        </div>
                        <div>
                            <label htmlFor='sizes'>Size Field</label>
                            <Input name='sizes' id='sizes' />
                        </div>
                        <div>
                            <label htmlFor='description'>Description Field</label>
                            <Textarea height={'sm'} name='description' id='description' />
                        </div>

                    </div>
                    <div className='flex justify-center my-4'>
                        {isLoading ? <CircularProgress isIndeterminate color='green.300' /> : null}
                    </div>
                    <Button my={'2'} border={'1px'} mx={'auto'} type='submit'>Submit</Button>
                    <div className='text-red-600'>
                        {errorMsg ? errorMsg : null}
                    </div>


                </form>

            </DashboardLayout>
        </>
    );
};

export default AddProduct;