import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

class LoadingScreen extends React.Component {
    state = {
      fadeAnim: new Animated.Value(0),
    }
    componentDidMount() {
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration: 3000, // 1000ms = 1s
        },
      ).start(() => this.props.navigation.navigate('App'));
    }
    render() {
      const { fadeAnim } = this.state;
      return (
        <Animated.View
          style={{
                    flex: 1,
                    opacity: fadeAnim,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
        >
          <Animated.View style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: 'green',
            transform: [{
              scale: fadeAnim.interpolate({
                inputRange: [0, 0.67, 1],
                outputRange: 1 ?
                  [0.4, 0.6, 0.4] :
                  [0.4, 0.6, 1.0],
              }),
            }],
            opacity: fadeAnim.interpolate({
              inputRange: [0, 0.67, 1],
              outputRange: 0.5 ?
                [1.0, 1.0, 1.0] :
                [0.5, 0.5, 0.0],
            }),
          }
          }/>
        </Animated.View>
      );
    }
}

LoadingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoadingScreen;
