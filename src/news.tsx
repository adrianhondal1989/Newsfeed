import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    FlatList,
    RefreshControl,
    Image,
    TouchableOpacity
} from 'react-native';

import { Container, Header, Body, Item, Card } from 'native-base'

import {LocalizationContext} from './App'

interface Props {
    navigation: any
}

export interface NewsData {
    source: {
        id: string | null,
        name: string
    },
    author: string | null,
    title: string,
    description: string | null,
    url: string,
    urlToImage: string | null,
    publishedAt: string,
    content: string | null
}

const News: React.FunctionComponent<Props> = (props) => {

    const { t, locale, setLocale } = useContext(LocalizationContext)
    const [newsList, setNewsList] = useState<NewsData[]>([])
    const [filteredNews, setFilteredNews] = useState<NewsData[]>([])
    const [refreshing, setRefreshing] = useState<boolean>(false)

    useEffect(() => {
        fetchNews()
    }, [])

    const fetchNews = () => {
        const NEWS_API = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5119c147502f4bcb8565ee685a97b085"
        fetch(NEWS_API, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            response.json()
                .then((responseJson) => {
                    const articles = responseJson.articles
                    setNewsList(articles)
                    setFilteredNews(articles)
                    setRefreshing(false)
                })
        })
    }

    const filter = (searchText: string) => {
        setFilteredNews(newsList.filter((news: NewsData) => {
            return news.title.toUpperCase().includes(searchText.toUpperCase())
        })
        )
    }

    const onRefresh = async () => {
        setRefreshing(true)
        fetchNews()
    }

    return (
        <Container>
            <Header style={styles.header}>
                <Body>
                    <Item>
                        <TextInput
                            style={styles.searchBar}
                            placeholder={t('placeholderSearch')}
                            autoCapitalize='none'
                            onChangeText={(value: string) => {
                                filter(value)
                            }}
                        >

                        </TextInput>
                    </Item>
                </Body>
            </Header>

            <FlatList
                style={styles.list}
                keyExtractor={(item, index) => JSON.stringify(index)}
                data={filteredNews}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { onRefresh() }} />}
                renderItem={({ item, index: number }) => (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            props.navigation.navigate("Details", { news: item })
                        }}>
                        <Card style={styles.cardNews}>
                            <View style={styles.imageRow}>
                                <Image source={{ uri: item.urlToImage != null ? item.urlToImage : undefined }} style={{ width: 100, height: 100 }}>

                                </Image>
                            </View>
                            <View style={styles.contentRow}>
                                <Text style={styles.source}>
                                    {item.source.name}
                                </Text>

                                <Text style={styles.title}>
                                    {item.title}
                                </Text>

                            </View>
                        </Card>
                    </TouchableOpacity>
                )}
            >

            </FlatList>
        </Container>
    )
}
export default News

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: 'white'
    },
    searchBar: {
        marginHorizontal: '5%',
        width: '90%',
    },
    list: {
        paddingHorizontal: '2%',
        marginTop: '4%'
    },
    cardNews: {
        flex: 1,
        height: 100,
        flexDirection: 'row',
        margin: '3%',
    },
    imageRow: {
        flex: 3
    },
    contentRow: {
        flex: 7,
        padding: '2%'
    },
    source: {
        alignSelf: 'flex-end',
        fontSize: 16,
        marginBottom: '3%'
    },
    title: {
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'justify',
        fontSize: 12
    },
})