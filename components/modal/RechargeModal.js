import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { observer } from "mobx-react";
import BG from "../../static/img/modal/modal.png";
import closeIcon from "../../static/img/icon/close.png";
import goldIcon from '../../static/img/icon/gold.png'
import Modal from 'react-native-simple-modal'

import api from '../../api'

import { observable, action } from "mobx";

@observer
class RechargeModal extends React.Component {
  @observable types = [
    {value: 50, name: '50'},
    {value: 100, name: '100'},
    {value: 200, name: '200'},
    {value: 500, name: '500'},
    {value: 1000, name: '1000'}
  ]

  renderList () {
    return (
      this.types.map((item, i) => (
        <TouchableOpacity
          style={styles.payItem}
          key={item.value}
          onPress={() => this.onPay(item.value)}
        >
          <Image
            style={styles.goldImg}
            source={goldIcon}
          />
         <Text
          style={styles.goldText}
         >{item.name}</Text>
        </TouchableOpacity>
      ))
    )
  }

  async onPay (value) {
    try {
      // 注意这里的await语句，其所在的函数必须有async关键字声明
      let response = await api.getPay()
      console.log(response)
    } catch(error) {
      console.error(error);
    }
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
          <View style={styles.body}>
            {this.renderList()}
          </View>
          <TouchableOpacity
            onPress={closeModal}
            style={styles.close}
          >
            <Image
              source={closeIcon}
              style={styles.closeImg}
            />
          </TouchableOpacity>
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
    margin: 10,
    position: 'relative',
    left: 0,
    top: 0
  },
  body: {
    flex: 1,
    margin: 20,
    width: "90%",
    backgroundColor: 'rgba(255,255,255,.5)',
    marginTop: '8%',
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  payItem: {
    width: '25%',
    backgroundColor: '#ff6d0a',
    borderRadius: 5,
    justifyContent: 'center',
    height: 100,
    alignItems: 'center',
    overflow: 'hidden',
    padding: 10
  },
  goldImg: {
    width: 50,
    height: 50
  },
  goldText: {
    flex: 1,
    height: 30,
    lineHeight: 30,
    color: '#fff',
    fontSize: 18
  }
})

export default RechargeModal