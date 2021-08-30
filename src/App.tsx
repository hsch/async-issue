import React from 'react';
import './App.css';
import {forEachSeries} from 'async';

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
            promise: async () => {
                return Promise.resolve();
            }
        };
        await forEachSeries([provider, provider], async (provider) => await provider.promise())
        this.setState({ready: true})
    }

    render() {
        const {ready} = this.state;
        return <div>{ready ? 'Ready!' : 'Waiting...'}</div>
    }
};
