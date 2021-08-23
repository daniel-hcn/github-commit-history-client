import Accordion from 'react-bootstrap/Accordion'
import { FunctionComponent } from 'react';

interface CommitData {
  data: {
    author: string;
    date: string;
    message: string;
  }
};

const CommitsAccordionItemBody: FunctionComponent<CommitData> = ({data}) => {
  return (
    <Accordion.Body>
      <p>{`${data.author} - ${data.date}`}</p>
      <ul>
        {data.message.split('\n').map((message: any, i: number) => (
          <li key={i}>{message.replace('- ', '')}</li>
        ))}
      </ul>
    </Accordion.Body>
  );
}

function CommitsAccordionItem(props: any) {
  const message = props.data.message.split("\n\n");
  let body;
  if (message.length > 1) {
    body = <CommitsAccordionItemBody data={{...props.data, message: message[1]}}></CommitsAccordionItemBody>;
  }
  return (
    <Accordion.Item eventKey={props.index}>
      <Accordion.Header>{message[0]}</Accordion.Header>
      {body}
    </Accordion.Item>
  );
}

export function CommitsAccordionList(props: any) {
  return (
    <Accordion defaultActiveKey="0">
      {props.commits.map((data: any, i: number) => (
        <CommitsAccordionItem
          key={i}
          data={data}
          index={i}
        ></CommitsAccordionItem>
      ))}
    </Accordion>
  );
}
