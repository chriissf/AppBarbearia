import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [data, setData] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if (name.trim() === '') {
            Alert.alert('Erro', 'Por favor, insira seu nome');
            return;
        }

        if (data.trim() === '') {
            Alert.alert('Erro', 'Por favor, insira sua data de nascimento');
            return;
        }

        if (endereco.trim() === '') {
            Alert.alert('Erro', 'Por favor, insira seu endereço');
            return;
        }

        if (email.trim() === '') {
            Alert.alert('Erro', 'Por favor, insira um email válido');
            return;
        }

        if (password.trim() === '') {
            Alert.alert('Erro', 'Por favor, insira sua senha');
            return;
        }

        // Lógica para enviar a requisição HTTP para cadastrar o usuário
        Alert.alert('Cadastro', `Nome: ${name}\nEmail: ${email}\nData de Nascimento: ${data}\nEndereço: ${endereco}\nSenha: ${password}`);
        Alert.alert("Cadastrado com Sucesso!");

        // Limpar o formulário após o cadastro
        setName('');
        setData('');
        setEndereco('');
        setEmail('');
        setPassword('');
    };

    const formatDate = (text) => {
        if (text.length === 2 || text.length === 5) {
            text += '/';
        }
        setData(text);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}> Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder='Digite Seu Nome'
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />

                <Text style={styles.title}>Data</Text>
                <TextInput
                    placeholder='Digite Data de Nascimento (dd/mm/aaaa)'
                    value={data}
                    onChangeText={text => formatDate(text)}
                    style={styles.input}
                />

                <Text style={styles.title}>Endereço</Text>
                <TextInput
                    placeholder='Digite Seu Endereço'
                    value={endereco}
                    onChangeText={text => setEndereco(text)}
                    style={styles.input}
                />

                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Digite um Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                    keyboardType="email-address"
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite sua Senha'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry={true}
                />
            </Animatable.View>

            <Animatable.View delay={1000} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Cadastre-se e aproveite as Ofertas!</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleRegister}
                >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d',
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
        paddingLeft: '2%',
        paddingRight: '2%',
        paddingTop: '1%',
    },
    title: {
        fontSize: 15,
        marginTop: 25,
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

export default RegisterScreen;
