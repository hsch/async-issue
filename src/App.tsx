import React from 'react';
import './App.css';
import {eachSeries} from 'async';

interface State {
    ready?: true
}

export default class App extends React.PureComponent<any, State> {
    
    state: State = {
    };
    
    async componentDidMount() {
        await eachSeries([1, 2], async () => console.info('Doing something...'));
        console.info('All done.');
        this.setState({ready: true})
    }

    render() {
        const {ready} = this.state;
        return <div>{ready ? 'Ready!' : 'Waiting...'}</div>
    }
};
