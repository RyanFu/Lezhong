import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableHighlight
} from 'react-native';
import {observer} from "mobx-react";

@observer
class Home extends React.Component {
  static navigationOptions = {
    title: '',
    header: null,
    headerTransparent: true
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
        />
        <View style={styles.header}>
          <View style={styles.goOutView}>
            <TouchableHighlight>
              <Text>退出</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.userView}>
            <Image source={require('../static/img/weixin.png')} style={styles.headerImg}/>
            <Text style={styles.username}>名称</Text>
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
        </View>
        <View style={styles.tips}>
          <Text>消息</Text>
        </View>
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
  header: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: 'rgba(0,11,3,.5)'
  },
  headerImg: {
    width: 50,
    height: 50
  },
  username: {
    height: 50,
    lineHeight: 50
  },
  goOutView: {
    flexDirection: 'row',
    width: 100
  },
  userView: {
    flexDirection: 'row',
    width: 200
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
  tips: {
    height: 40
  }
})

export default Home
