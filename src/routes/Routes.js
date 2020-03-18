import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomePage from '../screens/HomePage';
import CategoryPage from '../screens/CategoryPage';
import RecipePage from '../screens/RecipePage';
import RecipesListPage from '../screens/RecipesListPage';
import DrawerPage from '../screens/DrawerPage';
import IngredientPage from '../screens/IngredientPage';
import IngredientsDetailPage from '../screens/IngredientsDetailPage';

const RootStack = createStackNavigator(
  {
    Home: {screen: HomePage},
    Category: {screen: CategoryPage},
    Recipe: {screen: RecipePage},
    RecipesList: {screen: RecipesListPage},
    Ingredient: {screen: IngredientPage},
    IngredientsDetail: {screen: IngredientsDetailPage}
  },
  {
    initialRouteName: 'Home',

    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      }
    })
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: RootStack
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerPage
  }
);

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;