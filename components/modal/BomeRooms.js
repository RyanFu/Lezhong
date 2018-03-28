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
import Modal from 'react-native-simple-modal'

import { observable, action } from "mobx";

@observer
class BomeRooms extends React.Component {
  @observable rooms = {
    1: [
      {id: 11, name: '5-10包/1-2倍'},
      {id: 12, name: '5-10包/1-2倍'},
      {id: 13, name: '5-10包/1-2倍'},
      {id: 14, name: '5-10包/1-2倍'},
      {id: 15, name: '5-10包/1-2倍'},
      {id: 16, name: '5-10包/1-2倍'},
      {id: 17, name: '5-10包/1-2倍'},
      {id: 18, name: '5-10包/1-2倍'},
      {id: 19, name: '5-10包/1-2倍'},
      {id: 111, name: '5-10包/1-2倍'},
      {id: 112, name: '5-10包/1-2倍'},
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
  @observable nowType = 1
  @observable roomTypes = [
    {id: 1, name: '初级场（<50）'},
    {id: 2, name: '中级场（50-100）'},
    {id: 3, name: '高级场（100-500）'},
    {id: 4, name: '至尊场（500-2000）'}
  ]
  goRoom () {
    this.props.navigation.navigate('ChatRoom')
  }
  @action.bound renderRoom ({item}) {
    return (
      <TouchableOpacity
        style={styles.roomItem}
        key={item.id}
        onPress={this.goRoom.bind(item.id)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  @action renderHeader () {
    return this.roomTypes.map((item, i) => (
      <TouchableOpacity
        style={styles.roomTypeItem}
        key={item.id}
        onPress={this.changeNowType.bind(this, item.id)}
      >
        <Text
          style={styles.roomTypeText}
        >{item.name}</Text>
      </TouchableOpacity>
    ))
  }

  changeNowType (id) {
    this.nowType = id
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
            <View
              style={styles.roomTypes}
            >
              {
                this.renderHeader()
              }
            </View>
            <View style={styles.roomBody}>
              <FlatList
                numColumns={4}
                data={this.rooms[this.nowType]}
                renderItem={this.renderRoom.bind(this)}
                extraData={this.rooms[this.nowType]}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>

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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  body: {
    flex: 1,
    margin: 20,
    width: "90%",
    backgroundColor: 'rgba(255,255,255,.5)',
    marginTop: '8%',
    marginBottom: 20
  },
  roomTypes: {
    height: 50,
    width: '100%',
    flexDirection: 'row'
  },
  roomBody: {
    flexDirection: 'row',
    flex: 1
  },
  roomTypeItem: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#c4c203',
    borderWidth: 1
  },
  roomTypeText: {
    height: 50,
    width: '100%',
    lineHeight: 50,
    textAlign: 'center',
    color: '#fff'
  },
  roomItem: {
    width: '25%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#c4c203',
    borderWidth: 1
  }
})

export default BomeRooms