
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';


export default class App extends React.Component {
 render(){
  return ( <AppContainer/>
  )
 }
  
}


const TabNavigator= createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
},

{
  
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const rootName=navigation.state.rootName;
      if(rootName==="transaction"){
        return(
          <Image 
          source={require("./assets/book.jpg")}
          style={{width:40,height:40}}/>
        )
      }

      else if(rootName==="search"){
        return(
          <Image 
          source={require("./assets/searchingbook.jpg")}
          style={{width:40,height:40}}/>
        )
      }

    }
  })
  
})













const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
