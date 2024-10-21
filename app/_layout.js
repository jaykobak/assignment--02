import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  // Initialize the state for the input field for the username section
  const [username, setUsername] = useState('')

  return (
    <View style={ styles.page_container }>
      {/* Create new account text details */}
      <View style={{ paddingLeft: 35, paddingTop: 60 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>Create Account</Text>
        <Text style={{ color: 'black', fontSize: 15, fontWeight: '500', opacity: 0.7, paddingTop: 10, paddingBottom: 15 }}>Become new user</Text>
      </View>

      {/* Create new account user's input details */}
      {/* Username */}
      <View style={ styles.username_container }>
        <Image source={require('../assets/icons/person-icon.png')} style={{ width: 27, height: 27, alignSelf: 'center', marginLeft: 10, marginRight: 9  }}/>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ paddingTop: 5, fontSize: 12, fontWeight: '500', opacity: 0.6 }}>Username</Text>
          <TextInput placeholder='Your name' placeholderTextColor={'black'} style={styles.text_input} value={username} onChange={(value) => setUsername(value)}/>
        </View>
      </View>

      {/* Gmail */}
      <View style={ styles.username_container }>
        <Image source={require('../assets/icons/email-icon.png')} style={{ width: 25, height: 25, alignSelf: 'center', marginLeft: 10, marginRight: 9 }}/>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ paddingTop: 5, fontSize: 12, fontWeight: '500', opacity: 0.6 }}>Your Gmail</Text>
          <TextInput placeholder='Your gmail' placeholderTextColor={'black'} style={styles.text_input}/>
        </View>
      </View>

      {/* Password */}
      <View style={ styles.username_container }>
        <Image source={require('../assets/icons/padlock.png')} style={{ width: 25, height: 25, alignSelf: 'center', marginLeft: 10, marginRight: 9 }}/>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ paddingTop: 5, fontSize: 12, fontWeight: '500', opacity: 0.6 }}>Password</Text>
          <TextInput placeholder='Your password' placeholderTextColor={'black'} style={styles.text_input}/>
        </View>
      </View>

      {/* Confirm password */}
      <View style={ styles.username_container }>
        <Image source={require('../assets/icons/padlock.png')} style={{ width: 25, height: 25, alignSelf: 'center', marginLeft: 10, marginRight: 9 }}/>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ paddingTop: 5, fontSize: 12, fontWeight: '500', opacity: 0.6 }}>Confirm password</Text>
          <TextInput placeholder='Your password' placeholderTextColor={'black'} style={styles.text_input}/>
        </View>
      </View>

      {/* Sign up button */}
      <TouchableOpacity activeOpacity={0.8} style={ styles.sign_up_button }>
        <Text style={{ color: 'white', fontSize: 17 }}>Sign up</Text>
      </TouchableOpacity>

      {/* Horizontal line */}
      <View style={{ backgroundColor: 'black', height: 1, marginVertical: 30, opacity: 0.3 }}/>

      {/* Other sign up options */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 50, alignSelf: 'center' }}>
        {/* Facebook sign up option */}
        <TouchableOpacity activeOpacity={0.7} style={[styles.other_sign_up, {marginRight: 20}]}>
           <Image source={require('../assets/icons/facebook-logo.png')} style={{ width: 25, height: 25, marginRight: 10 }}/>
          <Text>Facebook</Text>
        </TouchableOpacity>
        {/* Google sign up option */}
        <TouchableOpacity activeOpacity={0.7} style={styles.other_sign_up}>
           <Image source={require('../assets/icons/google-logo.png')} style={{ width: 25, height: 25, marginRight: 10 }}/>
          <Text>Google</Text>
        </TouchableOpacity>
      </View>

      {/* Footer text */}
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 13, marginBottom: 15 }}>By sign up you agree to the <Text style={{ color: '#0484fc' }}>Terms Of Service</Text></Text>
        <Text style={{ fontSize: 13 }}>Have an account? <Text style={{ color: '#0484fc' }}>Login now</Text></Text>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    backgroundColor: 'white'
  },

  username_container: {
    height: 50,
    borderColor: '#E4E0E1',
    borderWidth: 2,
    borderRadius: 7,
    marginHorizontal: 34,
    flexDirection: 'row',
    marginVertical: 10,
  },

  text_input: {
    height: 16,
    fontSize: 13,
    fontWeight: '500',
    color: 'black',
    opacity: 0.8,
  },

  sign_up_button: {
    backgroundColor: '#0484fc',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  other_sign_up: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DBD3D3',
    borderWidth: 2.5,
    borderRadius: 20,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
})