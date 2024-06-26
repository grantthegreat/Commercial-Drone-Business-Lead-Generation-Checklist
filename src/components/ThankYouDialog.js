import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from '@radix-ui/react-alert-dialog';

const ThankYouDialog = ({ open, onOpenChange }) => (
  <AlertDialog open={open} onOpenChange={onOpenChange}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Thank You!</AlertDialogTitle>
        <AlertDialogDescription>
          Your progress has been saved. We'll send you updates and tips to help you generate more leads for your drone business.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction onClick={() => onOpenChange(false)}>Close</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default ThankYouDialog;
