

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

const Genre = ({ route }) => {
    const { books } = route.params;
    const genreCounts = {};
  
    books.forEach((book) => {
      if (book.genre) {
        genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1;
      }
    });
  
    return (
        <View>
          <Text style={styles.welcomeText}> Library </Text>
          <View>
            <Text style={styles.genreHeader}>Genres & Number of Books Read:</Text>
            {Object.keys(genreCounts).map((genre) => (
              <Text key={genre}>
                {genre}: {genreCounts[genre]} books
              </Text>
            ))}
          </View>
        </View>
    );
  };

