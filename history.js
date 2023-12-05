

import React from 'react'; 
import type {Node} from 'react'; 
import {useState} from 'react'; 
import {useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import image from 'POE/images/hand-painted-watercolor-pastel-sky-background_23-2148902771.avif';
import { 
 SafeAreaView, 
 ScrollView, 
 StatusBar, 
 StyleSheet, 
 Text, 
 HorizontalLayout,
 TextInput, 
 Image,
 ImageBackground,
 Button, 
 useColorScheme, 
 View, 
 Picker,
} from 'react-native'; 

const HistoryScreen = ({ navigation, books, route, createBook }) =>{
   
  const lastBookRead = route.params?.lastBook || {};
  const lastBook = books.length >= 1 ? books[books.length - 1] : {};
  const secondLastBook = books.length >= 2 ? books[books.length - 2] : {};
  const thirdLastBook = books.length >= 3 ? books[books.length - 3] : {};

  const image = {url:'https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13223496.htm#query=background&position=2&from_view=keyword&track=sph&uuid=73b04a73-8648-4d07-a1ed-cdac2d70554e' }; 

    return (
      <SafeAreaView>
        <View style={styles.container}>
    <ImageBackground source={require('POE/images/hand-painted-watercolor-pastel-sky-background_23-2148902771.avif')} resizeMode="cover" style={styles.backgroundImage}>
   < Text style={styles.text}>Inside</Text>
   </ImageBackground>
   </View>
        
        <Text style={styles.secontionHeadingText}>Last Three Books:</Text>
      
 <View style={styles.rowLayout}>
            <Text style={styles.titleText}>Book 1:</Text>
        <TextInput style={styles.informText} placeholder="First Book"
          value={lastBook.title}
          editable={false}
        />
</View>
         <View style={styles.rowLayout}>
         <Text style={styles.titleText}>Book 2: </Text>
         <TextInput
          style={styles.informText}
         placeholder="Second Book"
          value={secondLastBook.title}
          editable={false}
        />
        </View>
   <View style={styles.rowLayout}>
   <Text style={styles.titleText}>Book 3:</Text>
   <TextInput
          style={styles.informText}
          placeholder="Third Book"
          value={thirdLastBook.title}
          editable={false}
        />
        </View>
        
<Button title="Home"
        onPress={() => {
   navigation.navigate('Home', {books: books});
        }}/>
      
      
      <Button title="Add Book"
      onPress={() => {
  navigation.navigate('Add Book', {books: books});
      }}/>
    
    
    <Button title="Genre"
        onPress={() => {
   navigation.navigate('Genre', {books: books});
        }}/>

      </SafeAreaView>
    
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
    marginBottom:60,
  },
  sectionheadingText: {
    color: 'pink',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 50
  },
  titleText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 50
  },
  informText: {
    color: 'black',
    fontSize: 27
  },
  rowLayout: {
    flexDirection: 'row',
    marginTop: 20
    }, 
  buttonContainer: { 
      width: 180, 
      height: 40, 
      backgroundColor: 'blue',
      borderRadius: 8, 
      justifyContent: 'center',
       alignItems: 'center', 
      }, 
  buttonText: { 
      color: 'white', 
      fontSize: 16,
      }
     
    });

  export default HistoryScreen;

        
