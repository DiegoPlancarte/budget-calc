import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      house_exps: {
        mortgage: null,
        rent: null,
        hm_ins: null,
        utilities: null,
        phone: null,
        internet: null,
        hm_other: null,
      }
    }
  }

  handleChange = (event) => {
  let {house_exps} = this.state
  house_exps[event.target.name] = event.target.value
  this.setState({house_exps: house_exps})
  }

  render(){
    return(
      <div>
        <h1>Home</h1>
            <Form>
                <FormGroup>
                    <Label for="mortgage">Mortgage</Label>
                        <Input
                            id="mortgage"
                            type="float"
                            name="mortgage"
                            onChange={this.handleChange}
                            value={this.state.house_exps.mortgage}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="rent">Rent</Label>
                        <Input
                            id="rent"
                            type="float"
                            name="rent"
                            onChange={this.handleChange}
                            value={this.state.house_exps.rent}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="hm_ins">Home Insurance</Label>
                        <Input
                            id="hm_ins"
                            type="float"
                            name="hm_ins"
                            onChange={this.handleChange}
                            value={this.state.house_exps.hm_ins}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="utilities">Utilities</Label>
                        <Input
                            id="utilities"
                            type="float"
                            name="utilities"
                            onChange={this.handleChange}
                            value={this.state.house_exps.utilities}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone</Label>
                        <Input
                            id="phone"
                            type="float"
                            name="phone"
                            onChange={this.handleChange}
                            value={this.state.house_exps.phone}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="internet">Internet</Label>
                        <Input
                            id="internet"
                            type="float"
                            name="internet"
                            onChange={this.handleChange}
                            value={this.state.house_exps.internet}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="hm_other">Other</Label>
                        <Input
                            id="hm_other"
                            type="float"
                            name="hm_other"
                            onChange={this.handleChange}
                            value={this.state.house_exps.hm_other}
                            placeholder="$"
                        />
                </FormGroup>
            </Form>

            <Link to="/pages/income"
            className= "btn btn-secondary">Back</Link>{' '}

            <Link to="/pages/transportation"
            className= "btn btn-secondary">Next</Link>
      </div>
    )
  }
}

export default Home
