import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { observer } from "mobx-react";
import BG from "../../static/img/modal/modal.png";
import Modal from 'react-native-simple-modal'

@observer
class GoOutModal extends React.Component {
  render () {
    const { open, closeModal } = this.props
    return (
      <Modal
        open={open}
        offset={0}
        overlayBackground="rgba(0, 0, 0, 0.75)"
        animationDuration={200}
        animationTension={40}
        modalDidOpen={() => undefined}
        modalDidClose={closeModal}
        closeOnTouchOutside={false}
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0)'
        }}
        modalStyle={{
          borderRadius: 2,
          width: 400,
          padding: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          flex: 1
        }}
        disableOnBackPress={false}>
        <ImageBackground
          style={styles.modalBg}
          resizeMode={'stretch'}
          source={BG}
        >
          <View style={styles.tipsBox}>
            <Text style={styles.tips}>确认要退出么？</Text>
          </View>
          <View style={styles.foot}>
            <TouchableOpacity style={styles.btn}>
              <LinearGradient colors={['#faa51a', '#f47a20']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>确认</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View styke={{flex: 1}}/>
            <TouchableOpacity style={styles.btn} onPress={closeModal}>
              <LinearGradient colors={['#faa51a', '#f47a20']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>取消</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  foot: {
    height: 32,
    flexDirection: 'row',
    marginBottom: 30
  },
  modalBg: {
    flex: 1,
    width: 400,
    height: null,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0)'
  },
  tipsBox: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  tips: {
    color: '#000',
    fontSize: 20,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 5,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  btn: {
    marginLeft: 50,
    marginRight: 50
  }
})

export default GoOutModal