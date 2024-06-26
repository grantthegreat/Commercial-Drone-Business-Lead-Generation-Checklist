import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
      <Input 
        type="email" 
        placeholder="Enter your email to save progress" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2"
      />
      <Button type="submit">Save Progress</Button>
    </form>
  );
};

export default EmailForm;
