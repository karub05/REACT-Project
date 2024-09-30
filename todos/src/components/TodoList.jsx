/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";
export default function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        index;
        return (
          <TodoCard {...props} key={index} index={index}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
