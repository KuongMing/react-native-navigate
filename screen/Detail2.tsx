import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";


const Detail2 = ({ }) => {


  return (

    <SafeAreaView style={styles.container}>

      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View style={{ height: '8%', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ aspectRatio: 1.7 }}>
            <Image source={require('../assets/back.png')}
              style={{ width: 30, height: 30 }} resizeMode='stretch' />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '8%', height: '100%', aspectRatio: 1.7 }}>
            <Image source={require('../assets/more.png')}
              style={{ width: 30, height: 30 }} resizeMode='stretch' />
          </TouchableOpacity>
     
        </View>



      </View>
 
      <View style={{ margin: Spacing * 2, position: 'relative', flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 15, }}>
        <TouchableOpacity style={{ marginHorizontal: 100, position: 'absolute', zIndex: 999, left: '-10%', top: '-18%' }}>
          <View style={{ backgroundColor: '#9685d6', paddingVertical: 15, paddingHorizontal: 15, borderRadius: 50, marginRight: 10 }}>
            <Image source={require('../assets/front-of-bus.png')} style={{ width: 24, height: 24 }} resizeMode="stretch" />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'column', margin:15 }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ alignContent: 'flex-end', backgroundColor: 'green', padding: 10, borderRadius: 50, marginRight: 10 }}>
              <Image source={require('../assets/send.png')} style={{ width: 24, height: 24 }} resizeMode="stretch" />
            </View>
            <View style={{}}>
              <Text style={{ color: '#cfd0d0', fontSize: 12 }}>Frome</Text>
              <Text style={{ fontSize: 16 }}>Location</Text>
            </View>

          </View>
          <View style={{ flexDirection: 'column',marginVertical:15 }}>
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
        <View style={{ flexDirection: 'column',margin:15 }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ alignContent: 'flex-end', backgroundColor: 'green', padding: 10, borderRadius: 50, marginRight: 10 }}>
              <Image source={require('../assets/send.png')} style={{ width: 24, height: 24 }} resizeMode="stretch" />
            </View>
            <View style={{}}>
              <Text style={{ color: '#cfd0d0', fontSize: 12 }}>Frome</Text>
              <Text style={{ fontSize: 16 }}>Location</Text>
            </View>

          </View>
          <View style={{ flexDirection: 'column',marginVertical:15 }}>
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
        <TouchableOpacity style={{ alignItems:'center'}}>
          <View style={{ backgroundColor: '#9685d6', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 50, marginRight: 10 }}>
             <Text style={{color:'white',textTransform:'uppercase'}}>Buy ticket</Text>
          </View>
        </TouchableOpacity>
        </View>
    

      </View>
      <View style={{ margin: Spacing * 2, position: 'relative', flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 15, }}>
        <TouchableOpacity style={{ marginHorizontal: 100, position: 'absolute', zIndex: 999, left: '-10%', top: '-18%' }}>
          <View style={{ backgroundColor: '#9685d6', paddingVertical: 15, paddingHorizontal: 15, borderRadius: 50, marginRight: 10 }}>
            <Image source={require('../assets/front-of-bus.png')} style={{ width: 24, height: 24 }} resizeMode="stretch" />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'column', margin:15 }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ alignContent: 'flex-end', backgroundColor: 'green', padding: 10, borderRadius: 50, marginRight: 10 }}>
              <Image source={require('../assets/send.png')} style={{ width: 24, height: 24 }} resizeMode="stretch" />
            </View>
            <View style={{}}>
              <Text style={{ color: '#cfd0d0', fontSize: 12 }}>Frome</Text>
              <Text style={{ fontSize: 16 }}>Location</Text>
            </View>

          </View>
          <View style={{ flexDirection: 'column',marginVertical:15 }}>
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
        <View style={{ flexDirection: 'column',margin:15 }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ alignContent: 'flex-end', backgroundColor: 'green', padding: 10, borderRadius: 50, marginRight: 10 }}>
              <Image source={require('../assets/send.png')} style={{ width: 24, height: 24 }} resizeMode="stretch" />
            </View>
            <View style={{}}>
              <Text style={{ color: '#cfd0d0', fontSize: 12 }}>Frome</Text>
              <Text style={{ fontSize: 16 }}>Location</Text>
            </View>

          </View>
          <View style={{ flexDirection: 'column',marginVertical:15 }}>
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
        <TouchableOpacity style={{ alignItems:'center'}}>
          <View style={{ backgroundColor: '#9685d6', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 50, marginRight: 10 }}>
             <Text style={{color:'white',textTransform:'uppercase'}}>Buy ticket</Text>
          </View>
        </TouchableOpacity>
        </View>
    

      </View>
   
    </SafeAreaView>
  );
};

export default Detail2;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a582df',
    flex: 1,
  },
  image: {
  }

});