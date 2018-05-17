import React from 'react'
import {Card, CardHeader, CardText, Checkbox} from 'material-ui';

class PolicyCard extends React.Component {
  render () {
    return <Card className="custom-card" style={{marginBottom: "20px"}} initiallyExpanded={true}>
      <CardHeader
        title={this.props.title}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <p>{this.props.explanation}</p>
        <Checkbox
          label={this.props.boxlabel}
          onCheck={this.props.onGranted}
          checked={this.props.granted}
        />
      </CardText>
    </Card>
  }
}

export default PolicyCard
