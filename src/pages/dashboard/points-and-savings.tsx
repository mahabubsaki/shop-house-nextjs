import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import DashboardLayout from '@/layouts/DashboardLayout';
import Head from 'next/head';
import React from 'react';
import { priceModifier } from '@/utils/price_modifier';
import { Badge, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { format } from 'date-fns';
import CustomDarkButton from '@/components/helpers/CustomDarkButton';

const PointsHistory = () => {
    return (
        <>
            <Head>
                <title>{`Points History | SHOP House`}</title>
                <meta name='description' content={`Find the products you need and want online with ease. Shop our extensive selection of items, compare prices, and make purchases with confidence. Get the best deals on the latest trends, brands, and styles. Free shipping available on eligible orders. Start shopping now!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <DashboardLayout>
                <BreadCrumpNavigator paths={['Dashboard', 'Points-And-Savings']} />
                <div>
                    <p className='flex mt-2 mb-4 text-[22px] font-bold gap-[10px] items-center'>Points And Savings</p>
                    <TableContainer>
                        <Table variant='striped'>

                            <Thead>
                                <Tr>
                                    <Th>ORDER ID</Th>
                                    <Th>Date</Th>
                                    <Th>Points Earned</Th>
                                    <Th>Savings</Th>
                                    <Th>Discount Source</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {[{ orderId: '2017182818', points: 28, savings: 9, source: 'Coupon', date: '2023-04-07' }, { orderId: '2017182418', points: 68, savings: 12, source: 'Promo Code', date: '2023-04-07' }, { orderId: '2017182418', points: 68, savings: 12, source: 'Cashback', date: '2023-04-07' }].map(item => <Tr>
                                    <Td>
                                        <Badge colorScheme={'teal'}>
                                            <div>
                                                <p className='text-[14px]'>#{item.orderId}</p>
                                            </div>
                                        </Badge>
                                    </Td>
                                    <Td>
                                        <div>
                                            <p className='text-[14px] text-[#222529]'>{format(new Date(item.date), 'PP')}</p>
                                        </div>
                                    </Td>
                                    <Td>
                                        <div>
                                            <p className='text-[14px] text-[#222529]'>{item.points}</p>
                                        </div>
                                    </Td>
                                    <Td>
                                        <div>
                                            <p className='text-[14px] text-[#222529]'>${priceModifier(item.savings)}</p>
                                        </div>
                                    </Td>
                                    <Td>
                                        <Badge colorScheme={'purple'}>
                                            <div className='font-bold  text-[14px] text-[#222529'>
                                                <p>{item.source}</p>
                                            </div>
                                        </Badge>
                                    </Td>
                                    <Td>
                                        <div className='inline-block'>
                                            <CustomDarkButton>
                                                View Details
                                            </CustomDarkButton>
                                        </div>
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

export default PointsHistory;