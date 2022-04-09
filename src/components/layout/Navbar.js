import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-white">Proof of Digital Existence</p>
                <p className="text-box">
                  how to ensure that the data sharing process is safe,
                  transparent, and fair? Therefore, we propose data
                  producing, data storing, and data sharing schemas.
                  In the data producing schema, we deploy a group signature
                  scheme for a group of reputable organizations
                  that provide the same type of service, an organization in the
                  group generates a valuable digital data from raw data sent from a
                  data owner and then issues a certificate
                  on the ciphertext of this digital data.
                  In the data storing schema, the data owner uploads his/her data to
                  the public Inter-Planetary
                  File System network and then stores the access address of the stored data and
                  the corresponding certificate on the blockchain ledger.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">For more information</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Ethereum"
                      className="text-white"
                    >
                      Ethereum
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Decentralized_application"
                      className="text-white"
                    >
                      Decentralized application
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Smart_contract"
                      className="text-white"
                    >
                      Smart Contracts
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ieeexplore.ieee.org/abstract/document/9499074"
                      className="text-white"
                    >
                      A Reliability Guaranteed Solution for Data Storing and Sharing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/hemakumarm72/IPFS-image-upload-blockchain"
                      className="text-white"
                    >
                      Github code and Full Review Application
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <strong>
                Blockchain-based Decentralized Storage System with IPFS
              </strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
