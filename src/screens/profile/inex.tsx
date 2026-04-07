import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth';
import Icon from 'react-native-vector-icons/Feather';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.auth.user);

  const userName =
    user?.user?.usr_fname ||
    user?.name ||
    'Guest User';

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Icon name="user" size={50} color="#fff" />
      </View>

      <Text style={styles.name}>{userName}</Text>

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => dispatch(logout())}
      >
        <Icon name="log-out" size={18} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ProfileScreen;