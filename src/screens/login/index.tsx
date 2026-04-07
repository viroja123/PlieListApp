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
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from '../../store/auth';
import { loginApi } from '../../apis/authApi';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.auth);

  const [form, setForm] = useState({
    email: '',
    password: '',
    secure: true,
  });

  // 🔹 Handle input change
  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  // 🔹 Validation
  const validate = () => {
    const { email, password } = form;

    if (!email.trim() || !password.trim()) {
      Alert.alert('', 'Please enter email and password');
      return false;
    }

    if (!email.includes('@')) {
      Alert.alert('', 'Invalid email format');
      return false;
    }

    return true;
  };

  // 🔹 Login handler
  const handleLogin = async () => {
    if (!validate()) return;

    try {
      dispatch(loginStart());

      const response = await loginApi({
        email: form.email.trim(),
        password: form.password,
      });

      dispatch(loginSuccess(response));

    } catch (err: any) {
      dispatch(loginFailure(err?.response?.data || 'Login failed'));
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
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

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="email@email.com"
            style={styles.input}
            value={form.email}
            onChangeText={text => handleChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordBox}>
            <TextInput
              placeholder="Password"
              secureTextEntry={form.secure}
              style={{ flex: 1 }}
              value={form.password}
              onChangeText={text => handleChange('password', text)}
            />
            <TouchableOpacity
              onPress={() =>
                handleChange('secure', !form.secure)
              }
            >
              <Icon
                name={form.secure ? 'eye-off' : 'eye'}
                size={20}
              />
            </TouchableOpacity>
          </View>

          {/* Forgot */}
          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Error */}
          {!!error && <Text style={styles.error}>{error}</Text>}

          {/* Button */}
          <TouchableOpacity
            style={[
              styles.button,
              loading && { opacity: 0.7 },
            ]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
          </TouchableOpacity>

          {/* Signup */}
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

          {/* Social */}
          <View style={styles.socialRow}>
            {['chrome', 'apple', 'facebook'].map(icon => (
              <View key={icon} style={styles.socialBox}>
                <Icon name={icon} size={20} />
              </View>
            ))}
          </View>

          {/* Guest */}
          <TouchableOpacity>
            <Text style={styles.guest}>Enter as Guest</Text>
          </TouchableOpacity>

        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;