import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight, StyleSheet
} from 'react-native';
import { RecipeCard } from '../../AppStyles';
// import styles from './styles';
import {
  getIngredientUrl,
  getRecipesByIngredient,
  getCategoryName
} from '../../mockData/dataApi';

export default class IngredientScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name')
    };
  };

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
      <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableHighlight>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const ingredientId = navigation.getParam('ingredient');
    const ingredientUrl = getIngredientUrl(ingredientId);
    const ingredientName = navigation.getParam('name');
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: 'grey' }}>
          <Image style={styles.photoIngredient} source={{ uri: '' + ingredientUrl }} />
        </View>
        <Text style={styles.ingredientInfo}>Recipes with {ingredientName}:</Text>
        <View>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={getRecipesByIngredient(ingredientId)}
            renderItem={this.renderRecipes}
            keyExtractor={item => `${item.recipeId}`}
          />
        </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  titleIngredient: {
    fontWeight: 'bold',
    fontSize: 20
  },
  photoIngredient: {
    width: '100%',
    height: 250,
    alignSelf: 'center'
  },
  ingredientInfo: {
    color: 'black',
    margin: 10,
    fontSize: 19,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category
})
