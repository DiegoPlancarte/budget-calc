import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

class Income extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      income: {
        monthly: null,
        other: null,
      }
    }
  }

  handleChange = (event) => {
  let {income} = this.state
  income[event.target.name] = event.target.value
  this.setState({income: income})
  }

  handleIncome = () =>{
    this.props.income(this.state.form)
    this.setState({income: income})
  }

  render(){
    return(
      <div>
        <h1>Income</h1>
            <Form>
                <FormGroup>
                    <Label for="name">Monthly</Label>
                        <Input
                            id="monthly"
                            type="number"
                            name="monthly"
                            onChange={this.handleChange}
                            value={this.state.income.monthly}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="age">Other</Label>
                        <Input
                            id="other"
                            type="float"
                            name="other"
                            onChange={this.handleChange}
                            value={this.state.income.other}
                            placeholder="$"
                        />
                </FormGroup>
            </Form>
            <Link to="/pages/home" className="btn btn-secondary">Next</Link>
      </div>
    )
  }
}

export default Income
