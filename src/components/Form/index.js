import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import ResultImc from "./ResulImc";
import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalulator(){
        return setImc((weight/(height*height)).toFixed(2));
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalulator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual: ");
            setTextButton("Calcular Novamente");
            return
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o Peso e Altura");
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                {/* Altura */}
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setHeight} value={height} />
                {/* Peso */}
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input} placeholder="Ex: 75.350" keyboardType="numeric" onChangeText={setWeight} value={weight} />
                {/* Botão */}
                {/* <Button title={textButton} onPress={() => validationImc()} /> */}
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}><Text style={styles.textButtonCalulator}>{textButton}</Text></TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}