/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import type { Node } from 'react';
 import {
     StatusBar,
     StyleSheet,
     Text,
     View,
     TextInput,
     Button,
 } from 'react-native';
 
 //Four game buttons displayed
 //Home screen with settings button
 //Settings button opens a new screen with adjustments in it
 //Current settings screen will only have placeholder text
 //Each game button navigates to a placeholder screen
 //Placeholder text + description
 //And Back to Home button

 
 const App: () => Node = () => {

     const [mainMenuIsVisible, setMainMenuVisible] = useState(true);
 
     const[checkersScreenIsVisible, setCheckersScreenVisible] = useState(false);
     const [playerName, setPlayerName] = useState('Player');
 
     return (
         <View>
             <StatusBar></StatusBar>
             <View style={[styles.menuView, { display: mainMenuIsVisible ? 'flex' : 'none' }]}>
                 <Text style={styles.titleText}>
                     Ye Old Games
                 </Text>
                 <Button
                     title='Checkers'
                     onPress={() => {setMainMenuVisible(false); setCheckersScreenVisible(true);}}
                     style={styles.gameButton}
                     accessibilityLabel='Checkers'>
                 </Button>
             </View>
             <View style={{display: checkersScreenIsVisible ? 'flex' : 'none'}}>
                 <TextInput
                     value={playerName}
                     placeholder='Player'
                     onChangeText={setPlayerName}/>
                 <Text>Hello, {playerName}</Text>
                 <Button title='Go To Menu' accessibilityLabel='Go To Menu' onPress={() => {setCheckersScreenVisible(false); setMainMenuVisible(true);}}></Button>
             </View>
             <Button
                  title='Settings'
                  onPress={() => setMainMenuVisible(!mainMenuIsVisible)}>
                 </Button>
          </View>
      );
  };
 
  const styles = StyleSheet.create({
      menuView: {
          justifyContent: 'center',
      },
      gameButton: {
          color: "aqua",
      },
      titleText: {
          fontSize: 30,
          fontWeight: '600',
          textAlign: 'center'
      },
  });
 
  export default App;
 