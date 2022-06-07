import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts, Abel_400Regular,Mirza_400Regular,Nunito_400Regular} from '@expo-google-fonts/dev';


export default function App() {

  let [fontsLoaded] = useFonts({
    Abel_400Regular,
    Mirza_400Regular,
    Nunito_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (
    <View style={estilo.container}>
       <StatusBar style="auto" />
      <Text style={estilo.titulo1}>Rede Social - Encontros no Senac</Text>
      <Text style={estilo.titulo2}>Você tem um projeto Integrador?</Text>
      <Text style={estilo.titulo2}> Quer envolver novas áreas? </Text>
      <Text style={estilo.titulo3}> Então...Vamos encontrar os alunos aqui?! ;)</Text>
      <FlatList  
      data={pessoas}
      renderItem={({item})=>
      <View>
        <View>
          <Image style={estilo.img} source={item.img}/>
        </View>
         
          <Text>{item.nome}</Text>
          <Text>{item.curso}</Text>
          <Text>{item.periodo}</Text>
          
      </View>  
      }
      />
    </View>
  );
}
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8e2dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius:150
  },
  titulo1:{
    marginTop: 40,
    marginVertical:10,
    fontSize: 20,
    fontFamily: 'Abel_400Regular'

  },
  titulo2:{
    marginVertical:10,
    fontSize: 16,
    fontFamily:'Mirza_400Regular'
  },
  titulo3:{
    fontFamily:'Nunito_400Regular',
  }
});

const pessoas = [
  {
    uid:159,
    nome:'Danilo Soares',
    curso: 'Técnico de Informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto:'Hardware,Front-end,Redes,PHP', 
    bio:'Curta a vida de um gento bem leve, gosto de ficar com meus amigos no final de semana e compartilhar informações é o meu forte. Sou paciênte.',
    img:require('./assets/fotoperfil/DaniloAlves.png')
  },
  {
    uid:420,
    nome:'Bruno Galeazzo',
    curso:'Técnico de informática',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware, Redes',
    bio:'Mais novo membro da conferência mundial de pods no banheiro',
    img:require('./assets/fotoperfil/bruno.jpg')
  },
  {
    uid:69,
    nome:'Sasuke',
    curso:'Ninja',
    periodo:'manhã',
    turma:'ti12',
    gosto:'sofrer',
    bio:'matar um certo alguem é meu sonho',
    img:require('./assets/fotoperfil/bruno.jpg')
  },
  {
    uid:10,
    nome:'Washington barreto',
    curso: 'Técnico de informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto: 'Hardware, Back-End, Redes, C#',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.',
    img:require('./assets/fotoperfil/washington.jpg')
  },
  {
    uid:850,
    nome:'Daniel Lacerda',
    curso:'Técnico de Informática',
    periodo:'manhã',
    turma:'TI10m',
    gosto:'Php, Css, Design Gráfico, Games',
    bio:'Gosto de Jogar, gosto de mexer na internet, sou professor de informática, e gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    img:require('./assets/fotoperfil/bruno.jpg')
  },
{
    uid:171,
    nome: 'Jair Messias',
    curso: 'Enfeitador de Bolos',
    periodo: 'Manhã',
    turma: 'EB10',
    gosto: 'Bolo, Chantilly e Fuzil',
    bio: 'Presidente do Brasil, apaixonado por confeitaria. Adoro uma mulher que saiba fazer um bolinho do bom e um mousse cremoso! Geralmente me chamam de diabo, corrupto, maníaco e genocida. Mas eu acho que são apelidos carinhosos do meu povo :)',
    img:require('./assets/fotoperfil/bosonaro.png')
}
];


