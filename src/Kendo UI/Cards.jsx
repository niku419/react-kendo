import * as React from 'react';
import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout'

export default function Cards() {
  const [currentLayout, setCurrentLayout] = React.useState('k-card-deck');
  const handleOnChange = e => {
    setCurrentLayout(e.value);
  };

  return (
    <div className="pt-5" style={{overflow: "scroll"}}>
      <div className="row flex">
        {[0,1,2,3,4,5,6,7,8,9,10].map(() => (
          <Card className="col col-md-4 col-lg-3 col-sm-12 m-3">
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardTitle>Card Subtitle</CardTitle>
              <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
            </CardBody>
            <CardActions>
              <span className="k-button k-flat k-primary">Action 1</span>
              <span className="k-button k-flat k-primary">Action 2</span>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};