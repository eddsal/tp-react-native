import React, {useContext} from 'react';
// import ListItem from './ListItem';

import {ListPurchaseContext} from '../contexts/ListPurchaseContext'
import { FlatList, View } from 'react-native';
import {
  
  Text,
 
} from 'react-native';


import { ListPurchases } from 'ListPurchases';
import { ListTasks } from 'ListTasks';
import { NavigationContainer } from '@react-navigation/native';

export default function List({items}) {
    
  const {purchases} = useContext(ListPurchaseContext);
    return (
            <View>
        {purchases.map(item => (
            <View>
                {item.name}
                {item.status}
            </View>
        ))}
            </View>
        
  );
}