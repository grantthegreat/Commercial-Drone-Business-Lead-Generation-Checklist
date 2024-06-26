import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const ThankYouDialog = ({ open, onOpenChange }) => (
  <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
      <AlertDialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
        <AlertDialog.Title className="text-lg font-bold mb-2">Thank You!</AlertDialog.Title>
        <AlertDialog.Description className="mb-4">
          Your progress has been saved. We'll send you updates and tips to help you generate more leads for your drone business.
        </AlertDialog.Description>
        <div className="flex justify-end">
          <AlertDialog.Action asChild>
            <button 
              onClick={() => onOpenChange(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default ThankYouDialog;
