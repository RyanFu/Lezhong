import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { observer } from "mobx-react";
import { observable } from "mobx";
import Modal from 'react-native-simple-modal'

@observer
class GoOutModal extends React.Component {
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
        closeOnTouchOutside={true}
        containerStyle={{
          justifyContent: 'center'
        }}
        modalStyle={{
          borderRadius: 2,
          margin: 20,
          padding: 10,
          backgroundColor: '#F5F5F5'
        }}
        disableOnBackPress={false}>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  tips: {
    height: 40
  },
})

export default GoOutModal