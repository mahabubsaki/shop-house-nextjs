import { Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

const InformationTabs = ({ reviews, description, color, dimensions, size, weight }: { reviews: number, description: string, weight: number, dimensions: number[], color: string[], size: string[]; }) => {
    return (
        <Tabs>
            <TabList className='font-bold'>
                <Tab _selected={{ borderColor: '#222529' }} marginX={'10px'} _hover={{ borderColor: "#222529", borderBottom: '2px' }} fontSize={'13px'}>DESCRIPTION</Tab>
                <Tab _selected={{ borderColor: '#222529' }} marginX={'10px'} _hover={{ borderColor: "#222529", borderBottom: '2px' }} fontSize={'13px'}>ADDITIONAL INFORMATION</Tab>
                <Tab _selected={{ borderColor: '#222529' }} marginX={'10px'} _hover={{ borderColor: "#222529", borderBottom: '2px' }} fontSize={'13px'}>REVIEWS ({reviews})</Tab>
            </TabList>

            <TabPanels>
                <TabPanel paddingY={'30px'}>
                    <p className='text-[#7b858a] text-[14px]'>{description}</p>
                </TabPanel>
                <TabPanel paddingY={'30px'}>
                    <TableContainer>
                        <Table variant='striped' colorScheme={'stripe'}>
                            <Tbody>
                                <Tr>
                                    <Td><span className='font-bold text-[#7b858a]'>Weight</span></Td>
                                    <Td><span className='text-[#7b858a]'>{weight} kg</span></Td>
                                </Tr>
                                <Tr>
                                    <Td><span className='font-bold text-[#7b858a]'>Dimensions</span></Td>
                                    <Td><span className='text-[#7b858a]'>{dimensions.join(' x ')} cm</span></Td>
                                </Tr>
                                <Tr>
                                    <Td><span className='font-bold text-[#7b858a]'>Color</span></Td>
                                    <Td><span className='text-[#7b858a]'>{color.join(' , ')}</span></Td>
                                </Tr>
                                <Tr>
                                    <Td><span className='font-bold text-[#7b858a]'>Size</span></Td>
                                    <Td><span className='text-[#7b858a]'>{size.join(' , ')}</span></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel paddingY={'30px'}>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default InformationTabs;