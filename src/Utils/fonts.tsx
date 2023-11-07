import { useFonts } from 'react-native-google-fonts'; // Importe useFonts aqui

const [loaded] = useFonts({
        Montserrat: require('./fonts/Montserrat-Bold.ttf'),
        'Montserrat-Bold': require('./fonts/Montserrat-Bold.ttf'),
    });