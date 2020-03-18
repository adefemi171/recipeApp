import React from 'react';
import { TouchableHighlight, Image, Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
// import styles from './styles';

export default class BackButton extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} style={styles.btnContainer}>
        <Image source={require('../../../assets/img/backArrow.png')} style={styles.btnIcon} />
      </TouchableHighlight>
    );
  }
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};

var styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 180,
    padding: 8,
    margin: 10,
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3
  },
  btnIcon: {
    height: 17,
    width: 17
  }
})