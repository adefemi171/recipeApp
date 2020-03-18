import React from 'react';
import { TouchableHighlight, Image, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// import styles from './styles';

export default class ViewIngredientsButton extends React.Component {
  render() {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>View Ingredients</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    width: 270,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100,
    borderColor: '#2cd18a',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: '#2cd18a'
  },
  text: {
    fontSize: 14,
    color: '#2cd18a'
  }
})