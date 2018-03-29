import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { Button } from './components/shared/Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { txt: 'aaaXXXXxx' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Image source={require('./images/a.png')}/>
        <Image
          source={{
            uri: 'https://zmp3-photo.zadn.vn/banner/d/8/4/1/d841517583f4607c8864d36995da0d0e.jpg'
          }}
          style={{ height: 100, width: 200 }}
        />
        <TextInput
          style={styles.input}
          value={this.state.txt}
          onChangeText={text => this.setState({ txt: text })}  
        />
        <Text style={{ color: 'green', fontSize: 20 }}>
          {this.state.txt}
        </Text>
        <Button
          title="SHOW TEXT"
          onPress={() => console.log(123)}
          type="SUCCESS"
          textStyle={{ color: '#705697' }}
        />
        <Button
          title="SHOW TEXT"
          onPress={() => console.log(123)}
          type="DANGER"
        />
        <Button
          title="SHOW TEXT"
          onPress={() => console.log(123)}
          type="WARNING"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'green'
  },
  input: {
    height: 40,
    backgroundColor: 'gray',
    width: 200,
    color: 'white',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10
  }
});
