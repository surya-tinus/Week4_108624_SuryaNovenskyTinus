import { Stack } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Avatar, IconButton } from 'react-native-paper'; 
import userData from './data.json';
import styles from './AppStyles';

export default function App() {
  return (
    <>
      <Stack.Screen options={{ title: "User List" }} />

      {/* Gunakan contentContainerStyle untuk ScrollView, dan panggil scrollContainer */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {userData.map((user, index) => (
          <Card key={index} style={styles.card} mode="elevated">
            <Card.Title
              title={user.name}
              titleVariant="titleMedium"
              titleStyle={{color: '#333', fontWeight: 'bold'}}
              subtitle={user.email}
              subtitleStyle={{color: '#333'}}
              subtitleVariant="bodyMedium"
              left={(props) => (
                <Avatar.Image {...props} source={{ uri: user.photo_url }} />
              )}
              right={(props) => (
                <IconButton 
                  {...props} 
                  icon="chevron-right" 
                />
              )}
            />
          </Card>
        ))}
      </ScrollView>
    </>
  );
}

