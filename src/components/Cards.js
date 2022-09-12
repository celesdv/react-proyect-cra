import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Cards = ({img, title, detail, id, link}) => {
    return (
        <Card className='card text-center m-5 border-dark' style={{ width: '18rem', height: '22rem' }}>
          <Card.Img variant="top" src={img} className='card-img-top' style={{ height: '50%' }} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            In this section you will be able to {detail}.
            </Card.Text>
            <Button variant="dark">
                <Link to={link} className="listNav">
                    Go to {title}
                </Link>
            </Button>
          </Card.Body>
        </Card>
      );
}

export default Cards;