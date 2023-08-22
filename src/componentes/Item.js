import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} alt={item.name} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Precio: ${item.price}
          <br />
          Descripción: {item.description}
        </Card.Text>
        <Button variant="primary">Ver detalles</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;