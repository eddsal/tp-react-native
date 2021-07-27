import React, {useState} from 'react';
// import ListProvider from '../contexts/CodeContext';
import List from '../components/List';
// import AddEditItem from '../components/Code/AddEditItem';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState();
  const handleEditItem = item => setSelectedItem(item);
  return (
    // <ListProvider>
      // * <AddEditItem selectedItem={selectedItem} /> 
      <List onEdit={handleEditItem} />
      // </ListProvider>
  );
}