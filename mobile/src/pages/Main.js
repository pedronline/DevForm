import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location';

export default function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: 38.7090793, longitude: -9.1365293 }}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars2.githubusercontent.com/u/17129198?v=4'
          }}
        />
        <Callout
          onPress={() => {
            navigation.navigate('Profile', { github_username: 'pedronline' });
          }}
        >
          <View style={styles.callout}>
            <Text>Pedro Morais</Text>
            <Text>in the</Text>
            <Text>HOUSE!!!</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#ac054e'
  },
  callout: {
    flex: 1,
    width: 100,
    height: 100
  }
});
