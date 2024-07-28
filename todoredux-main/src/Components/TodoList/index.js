import { Row, Col, Form, Button, InputGroup} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../Redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import {  todoListSelector } from '../../Redux/selector';

const TodoList = () => {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");

  const todoList = useSelector(todoListSelector);

  const handelAddButtonClick = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
    }));
    setTodoName("");
  };

  const handleOnChangeName = (e) => {
    setTodoName(e.target.value);
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
            <tr key={todo.id}>
                <td>{todo.name}</td>
            </tr>
        ))}
      </Col>
      <Col>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Add a new todo"
            value={todoName}
            onChange={handleOnChangeName}
          />
          <Button variant="primary" onClick={handelAddButtonClick}>
            Add
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default TodoList;
