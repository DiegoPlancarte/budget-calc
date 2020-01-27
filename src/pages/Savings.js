import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

class Savings extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      savings: {
        emerg: null,
        invest: null,
        retire: null,
        sav_other: null,
      }
    }
  }

  handleChange = (event) => {
  let {savings} = this.state
  savings[event.target.name] = event.target.value
  this.setState({savings: savings})
  }

  render(){
    return(
      <div>
        <h1>Savings</h1>
            <Form>
                <FormGroup>
                    <Label for="emerg">Emergency Fund</Label>
                        <Input
                            id="emerg"
                            type="float"
                            name="emerg"
                            onChange={this.handleChange}
                            value={this.state.savings.emerg}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="invest">Investments</Label>
                        <Input
                            id="invest"
                            type="float"
                            name="invest"
                            onChange={this.handleChange}
                            value={this.state.savings.invest}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="retire">Retirement</Label>
                        <Input
                            id="retire"
                            type="float"
                            name="retire"
                            onChange={this.handleChange}
                            value={this.state.savings.retire}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="sav_other">Other Savings</Label>
                        <Input
                            id="sav_other"
                            type="float"
                            name="sav_other"
                            onChange={this.handleChange}
                            value={this.state.savings.sav_other}
                            placeholder="$"
                        />
                </FormGroup>
            </Form>

            <Link to="/pages/other"
            className= "btn btn-secondary">Back</Link>

      </div>
    )
  }
}

export default Savings
