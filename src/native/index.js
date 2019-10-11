import { register } from 'nautil/native'
import App from '../app/App.jsx'
import { SafeAreaView } from 'react-native'

function NativeApp() {
  return <SafeAreaView>
    <App />
  </SafeAreaView>
}

register('MyTestApp', NativeApp)
