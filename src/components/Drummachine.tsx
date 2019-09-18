import React, { Component } from 'react';
import { Sequencer } from 'react-nexusui';

export default class Drummachine extends Component {
    sequencer: any;
    ctx: AudioContext;
    isPlaying: Boolean = false;

    constructor(props: any) {
        super(props);
        // eslint-disable-next-line
        this.ctx = new AudioContext;
        this.state = {
            rows: 5,
            columns: 10
        };
        // This binding is necessary to make `this` work in the callback
        this.play = this.play.bind(this);
    }

    play() {
        if (this.isPlaying) {
            this.sequencer.stop()
        } else {
            this.sequencer.start(500)
        }
        this.isPlaying = !this.isPlaying
    }
    checkSound(v) {
            for (let i = 0; i < 5; i++) {
                if (v[i] === 1) {
                    //this.sound1.play()
                    console.log('hit!!')
                }
            }
    }
    render() {

        return (
            <div className="syren__container">
                <h1>Drum Machine</h1>
                <button onClick={this.play}>Play</button>
                <div id="sequencer">
                    <Sequencer
                        rows={5}
                        columns={10}
                        size={[400, 200]}
                        onStep={this.checkSound}
                        onReady={sequencer => (this.sequencer = sequencer)}
                    />                </div>
            </div>
        )
    }
}
