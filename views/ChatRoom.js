import React, {Component} from 'react';
import {
  Text,
  View,
  BackAndroid
} from 'react-native';
import Button from 'apsl-react-native-button'
import Orientation from "react-native-orientation"
import { GiftedChat } from 'react-native-gifted-chat'
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import defaultAvatar from '../static/img/defualtAvatar.png'

@observer
class WelCome extends React.Component {
  @observable.ref messages = [
    {
      _id: 2,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'React Native',
        avatar: defaultAvatar,
      },
    },
  ]
  @observable
  @action.bound onSend(messages = []) {
    this.messages = GiftedChat.append(this.messages, messages)
  }

  static navigationOptions = {
    title: 'Home',
    headerTransparent: true,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
  disableSelectionMode () {
    if (this.isSelectionModeEnabled()) {
      this.disableSelectionMode();
      return true;
    } else {
      return false;
    }
  }
  onBackButtonPressAndroid = () => {
    this.disableSelectionMode();
    return true;
  }
  componentWillMount() {
    const initial = Orientation.getOrientation((err, orientation) => {
      if (!err && orientation !== 'PORTRAIT') {
        Orientation.lockToPortrait()
      }
    });
  }
  componentDidMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    }
  }
  render() {
    return (
      <GiftedChat
        messages={this.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

export default WelCome
