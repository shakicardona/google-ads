import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import mobileAds, { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

export default function App({ }) {
  useEffect(() => {
    mobileAds().initialize();
  }, []);

  // Use the test ID for banner ads (or replace with your own production ID)
  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/9214589741';

  return (
    <View style={styles.container}>
      <Text>React Native Google Mobile Ads Integration</Text>
      <View style={styles.banner}>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.FULL_BANNER}
          onAdFailedToLoad={(error) => console.error('Ad failed to load:', error)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },

  banner: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100px'
  }
});

