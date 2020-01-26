import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar, NavItem, ButtonGroup, Button, Container, Row, Col } from 'reactstrap'

import Income from './pages/Income'
import Home from './pages/Home'
import Transportation from './pages/Transportation'
import Other from './pages/Other'
import Savings from './pages/Savings'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        income: {
          monthly: null,
          other: null,
        },
        house_exps: {
          mortgage: null,
          rent: null,
          hm_ins: null,
          utilities: null,
          phone: null,
          internet: null,
          hm_other: null,
        },
        transp_exps: {
          car: null,
          car_ins: null,
          gas: null,
          pub_tran: null,
          car_other: null,
        },
        other_exps: {
          food: null,
          clothes: null,
          entertainment: null,
          other: null,
        },
        savings: {
          emerg: null,
          invest: null,
          retire: null,
          sav_other: null,
        }
    }
  }
  render(){
    return (
      <div>
        <Router>
          <Navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
          </Navbar>

        <Container>
          <Row>
            <Col sm="4">
              <ButtonGroup vertical>
                <Button>
                  <Link to="/pages/income">Income</Link>
                </Button>
                <Button>
                  <Link to="/pages/home">Home</Link>
                </Button>
                <Button>
                  <Link to="/pages/transportation">Transportation</Link>
                </Button>
                <Button>
                  <Link to="/pages/other">Other Expenses</Link>
                </Button>
                <Button>
                  <Link to="/pages/savings">Savings</Link>
                </Button>
              </ButtonGroup>
            </Col>

          <Col sm="8">
            <Switch>
              <Route
                exact path="/pages/income"
                render={(props) =>
                <Income income={ this.state.income } /> }/>
              <Route
                exact path="/pages/home"
                render={(props) =>
                <Home house_exps={ this.state.house_exps } /> }/>
              <Route
                exact path="/pages/transportation"
                render={(props) =>
                <Transportation transp_exps={ this.state.transp_exps } /> }/>
              <Route
                exact path="/pages/other"
                render={(props) =>
                <Other other_exps={ this.state.other_exps } /> }/>
              <Route
                exact path="/pages/savings"
                render={(props) =>
                <Savings savings={ this.state.savings } /> }/>
            </Switch>
            </Col>
          </Row>
        </Container>

        </Router>
      </div>
    )
  }
}

export default App;
