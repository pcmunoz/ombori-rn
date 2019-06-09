import React from 'react';
import { Animated } from 'react-native';
import { PulseIndicator } from 'react-native-indicators';
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
        <Animated.View // Special animatable View
          style={{
                    flex: 1,
                    opacity: fadeAnim, // Bind opacity to animated value
                }}
        >
          <PulseIndicator color="green" />
        </Animated.View>
      );
    }
}

LoadingScreen.propTypes = {
  navigation: PropTypes.func.isRequired,
};

export default LoadingScreen;