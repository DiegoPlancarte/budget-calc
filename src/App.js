import React from 'react';

class App extends React.Compontent {
  constructor(props){
    super(props)
    this.state = {
        income: {
          monthly: 0,
          other: 0,
        },
        house_exps: {
          mortgage: 0,
          rent: 0,
          hm_ins: 0,
          utilities: 0,
          phone: 0,
          internet: 0,
          hm_other: 0,
        },
        other_exps: {
          food: 0,
          clothes: 0,
          entertainment: 0,
          other: 0,
        },
        transp_exps: {
          car: 0,
          car_ins: 0,
          gas: 0,
          pub_tran: 0,
          car_other: 0,
        },
        savings: {
          emerg: 0,
          invest: 0,
          retire: 0,
          sav_other: 0,
        }
    }
  }
  render(){
    return (
      <div>
      </div>
    )
  }
}

export default App;
