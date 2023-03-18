import { Drawer, DrawerContent, DrawerOverlay, DrawerProps } from '@chakra-ui/react';
import React from 'react';
import { FocusableElement } from "@chakra-ui/utils";


const SortFilterDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void, btnRef: React.RefObject<FocusableElement> | undefined; }) => {
    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement='left' >
            <DrawerOverlay />
            <DrawerContent>
                s
            </DrawerContent>
        </Drawer>
    );
};

export default SortFilterDrawer;