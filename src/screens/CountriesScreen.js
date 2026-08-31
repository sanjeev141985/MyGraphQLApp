import React from 'react';
import { FlatList, Text, ActivityIndicator, View } from 'react-native';
import { useQuery } from '@apollo/client/react';
// import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/queries/countries';

export default function CountriesScreen() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <ActivityIndicator style={{ marginTop: 40 }} />;
  if (error) return <Text style={{ margin: 20 }}>Error: {error.message}</Text>;

  return (
    <FlatList
      data={data.countries}
      keyExtractor={(item) => item.code}
      renderItem={({ item }) => (
        <View style={{ padding: 12 }}>
          <Text>{item.emoji}  {item.name}</Text>
        </View>
      )}
    />
  );
}