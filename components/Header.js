import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {observer} from "mobx-react";
import gouOut from '../static/img/icon/goout.png'
import userIcon from '../static/img/userIcon.jpg'

import LinearGradient from 'react-native-linear-gradient'

@observer
class Header extends React.Component {
  render () {
    const {openGoOutModal} = this.props
    return (
      <View style={styles.header}>
        <LinearGradient
          colors={['rgba(255,255,255,.1)', 'rgba(255,255,255,.5)', 'rgba(255,255,255,.1)']}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          locations={[0,0.5,0.6]}
          style={styles.headerGradient}
        >
          <View style={styles.goOutView}>
            <TouchableOpacity
              onPress={openGoOutModal}
            >
              <Image
                style={styles.goOutImg}
                source={gouOut}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.userView}>
            <Image
              source={userIcon}
              style={styles.headerImg}
            />
            <View style={styles.user}>
              <Text style={styles.username}>赵日天</Text>
              <Text style={styles.username}>ID: 132465</Text>
            </View>
          </View>
          <View style={styles.goldView}>
            <Image source={require('../static/img/weixin.png')} style={styles.goldImg}/>
            <Text style={styles.username}>名称</Text>
          </View>
          <View style={styles.diamondView}>
            <Image source={require('../static/img/weixin.png')} style={styles.goldImg}/>
            <Text style={styles.username}>名称</Text>
          </View>
          <View style={styles.messageView}>
            <Text>站内信</Text>
          </View>
          <View style={styles.messageView}>
            <Text>设置</Text>
          </View>
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,.3)',
    position: 'relative',
    left: 0,
    top: 0
  },
  headerGradient: {
    flexDirection: 'row',
    padding: 10
  },

  goOutImg: {
    width: 30,
    height: 30
  },
  userView: {
    flexDirection: 'row',
    width: 150,
    height: 30,
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: 25,
    marginRight: 10
  },
  user: {
    height: 30,
    padding: 3
  },
  headerImg: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  username: {
    fontSize: 10,
    color: '#fff'
  },
  goOutView: {
    flexDirection: 'row',
    width: 100
  },

  goldView: {
    flexDirection: 'row',
    flex: 1
  },
  diamondView: {
    flexDirection: 'row',
    flex: 1
  },
  messageView: {
    width: 50
  },
  goldImg: {
    width: 30,
    height: 30
  },
})

export default Header