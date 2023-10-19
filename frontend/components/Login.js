import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const handleLogin = () => {
        // Implement your login logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stuttr</Text>
            

            <TextInput 
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput 
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <View style={styles.optionsContainer}>
                <TouchableOpacity onPress={() => setKeepLoggedIn(!keepLoggedIn)}>
                    <Text style={keepLoggedIn ? styles.optionSelected : styles.option}>Keep me logged in.</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot password? Recover here</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.signupText}>Don't have an account? Signup here</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    input: {
        width: windowWidth* 0.80,  // change this from 100% to 80%
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#333',
        color: 'white',
        borderRadius: 5,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    option: {
        color: '#aaa',
    },
    optionSelected: {
        color: 'green',
    },
    forgotPassword: {
        color: 'green',
    },
    loginButton: {
        width: '100%',
        padding: 15,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signupText: {
        color: 'white',
        marginTop: 20,
    }
});

export default Login;
