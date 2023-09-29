import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styled/Main.css";
import { Row, Col, Container} from "react-bootstrap";
import { Card } from "react-bootstrap";

function ImageGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotos(response.data.slice(0, 20)); // 20 photos for this...
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {photos.map((photo) => (
          <Col key={photo.id} xs={12} md={6} lg={3}>
            <Card key={photo.id} className="Card">
            <Card.Img variant="top" src={photo.thumbnailUrl} alt={photo.title} className="Image"/>
            <Card.Body className="Body">
              <Card.Title>{photo.title}</Card.Title>
            </Card.Body>
          </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ImageGallery;
