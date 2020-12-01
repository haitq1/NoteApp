import * as React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useState, useCallback, useEffect, useMemo} from 'react';

function SettingsScreen() {
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState('vi');
  const [flagUrl, setFlagUrl] = useState(require('./vi.png'));
  const handleLanguage = useCallback(() => {
    if (lang === 'vi') {
      setLang('en');
      setFlagUrl(require('./us.png'));
    } else {
      setLang('vi');
      setFlagUrl(require('./vi.png'));
    }
  }, [lang, flagUrl]);
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}
        onPress={handleLanguage}>
        <Text>{t('settings.title')}</Text>
        <Image source={flagUrl} style={styles.stretch} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 40,
    height: 30,
    resizeMode: 'stretch',
  },
});
export default SettingsScreen;
