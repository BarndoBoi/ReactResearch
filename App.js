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
    ScrollView,
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

function nextScreen(screenName) {

}

const App: () => Node = () => {

    const backgroundStyle = {
    };
    const [menuIsVisible, setMenuVisible] = useState(true);

    return (
        <View>
            <StatusBar></StatusBar>
            <View style={[styles.menuView, { display: menuIsVisible ? 'flex' : 'none' }]}>
                <Text style={styles.titleText}>
                    Ye Old Games
                </Text>
                <Button
                    title='Chess'
                    onPress={nextScreen('Chess')}
                    style={styles.gameButton}
                    accessibilityLabel='Chess'>
                </Button>
                <Button
                    title='Checkers'
                    onPress={nextScreen('Checkers')}
                    style={styles.gameButton}
                    accessibilityLabel='Checkers'>
                </Button>
                <Button
                    title='Solitaire'
                    onPress={nextScreen('Solitaire')}
                    style={styles.gameButton}
                    accessibilityLabel='Solitaire'>
                </Button>
                <Button
                    title='Fancy Chess'
                    onPress={nextScreen('Fancy Chess')}
                    style={[styles.gameButton, { disabled: true }]}
                    accessibilityLabel='Fancy Chess'>
                </Button>
            </View>
            <Button
                 title='Settings'
                 onPress={() => setMenuVisible(!menuIsVisible)}
                 style={styles.settingsButton}>
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
     settingsButton: {
         color: "gold",
     },
     titleText: {
         fontSize: 30,
         fontWeight: '600',
     },
 });

 export default App;
