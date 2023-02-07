import { useParams } from "react-router-dom";
import { mates } from "../../data/mates";
import { Container, Col, Row, Card, Button} from "react-bootstrap";


const ItemDetail = () => {

    const {id} = useParams()

    const mateSelected = mates.find(mate => mate.id === id)
   
    return (
       <Container>
        <Row>
            <Col md>
            <Card className="item-detail">
                <Card.Img className="item-img" variant="top" src={mateSelected.imagen}  ></Card.Img>
            </Card>
            </Col>
            <Col md>
                <Card className="item-detail">
                <Card.Body >
                    <div>
                        <Card.Title className="item-title" >{mateSelected.nombre}</Card.Title>
                        <Card.Text className="item-cat" >{mateSelected.categorias} </Card.Text>
                        <Card.Text className="item-text" >{mateSelected.descripcion}</Card.Text>
                        <Card.Text className="card-price" >${mateSelected.precio}</Card.Text>
                        <Card.Text style={ {paddingBottom: "25px"}}>Código del producto: {mateSelected.id}</Card.Text>
                    </div>
                    <Button className="d-flex justify-content-between align-items-bottom" variant="primary">Agregar al carrito</Button>
                    </Card.Body>

                </Card>
            
            
            </Col>


        </Row>



       </Container>
    );

}


export { ItemDetail };