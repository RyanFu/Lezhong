import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import {observer} from "mobx-react";

@observer
class Footer extends React.Component {
  render () {
    return (
      <View style={styles.footer}>
        <View style={[styles.col]}>
          <TouchableHighlight>
            <Text>规矩</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.col]}>
          <TouchableHighlight>
            <Text>分享有礼</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.col]}>
          <TouchableHighlight>
            <Text>钻石排行榜</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.col]}>
          <TouchableHighlight>
            <Text>战绩</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.col]}>
          <TouchableHighlight>
            <Text>申请成为群主</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,11,3,.5)'
  },
  col: {
    flex: 1
  }
})

export default  Footer