import React from 'react';
import { Card, ListGroup, ListGroupItem, CardDeck, Container } from 'react-bootstrap';
import VCard from '../../../vcard';
import BFF from '../bff/bff';

const ContactCard = ({vcard}: {vcard: VCard}) => <React.Fragment>
    
</React.Fragment>

const ResultCard = ({ result }: { result: BFF }) => {
    return <Container><CardDeck>
        <Card>
            <Card.Header>Information</Card.Header>
            <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <ListGroup>
                    <ListGroupItem>Handle: {result.handle}</ListGroupItem>
                    <ListGroupItem>Start Address: {result.startAddress}</ListGroupItem>
                    <ListGroupItem>End Address: {result.endAddress}</ListGroupItem>
                    <ListGroupItem>Country: {result.country}</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>Contacts</Card.Header>
            
        </Card>
    </CardDeck></Container>
}

export default ResultCard;