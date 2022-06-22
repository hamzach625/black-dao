import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./claim.scss";
import { useWeb3React } from "@web3-react/core";
import useAuth from "../hooks/useAuth";

const Claim = () => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  const connectMetamask = () => {
    localStorage.setItem("connectorId", "injected");
    if (account) {
      logout();
    } else {
      login("injected");
    }
  };

  const close = () => {
    window.$("#exampleModal").modal("hide");
  };

  const openn = () => {
    window.$("#exampleModal").modal("show");
  };

  const trustWallet = async () => {
    localStorage.setItem("connectorId", "walletconnect");
    if (account) {
      logout();
    } else {
      login("walletconnect");
    }
  };
  return (
    <>
      <video id="myVideo" autoPlay muted play>
        <source src="\assets\BLK.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <section className="claim">
      <button class="btn button-header" data-toggle="modal" data-target="#exampleModal" type="button">
          {account?'Connected':' Connect Wallet'}  
             </button>
        <div className="container-fluid p-0">
          <Sidebar />
          <div className="row m-0">
            <div className="col-xl-6 col-12 m-auto p-0">
              <div className="box">
                <h5>You are eligible to claim the tokens</h5>
                <button className="claim">Claim Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="wallet-modal">
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-body p-0">
                  <div className="cross-icon">
                    <h3 class="modal-title text-center" id="exampleModalLabel">
                      Connect your Wallet
                    </h3>
                    <button
                      type="button"
                      class="close cross-img1"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <img
                          src="\assets\cross-icon.svg"
                          className="img-fluid "
                        />
                      </span>
                    </button>
                  </div>

                  <div className="button-modal1 d-flex">
                    <button  onClick={() => {
                    connectMetamask();
                    close();
                  }} className="modal-button">
                      <img
                        src="\assets\metamask-icon.svg"
                        className="img-fluid"
                      />
                      <h3 className=""> MetaMask</h3>
                      <p className="">Connect to your MetaMask wallet </p>
                    </button>
                    <button  onClick={() => {
                    trustWallet();
                    // close();
                  }} className="modal-button">
                      <img
                        src="\assets\walletconnect-icon.svg"
                        className="img-fluid"
                      />
                      <h3 className="">WalletConnect</h3>
                      <p className="">Connect to your MetaMask wallet </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Claim;
