

import React from 'react'; 
import type {Node} from 'react'; 
import {useState} from 'react'; 
import {useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Picker,
} from 'react-native';

const HomeScreen = ({ navigation, route, books, addBook }) => {
  const [Player1Name, setPlayer1Name] = useState('');

  const lastBook = route.params?.lastBook || {};

  const calculateAveragePages = () => {
    if (books.length === 0) {
      return 0;
    }

    const totalPages = books.reduce(
      (sum, book) => sum + parseInt(book.numberOfPages, 10),
      0
    );
    return totalPages / books.length;
  };

  return (
      <SafeAreaView>
        <View>
          <Text style={styles.welcomeText}> Library </Text>

          <Text style={styles.contentText}> Last Book Read: </Text>
          <TextInput
            style={styles.nameText}
            placeholder="Recent Book Read"
            value={lastBook.title}
            editable={false}
          />

          <Text style={styles.contentText}> Author</Text>
          <TextInput
            style={styles.nameText}
            placeholder="Author"
            value={lastBook.author}
            editable={false}
          />

          <Text style={styles.contentText}> Genre</Text>
          <TextInput
            style={styles.nameText}
            placeholder="Genre"
            value={lastBook.genre}
            editable={false}
          />

          <Text style={styles.contentText}> Number Of Pages</Text>
          <TextInput
            style={styles.nameText}
            placeholder="Number Of Pages"
            value={lastBook.numberOfPages ? lastBook.numberOfPages.toString() : ''}
            editable={false}
          />

          <Text style={styles.contentText}> Total Pages Read Across All Books</Text>
          <TextInput
            style={styles.nameText}
            placeholder="Total Pages Read Across All Books"
            value={books.reduce(
              (sum, book) => sum + parseInt(book.numberOfPages, 10),
              0
            ).toString()}
            editable={false}
          />

          <Text style={styles.contentText}>
            Average Number Of Pages Read Across All Books:{' '}
          </Text>
          <TextInput
            style={styles.nameText}
            placeholder="Average Number Of Pages Read Across All Book"
            value={calculateAveragePages().toString()}
            editable={false}
          />

          
          <TouchableOpacity 
          style={styles.buttonContainer}
            title="Add A Book"
            onPress={() => {
              navigation.navigate('Add A Book');
            }}
          >
          style={styles.buttonText}
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.buttonContainer}
           title="History Screen"
           onPress={() => {
           navigation.navigate('history', { books: books });
          }}
          >
          style={styles.buttonText}
           </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.buttonText}
          title="Genre Screen"
          onPress={() => {
          navigation.navigate('genre', { books: books });
          }}
        >
          style={styles.buttonContainer}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
};

const AddABook = ({ navigation, route, addBook, History }) => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    pages: '',
  });

  const saveBook = () => {
    
    const newBook = {
      title: bookData.title,
      author: bookData.author,
      genre: bookData.genre,
      numberOfPages: bookData.pages,
    };

    addBook(newBook);
    navigation.navigate('Home', { lastBook: newBook });
  };


  return (
    <View>
      <Text style={styles.welcomeText}> Library </Text>
      <Text style={styles.head}> Title: </Text>
      <TextInput
        style={styles.head}
        placeholder="Title"
        value={bookData.title}
        onChangeText={(text) => setBookData({ ...bookData, title: text })}
      />
      <Text style={styles.head}> Author: </Text>
      <TextInput
        style={styles.head}
        placeholder="Author"
        value={bookData.author}
        onChangeText={(text) => setBookData({ ...bookData, author: text })}
      />
      <Text style={styles.head}> Genre: </Text>
      <Picker
        style={styles.Picker}
        selectedValue={bookData.genre}
        onValueChange={(itemValue) => setBookData({ ...bookData, genre: itemValue })}
      >
        <Picker.Item label="Select Genre"          value="" />
        <Picker.Item label="True Crime"            value="True Crime" />
        <Picker.Item label="Thriller"              value="Thriller" />
        <Picker.Item label="Romance"               value="Romance" />
        <Picker.Item label="Mystery"               value="Mystery" />
      </Picker>

      <Text style={styles.head}> Number Of Pages: </Text>
      <TextInput
        style={styles.head}
        placeholder="Number Of Pages"
        value={bookData.pages}
        onChangeText={(text) => setBookData({ ...bookData, pages: text })}
      />

      <Button title="Add Book" onPress={addBook} />
    </View>
  );
};

  
const Stack = createNativeStackNavigator();

const App = () => {
  const [books, setBooks] = useState([]);

  const calculateAveragePages = () => {
    if (books.length === 0) {
      return 0;
    }

    const totalPages = books.reduce(
      (sum, book) => sum + parseInt(book.numberOfPages, 10),
      0
    );
    return totalPages / books.length;
  };

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={(props) => <HomeScreen {...props} books={books} addBook={addBook} />}
        />
        
        <Stack.Screen name="Add Book" component={(props) => <AddABook {...props} addBook={addBook} />} />
        <Stack.Screen name="Genre" component={(props) => <Genre {...props} books={books} addBook={addBook} />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  welcomeText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 30,
  },
  homeText: {
    color: 'red',
    fontSize: 20,
  },
  contentText: {
    color: '#D90166',
    fontSize: 20,
  },

  linkText: {
    color: 'pink',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 35,
  },
  head:{
    fontSize: 15,
    marginBottom: 10,
  },
  Picker: {
    height: 35,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  buttonContainer: { 
    width: 180, 
    height: 40, 
    backgroundColor: 'pink',
    borderRadius: 8, 
    justifyContent: 'center',
     alignItems: 'center', 
    }, 
buttonText: { 
    color: 'white', 
    fontSize: 16,
    }
});

export default App;