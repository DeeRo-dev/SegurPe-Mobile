import React, {useState, useEffect} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

export const ModalBasico = ({text, titleModal, btn}) => {
  const [modalVisible, setModalVisible] = useState(false);
 const abrir = (text)=>{
  setModalVisible(text)
 }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{titleModal}</Text>
           <View style={styles.contBtn}>
           <Pressable
           style={[styles.button, styles.buttonCancelar]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textCancelar}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>{btn}</Text>
            </Pressable>
           </View>
          </View>
        </View>
      </Modal>
      <Pressable
        // style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height:200,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
    
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  contBtn:{
    flexDirection:'row',
    marginTop:60,
    marginLeft:80
  },
  textCancelar: {
    color: '#004494',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    borderColor:'#004494',
    backgroundColor:'white'
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
   borderColor:'#004494',
    borderWidth:1,
    marginLeft:25
  },
  buttonCancelar: {
    backgroundColor: 'white',
  },
  textStyle: {
    color: '#004494',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text:{
    color:'white'
  },
  modalText: {
    marginTop:-20,
    textAlign: 'center',
    fontSize:25,
  },
});

