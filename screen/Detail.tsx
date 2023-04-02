

import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Spacing from "../constants/Spacing";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../component/AppTextInput";
import FontSize from "../constants/FontSize";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Font from "../constants/Font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type Props = NativeStackScreenProps<RootStackParamList, "DetailScreen">;
const Detail: React.FC<Props> = ({ navigation: { navigate }, route }) => {
  const [email, setEmail] = useState('');
  return (



    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView >
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View style={{ height: '8%', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ aspectRatio: 1.7 }}>
            <Image source={require('../assets/more.png')}
              style={{ width: 30, height: 30 }} resizeMode='stretch' />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '8%', height: '100%', aspectRatio: 1.7 }} onPress={() => navigate('Login')}  >
            <Image source={require('../assets/user.png')}
              style={{ width: 30, height: 30 }} resizeMode='stretch' />

          </TouchableOpacity>
        </View>



      </View>
      <View style={{
        padding: Spacing * 2,

      }}>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: '400' }}>
          Hi.Cương
        </Text>
        <Text style={{ color: 'white', fontSize: 32, fontWeight: '700' }}>
          Bus
        </Text>
      </View>
      <View style={{ margin: Spacing * 2, position: 'relative', backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 15, }}>
        <TouchableOpacity style={{ marginHorizontal: 90, position: 'absolute', zIndex: 999, left: '35%', top: '30%' }}>
          <View style={{ backgroundColor: '#9685d6', paddingVertical: 25, paddingHorizontal: 25, borderRadius: 50, marginRight: 10 }}>
            <Image source={require('../assets/loop.png')} style={{ width: 24, height: 24 }} resizeMode="stretch" />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ alignContent: 'flex-end', backgroundColor: 'green', padding: 10, borderRadius: 50, marginRight: 10 }}>
              <Image source={require('../assets/send.png')} style={{ width: 24, height: 24 }} resizeMode="stretch" />
            </View>
            <View style={{}}>
              <Text style={{ color: '#cfd0d0', fontSize: 12 }}>Frome</Text>
              <Text style={{ fontSize: 16 }}>Location</Text>
            </View>

          </View>
        </View>
        <View style={{ backgroundColor: 'white', paddingHorizontal: 0, paddingVertical: 15 }}>
          <View style={{ width: '100%', flexDirection: 'row' }}>
            <View style={{ alignContent: 'flex-end', backgroundColor: '#9685d6', padding: 10, borderRadius: 50, marginRight: 10 }}>
              <Image source={require('../assets/maps-and-flags.png')} style={{ width: 24, height: 24 }} resizeMode="stretch" />
            </View>
            <View style={{}}>
              <Text style={{ color: '#cfd0d0', fontSize: 12 }}>Frome</Text>
              <Text style={{ fontSize: 16 }}>Location</Text>
            </View>

          </View>

        </View>

      </View>
      <View style={{ margin: Spacing * 2, position: 'relative', backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 15, }}>
        <TouchableOpacity style={{ marginHorizontal: 100, position: 'absolute', zIndex: 999, left: '35%', top: '30%' }}>
          <View style={{ backgroundColor: '#9685d6', paddingVertical: 25, paddingHorizontal: 25, borderRadius: 50, marginRight: 10 }}>
            <Image source={require('../assets/loop.png')} style={{ width: 24, height: 24 }} resizeMode="stretch" />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ alignContent: 'flex-end', backgroundColor: 'green', padding: 10, borderRadius: 50, marginRight: 10 }}>
              <Image source={require('../assets/send.png')} style={{ width: 24, height: 24 }} resizeMode="stretch" />
            </View>
            <View style={{}}>
              <Text style={{ color: '#cfd0d0', fontSize: 12 }}>Frome</Text>
              <Text style={{ fontSize: 16 }}>Location</Text>
            </View>

          </View>
        </View>
        <View style={{ backgroundColor: 'white', paddingHorizontal: 0, paddingVertical: 15 }}>
          <View style={{ width: '100%', flexDirection: 'row' }}>
            <View style={{ alignContent: 'flex-end', backgroundColor: '#9685d6', padding: 10, borderRadius: 50, marginRight: 10 }}>
              <Image source={require('../assets/maps-and-flags.png')} style={{ width: 24, height: 24 }} resizeMode="stretch" />
            </View>
            <View style={{}}>
              <Text style={{ color: '#cfd0d0', fontSize: 12 }}>Frome</Text>
              <Text style={{ fontSize: 16 }}>Location</Text>
            </View>

          </View>

        </View>

      </View>
      <TouchableOpacity style={{ marginHorizontal: 100 }}>
        <View style={{ backgroundColor: '#9a7fde', paddingVertical: 15, paddingHorizontal: 35, borderRadius: 50, marginRight: 10, alignSelf: "center" }}>
          <Text style={{ color: '#fafafa', fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase', }}>Search</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput value={email} style={styles.input}
          onChangeText={(email) => { setEmail(email) }} placeholder='test data' >

        </TextInput>
        <TouchableOpacity onPress={() => navigate('TestData', { paramKey: email })} >
          <View style={{ backgroundColor: '#9a7fde', paddingVertical: 5, paddingHorizontal: 35, borderRadius: 50, marginRight: 10, alignSelf: "center" }}>
            <Text style={{ color: '#fafafa', fontWeight: 'bold', fontSize: 12, textTransform: 'uppercase', }}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>


      </KeyboardAwareScrollView>
     
    </SafeAreaView>

  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a582df',
    flex: 1,
  },
  image: {
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#ffff',
    borderRadius: 15,
    width: '90%',
    color: '#121212',
    padding: 10,
    margin: 10,

  }

});
