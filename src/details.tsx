import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { Container, Content, Header, Left, Icon, Right } from 'native-base'

import {NewsData} from './news'

interface Props {
    navigation: any
}

const Details: React.FunctionComponent<Props> = (props) => {

    const [news, setNews] = useState<NewsData>(props.route.params.news)

        return (
            <Container>
                
                <Content>
                    <View style={styles.imageView}>
                        <Image source={{uri: news.urlToImage != null ? news.urlToImage : undefined}} style={{ height: 300, width: '100%' }}>

                        </Image>
                    </View>
                    <View style={styles.contentView}>

                        <Text style={styles.title}>
                            {news.title}
                        </Text>
                        <Text style={styles.text}>
                            {news.author}
                        </Text>
                        <Text style={styles.text}>
                            {new Date(news.publishedAt).toLocaleString()}
                        </Text>

                        <Text style={styles.text}>
                            {news.content}
                        </Text>
                    </View>
                </Content>
            </Container>
        )
  
}
export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 50,
        backgroundColor: 'white'
    },
    imageView: {
        height: 300,
        width: '100%',
        // backgroundColor: 'blue',
        marginBottom: '5%'
    },
    contentView: {
        paddingHorizontal: '5%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: '2%'
    },
    text: {
        fontSize: 12,
        marginVertical: '2%'
    }
})