import {useMemo} from 'react';
import {Text, View} from 'react-native';
import {filterTodos} from './utils.js';

export default function TodoList({todos, theme, tab}) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <View className={theme}>
      <Text>
        Note: <code>filterTodos</code> is artificially slowed down!
      </Text>
      <View>
        {visibleTodos.map(todo => (
          <Text key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </Text>
        ))}
      </View>
    </View>
  );
}
