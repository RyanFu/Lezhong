import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import {observer} from "mobx-react";
import noticeIcon from '../static/img/icon/notice.png'

@observer
class Notice extends React.Component {
  render () {
    return (
      <View style={styles.notice}>
        <Image
          source={noticeIcon}
          style={styles.noticeIcon}
        />
        <Text
          style={styles.tips}
        >消息消息</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  notice: {
    height: 20,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,11,3,.3)',
    margin: 10,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 10,
    paddingLeft: 5
  },
  noticeIcon: {
    width: 20,
    height: 20
  },
  tips: {
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    color: '#fff',
    marginLeft: 5
  }
})

export default  Notice