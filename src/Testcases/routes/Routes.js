import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

// import HomeScreen from '../screens/HomeScreen';
// import Categories from '../screens/Categories';
import TestScreen from '../screens/TestScreen';

const RootStack = createStackNavigator(
    {
        // HomeScreen:{
        //     screen: HomeScreen,
        // },
        // Categories:{
        //     screen: Categories,
        // },
        TestScreen:{
            screen: TestScreen,
        },
    }
    // {
    //     initialRouteName: 'Home',
    //     navigationOptions: ({ navigation }) => ({
    //       headerStyle: {
    //         fontWeight: 'bold',
    //         textAlign: 'center',
    //         alignSelf: 'center',
    //         flex: 1,
    //         backgroundColor: '#FF9800',
    //       }
    //     })
    //   }

);

// Defining DrawerNavigator
// const DrawerNavigator = createDrawerNavigator(
//     {
//         Screen: RootStack
//     },
//     {
//         drawerPosition: 'left',
//         initialRouteName: 'Screen',
//         drawerWidth: 250,
//     }
// );

const AppContainer = createAppContainer(RootStack);

export default AppContainer;