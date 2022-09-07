import  React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Dimensions,SafeAreaView } from 'react-native';


const SignUp = ({navigation}) => {

  return (

    <SafeAreaView style={styles.container}>
      
     <Text style={styles.welcome}> SignUp Here</Text>
     <TextInput
     style = {styles.input}
     placeholder=" Enter Your Name"
     
     />
     
     <TextInput
     style = {styles.input}
     placeholder="Enter Your Email"
     
     />
     <TextInput
     style = {styles.input}
     underlineColorAndroid='rgba(0,0,0,0)'
     placeholder="Enter Password"
     secureTextEntry={true}
     
     />
      <TextInput
      underlineColorAndroid='rgba(0,0,0,0)'
     style = {styles.input}
     placeholder="Confirm Password"
     secureTextEntry={true}
     
     />
     <View style={styles.btnContainer}>
     <TouchableOpacity style={styles.userBtn} onPress ={() => navigation.navigate('Home')}>
        <Text style={styles.btnTxt}>
            SignUp
        </Text>
     </TouchableOpacity >
     <TouchableOpacity style={styles.userBtn} onPress ={() => navigation.navigate('Login')}>
     <Text style={styles.btnTxt}>
     If you have an account? Login
     </Text>
     </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E040FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    backgroundColor: '#E040FB',
    color: "#fff",
    margin:10,
    textAlign: 'center',
   
  },
  input: {
   width: "90%",
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  btnContainer: {
   flexDirection: "row",
   justifyContent:"space-between",
   width:"90%"
   },
   userBtn: {
    backgroundColor:"#9C27B0",
     padding:15,
     width:"45%",
     margin:5,
     borderRadius:10
    },
    btnTxt: {
        fontSize: 15,
        textAlign:"center",
        fontWeight: "bold"
        },
});

export default SignUp