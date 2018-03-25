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
import addIcon from '../static/img/icon/add.png'
import goldIcon from '../static/img/icon/gold.png'
import diamondIcon from '../static/img/icon/diamond.png'
import msg from '../static/img/icon/msg.png'
import setIcon from '../static/img/icon/set.png'

import LinearGradient from 'react-native-linear-gradient'

@observer
class Header extends React.Component {
  render () {
    const { openGoOutModal, openRechargeModal } = this.props
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
            <Image source={goldIcon} style={styles.goldImg}/>
            <TouchableOpacity
              style={styles.gold}
              onPress={openRechargeModal}
            >
              <Text style={styles.goldNumber}>13245</Text>
              <Image source={addIcon} style={styles.addIcon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.goldView}>
            <Image source={diamondIcon} style={styles.goldImg}/>
            <View style={styles.gold}>
              <Text style={styles.goldNumber}>13245</Text>
              <Image source={addIcon} style={styles.addIcon}/>
            </View>
          </View>
          <View style={styles.messageView}>
            <Image source={msg} style={styles.msgImg}/>
          </View>
          <View style={styles.setView}>
            <Image source={setIcon} style={styles.setIcon}/>
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
    width: 50
  },
  goldView: {
    flexDirection: 'row',
    flex: 1,
    height: 24,
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: 25,
    marginRight: 10,
    marginTop: 3
  },
  gold: {
    flex: 1,
    flexDirection: 'row',
    height: 24
  },
  goldImg: {
    width: 24,
    height: 24
  },
  goldNumber: {
    flex: 1,
    height: 24,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center'
  },
  addIcon: {
    width: 16,
    height: 16,
    margin: 4
  },
  diamondView: {
    flexDirection: 'row',
    flex: 1
  },
  messageView: {
    flexDirection: 'row',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  msgImg: {
    width: 30,
    height: 30,
    margin: 0
  },
  setView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 40,
    justifyContent: 'center'
  },
  setIcon: {
    width: 24,
    height: 24
  }
})

export default Header