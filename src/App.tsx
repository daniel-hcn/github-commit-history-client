import axios from "axios";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import "./App.css";
import { CommitsAccordionList } from "./components/CommitsAccordion";

function App() {
  const [state, setState] = useState({
    repository: 'daniel-hcn/github-commit-history-server',
    branch: 'develop',
    btnDisabled: true,
  });
  const [branches, setBranches] = useState([]);
  const [commits, setCommits] = useState([]);

  const getBranches = async (): Promise<void> => {
    setState({ ...state, btnDisabled: false });
    const response = await axios.get(`github/repository/${encodeURIComponent(state.repository)}/branches`);
    setBranches(response.data);
  };

  const getCommits = async (): Promise<void> => {
    const response = await axios.get(`github/repository/${encodeURIComponent(state.repository)}/commits?branchName=${state.branch}`);
    setCommits(response.data);
  };

  const handleChange = (attrName: string, selectedOption: string) => {
    setState({ ...state, [attrName]: selectedOption });
  };

  return (
    <Container fluid className="p-5">
      <Row className="justify-content-md-center">
        <Col xs lg="7">
          <h1 className='header'>Github Commit History</h1>

          <Row className="p-2">
            <Col xs lg="7">
              <InputGroup>
                <Form.Select onChange={(e) => handleChange('repository', e.currentTarget.value)}>
                  <option value='daniel-hcn/github-commit-history-server'>daniel-hcn/github-commit-history-server</option>
                  <option value='daniel-hcn/github-commit-history-client'>daniel-hcn/github-commit-history-client</option>
                </Form.Select>
                <Button variant="primary" onClick={() => getBranches()}>Get Branches</Button>
              </InputGroup>
            </Col>
            <Col xs lg="5">
              <InputGroup>
                <Form.Select onChange={(e) => handleChange('branch', e.currentTarget.value)}>
                  {branches.map(({ name }, i) => (
                    <option key={i} value={name}>{name}</option>
                  ))}
                </Form.Select>
                <Button variant="secondary" onClick={() => getCommits()} disabled={state.btnDisabled}>Get Commits</Button>
              </InputGroup>
            </Col>
          </Row>

          <Row className="p-2">
            <CommitsAccordionList commits={commits}></CommitsAccordionList>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
