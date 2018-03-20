import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {observer} from "mobx-react";

@observer
class Tips extends React.Component {
  render () {
    return (
      <View style={styles.tips}>
        <Text>消息</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tips: {
    height: 40
  },
})

export default Tips