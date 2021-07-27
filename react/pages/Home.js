import React, { useState, useContext } from 'react';
import {Text} from 'react-native'
// import ListProvider from '../contexts/CodeContext';
import ListPurchaseContext from '../contexts/ListPurchaseContext';
import List from '../components/List';



// import AddEditItem from '../components/Code/AddEditItem';
export default function Home() {
  const [selectedItem, setSelectedItem] = useState();
  const handleEditItem = item => setSelectedItem(item);

  
  return (
    <ListPurchaseContext>
      <List />
    </ListPurchaseContext>

  );
 }