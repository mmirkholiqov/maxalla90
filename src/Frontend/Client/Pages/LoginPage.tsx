import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';


const LoginPage = () => {
    const navigation = useNavigation();
    
    const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.h2}>Вход в Систему</Text>
        <TextInput
                style={styles.inputLogin}
                mode="outlined"
                label="Логин"
                placeholder="Напишите свой логин"
                activeOutlineColor="#fff"
                outlineColor="#43484e"
                textColor="#fff"
                right={<TextInput.Affix text="" />}
            />
            <TextInput
                style={styles.inputPass}
                mode="outlined"
                label="Пароль"
                placeholder="Напишите свой пароль"
                secureTextEntry
                activeOutlineColor="#fff"
                outlineColor="#43484e"
                textColor="#fff"
                // right={<TextInput.Icon icon="eye" />}
            />
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('HOME')}>
                <Text style={styles.loginBtnText}>Войти</Text>
            </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        height: "100%",
        width: '100%',
         backgroundColor: '#111113',
    },

    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        height: "70%",
        width: '65%',
        paddingHorizontal: 8,
        backgroundColor: '#212225',
        borderColor: '#43484e',
        borderWidth: 1.2,
        borderRadius: 4,
    },

    h2: {
        fontSize: 36,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 100,
        color: '#fff',
    },

    inputLogin: {
        backgroundColor: '#212225',
        // borderColor: '#43484e',
        // borderWidth: 1.2,
        // borderRadius: 4,
        width: '90%',
        height: '90%',
        marginBottom: 35,
    },

    inputPass: {
        backgroundColor: '#212225',
        // borderColor: '#43484e',
        // borderWidth: 1.2,
        // borderRadius: 4,
        width: '90%',
        height: '90%',
    },

    loginBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        height: "10%",
        width: '12%',
        marginVertical: 50,
        backgroundColor: '#43484e',
        borderColor: '#212225',
        borderWidth: 1.2,
        borderRadius: 4,
    },

    loginBtnText: {
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'center',
        color: '#fff',
        letterSpacing: 2,
    },
})