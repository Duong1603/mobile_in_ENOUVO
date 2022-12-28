import React from 'react';
import {StyleSheet, View} from 'react-native';

const ExampleContext = React.createContext();
const ExampleUsecontext = () => {
  return (
    <ExampleContext.Provider value={{color: 'red'}}>
      <View className="App">
        <ChildComponent />
      </View>
    </ExampleContext.Provider>
  );
};

const ChildComponent = () => {
  const {color} = React.useContext(ExampleContext);

  return <p style={{color}}>This text is {color}</p>;
};

export default ExampleUsecontext;

const styles = StyleSheet.create({});
