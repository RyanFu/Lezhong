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

import { observable, action } from "mobx";

@observer
class BomeRooms extends React.Component {
  @observable roomType = [
    {id: 1, name: '初级场（<50）'},
    {id: 2, name: '中级场（50-100）'},
    {id: 3, name: '高级场（100-500）'},
    {id: 4, name: '至尊场（500-2000）'}
  ]

  @observable rooms = {
    1: [
      {id: 11, name: '5-10包/1-2倍'},
      {id: 12, name: '5-10包/1-2倍'},
      {id: 13, name: '5-10包/1-2倍'}
    ],
    2: [
      {id: 11, name: '5-10包/1-2倍'},
      {id: 12, name: '5-10包/1-2倍'},
      {id: 13, name: '5-10包/1-2倍'}
    ],
    3: [
      {id: 11, name: '5-10包/1-2倍'},
      {id: 12, name: '5-10包/1-2倍'},
      {id: 13, name: '5-10包/1-2倍'}
    ],
    4: [
      {id: 11, name: '5-10包/1-2倍'},
      {id: 12, name: '5-10包/1-2倍'},
      {id: 13, name: '5-10包/1-2倍'}
    ],
  }

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
          <View style={styles.body}>

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
    flex: 1,
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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%'
  }
})

export default BomeRooms