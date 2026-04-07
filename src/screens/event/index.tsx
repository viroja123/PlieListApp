import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { eventApi } from '../../apis/eventApi';
import EventCard from '../../components/ListRender';

const EventScreen = () => {
  const [data, setData] = useState([]);
  const { list, loading } = useSelector((state: any) => state.events);
  const user = useSelector((state: any) => state.auth.user);
   const fetch = async () => {
    const data = await eventApi();
    if (data) {
      setData(data?.events);
    }
  }
  useEffect(() => {
    fetch();
  }, []);
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.greetingText}>Hello {user?.user?.usr_fname ?? 'Unknown'}</Text>
      <Text style={styles.subGreetingText}>Are you ready to dance?</Text>
    </View>
  );

  if (loading && (!list || list.length === 0)) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={data}
        renderItem={({ item }) => <EventCard item={item} />}
        keyExtractor={(item, index) => index + Math.random().toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No events found</Text>}
      />
    </View>
  );
};

export default EventScreen;
