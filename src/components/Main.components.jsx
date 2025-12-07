import {
  Form,
  Button,
  InputGroup,
  Container,
  ListGroup,
} from "react-bootstrap";
import "../index.css";
import { useState } from "react";


const Main = () => {

	const [name,setNama] = useState("")
	const [hasilNama,setHasilNama] = useState("")

	const [namaOrang,setnamaOrang] = useState("")
	const [listOrang,setListOrang] = useState([])

  return (
    <Container>
      <InputGroup className="shadow mt-3">
        <Form.Control
          onChange={(e) => setNama(e.target.value)}
          type="text"
          placeholder="Name..."
        />
        <Button variant="danger" onClick={() => setHasilNama(name)}>
          SAVE
        </Button>
      </InputGroup>

      <h1 className="text-center mt-2">{hasilNama}</h1>
    
      <InputGroup className="shadow mt-3">
        <Form.Control value={null} onChange={(e) => setnamaOrang(e.target.value)} type="text" placeholder="Name..." />
        <Button onClick={() => setListOrang([namaOrang,...listOrang])} variant="success">SAVE</Button>
      </InputGroup>

      <ListGroup className="mt-2">
			{listOrang.map((value,i) => {
				return(
					<ListGroup.Item key={i}>{value}</ListGroup.Item>
				)
			})}
      </ListGroup>

    </Container>
  );

}

export default Main
