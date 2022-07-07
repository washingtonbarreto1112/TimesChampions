import React,{useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';
import Api from '../pages/Api';

export default function Times(){

const [dadosTimes,setdadosTimes] = useState([]);

async function getTimes(){
  try{
    const resultado = await Api.get(`/times`);
    return resultado.data
  }catch(error){
    console.log(error)
    return[]
  }
}  

useEffect(async() =>{
  const resp = await getTimes()
  setdadosTimes(resp);
},[]);

    return(
        <View style={estilo.container}>
        <Text style={estilo.titulo}>Times</Text>
        <FlatList
        data={dadosTimes}
        keyExtractor={dadosTimes => dadosTimes.id}
        renderItem={({item})=>
        <TouchableOpacity>
          <View style={estilo.grupoTimes}>
              <Text style={estilo.textoBotaoTimes}>{item.name}</Text> 
              <Text style={estilo.textoBotaoTeste}>{item.country}</Text> 
              <Image style={estilo.imageFoto} source={{uri:"https://seeklogo.com/images/L/liverpool-football-club-logo-F989101B10-seeklogo.com.png"}}/>  
          </View>
          </TouchableOpacity>
        }
        />
        <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e9c46a',
     
    },
    titulo:{
      fontSize:30,
      color:"#2a9d8f",
      justifyContent: 'center',
      marginVertical:20
    },
    grupoTimes:{
      backgroundColor: '#2a9d8f',
      justifyContent: 'center',
      margin:15,
      padding:5,
      borderRadius:10,
      alignItems:'center',
      textAlign:'center',
    },
    textoBotaoTimes:{
      fontSize:20
    },
    textoBotaoTeste:{
      fontSize:25
    },
    imageFoto:{
      width: 300,
      flex:1
    }
  });