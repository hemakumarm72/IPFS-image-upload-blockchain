import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { web3Connect } from '../../actions/web3Actions';
import Spinner from '../common/Spinner';
import Setup from './Setup';

class Main extends Component {
  componentDidMount() {
    this.props.web3Connect();
  }

  render() {
    const { loading, error } = this.props.web3;

    let renderItems;
    if (loading) {
      renderItems = <Spinner />;
    } else if (error) {
      renderItems = (
        <>
          <div className="alert alert-danger" role="alert">
            <p>Oops! An error ocurred.</p>
            <div>

              {error}

            </div>
          </div>
          <div>
            <Setup />
          </div>
        </>
      );
    } else {
      renderItems = this.props.children;
    }

    return (
      <main role="main">

        <title>IPFS Uploader</title>

        <div>{renderItems}</div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  web3: state.web3,
});

export default withRouter(connect(mapStateToProps, { web3Connect })(Main));
