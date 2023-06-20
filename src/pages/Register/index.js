import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Register() {
    return (
        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}> Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder='Digite Seu Nome: '
                    style={styles.input}
                />

                <Text style={styles.title}>Endereço</Text>
                <TextInput
                    placeholder='Digite Seu Endereço: '
                    style={styles.input}
                />

                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Digite um Email'
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite sua Senha'
                    style={styles.input}
                />
            </Animatable.View>

            <Animatable.View delay={1000} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Cadastre-se e aproveite as  Ofertas!</Text>

                <TouchableOpacity
                    style={styles.button}
                    //  onPress={() => navigation.navigate('Register')}
                    Alert='Dados Cadastrado'
                >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#38a69d"
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingLeft: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1',
    },
});
