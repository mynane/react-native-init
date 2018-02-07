import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet, View, Text,
    TouchableHighlight, Platform,
    Image, Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

function Item({ icon, text, onPress }) {
    console.log(icon)
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={'rgba(0, 0, 0, 0.054)'}
        >
            <View style={styles.row}>
                <Image
                    style={styles.imgage}
                    source={{ uri: icon}}
                />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableHighlight >
    );
}

Item.propTypes = {
    onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20
    },
    imgage: {
        width: width / 8,
        height: width / 8
    },
    text: {
        marginTop: 6,
        fontSize: 16,
        color: 'rgba(0, 0, 0, .6)'
    },
});

export default Item;
