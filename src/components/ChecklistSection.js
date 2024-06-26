import React from 'react';
import { Card } from '@radix-ui/react-alert-dialog';
import ChecklistItem from './ChecklistItem';

const ChecklistSection = ({ title, items, checkedItems, onToggle }) => (
  <Card className="mb-4">
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {items.map((item) => (
        <ChecklistItem
          key={item}
          item={item}
          isChecked={checkedItems.includes(item)}
          onToggle={onToggle}
        />
      ))}
    </div>
  </Card>
);

export default ChecklistSection;
