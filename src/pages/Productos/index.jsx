import { useState } from "react";
import { ProductCard } from "../../components";
import {mates} from "../../data/mates";
import { Container, Col, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Productos = () => {

    const [productos, setProductos] = useState(mates)

    const navigate = useNavigate();

    const addItem = (event, id) => {
        event.stopPropagation();
        console.log(`Producto agregado al carro`)
    }
    
    return(
        <Container>
            <Row>
                {productos.map(({nombre, descripcion, precio, id, imagen, categorias} )  => {
                    return( 
                        <Col key={nombre} md={3} >
                            <ProductCard 
                                nombre={nombre} 
                                descripcion={descripcion} 
                                precio={precio} 
                                id={id} 
                                imagen={imagen}
                                categorias={categorias}
                                onClick={() => navigate(`/productos/${id}`)}
                                onAdd={addItem}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    )

    ;

}


export { Productos };