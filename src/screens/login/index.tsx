import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../store/auth';
import { loginApi } from '../../apis/authApi';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const { loading, error } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const validate = () => {
    if (!email || !password) {
      Alert.alert("","Enter the Email and Password")
      return false;
    }
    return true;
  };


  const handleLogin = async () => {
    try {
      if (!validate()) return;
      dispatch(loginStart());

      const response = await loginApi({ email, password });
      dispatch(loginSuccess(response));
    } catch (error) {
      dispatch(loginFailure(error?.response?.data || 'Login failed'));
    }
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        {/* Header */}
        <ImageBackground
          source={require('../../assets/images/eventDash.jpg')}
          style={styles.image}
        >
          <Text style={styles.logo}>Plié</Text>
        </ImageBackground>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="email@email.com"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordBox}>
            <TextInput
              placeholder="Password"
              secureTextEntry={secure}
              style={{ flex: 1 }}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Icon name={secure ? 'eye-off' : 'eye'} size={20} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          {error ? <Text style={styles.error}>{error}</Text> : null}

          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
          </TouchableOpacity>

          <Text style={styles.signup}>
            Not a member?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              Sign Up Here
            </Text>
          </Text>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>or Sign In with</Text>
            <View style={styles.line} />
          </View>

          {/* Social Icons */}
          <View style={styles.socialRow}>
            <View style={styles.socialBox}>
              <Icon name="chrome" size={20} />
            </View>
            <View style={styles.socialBox}>
              <Icon name="apple" size={20} />
            </View>
            <View style={styles.socialBox}>
              <Icon name="facebook" size={20} />
            </View>
          </View>

          <TouchableOpacity>
            <Text style={styles.guest}>Enter as Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
