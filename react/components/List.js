import React, {useContext} from 'react';
// import ListItem from './ListItem';
// import {CodeContext} from '../../contexts/CodeContext';
import { FlatList } from 'react-native';
import {
  
  Text,
 
} from 'react-native';


import { ListPurchases } from 'ListPurchases';
import { ListTasks } from 'ListTasks';
import { NavigationContainer } from '@react-navigation/native';

export default function List({onEdit}) {
  // const {list, fetchList, loading, page} = useContext(CodeContext);
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="ListPurchases" component={ListPurchases} />
    //     <Tab.Screen name="ListTasks" component={ListTasks} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    // <FlatList
    //   data={list}
    //   keyExtractor={item => item._id}
    //   renderItem={({item}) => (
    //     <ListItem item={item} onEdit={() => onEdit(item)} />
    //   )}
    //   onRefresh={() => fetchList(undefined, true)}
    //   refreshing={loading}
    //   onEndReachedThreshold={0.7}
    //   onEndReached={() => fetchList({page: page + 1})}
    // />
    <Text>ciao</Text>
  );
}