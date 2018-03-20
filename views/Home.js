import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableHighlight
} from 'react-native';
import {observer} from "mobx-react";
import { observable, action } from "mobx";

import Header from '../components/Header'
import Footer from '../components/Footer'
import Tips from '../components/Tips'

// modal
import GoOutModal from '../components/modal/GooutModal'

@observer
class Home extends React.Component {
  static navigationOptions = {
    title: '',
    header: null,
    headerTransparent: true
  }
  @observable goOutOpen = false

  @action.bound openGoOutModal () {
    this.goOutOpen = true
  }
  @action.bound closeGoOutModal () {
    this.goOutOpen = false
  }
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
        <Tips/>
        <View style={styles.body}>
            <Text>主体</Text>
        </View>
        <Footer/>
        </ImageBackground>
        <GoOutModal closeModal={this.closeGoOutModal} open={this.goOutOpen}/>
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
    width: '100%'
  },

})

export default Home
