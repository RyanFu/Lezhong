import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import {observer} from "mobx-react";
import { observable, action } from "mobx";

import Header from '../components/Header'
import Footer from '../components/Footer'
import Tips from '../components/Tips'
import Notice from '../components/Notice'
// import Alipay from 'react-native-yunpeng-alipay';

// modal
import GoOutModal from '../components/modal/GooutModal'
import BomeRooms from '../components/modal/BomeRooms'

import boom from '../static/img/boom.png'

@observer
class Home extends React.Component {
  static navigationOptions = {
    title: '',
    header: null,
    headerTransparent: true
  }
  @observable goOutOpen = false
  @observable boomOpen = false

  @action.bound openGoOutModal () {
    this.goOutOpen = true
  }

  @action.bound closeGoOutModal () {
    this.goOutOpen = false
  }
  // 房间列表
  @action.bound openBoomModal () {
    this.boomOpen = true
  }
  @action.bound closeBoomModal () {
    this.boomOpen = false
  }
  // onAlipay() {
  //   Alipay.pay("signed pay info string").then(function(data){
  //     console.log(data);
  //   }, function (err) {
  //     console.log(err);
  //   })
  // }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.bg}
          source={require('../static/img/home-bg4.jpg')}
        >
        <StatusBar
          hidden={true}
        />
        <Header
          openGoOutModal={this.openGoOutModal}
        />
          <Notice/>
        <View style={styles.body}>
            <View>
              <TouchableOpacity
                onPress={this.openBoomModal}
              >
                <Image
                  source={boom}
                  style={styles.boom}
                />
              </TouchableOpacity>

            </View>
        </View>
        <Footer/>
        </ImageBackground>
        <GoOutModal closeModal={this.closeGoOutModal} open={this.goOutOpen}/>
        <BomeRooms closeModal={this.closeBoomModal} open={this.boomOpen}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%'
  },
  bg: {
    width: '100%',
    height: '100%'
  },
  body: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  boom: {
    width: 180,
    height: 180
  }
})

export default Home
