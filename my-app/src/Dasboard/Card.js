import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';

const Cards = (props) => {
    return(
        <div className="container">
    <Row>
        <Col sm="3">
        <Card body>
        <CardTitle> Spesial Title Treatment</CardTitle>
        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</CardText>
        <Button>Go somewhere</Button>
        </Card>
        </Col>
        <Col sm="3">
        <Card body>
        <CardTitle> Spesial Title Treatment</CardTitle>
        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
 </CardText>
        <Button>Go somewhere</Button>
        </Card>
        </Col>
        <Col sm="3">
        <Card body>
        <CardTitle> Spesial Title Treatment</CardTitle>
        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</CardText>
        <Button>Go somewhere</Button>
        </Card>
        </Col>
        <Col sm="3">
        <Card body>
        <CardTitle> Spesial Title Treatment</CardTitle>
        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</CardText>
        <Button>Go somewhere</Button>
        </Card>
        </Col>
        </Row>
        </div>
    );
}

export default Cards;