import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const items1 = [
  { id: '1', name: 'Item 1', description: 'This is item 1' },
  { id: '2', name: 'Item 2', description: 'This is item 2' },
  { id: '3', name: 'Item 3', description: 'This is item 3' },
  { id: '4', name: 'Item 4', description: 'This is item 4' },
  { id: '5', name: 'Item 5', description: 'This is item 5' },
  { id: '6', name: 'Item 6', description: 'This is item 6' },
  { id: '7', name: 'Item 7', description: 'This is item 7' },
  { id: '8', name: 'Item 8', description: 'This is item 8' },
];

const items2 = [
  { id: '1', name: 'Item 1', description: 'This is item 1' },
  { id: '2', name: 'Item 2', description: 'This is item 2' },
  { id: '3', name: 'Item 3', description: 'This is item 3' },
  { id: '4', name: 'Item 4', description: 'This is item 4' },
  { id: '5', name: 'Item 5', description: 'This is item 5' },
  { id: '6', name: 'Item 6', description: 'This is item 6' },
  { id: '7', name: 'Item 7', description: 'This is item 7' },
  { id: '8', name: 'Item 8', description: 'This is item 8' },
];

const ItemsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(item.id)}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  const handleButtonPress = (itemId) => {
    console.log(`Button pressed for item with id: ${itemId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Item List 1</Text>
      <FlatList
        style={styles.box}
        data={items1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <Text style={styles.header}>Item List 2</Text>
      <FlatList
        style={styles.box}
        data={items2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    marginHorizontal: 14,
    fontSize: 20,
    fontWeight: 'bold'
  },
  box: {
    margin: 14,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6
  },
  list: {
    paddingBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'blue',
    padding: 6,
    paddingHorizontal: 12,
    borderRadius: 6
  }
});

export default ItemsScreen;