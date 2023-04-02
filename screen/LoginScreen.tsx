

import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { constructor } from "react";
import Spacing from "../constants/Spacing";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../component/AppTextInput";
import FontSize from "../constants/FontSize";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Font from "../constants/Font";
import App from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;
const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [data, setData]=React.useState({
  username:'',
 password:'',
 check_textInputChange:false,
 secureTextEntry:true,
 isValidUser:true,
 isValidPassword:true
  })

  const handleValidUser = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            isValidUser: false
        });
    }
}
  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}
const handlePasswordChange = (val) => {
  if( val.trim().length >= 8 ) {
      setData({
          ...data,
          password: val,
          isValidPassword: true
      });
  } else {
      setData({
          ...data,
          password: val,
          isValidPassword: false
      });
  }
}

const updateSecureTextEntry = () => {
  setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
  });
}


  return (

    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginVertical: 30

        }}
      >
        <Image source={require('../assets/img/logo_app.png')} style={{  borderRadius: 25 }} />
        <Text
          style={{
            fontSize: FontSize.xLarge,
            color: '#fefefc',
            fontWeight: 'bold'
          }}
        >
          APP
        </Text>
      </View>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >

        <View

        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: '#fefefc',
              fontWeight: 'bold',
              marginVertical: 10,
              marginLeft:15

            }}
          >
            Welcome!
          </Text>

        </View>
        <View
          style={{
            marginVertical: Spacing * 2,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="User"
            placeholderTextColor="#fff7ff"
            onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
            onChangeText={(val) => textInputChange(val)}

          />
         { data.isValidUser ? null : 
            <Text style={{color:'red'}}>Username must be 4 characters long.</Text>
            }
          <TextInput
            style={styles.input}
            placeholder="Passworld"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
            placeholderTextColor="#fff7ff"

          />
        </View>
        { data.isValidPassword ? null : 
            <Text style={{color:'red'}}>Password must be 8 characters long.</Text>
            }
               <View>
        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: '#fff7ff',
            marginVertical: Spacing * 3,
            borderRadius: 50,
            
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
          
            shadowRadius: Spacing,
          }}
          onPress={() => {navigate('MyTabs');
        }}

        >
          <Text
            style={{
              color: '#d2b7f0',
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Login
          </Text>
          
        </TouchableOpacity>
        <Text
            style={{
              fontSize: FontSize.small,
              color: '#fff7ff',
              alignSelf: "center",

            }}
          >
            Forgot your password ?
          </Text>
        </View>

      
        <View style={{marginVertical:100}}>
        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: '#fff7ff',
            width:'50%',
            borderRadius: 50,
            alignSelf:'center',
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
          
            shadowRadius: Spacing,
          }}
          onPress={() => navigate("MyTabs")}

        >
          <Text
            style={{
              color: '#d2b7f0',
              textAlign: "center",
              fontSize: 16,
              
            }}
          >
          Create
          </Text>
          
        </TouchableOpacity>
        <Text
            style={{
              fontSize: FontSize.small,
              color: '#fff7ff',
              alignSelf: "center",
              marginVertical:10
            }}
          >
            Forgot your password ?
          </Text>
        </View>

      </View>

    </SafeAreaView>

  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a582df'
  },
  image: {
  },
  input:{
    borderBottomColor:'#fff7ff',
    color:'#fff7ff',
    padding: 10,
    margin: 10,
    borderBottomWidth: 1,

  }
});
