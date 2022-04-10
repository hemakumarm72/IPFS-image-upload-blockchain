import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import './ImageDetail.css';
import toastr from 'toastr';
import { times } from 'lodash';
import { getImage, sharedImage } from '../../actions/imageActions';
import { ipfs } from '../../utils/ipfs';

class ImageDetail extends Component {
  // state = { count: 0 };

  state = {
    show: false,
    sendAddress: '',
    ipfsHash: '',
    title: '',
    description: '',
    tags: '',
  };

  componentDidMount() {
    this.props.getImage(this.props.match.params.index);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSharedImage = async (event) => {
    event.preventDefault();

    const {
      sendAddress, ipfsHash, title, description, tags,
    } = this.state;
    try {
      await this.props.sharedImage(
        sendAddress,
        ipfsHash,
        title,
        description,
        tags,

      );
      toastr.success(
        'Image uploaded.  It may take a while for MetaMask to respond, the transaction to be mined and the image to appear in the list.',
      );
    } catch (error) {
      toastr.error(error);
    }
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  // handleshow and handleclose there reactbootstrap
  handleShow = () => this.setState((prevState) => ({ show: !prevState.show }));

  handleClose = () => this.setState((prevState) => ({ show: !prevState.show }));
  // increment = () => this.setState((prevState) => ({ count: prevState.count + 1 }));

  // decrement = () => this.setState((prevState) => ({ count: prevState.count - 1 }));

  render() {
    const { show, sendAddress } = this.state;

    //  const { count } = this.state;
    const image = this.props.image ? this.props.image : {};

    const {
      ipfsHash,
      title,
      description,
      tags,
      uploadedOn,
      blockHash,
      blockNumber,
      transactionHash,
      transactionIndex,
      cumulativeGasUsed,
      gasUsed,
    } = image;

    this.state.ipfsHash = ipfsHash;
    this.state.title = title;
    this.state.description = description;
    this.state.tags = tags;

    return (

      <div className="container">
        <div className="alert alert-info mt-3" role="alert">
          Blockchain transaction information is
          {' '}
          <strong>not</strong>
          {' '}
          persisted.
          This information
          {' '}
          <i>may</i>
          {' '}
          be lost when you refresh the browser or
          login as another user.
        </div>
        <div className="mt-3 mb-3 group-box">

          <Link to="/">Go Back</Link>
          <div className="item--collection-toolbar-wrapper">

            {/* <button type="submit" className="btn btn-primary">
              Share
            </button> */}
            <Button variant="primary" onClick={this.handleShow}>
              Share
            </Button>

            <Modal show={show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Share Photos</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="sendAddress">
                    <Form.Label>wallet address</Form.Label>
                    <Form.Control
                      type="text"
                      ref={sendAddress}
                      onChange={this.handleChange}
                      placeholder="0x989.."
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="button" onClick={this.handleSharedImage}>
                  Send
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              {ipfsHash ? (
                <img
                  src={`https://ipfs.io/ipfs/${ipfsHash}`}
                  className="card-img-top"
                  alt={`${ipfsHash}`}
                />
              ) : (
                <img
                  src="https://api.fnkr.net/testimg/333x180/?text=IPFS"
                  className="card-img-top"
                  alt="NA"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Uploaded on
                    {' '}
                    {uploadedOn || 'N/A'}
                  </small>
                </p>
              </div>
            </div>
            <p className="lead">
              <a
                target="_blank"
                href={`https://ipfs.io/ipfs/${ipfsHash}`}
                className={`btn btn-primary btn-lg ${!ipfsHash && 'disabled'}`}
                role="button"
                rel="noreferrer"
              >
                View on IPFS
              </a>
            </p>
          </div>
          <div className="col-md-8">
            <h3>IPFS Hash</h3>
            <p>
              {ipfsHash ? (
                <a
                  target="_blank"
                  href={`https://ipfs.io/ipfs/${ipfsHash}`}
                  className="lead"
                  role="button"
                  rel="noreferrer"
                >
                  {ipfsHash}
                </a>
              ) : (
                'N/A'
              )}
            </p>
            <hr className="my-4" />
            <h3>Blockchain Details</h3>

            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Transaction Hash</th>
                    <td>{transactionHash || 'N/A'}</td>
                  </tr>
                  <tr>
                    <th scope="row">Transaction Index</th>
                    <td>
                      {transactionIndex || transactionIndex >= 0
                        ? transactionIndex
                        : 'N/A'}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Block Hash</th>
                    <td>
                      {blockHash || 'N/A'}
                      {' '}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Block Number</th>
                    <td>{blockNumber || 'N/A'}</td>
                  </tr>
                  <tr>
                    <th scope="row">Gas Used (wei)</th>
                    <td>{gasUsed || 'N/A'}</td>
                  </tr>
                  <tr>
                    <th scope="row">Cumulative Gas Used (wei)</th>
                    <td>{cumulativeGasUsed || 'N/A'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr className="my-4" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  image: state.image.image,
});

export default connect(mapStateToProps, { getImage, sharedImage })(ImageDetail);

/*

<dl className="row">
              <dt className="col-sm-4">Transaction Hash</dt>
              <dd className="col-sm-8">
                {transactionHash ? transactionHash : 'N/A'}
              </dd>
              <dt className="col-sm-4">Transaction Index</dt>
              <dd className="col-sm-8">
                {!Number.isNaN(transactionIndex) ? transactionIndex : 'N/A'}
              </dd>
              <dt className="col-sm-4">Block Hash</dt>
              <dd className="col-sm-8">{blockHash ? blockHash : 'N/A'}</dd>
              <dt className="col-sm-4">Block Number</dt>
              <dd className="col-sm-8">{blockNumber ? blockNumber : 'N/A'}</dd>
              <dt className="col-sm-4">Gas Used (wei)</dt>
              <dd className="col-sm-8">{gasUsed ? gasUsed : 'N/A'}</dd>
              <dt className="col-sm-4">Cumulative Gas Used (wei)</dt>
              <dd className="col-sm-8">
                {cumulativeGasUsed ? cumulativeGasUsed : 'N/A'}
              </dd>
            </dl>

            */
