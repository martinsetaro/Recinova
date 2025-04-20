import { View,Text,StyleSheet } from "react-native";
import Presentacion from "./Presentacion";



export default function FirstPage({navigation}){



return(
    <View style={styles.container}>
       <Presentacion navigation={navigation}/>
    </View>
)


};

const styles = StyleSheet.create({
texto:{
    fontSize:20,
},
container:{
flex:1
},



});