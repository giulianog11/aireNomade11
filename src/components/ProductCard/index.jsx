import {Card, Button} from "react-bootstrap"

const ProductCard = ({nombre, descripcion, precio, id, imagen, onClick, onAdd, categorias} ) => {

    console.log( imagen)
    return(
        <Card className="card-product" onClick={onClick}>
        <Card.Img variant="top" style={{width: "100%"}} src={imagen} />
        <Card.Body>
          <div>
              <Card.Title className="card-title" >{nombre}</Card.Title>
              <Card.Text>{categorias} </Card.Text>
              {/* <Card.Text style={{height: "70px"} } >{descripcion}</Card.Text> */}
              <Card.Text className="card-price" >${precio}</Card.Text>
              {/* <Card.Text style={ {paddingBottom: "25px"} } >Código del producto: {id}</Card.Text> */}
            </div>
          <Button className="card-button" variant="primary" onClick={(e) => onAdd(e, id)} >Agregar al carrito</Button>
        </Card.Body>
      </Card>
    )

}

export {ProductCard};