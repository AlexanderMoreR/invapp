import React, {useState} from 'react';
import {View, Text, TextInput, Button, ScrollView, StyleSheet} from 'react-native'

const CreateProduct = () =>{

    const [state, setState] = useState({
        name: '',
        description: '',
        precio: ''
    })

    const handleChangeText = (name, v) =>{
        setState({ ...state, [name]: v})
    }

    return (
        <ScrollView style={style.container} >
            <View style={style.inputGroup} >
                <TextInput 
                    placeholder="Nombre Producto" 
                    onChangeText={(v) => handleChangeText('name',v)} />
            </View>
            <View style={style.inputGroup}>
                <TextInput 
                placeholder="Descrición Producto"
                onChangeText={(v) => handleChangeText('description',v)} />
            </View>
            <View style={style.inputGroup}>
                <TextInput 
                placeholder="Precio"
                onChangeText={(v) => handleChangeText('precio',v)} />
            </View>

            <View>
                <Button title="Guardar" onPress={()=> console.log(state) } />
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding:35
    },
    inputGroup: {
        flex: 1,
        padding:0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC'
    }
})

export default CreateProduct