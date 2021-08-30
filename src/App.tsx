import React from 'react';
import './App.css';
import {eachSeries, forEachSeries} from 'async';

interface Props {
}

interface State {
    ready?: true
}

export default class App extends React.PureComponent<Props, State> {
    
    state: State = {
    };
    
    async componentDidMount() {
        const provider = {
            promise: async () => Promise.resolve()
        };
        await eachSeries([provider, provider], async (provider) => {
            console.info('Waiting on a promise!');
            await provider.promise();
            console.info('Done waiting!');
        });
        console.info('All promises done.');
        this.setState({ready: true})
    }

    render() {
        const {ready} = this.state;
        return <div>{ready ? 'Ready!' : 'Waiting...'}</div>
    }
};
