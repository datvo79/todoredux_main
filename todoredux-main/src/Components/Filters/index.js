import { Row, Col, Form, FormControl} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchTodo} from '../../Redux/actions';

const Filters = () => {
  const dispatch = useDispatch();
  const handleOnChangeSearch = (e) => {
    dispatch(searchTodo(e.target.value));
  };

  return (
    <Row className="justify-content-center">
      <Col xs={12}>
        <Form.Group className="mb-3 mt-3">
          <Form.Label style={{ fontWeight: 'bold' }}>Search</Form.Label>
          <FormControl
            type="text"
            placeholder="input search text"
            onChange={handleOnChangeSearch}
          />
        </Form.Group>
      </Col>
    </Row>
  );
};

export default Filters;
