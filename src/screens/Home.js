import React from 'react';
import {
    StyleSheet, ScrollView, View,
    Text, Image, Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';

import Item from '../components/Item';

const {height, width} = Dimensions.get('window');

const images = [
    "http://img.alicdn.com/tps/i4/TB1SxcwfqLN8KJjSZFmSuwQ6XXa.jpg_720x720Q50s50.jpg_.webp",
    "http://gw.alicdn.com/imgextra/i4/130/TB2yI7NXDtYBeNjy1XdXXXXyVXa_!!130-0-lubanu.jpg_720x720Q50s50.jpg_.webp",
    "http://img.alicdn.com/tps/i4/TB1rGh.XHSYBuNjSspfSuwZCpXa.jpg_720x720Q50s50.jpg_.webp",
    "http://img.alicdn.com/bao/uploaded/TB1C_Z0XuGSBuNjSspbSuwiipXa.jpg_720x720Q50s50.jpg_.webp",
    "http://img.alicdn.com/tps/i4/TB1StkGXwaTBuNjSszfSutgfpXa.jpg_720x720Q50s50.jpg_.webp"
];

const navigations = [
    {
        icon: "http://img.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_100x150Q90s50.jpg_.webp",
        text: "苏宁易购"
    },
    {
        icon: "http://img.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_100x150Q90s50.jpg_.webp",
        text: "天猫超市"
    },
    {
        icon: "http://img.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_100x150Q90s50.jpg_.webp",
        text: "天猫国际"
    },
    {
        icon: "http://img.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_100x150Q90s50.jpg_.webp",
        text: "聚划算"
    },
    {
        icon: "http://img.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_100x150Q90s50.jpg_.webp",
        text: "分类"
    }
]

class NavigationTypes extends React.Component {

    constructor(props) {
        super(props);
    }

    renderImg() {
        var imageViews = [];
        for (var i = 0; i < images.length; i++) {
            imageViews.push(
                <Image
                    key={i}
                    style={{ flex: 1 }}
                    source={{ uri: images[i] }}
                />
            );
        }
        return imageViews;
    }

    onPress = (e) => {
        this.props.navigator.switchToTab({
            tabIndex: 1,
        });
    }

    renderNavigation() {
        var iconsViews = [];

        for (var i = 0; i < navigations.length; i++) {
            iconsViews.push(
                <Item
                    icon={navigations[i].icon}
                    text={navigations[i].text}
                    onPress={this.onPress}
                />
            )
        }

        return iconsViews;
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.swiper}>
                <Swiper
                    horizontal
                    autoplay
                    loop
                    // showsButtons={true}
                    index={0}
                    autoplayTimeout={4}
                >
                    {this.renderImg()}
                </Swiper>
            </View>
            <View style={styles.navigations}>
                {this.renderNavigation()}
            </View>
            <View style={styles.advertisement}>
                <Image style={styles.adverImg} source={{uri: "http://img.alicdn.com/tps/i4/TB1ox0_dgvD8KJjy0Flwu1gBFXa.png_720x720Q50s50.jpg_.webp"}} />
            </View>
            <View style={styles.advertisement}>
                <Image style={styles.adverImg1} source={{uri: "http://gw.alicdn.com/tfs/TB1woHWSFXXXXcPaXXXXXXXXXXX-1000-441.jpg_720x720Q90s50.jpg_.webp"}} />
                <Image style={styles.adverImg2} source={{uri: "http://gw.alicdn.com/tfs/TB1uDEXSFXXXXbkXVXXXXXXXXXX-1000-242.jpg_720x720Q90s50.jpg_.webp"}} />
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff'
    },
    swiper: {
        width,
        height: 0.377 * width
    },
    navigations: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    advertisement: {
        flex: 1,
    },
    adverImg: {
        height: 0.656 * width,
    },
    adverImg1: {
        height: 0.441 * width,
    },
    adverImg2: {
        height: 0.241 * width,
    },
    row: {
        height: 48,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.054)',
    },
    text: {
        fontSize: 16,
    },
});

export default NavigationTypes;
