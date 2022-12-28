import {useCallback, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const ExampleUstate = () => {
  console.log('render');
  const [count, setCount] = useState(0);
  let prevCount;
  useEffect(
    prevCount => {
      console.log('useEffect');
      prevCount = count;
    },
    [count],
  );
  const handleClick = useCallback(() => setCount(count + 1), [count]);
  return (
    <View className="App">
      <Text>
        Now: {count}, before: {prevCount}
      </Text>
      <Button
        onClick={() => setCount(count + 1)}
        title="useEffect and useState"
      />

      <Button onClick={handleClick} title="useCallback" />
    </View>
  );
};

export default ExampleUstate;

const styles = StyleSheet.create({});
