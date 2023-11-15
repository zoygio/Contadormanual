import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  state = {
    valor: 0,
    Total_Usos: 0
  }
  
  incrementaValor = () => 
  {
    this.setState({
      valor: this.state.valor + 1,
      Total_Usos: this.state.Total_Usos + 1
    })
    console.log("Valor: "+(this.state.valor + 1))
  }
  
  decrementarValor = () => 
  {
    this.setState({
      valor: this.state.valor - 1,
      Total_Usos: this.state.Total_Usos + 1
    })
    console.log("Valor: "+(this.state.valor - 1))
  }

  render()
  {
  return(
    <View style={styles.container}>
      <Text style={{ fontSize: 60, marginBottom: -20}}>{this.state.valor}</Text>
       <Text style={{ fontSize: 12, padding: 20, color: 'grey'}}>{"Total Contado: " +this.state.Total_Usos}</Text>
       <StatusBar style="auto" />
       <View style={{flexDirection: 'row'}}>
       <Button onPress={this.decrementarValor} title="Decremento"/>
       <Text> </Text>
       <Button onPress={this.incrementaValor} title="Incremento"/>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
