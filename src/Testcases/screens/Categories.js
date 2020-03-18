import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { categories } from '../jsonData/dataArrays';
import { getNumberOfRecipes } from '../jsonData/dataAPI';

export default class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories'
  };

  constructor(props) {
    super(props);
  }

  onPressCategory = item => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate('RecipesList', { category, title });
  };

  renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressCategory(item)}>
      <View style={styles.container}>
        <Image style={styles.pic} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.detail}>{getNumberOfRecipes(item.id)} recipes</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 215,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 20,
    },
    pic: {
        width: '100%',
        height: 155,
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333333',
        marginTop: 8
    },
    detail: {
        marginTop: 3,
        marginBottom: 5
    }
})