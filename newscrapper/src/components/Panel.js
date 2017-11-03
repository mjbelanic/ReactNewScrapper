import React from "react";
import {Panel} from "react-bootstrap";


  const PanelsInstance = props => (
    <div> 
      <Panel header={props.heading} bsStyle="primary">
      {props.children}
      </Panel>
    </div> 
  );
// change to class to store state of modal to show 
// or hide. Place modal with buttons with triggers
// inside ???? => Profit



export default PanelsInstance;