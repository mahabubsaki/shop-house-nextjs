import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react';
import React from 'react';

const DeleteAlert = ({ isOpen, onClose, cancelRef, deleteId, handleDeleteReview }: { onClose: () => void, isOpen: boolean, cancelRef: React.RefObject<HTMLButtonElement>, deleteId: number, handleDeleteReview: (id: number) => void; }) => {
    return (
        <AlertDialog
            motionPreset='slideInBottom'
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
        >
            <AlertDialogOverlay />

            <AlertDialogContent>
                <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                    Are you sure you want to discard all of your notes? 44 words will be
                    deleted.
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button onClick={onClose}>
                        No
                    </Button>
                    <Button onClick={() => {
                        handleDeleteReview(deleteId);
                        onClose();
                    }} colorScheme='red' ml={3}>
                        Yes
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteAlert;