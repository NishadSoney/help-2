import * as React from 'react';
import {Text,View,TouchableOpactiy,StyleSheet,KeyboardAvoidingView,TextInput,Image,Alert} from 'react-native';

export default class LoginScreen extends React.Component {
    
    constructor(){
        super()
        this.state={
            emailId:"",
            password:"",
        }
    }

    login = async(email,password)=>{
        if(email && password ){
            try{const response = await firebase.auth().signInWithEmailAndPassword(email.password)
            if(response){
                this.props.navigation.navigate("Transaction")
            }
        }
        catch(error){
            switch(error.code){
                case "auth/user-not-found":
                    Alert.alert("User Not Found");
                    break;
                case "auth/invalid-email":
                    Alert.alert("Incorret email or password")

            }
        }
    }else{
        Alert.alert("Enter Email and Password")
    }
    }

    render(){
        return(
            <KeyboardAvoidingView style = {{alignItems:'center',marginTop:100}}>
                <View>
                    <Image source={require("../assets/booklogo.jpg")}
                    style = {{width:30,height:20}}
                    />
                </View>
                <View>
                    <TextInput style = {styles.login} keyboardType = "email-address" placeholder = "abc@example.com"
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}/>
                    <TextInput style = {styles.login} secureTextEntry = {true} placeholder = "Enter Password"
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                    />
                </View>
                <View>
                    <TouchableOpactiy style = {{width:50,height:40,marginTop:200}}
                    onPress={()=>{
                        this.login(this.state.emailId,this.state.password)
                    }}>
                        <Text style = {{textAlign:'center'}}>LOGIN</Text>
                    </TouchableOpactiy>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    login:{
        width:20,
        height:20,
        marginTop:50,
        paddingLeft:10,
        textDecorationLine:"underline",
    },
})