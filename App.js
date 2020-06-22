import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Flexbox from './components/flexbox'

export default function App() {
  // const [name, setName] = useState('Tim');
  // const [person, setPerson] = useState({ name: 'Mario', age: 40 });
  // const [name, setName] = useState('Shaun')
  // const [age, setAge] = useState('30')

  /* const pressHandler = (id) => {
    console.log(id)
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  } */

  // const [people, setPeople] = useState([
  //   { name: "Will", id: '1' },
  //   { name: "Bill", id: '2' },
  //   { name: "Mark", id: '3' },
  //   { name: "Mary", id: '4' },
  //   { name: "Joe", id: '5' },
  //   { name: "John", id: '6' },
  //   { name: "Tom", id: '7' },
  //   { name: "Jerry", id: '8' }
  // ])

  const clickHandler = () => {
    setName('Bruce');
    setPerson({ name: 'Luigi', age: 45 })
  }

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      });
    } else {
      Alert.alert('OOPS!', 'TODOS MUST BE OVER 3 CHARS LONG', [
        { text: 'Understood', onPress: () => console.log('Alert closed') }
      ])
    }
  }

  return (

    // <TouchableWithoutFeedback onPress={() => {
    //   Keyboard.dismiss()
    //   console.log('Dismissed keyboard')
    // }}>
    <View style={styles.container}>
      <Header />
      {/* header */}
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
              // <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>

      {/* key is not needed, automatically taken care of 
      lot less code, good for performance */}
      {/* <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      /> */}
      {/* <ScrollView>
        {
          people.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          })
        }
      </ScrollView> */}
      { /* 3rd example */}
      { /*
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g. John Smith'
        onChangeText={(val) => setName(val)}
      />

      <Text>Enter Age:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 99'
        onChangeText={(val) => setAge(val)}
      />
      <Text>Name: {name}, age: {age}</Text> */}


      { /* 2nd example */}
      { /*
      <Text>My name is: {name}</Text>
      <Text>His name is: {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler} />
    </View> */}


      { /* 1nd example */}
      { /* <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World!!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Hello how are you?</Text>
        <Text>Hello how are you?</Text>
        <Text>Hello how are you?</Text>
      </View> */ }
    </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#777',
  //   padding: 8,
  //   margin: 10,
  //   width: 200
  // },
  // buttonContainer: {
  //   marginTop: 20,
  // },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 40,
    // paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // header: {
  //   backgroundColor: 'pink',
  //   padding: 20,
  // },
  // boldText: {
  //   fontWeight: 'bold'
  // },
  // body: {
  //   backgroundColor: 'yellow',
  //   padding: 20,
  //   fontWeight: 'bold'
  // },
  // item: {
  //   marginTop: 25,
  //   padding: 30,
  //   backgroundColor: 'pink',
  //   fontSize: 24,
  //   marginHorizontal: 10,
  // },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20,
  }
});
