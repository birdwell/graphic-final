import React, { Component } from 'react';
import PropTypes from 'prop-types';

import threeEntryPoint from './components/threeEntryPoint';
import tweets from './data/finals.json';

import './index.css';

export default class ThreeContainer extends Component {
    componentDidMount() {
        const config = {
            tweets,
            hashtag: 'finals',
            count: tweets.length
        };

        this.threeEntryPoint = threeEntryPoint(this.threeRootElement, config);
    }

    componentWillUnmount() {
        if (this.threeEntryPoint) {
            this.threeEntryPoint.cleanup();
        }
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }} ref={(element) => { this.threeRootElement = element; }} />
        );
    }
}
