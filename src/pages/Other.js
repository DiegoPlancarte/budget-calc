import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

class Other extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      other_exps: {
        food: null,
        clothes: null,
        entertainment: null,
        other: null,
      }
    }
  }

  handleChange = (event) => {
  let {other_exps} = this.state
  other_exps[event.target.name] = event.target.value
  this.setState({other_exps: other_exps})
  }

  render(){
    return(
      <div>
        <h1>Other</h1>
            <Form>
                <FormGroup>
                    <Label for="food">Food</Label>
                        <Input
                            id="food"
                            type="float"
                            name="food"
                            onChange={this.handleChange}
                            value={this.state.other_exps.food}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="clothes">Clothes</Label>
                        <Input
                            id="clothes"
                            type="float"
                            name="clothes"
                            onChange={this.handleChange}
                            value={this.state.other_exps.clothes}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="entertainment">Entertainment</Label>
                        <Input
                            id="entertainment"
                            type="float"
                            name="entertainment"
                            onChange={this.handleChange}
                            value={this.state.other_exps.entertainment}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="other">Other</Label>
                        <Input
                            id="other"
                            type="float"
                            name="other"
                            onChange={this.handleChange}
                            value={this.state.other_exps.other}
                            placeholder="$"
                        />
                </FormGroup>
            </Form>

            <Link to="/pages/transportation"
            className= "btn btn-primary">Back</Link>

            <Link to="/pages/other"
            className= "btn btn-primary">Next</Link>
      </div>
    )
  }
}

export default Other
