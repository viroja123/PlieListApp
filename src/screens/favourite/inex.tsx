import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { toggleFavorite } from '../../store/favourite';
import FavListRender from '../../components/FavListRender';

const FavoriteScreen = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites);

  const handleRemove = (item: any) => {
    dispatch(toggleFavorite(item));
  };

  if (!favorites || favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No Favorites Yet ❤️</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <FavListRender item={item} />}
        keyExtractor={(item, index) =>
          (item.event_id || item.id || index).toString()
        }
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};

export default FavoriteScreen;