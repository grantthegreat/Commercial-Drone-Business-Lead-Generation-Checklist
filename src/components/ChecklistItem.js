import React from 'react';
import { Checkbox } from '@radix-ui/react-checkbox';

const ChecklistItem = ({ item, onToggle, isChecked }) => (
  <div className="flex items-center space-x-2 mb-2">
    <Checkbox id={item} checked={isChecked} onCheckedChange={() => onToggle(item)} />
    <label htmlFor={item} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {item}
    </label>
  </div>
);

export default ChecklistItem;
