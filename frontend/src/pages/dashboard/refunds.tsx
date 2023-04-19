import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import DashboardLayout from '@/layouts/DashboardLayout';
import { priceModifier } from '@/utils/price_modifier';
import { Badge, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { format } from 'date-fns';
import Head from 'next/head';
import React from 'react';

const Refunds = () => {
    return (
        <>
            <Head>
                <title>{`My Refunds | SHOP House`}</title>
                <meta name='description' content={`Find the products you need and want online with ease. Shop our extensive selection of items, compare prices, and make purchases with confidence. Get the best deals on the latest trends, brands, and styles. Free shipping available on eligible orders. Start shopping now!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <DashboardLayout>
                <BreadCrumpNavigator paths={['Dashboard', 'Refunds']} />
                <div>
                    <p className='flex mt-2 mb-4 text-[22px] font-bold gap-[10px] items-center'>My Refunds</p>
                    <TableContainer>
                        <Table variant='striped'>

                            <Thead>
                                <Tr>
                                    <Th>Product</Th>
                                    <Th>Date</Th>
                                    <Th>Units</Th>
                                    <Th>SubTotal</Th>
                                    <Th>Status</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {[{ name: 'Mens Leather Belt', units: 2, subtotal: 500, status: 'In Progress', date: '2023-04-07' }, { name: 'Mens T-Shirt', units: 1, subtotal: 100, status: 'Completed', date: '2023-04-07' }].map(item => <Tr>
                                    <Td>
                                        <div>
                                            <p className='text-[14px] text-[#08c] cursor-pointer underline '>{item.name}</p>
                                        </div>
                                    </Td>
                                    <Td>
                                        <div>
                                            <p className='text-[14px] text-[#222529]'>{format(new Date(item.date), 'PP')}</p>
                                        </div>
                                    </Td>
                                    <Td>
                                        <div>
                                            <p className='text-[14px] text-[#222529]'>{item.units}</p>
                                        </div>
                                    </Td>
                                    <Td>
                                        <div>
                                            <p className='text-[14px] text-[#222529]'>${priceModifier(item.subtotal)}</p>
                                        </div>
                                    </Td>
                                    <Td>
                                        <Badge fontSize={'sm'} colorScheme={item.status === 'In Progress' ? 'blue' : 'green'} variant={'solid'}>
                                            <div className='text-center text-[14px] text-white'>
                                                <p>{item.status}</p>
                                            </div>
                                        </Badge>
                                    </Td>
                                </Tr>)}

                            </Tbody>

                        </Table>
                    </TableContainer>
                </div>
            </DashboardLayout>
        </>
    );
};

export default Refunds;