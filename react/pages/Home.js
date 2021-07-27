import React, { useState, useContext } from 'react';
import {Text} from 'react-native'
// import ListProvider from '../contexts/CodeContext';
import ListPurchaseContext from '../contexts/ListPurchaseContext';
import List from '../components/List';
import FormTask from '../components/FormTask';



// import AddEditItem from '../components/Code/AddEditItem';
export default function Home() {
  const [selectedItem, setSelectedItem] = useState();
  const handleEditItem = item => setSelectedItem(item);
  const {addPurchase} = useContext(ListPurchaseContext);


  
  return (
    <ListPurchaseContext>
      <List />
      <FormTask onSubmit={(values) => addPurchase(values)} />

    </ListPurchaseContext>

  );
 }