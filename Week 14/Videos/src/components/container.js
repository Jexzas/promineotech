import React from 'react';
import Counter from './counter';
import SecondContainer from './second-container';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {

            },
            highestCount: 0,
            highestCountName: ''
        };
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name) {
        this.setState(state => {
            state.counts[name]
                ? state.counts[name] += 1
                : state.counts[name] = 1;
            if (state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name;
            }
            return state;
        });
    }

    render() {
  
        return (
            <div className='container-fluid col-sm-3 text-center'>
                <h2>{this.state.highestCountName}</h2>
                <Counter name={'One'} count={this.state.counts.One} onClick={this.countClicks}/>
                <Counter name={'Two'} count={this.state.counts.Two} onClick={this.countClicks}/>
                <Counter name={'Three'} count={this.state.counts.Three} onClick={this.countClicks}/>
                {/* <SecondContainer/> */}
            </div>
            
        )
    }
}