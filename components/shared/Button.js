import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export class Button extends Component {
    getStyle() {
        const { type } = this.props;
        if (type === 'SUCCESS') return styles.buttonSuccess;
        if (type === 'WARNING') return styles.buttonWarning;
        if (type === 'DANGER') return styles.buttonDanger;
        return {};
    }
    render() {
        const { title, type, textStyle } = this.props;
        const customStyle = this.getStyle();
        return (
            <TouchableOpacity
                {...this.props}
                style={[styles.buttonContainer, customStyle, this.props.style]}
            >
                <Text style={[styles.buttonText, textStyle]}>
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
    },
    buttonSuccess: {
      backgroundColor: 'green',
    },
    buttonDanger: {
      backgroundColor: 'red',
    },
    buttonWarning: {
      backgroundColor: '#FBC02D',
    },
    buttonText: { color: 'white', fontWeight: 'bold' }
  });
  