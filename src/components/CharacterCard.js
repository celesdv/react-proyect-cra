import Card from "react-bootstrap/Card";

const CharacterCard = ({ name, status, species, type, gender, image }) => {
  return (
    <Card style={{ width: '12rem', margin: '1rem', height: '25rem'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Status: {status} - Specie: {species} - Type: {type} - Gender: {gender}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
