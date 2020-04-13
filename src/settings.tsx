import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TextInput,
    Text,
    FlatList,
    RefreshControl,
    Image,
    TouchableOpacity
} from 'react-native';
import { Container, Content, Switch, Header, Button, Left, Icon, Right, Body, Item, Card, ListItem, Radio } from 'native-base'
import { LocalizationContext } from './App'


interface Props {
    navigation: any
}

const Settings: React.FunctionComponent<Props> = (props) => {

    const { t, locale, setLocale } = useContext(LocalizationContext)
    const [english, setEnglish] = useState<boolean>(locale === 'en' ? true : false)
    const [spanish, setSpanish] = useState<boolean>(locale === 'es' ? true : false)

    return (
        <Container>
            
            <Content style={{ flex: 1 }}>
                
                <Button
                    style={styles.button}
                    light = {locale === 'es' ? true : false}
                    info = {locale === 'en' ? true : false}
                    onPress={() => {
                        setEnglish(true)
                        setSpanish(false)
                        setLocale('en')
                    }}>
                        <Text>{t('settings.english')}</Text>
                </Button>
                <Button
                    style={styles.button}
                    light = {locale === 'en' ? true : false}
                    info = {locale === 'es' ? true : false}
                    onPress={() => {
                        setEnglish(false)
                    setSpanish(true)
                    setLocale('es')
                    }}>
                        <Text>{t('settings.spanish')}</Text>
                </Button>
                
            </Content>
        </Container>
    )
}
export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '4%'
    },
    button: {
        margin: '2%',
        justifyContent: 'center',
        alignContent: 'center'
    }
})