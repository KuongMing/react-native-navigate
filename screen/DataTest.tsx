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

type Props = NativeStackScreenProps<RootStackParamList, "TestData">;
const DataTest: React.FC<Props> = ({ navigation: { navigate }, route }) => {


    return (
        <SafeAreaView>
            <View>
            <TouchableOpacity  onPress={() => navigate("MyTabs")}>
            <Image source={require('../assets/back.png')}
              style={{ width: 30, height: 30 }} resizeMode='stretch' />
          </TouchableOpacity>
        <View style={{alignSelf: "center" }}>
        <Text 
                > Test navigation:{route.params.paramKey}</Text>
        </View>
        
            </View>
        </SafeAreaView>
    );
};

export default DataTest;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a582df'
    },
    image: {
    },
    input: {
        borderBottomColor: '#fff7ff',
        color: '#fff7ff',
        padding: 10,
        margin: 10,
        borderBottomWidth: 1,

    }
});