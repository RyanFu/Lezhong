import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Alert,
  StatusBar
} from 'react-native';
import { observer } from 'mobx-react'
import Button from 'apsl-react-native-button'
import {Theme, Color} from '../theme/thme'


@observer
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      modalVisible: false
    }
  }

  static navigationOptions = {
    title: '',
    header: null,
    headerTransparent: true
  }

  onLogin () {
    // this.props.navigation.push('Home')
    Alert.alert(
      '提示',
      '登录成功',
      [
        {text: 'OK', onPress: () => this.props.navigation.replace('Home')},
      ],
      { cancelable: false }
    )
  }
  setModalVisible (modalVisible) {
    this.setState({modalVisible})
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
        />
        <View style={styles.inputBox}>
          <View style={{height: 50}}/>
          <View style={{height: 100, width: '100%'}}>
            <TextInput style={styles.userName}
                       placeholder="手机号"
                       underlineColorAndroid={'transparent'}
                       selectionColor={Color.waringColor}
                       onChangeText={(username) => this.setState({username})}/>
            <TextInput style={styles.password}
                       placeholder="密码"
                       value={this.state.password}
                       secureTextEntry={true}
                       clearTextOnFocus={true}
                       underlineColorAndroid={'transparent'}
                       onChangeText={(password) => this.setState({password})}/>
          </View>
          <View style={styles.loginBtn}>
            <Button style={Theme.btnDanger}
                    onPress={this.onLogin.bind(this)}
                    textStyle={Theme.btnText}>登录</Button>

          </View>
          <View style={styles.linkView}>
            <TouchableHighlight style={styles.registered} onPress={() => navigate('Registered')}><Text>注册</Text></TouchableHighlight>
            <View style={{flex: 1}}></View>
            <TouchableHighlight style={styles.forget} onPress={() => navigate('Forget')}><Text>忘记密码？</Text></TouchableHighlight>
          </View>
          <View style={styles.othenLink}>
            <Text style={{color: Color.defaultColor}}>其他登录方式</Text>
            <Text onPress={() => navigate('Registered')}>
              <Image  style={styles.icon} source={require('../static/img/weixin.png')} />
            </Text>
          </View>
        </View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>

            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%'
  },
  inputBox: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  loginBtn: {
    width: '100%',
    paddingTop: 10,
    height:60
  },
  userName: {height: 40, width: '100%',  borderWidth: 1, paddingLeft: 10, borderColor: Color.borderColor},
  password: {height: 40, width: '100%',  borderWidth: 1, paddingLeft: 10, borderTopWidth: 0, borderColor: Color.borderColor},
  linkView: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    height: 50
  },
  registered: {
    width: 50
  },
  forget: {
    width: 100
  },
  othenLink: {
    flex: 1
  },
  icon: {
    width: 80,
    height: 80
  }
});

export default Login
