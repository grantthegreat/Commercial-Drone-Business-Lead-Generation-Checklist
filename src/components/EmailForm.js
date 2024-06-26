import React, { useState } from 'react';
import { Button } from '@radix-ui/react-alert-dialog';

const EmailForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your server or email service
    console.log('Submitted email:', email);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input 
        type="email" 
        placeholder="Enter your email to save progress" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 w-full border rounded"
      />
      <Button type="submit">Save Progress</Button>
    </form>
  );
};

export default EmailForm;
