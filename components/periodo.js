import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image,Modal,Pressable,TouchableOpacity } from 'react-native';

const Periodo = () => {
const [modalVisible3, setModalVisible3] = useState(false);
const [modalVisible1, setModalVisible1] = useState(false);
const [modalVisible2, setModalVisible2] = useState(false);
const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraphStyle}>
        Ciclo Menstrual
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
            <Text style={styles.modalText1}>Introdução</Text>
            <Text style={styles.modalText}>O ciclo menstrual é o termo utilizado para designar as transformações cíclicas que ocorrem no útero, sendo também chamado de ciclo uterino. O ciclo menstrual tem duração de cerca de 28 dias, entretanto, podem ocorrer variações, como ciclos de 20 a 40 dias.</Text>
            <Text style={styles.modalText}>O ciclo menstrual é controlado pela ação de hormônios produzidos pela hipófise e pelos ovários. A ação desses hormônios interliga o ciclo menstrual, responsável por preparar o revestimento uterino para o estabelecimento de um embrião em uma possível gestação, e o ciclo ovariano, que envolve o crescimento do folículo ovariano e a ovulação.</Text>
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
        <Text style={styles.textStyle}>Introdução</Text>
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
            <Text style={styles.modalText1}>Fases do Ciclo Menstrual</Text>
            <Text style={styles.modalText2}>O ciclo menstrual inicia-se a partir do primeiro dia da menstruação e é controlado pela ação dos hormônios produzidos pelos ovários, como veremos a seguir. No entanto, para ficar mais claro, apresentaremos as fases do ciclo menstrual a partir da fase proliferativa, encerrando com a fase menstrual, quando ocorre a menstruação.</Text>
            <Text style={styles.modalText2}>Fase folicular: a ação do hormônio estradiol, produzido pelo folículo em crescimento no ovário, estimula o espessamento da parede uterina (endométrio).</Text>
            <Text style={styles.modalText2}>Fase lutua: assim que o folículo se rompe, liberando o ovócito, origina-se o corpo-lúteo, que secreta estradiol e a progesterona, estimulando a manutenção e o desenvolvimento da parede uterina, onde ocorrerá, por exemplo, o crescimento das glândulas do endométrio, responsáveis por secretar um líquido que nutrirá o embrião antes de ele se implantar na parede uterina.</Text>
            <Text style={styles.modalText2}>Fase menstrual: se nenhuma embrião tiver sido implantado na parede uterina até o final da fase anterior, o corpo-lúteo irá se desintegrar, o que ocasionará uma queda na concentração dos hormônios ovarianos. A queda desses hormônios causa a constrição das artérias da parede uterina, o que desencadeia a desintegração de parte dessa parede, que é eliminada na menstruação.</Text>
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
        <Text style={styles.textStyle}>Fases do periodo</Text>
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
            <Text style={styles.modalText1}>Período fértil</Text>
            <Text style={styles.modalText}>
Para calcular o período fértil, ou seja, o período mais propício para engravidar, é importante conhecer como ocorre o ciclo menstrual, cujo tempo de duração pode variar de mulher para mulher. Para isso, deve-se marcar em um calendário, durante pelo menos seis meses, o primeiro dia de cada menstruação (data que se inicia um novo ciclo), assim, é possível mensurar quantos dias durou cada ciclo.</Text>
            <Text style={styles.modalText}>
Para se calcular o período fértil, deve-se diminuir 18 dias do ciclo com duração mais curta, obtendo-se, assim, o primeiro dia do período fértil, e 11 dias do ciclo mais longo, obtendo-se, assim, o último dia do período fértil. A seguir, apresentamos um exemplo que pode ajudar a compreender melhor esse cálculo.</Text>
            <Text style={styles.modalText}>
É importante destacar que esse método pode ser um aliado para quem quer programar uma gravidez, mas é um método pouco eficaz para se prevenir a gravidez. Isso se deve ao fato de muitas mulheres apresentarem ciclos irregulares, o que poderia levar a uma mudança no período fértil.</Text>
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
        <Text style={styles.textStyle}>Período fértil</Text>
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
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView1}>
          <View style={styles.modalView}>
            <Text style={styles.modalText1}>Menopausa</Text>
            <Text style={styles.modalText}>
Com o passar dos anos, vai havendo uma perda gradativa de folículos primários, restando um número bastante reduzido após os 40 anos e praticamente acabando após os 50. A ausência desses folículos é a principal causa da menopausa. Na menopausa, a mulher para de ovular e menstruar, chegando ao fim de seu período reprodutivo.
Durante o período que precede a menopausa e após seu início, a mulher pode sentir diversos desconfortos, decorrentes das alterações hormonais. Mudanças de hábitos na alimentação e a prática de atividades físicas podem ajudar a diminuir esses desconfortos. No entanto, é importante sempre conversar com um médico de confiança para receber orientações sobre a melhor forma de enfrentar esse período.
</Text>
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle1}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Menopausa</Text>
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

export default Periodo;