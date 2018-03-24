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
import closeIcon from "../../static/img/icon/close.png";
import Modal from 'react-native-simple-modal'

@observer
class BomeRooms extends React.Component {
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
        modalStyle={styles.modalStyle}
        disableOnBackPress={false}>

        <ImageBackground
          style={styles.modalBg}
          resizeMode={'stretch'}
          source={BG}
        >
          <TouchableOpacity
            onPress={closeModal}
            style={styles.close}
          >
            <Image
              source={closeIcon}
              style={styles.closeImg}
            />
          </TouchableOpacity>
          <View style={styles.tipsBox}>
            <Text style={styles.tips}>确认要退出么？</Text>
          </View>
        </ImageBackground>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalStyle: {
    borderRadius: 2,
    width: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    flex: 1
  },
  close: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 0,
    right: 0
  },
  closeImg: {
    width: 40,
    height: 40
  },
  foot: {
    height: 32,
    flexDirection: 'row',
    marginBottom: 30
  },
  modalBg: {
    flex: 1,
    width: null,
    height: null,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0)',
    position: 'relative',
    left: 0,
    top: 0
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

export default BomeRooms