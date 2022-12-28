import {useRef} from 'react';
import {Button, StyleSheet} from 'react-native';

const ExampleUseref = () => {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }
  return <Button onClick={handleClick} title="Click me!" />;
};

export default ExampleUseref;

const styles = StyleSheet.create({});
