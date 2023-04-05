import BreadCrumpNavigator from '@/components/shared/BreadCrumpNavigator';
import DashboardLayout from '@/layouts/DashboardLayout';
import { priceModifier } from '@/utils/price_modifier';
import { Badge, Button, Menu, MenuButton, MenuItem, MenuList, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { format } from 'date-fns';
import Head from 'next/head';
import React from 'react';
import { FaDropbox } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';

const Orders = () => {
    const orders = [{ id: '2017182818', status: 'pending', count: 5, total: 500, }, { id: '2017182819', status: 'paid', count: 9, total: 1750, }, { id: '2017182828', status: 'delivered', count: 2, total: 120, }, { id: '2017182818', status: 'canceled', count: 15, total: 1020, }, { id: '2017182818', status: 'pending', count: 2, total: 50, }, { id: '2017182818', status: 'delivered', count: 3, total: 100, }];
    return (
        <>
            <Head>
                <title>{`Orders | SHOP House`}</title>
                <meta name='description' content={`Find the products you need and want online with ease. Shop our extensive selection of items, compare prices, and make purchases with confidence. Get the best deals on the latest trends, brands, and styles. Free shipping available on eligible orders. Start shopping now!`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <DashboardLayout>
                <BreadCrumpNavigator paths={['Dashboard', 'Orders']} />
                <div>
                    <p className='flex mt-2 mb-4 text-[22px] font-bold gap-[10px] items-center'><FaDropbox /> <span>Orders</span></p>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead borderBottom={'1px'}>
                                <Tr>
                                    <Th><p className='text-[#222529] py-[10px] text-[14px] font-bold text-center '>NO.</p></Th>
                                    <Th><p className='text-[#222529] py-[10px] text-[14px] font-bold text-center '>ORDER <br /> ID</p></Th>
                                    <Th><p className='text-[#222529] py-[10px] text-[14px] font-bold text-center '>ORDER <br /> PLACED</p></Th>
                                    <Th><p className='text-[#222529] py-[10px] text-[14px] font-bold text-center'>STATUS</p></Th>
                                    <Th><p className='text-[#222529] py-[10px] text-[14px] font-bold text-center'>PRODUCTS <br /> COUNT</p></Th>
                                    <Th><p className='text-[#222529] py-[10px] text-[14px] font-bold text-center'>GRAND <br /> TOTAL</p></Th>
                                    <Th><p className='text-[#222529] py-[10px] text-[14px] font-bold text-center'></p></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {orders.map((item, idx) => <Tr key={item.id} borderTop={'1px'} borderColor='#E7E7E7'>
                                    <Td>
                                        <div className='text-center text-[14px] text-[#777]'>
                                            <p>{idx + 1})</p>
                                        </div>
                                    </Td>
                                    <Td>
                                        <Badge>
                                            <div className='text-center text-[14px] text-[#777]'>
                                                <p>#{item.id}</p>
                                            </div>
                                        </Badge>
                                    </Td>
                                    <Td>
                                        <div className='text-center text-[14px] text-[#777]'>
                                            <p>{format(new Date(), 'PP')}</p>
                                        </div>
                                    </Td>
                                    <Td>
                                        <Badge fontSize={'sm'} colorScheme={item.status === 'pending' ? 'yellow' : item.status === 'paid' ? 'blue' : item.status === 'canceled' ? 'red' : 'green'} variant={'solid'}>
                                            <div className='text-center text-[14px] text-white'>
                                                <p>{item.status}</p>
                                            </div>
                                        </Badge>
                                    </Td>
                                    <Td>
                                        <div className='text-center text-[14px] text-[#777]'>
                                            <p>{item.count}</p>
                                        </div>
                                    </Td>
                                    <Td>
                                        <div className='text-center text-[14px] text-[#777] font-bold'>
                                            <p>${priceModifier(item.total)}</p>
                                        </div>
                                    </Td>
                                    <Td>
                                        <div className='flex flex-col gap-[10px]'>
                                            <Menu>
                                                <MenuButton backgroundColor={'#F4F4F4'} fontSize={'sm'} textColor={'#777'} _hover={{ backgroundColor: '#08C', textColor: '#fff' }} as={Button} rightIcon={<BiChevronDown />}>
                                                    Actions
                                                </MenuButton>
                                                <MenuList>

                                                    {item.status === 'pending' ? <>
                                                        <MenuItem>Cancel Order</MenuItem>
                                                        <MenuItem>Pay</MenuItem>
                                                    </> : null}
                                                    <MenuItem>View Details</MenuItem>
                                                    {item.status === 'paid' ? <MenuItem>Track Order</MenuItem> : null}
                                                    {item.status === 'canceled' ? <MenuItem>Delete Order</MenuItem> : null}
                                                    {(item.status === 'canceled' || item.status === 'delivered') ? <MenuItem>Give Feedback</MenuItem> : null}
                                                </MenuList>
                                            </Menu>
                                        </div>
                                    </Td>
                                </Tr>)}
                            </Tbody>
                        </Table>
                    </TableContainer>
                    {/* <div className='h-[2000px]'>

                    </div> */}
                </div>
            </DashboardLayout>
        </>
    );
};

export default Orders;