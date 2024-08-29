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
        console.log("algo1")
        data.forEach(element => {
          console.log("algo2")
          cards.push(<Card title={element.exchange_id} vol={element.volume_1hrs_usd} opDay={element.volume_1day_usd}></Card>)
        });
      }else{
        cards.push(<Card title={data.exchange_id} vol={data.volume_1hrs_usd} opDay={data.volume_1day_usd}></Card>)
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
        </ScrollView>
      </SafeAreaView>
      
      <View style={styles.buttonReloadContainer}>
        <Button 
          style={styles.buttonReload}
          onPress={importData}
          title="Reload"
          color="#ffbe00"
          accessibilityLabel="Reload data"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#393939",
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
    backgroundColor: "#1c1c1c",
    borderEndEndRadius: 10,
    borderEndStartRadius: 10
  },
  appTitle:{
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  safeAreaCards:{
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: "#141414",
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
