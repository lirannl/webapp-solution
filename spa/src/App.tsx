import React from 'react';
import { Button, Container, Form, Card, Alert, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BFF from './bff/bff';
import './App.css';
import ResultCard from './components/resultsCard';

/**
 * @param result If the passed result is a string, treat it as an error, otherwise, the result should be a BFF response 
 * @returns A results alert/card/nothing (if the result is null)
 */
const ResultsField = ({ result }: { result: BFF | null | string }) => {
  if (typeof result === "string") return <Alert variant="warning">{result}</Alert>
  else if (result) return <ResultCard {...{ result }} />
  else return <React.Fragment />
}

function App() {
  const [result, setResult] = React.useState(null as BFF | null | string);
  const [loading, setLoading] = React.useState(false);
  return (
    <div className="App">
      <Container><Card body><form onSubmit={async event => {
        event.preventDefault();
        const handle = (event.target as unknown as { value: string }[])[0].value;
        setLoading(true);
        const res = await fetch(`http://localhost:8081/?handle=${handle}`);
        if (!res.ok) { setResult(`Communication with API has failed - ${res.statusText}`); return; }
        const body: BFF = { ...await res.json(), handle };
        setResult(body);
        setLoading(false);
      }}>
        <Form.Control />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </form></Card></Container>
      {loading ?
        <Container><ProgressBar animated now={100} /></Container> :
        <ResultsField {...{ result }} />}
    </div>
  );
}

export default App;
