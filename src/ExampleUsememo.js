import {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import TodoList from './component/TodoList';

const ExampleUsememo = () => {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  return (
    <View>
      <Button onClick={() => setTab('all')} title="All" />
      <Button onClick={() => setTab('active')} title="Active" />
      <Button onClick={() => setTab('completed')} title="Completed" />
      <View>
        <TextInput
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </View>
      <hr />
      <TodoList todos={TodoList} tab={tab} theme={isDark ? 'dark' : 'light'} />
    </View>
  );
};

export default ExampleUsememo;

const styles = StyleSheet.create({});
