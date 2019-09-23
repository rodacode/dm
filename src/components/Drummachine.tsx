import React, { Component } from 'react';
import { Sequencer } from 'react-nexusui';

// Set the model of the state we need so Typescript intellisense works
export interface State {
    rows: number;
    columns: number;
    isPlaying: Boolean;


}
export default class Drummachine extends Component<{}, State> {
    sequencer: any;
    ctx: AudioContext;

    constructor(props: any) {
        super(props);
        // eslint-disable-next-line
        this.ctx = new AudioContext;
        this.state = {
            rows: 5,
            columns: 8,
            isPlaying: false
        };
        // This binding is necessary to make `this` work in the callback
        this.play = this.play.bind(this);
        this.checkSound = this.checkSound.bind(this);
    }

    play() {
        console.log('Playing: ' + this.state.isPlaying)
        if (this.state.isPlaying === true) {
            this.sequencer.stop()
        } else {
            this.sequencer.start(500)
        }
        this.setState({ isPlaying: !this.state.isPlaying })
    }
    checkSound(v) {
            for (let i = 0; i < 5; i++) {
                if (v[i] === 1) {
                    //this.sound1.play()
                    console.log('hit number' + i)
                }
            }
    }
    render() {

        return (
            <div className="container">
                <h1>Drum Machine</h1>
                <button onClick={this.play}>Play</button>
                <div id="sequencer">
                    <Sequencer
                        rows={this.state.rows}
                        columns={this.state.columns}
                        size={[300, 100]}
                        onStep={this.checkSound}
                        onReady={sequencer => (this.sequencer = sequencer)}
                    />                </div>
            </div>
        )
    }
}
