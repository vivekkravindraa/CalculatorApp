import React from 'react';
import { Stylesheet, View, Text, TouchableOpacity } from 'react-native';

export default class CalcButton extends React.Component {
    static defaultProps = {
        onPress: function() {},
        title: "",
        color: "white",
        backgroundColor: "black",
        style: {},
    }

    render() {
        var bc = this.props.backgroundColor;

        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={[styles.container, { backgroundColor: bc }, {...this.props.style}]}
            >
                <Text style={[styles.text, { color: this.props.color }]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = Stylesheet.create({
    container: { alignItems: "center", justifyContent: "center", margin: 5, width: 80, height: 80, borderRadius: 40 },
    text: { fontSize: 30, fontWeight: "bold" }
})