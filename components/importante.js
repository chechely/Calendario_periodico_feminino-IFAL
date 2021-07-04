import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Image,Modal,Pressable,TouchableOpacity} from 'react-native';

const Importante = () => {
const [modalVisible3, setModalVisible3] = useState(false);
const [modalVisible1, setModalVisible1] = useState(false);
const [modalVisible2, setModalVisible2] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraphStyle}>
        Importante saber
      </Text>
<TouchableOpacity
  style={styles.button}
  activeOpacity={0.5}>
       <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.centeredView1}>
          <View style={styles.modalView}>
            <Text style={styles.modalText1}>Alimentação</Text>
            <Text style={styles.modalText}>É importante lembrar que o excesso de carboidratos, por exemplo, aumenta a acidez vaginal, colaborando para o desequilíbrio e o aparecimento de problemas como a candidíase. Seguir uma dieta balanceada ajuda a regularizar o ciclo, prevenir o desequilíbrio da flora vaginal e até aliviar os sintomas da TPM.
Por isso homens, saibam o que devem oferecer para suas mulheres.
Seguir uma dieta equilibrada, com mais frutas, verduras e grãos integrais, e menos sal, gordura e açúcar, também ajuda a ganhar saúde e regularizar a produção hormonal. É importante destacar que nada deve ser banido do cardápio, apenas balanceado.</Text>
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}
            >
              <Text style={styles.textStyle1}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible2(true)}
      >
        <Text style={styles.textStyle}>Alimentação</Text>
      </Pressable>
    </View>
        </TouchableOpacity>
<TouchableOpacity
  style={styles.button}
  activeOpacity={0.5}>
       <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}
      >
        <View style={styles.centeredView1}>
          <View style={styles.modalView}>
            <Text style={styles.modalText1}>Autocuidado</Text>
            <Text style={styles.modalText}>Para aliviar a cólica menstrual, tente usar bolsas de água quente e tomar um chá quentinho. Caso não adiante e os remédios que você costuma usar com prescrição médica também não façam mais efeito, procure um(a) médico(a). Cólicas muito fortes, principalmente nos dois dias anteriores à menstruação, podem sinalizar alguns problemas de saúde.
Tentar dormir melhor. Adormecer em horário regular e ter oito horas de sono por noite pode fazer a diferença na menstruação e na qualidade de vida..</Text>
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}
            >
              <Text style={styles.textStyle1}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible1(true)}
      >
        <Text style={styles.textStyle}>Autocuidado</Text>
      </Pressable>
    </View>
        </TouchableOpacity>
<TouchableOpacity
  style={styles.button}
  activeOpacity={0.5}>
       <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          setModalVisible3(!modalVisible3);
        }}
      >
        <View style={styles.centeredView1}>
          <View style={styles.modalView}>
            <Text style={styles.modalText1}>Exercícios</Text>
            <Text style={styles.modalText}>
Exercícios físicos são importantes, mas se forem feitos de forma extrema, acabam prejudicando o organismo. Muitas atletas de ponta, com baixíssima porcentagem de gordura no corpo, por exemplo, acabam deixando de menstruar. Isso não é legal para o organismo. De novo, o equilíbrio é a      chave para a boa saúde.</Text>
            <Text style={styles.modalText}>
A prática regular de atividades físicas é fundamental também para quem tem TPM. Para aquelas que enfrentam sintomas ligados ao emocional, os exercícios vão ajudar no equilíbrio da saúde mental. Atividades como a ioga, pro exemplo, têm função relaxante, além de ajudar a diminuir a tensão muscular e mesmo o mau humor!</Text>
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible3(!modalVisible3)}
            >
              <Text style={styles.textStyle1}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible3(true)}
      >
        <Text style={styles.textStyle}>Exercícios</Text>
      </Pressable>
    </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  paragraphStyle: {
    margin: 24,
    marginTop: 0,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: "left",
    fontSize:20,
  },
  modalText2: {
    textAlign: "left",
    fontSize:16,
  },
    centeredView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6c757d",
      width: 250,
      height: 80,
  },
  modalView: {
    justifyContent: "center",
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
    button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
    modalText1: {
    textAlign: "center",
    fontSize:20,
    fontWeight: 'bold' 
  },
    textStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: 'bold',
     fontSize:20,
  },
      textStyle1: {
    color: "black",
    textAlign: "center",
    fontWeight: 'bold',
     fontSize:14,
  },
  button:{
    alignItems: 'center'
  },
});


export default Importante;