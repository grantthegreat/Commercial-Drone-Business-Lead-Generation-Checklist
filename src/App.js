import React, { useState, useEffect } from 'react';
import { Progress } from '@radix-ui/react-progress';
import { Button } from '@radix-ui/react-alert-dialog';
import ChecklistSection from './components/ChecklistSection';
import EmailForm from './components/EmailForm';
import ThankYouDialog from './components/ThankYouDialog';
import { sections } from './data/checklistData';

const App = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const savedCheckedItems = localStorage.getItem('checkedItems');
    if (savedCheckedItems) {
      setCheckedItems(JSON.parse(savedCheckedItems));
    }
  }, []);

  const handleToggle = (item) => {
    setCheckedItems((prev) => {
      const newCheckedItems = prev.includes(item) 
        ? prev.filter((i) => i !== item) 
        : [...prev, item];
      localStorage.setItem('checkedItems', JSON.stringify(newCheckedItems));
      return newCheckedItems;
    });
  };

  const totalItems = Object.values(sections).flat().length;
  const progress = (checkedItems.length / totalItems) * 100;

  const exportResults = () => {
    const results = Object.entries(sections).map(([title, items]) => {
      const sectionResults = items.map(item => `${checkedItems.includes(item) ? '[x]' : '[ ]'} ${item}`).join('\n');
      return `${title}\n${sectionResults}`;
    }).join('\n\n');
    
    const blob = new Blob([results], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'drone_lead_gen_checklist_results.txt';
    a.click();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Commercial Drone Business Lead Generation Checklist</h1>
      
      <EmailForm onSubmit={() => setShowThankYou(true)} />
      
      <Progress value={progress} className="mb-4" />
      <p className="mb-4">Progress: {checkedItems.length} / {totalItems} ({progress.toFixed(1)}%)</p>
      
      {Object.entries(sections).map(([title, items]) => (
        <ChecklistSection
          key={title}
          title={title}
          items={items}
          checkedItems={checkedItems}
          onToggle={handleToggle}
        />
      ))}
      
      <Button onClick={exportResults} className="mt-4">Export Results</Button>

      <ThankYouDialog open={showThankYou} onOpenChange={setShowThankYou} />
    </div>
  );
};

export default App;
