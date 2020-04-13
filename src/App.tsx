import * as React from 'react';

import i18n from './i18n'
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import News from './news'
import Details from './details'
import Settings from './settings'

export const LocalizationContext = React.createContext();

function HomeStack() {
    const { t } = React.useContext(LocalizationContext);
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="News"
                component={News}
                options={{ title: t('tabNavigation.news') }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ title: t('tabNavigation.details') }}
            />
        </Stack.Navigator>
    );
}

function SettingsStack() {
    const { t } = React.useContext(LocalizationContext);
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Setting"
                component={Settings}
                options={{ title: t('tabNavigation.settings') }}
            />
        </Stack.Navigator>
    );
}

function MyTabs() {
    const { t } = React.useContext(LocalizationContext);
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} options={{ title: t('tabNavigation.news') }} />
            <Tab.Screen name="Settings" component={SettingsStack} options={{ title: t('tabNavigation.settings') }} />
        </Tab.Navigator>
    );
}

export default function App() {
    const [locale, setLocale] = React.useState('en');
    const localizationContext = React.useMemo(
        () => ({
            t: (scope, options) => i18n.t(scope, { locale, ...options }),
            locale,
            setLocale,
        }),
        [locale]
    );

    return (
        <LocalizationContext.Provider value={localizationContext}>
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        </LocalizationContext.Provider>
    );
}