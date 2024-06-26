import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ChecklistItem from './ChecklistItem';

const ChecklistSection = ({ title, items, checkedItems, onToggle }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {items.map((item) => (
        <ChecklistItem
          key={item}
          item={item}
          isChecked={checkedItems.includes(item)}
          onToggle={onToggle}
        />
      ))}
    </CardContent>
  </Card>
);

export default ChecklistSection;
