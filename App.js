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
     Switch,
     Image,
 } from 'react-native';
 
 /*
 base for our game:
 Four game buttons displayed
 Home screen with settings button
 Settings button opens a new screen with adjustments in it
 Current settings screen will only have placeholder text
 Each game button navigates to a placeholder screen
 Placeholder text + description
 And Back to Home button
 This is a simplified version to get started
 */
 
 const App: () => Node = () => {
    // state declerations
     const [mainMenuIsVisible, setMainMenuVisible] = useState(true);
     const [settingsScreenVisible, setSettingsScreenVisible] = useState(false);
     const [checkersScreenIsVisible, setCheckersScreenVisible] = useState(false);
     const [muteAudio, setMuteAudio] = useState(false);
     const [playerName, setPlayerName] = useState('Player');
 
     return (
         <View>
             <StatusBar></StatusBar>
             {/* main menu view screen */}
             <View style={[styles.menuView, { display: mainMenuIsVisible ? 'flex' : 'none' }]}>
                 <Text style={styles.titleText}>
                     Ye Old Games
                 </Text>
                 <View style={{height:40}}></View>
                 <Button
                     title='Checkers'
                     onPress={() => {setMainMenuVisible(false); setCheckersScreenVisible(true);}}
                     style={styles.gameButton}
                     accessibilityLabel='Checkers'>
                 </Button>
                 <View style={{height:40}}></View>
                 <Button
                 style={styles.gameButton}
                  title='Settings'
                  onPress={() => {setMainMenuVisible(false); setSettingsScreenVisible(true)}}
                  style={styles.settingsButton}>
                 </Button>
             </View>
              {/* checkers view screen */}
             <View style={{display: checkersScreenIsVisible ? 'flex' : 'none'}}>
                 <TextInput
                     value={playerName}
                     placeholder='Player'
                     onChangeText={setPlayerName}/>
                 <Text>Hello, {playerName}</Text>
                 <Button style={styles.gameButton} title='Go To Menu' accessibilityLabel='Go To Menu' onPress={() => {setCheckersScreenVisible(false); setMainMenuVisible(true);}}></Button>
             </View>
             <View style={{display: settingsScreenVisible ? 'flex' : 'none'}}>
                 <Text style={styles.settingsHeader}>Settings</Text>
                 <Text>Mute Audio
                     <Switch
                     onValueChange={setMuteAudio}
                     value={muteAudio}/>
                 </Text>
                 <Button style={styles.gameButton} title='Go To Menu' accessibilityLabel='Go To Menu' onPress={() => {setSettingsScreenVisible(false); setMainMenuVisible(true);}}></Button>
             </View>
          </View>
      );
  };
 // style sheet instead of defaults
 const styles = StyleSheet.create({
    menuView: {
        justifyContent: 'center',
        margin: 10,
        padding: 25,
    },
    gameButton: {
        margin: 10,
        padding: 25,
        borderwidth: 5,
        borderRadius: 20,
    },
    titleText: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center'
    },
    settingsHeader: {
        textAlign: 'center',
        fontSize:35,
        fontWeight:'bold',
    },
});
 
  export default App;