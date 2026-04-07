import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { toggleFavorite } from '../../store/favourite';
import { eventApi } from '../../apis/eventApi';
import { setEvents } from '../../store/event';
import FavListRender from '../../components/FavListRender';

const SearchScreen = () => {
  const dispatch = useDispatch();

  const events = useSelector((state: any) => state.events.list);
  const favorites = useSelector((state: any) => state.favorites);
  const fetch = async () => {
    const data = await eventApi();
    if (data) {
      dispatch(setEvents(data.events));
    }
  }
  useEffect(() => {
    fetch();
  }, []);

  const [search, setSearch] = useState('');

  const filteredData = useMemo(() => {
    if (!search) return events;

    return events.filter((item: any) => {
      const name =
        item.event_name || item.title || item.name || '';

      return name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, events]);

  return (
    <View style={styles.container}>

      <View style={styles.searchBox}>
        <Icon name="search" size={18} color="#888" />
        <TextInput
          placeholder="Search events..."
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      <FlatList
        data={filteredData}
        renderItem={({ item }) => <FavListRender item={item} />}
        keyExtractor={(item, index) =>
          ("event" + Math.random() + item.event_id || item.id || index).toString()
        }
        contentContainerStyle={{ padding: 10 }}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No results found
          </Text>
        }
      />
    </View>
  );
};

export default SearchScreen;