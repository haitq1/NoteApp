import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../Home/Home.sty';
function Header () {
    const {t} = useTranslation();
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{t('header.title')}</Text>
        </View>
    );
}
export default Header