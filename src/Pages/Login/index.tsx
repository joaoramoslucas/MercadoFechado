import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import s from './s';

const Login: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (username === 'joaopedroramosdelucas10@gmail.com' && password === '123456') {
      route.params.setAuthenticated(true);
      navigation.navigate('Home');
    } else {
      alert('Usuário ou senha incorretos.');
    }
  };

  return (
    <View style={s.container}>
      <Text style={s.loginText}>Login</Text>
      <TextInput
        style={s.input}
        placeholder="E-mail ou nome de usuário"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={s.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={s.button} onPress={handleLogin}>
        <Text style={s.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
