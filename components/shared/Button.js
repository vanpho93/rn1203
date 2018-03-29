import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export class Button extends Component {
    render() {
        const { title, onPress } = this.props;
        return (
            <TouchableOpacity
                onPress={onPress}
                style={styles.buttonContainer}
            >
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 5,
      borderColor: '#448C27',
      borderWidth: 1
    },
    buttonText: { color: 'white', fontWeight: 'bold' }
  });
  