import { useRouter } from 'expo-router';
import { Button, TextInput, View } from 'react-native';
import useUserViewModel from '../viewModels/useUserViewModel';

export default function Login() {
  const router = useRouter()
  const { login, isLoading, error } = useUserViewModel()

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
      }}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          width: '80%',
        }}
        placeholder="Enter username"
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          width: '80%',
        }}
        placeholder="Enter password"
      />
      <Button title="Login" onPress={() => {
        login('doejohn', 'test@123')
      }} />
    </View>
  )
}