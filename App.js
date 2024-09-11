import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import React, {useEffect, useState} from 'react';

import Card from './componentes/card'


export default function App() {
  const [dataImported, constructData] = useState('');

  const importData = (text = "") => {
    fetch('https://rest.coinapi.io/v1/exchanges/APIKEY-6c506bdb-537d-4253-9000-d823dccbdbd1')
    .then(response => {
      console.log(response.status);
      if(response.status >= 400 && response.status <= 500){
        throw new Error(response.status) 
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      let cards = [];
      if(Array.isArray(data)){
        data.forEach(element => {
          cards.push(<Card title={element.name} vol={element.volume_1hrs_usd} opDay={element.volume_1day_usd}></Card>)
        });
      }else{
        cards.push(<Card title={data.name} vol={data.volume_1hrs_usd} opDay={data.volume_1day_usd}></Card>)
      }
      constructData(cards);
    })
    .catch(data => {
      console.log("no se pudo cargar el contenido: " + data);
      constructData(<Text style={styles.notFoundText}>No se pudo cargar la información: error {data.message}</Text>);
    });
  }

  useEffect(() => {
    importData();
  }, [])
  
  return (
    <View style={styles.containerView}>
      <StatusBar hidden={false} />
      <View style={styles.topView}>
        <Text style={styles.appTitle}>React CoinApi</Text>
      </View>
      <SafeAreaView style={styles.safeAreaCards}>
        <ScrollView contentContainerStyle={styles.contentContainerCards} style={styles.containerCards}>
          {dataImported}
          {/* <Card title="un Título" vol="10101010" opDay="10123421"></Card> */}
        </ScrollView>
      </SafeAreaView>
      
      <View style={styles.buttonReloadContainer}>
        <Button 
          style={styles.buttonReload}
          onPress={importData}
          title="Reload"
          color="#664EFF"
          accessibilityLabel="Reload data"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#1F1B2E",
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView:{
    position:"absolute",
    top: "0%",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F1B2E",
    borderEndEndRadius: 10,
    borderEndStartRadius: 10
  },
  appTitle:{
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    color: "#664EFF",
    textShadowColor:"#664EFF",
    textShadowOffset: {width: 0, height:0},
    textShadowRadius: 15
  },
  safeAreaCards:{
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: "#2b214d",
    width: "90%",
    height: 600,
    borderRadius: 30,
  },
  containerCards:{
    width: "100%", 
    padding: 10
  },
  contentContainerCards:{
    alignItems: "center"
  },
  notFoundText:{
    color: "#eb1616",
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonReloadContainer:{
    position: "absolute",
    right: "5%",
    bottom: "0%",
    width:100,
    height:50,
    borderRadius: 10
  },
  buttonReload:{
    color: "black"
  }
});
