import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

class Transportation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      transp_exps: {
        car: null,
        car_ins: null,
        gas: null,
        pub_tran: null,
        car_other: null,
      }
    }
  }

  handleChange = (event) => {
  let {transp_exps} = this.state
  transp_exps[event.target.name] = event.target.value
  this.setState({transp_exps: transp_exps})
  }

  render(){
    return(
      <div>
        <h1>Transportation</h1>
            <Form>
                <FormGroup>
                    <Label for="car">Car Payment</Label>
                        <Input
                            id="car"
                            type="float"
                            name="car"
                            onChange={this.handleChange}
                            value={this.state.transp_exps.car}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="car_ins">Car Insurance</Label>
                        <Input
                            id="car_ins"
                            type="float"
                            name="car_ins"
                            onChange={this.handleChange}
                            value={this.state.transp_exps.car_ins}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="gas">Gas</Label>
                        <Input
                            id="gas"
                            type="float"
                            name="gas"
                            onChange={this.handleChange}
                            value={this.state.transp_exps.gas}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="pub_tran">Public Transportation</Label>
                        <Input
                            id="pub_tran"
                            type="float"
                            name="pub_tran"
                            onChange={this.handleChange}
                            value={this.state.transp_exps.pub_tran}
                            placeholder="$"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="car_other">Other Car Expenses</Label>
                        <Input
                            id="car_other"
                            type="float"
                            name="car_other"
                            onChange={this.handleChange}
                            value={this.state.transp_exps.car_other}
                            placeholder="$"
                        />
                </FormGroup>
            </Form>

            <Link to="/pages/home"
            className= "btn btn-primary">Back</Link>

            <Link to="/pages/other"
            className= "btn btn-primary">Next</Link>
      </div>
    )
  }
}

export default Transportation
