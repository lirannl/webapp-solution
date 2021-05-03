import React, { Fragment } from 'react';
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
import VCard from '../../../vcard';
import BFF from '../bff/bff';
import { List, Horz } from '../components/list';

// Given a vcard, 
const ContactCard = ({ vcard, title }: { vcard: VCard, title: string }) => <Card.Body>
    <Card.Title>{title}</Card.Title>
    <List>
        <Row><Col>Email:</Col> <Col><a href={vcard.email[1]}>{vcard.email[1]}</a></Col></Row>
        <Row><Col>Address:</Col> <Col>{vcard.adr[0].label}</Col></Row>
        {vcard.tel ? <Row><Col>Telephone:</Col> <Col>{vcard.tel[1]}</Col></Row> : null}
    </List>
</Card.Body>

const ResultCard = ({ result }: { result: BFF }) => {
    return <Container><CardDeck>
        <Card>
            <Card.Header>Information</Card.Header>
            <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <List>
                    <Horz>
                        <Fragment>Handle:</Fragment>
                        <Fragment>{result.handle}</Fragment>
                    </Horz>
                    <Horz>
                        <Fragment>Start Address:</Fragment>
                        <Fragment>{result.startAddress}</Fragment>
                    </Horz>
                    <Horz>
                        <Fragment>End Address:</Fragment>
                        <Fragment>{result.endAddress}</Fragment>
                    </Horz>
                    {result.country ? <Horz>
                        <Fragment>Country:</Fragment>
                        <Fragment>{result.country}</Fragment>
                    </Horz> : null}
                </List>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>Contacts</Card.Header>
            <ContactCard title="Administrative and Technical contact" vcard={result.technicalContact} />
            <ContactCard title="Abuse contact" vcard={result.abuseContact} />
        </Card>
    </CardDeck></Container>
}

export default ResultCard;