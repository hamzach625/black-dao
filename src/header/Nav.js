import "./nav.scss";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import $ from "jquery";
// import { NavLink, Link } from "react-router-dom";
$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

function Nav() {
  const [stickyClass, setStickyClass] = useState(false);
  const opennav = () => {
    //   console.log("we have",stickyClass)
    if (stickyClass) {
      setStickyClass(false);
    } else {
      setStickyClass(true);
    }
  };
  console.log("we have", stickyClass);
  return (
    <>
      <section className="section-1">
        <div className="button_toggle">
          <button type="button" onClick={opennav}>
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-12 p-0 left_side">
              <div>
                <div
                  class={
                    stickyClass ? "wrapper mobileview" : "wrapper kdjdkjfdk"
                  }
                >
                  <nav id="sidebar">
                    <div class="sidebar-header position-relative">
                      <img
                        src="\assets\newlogo.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <ul class="list-unstyled components">
                    <li>
                        <a
                          href="https://app.blk.finance/#/dashboard"
                          className="gg"
                        >
                          <img src="\assets\icons-light\dashboard-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6>Dashboard</h6>
                        </a>
                      </li>
                      {/* <li>
                        <a
                          href="https://app.blk.finance/#/bonds"
                          className="gg"
                        >
                          <img src="\assets\icons-light\bond-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6 style={{textDecoration : "underline"}}>Bond</h6>
                        </a>
                      </li> */}
                      {/* <li>
                        <a
                          href="https://app.blk.finance/#/stake"
                          className="gg"
                        >
                          <img src="\assets\icons-light\stake-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6>Stake</h6>
                        </a>
                      </li> */}
                      {/* <li>
                        <a
                          href="https://app.blk.finance/#/"
                          className="gg"
                        >
                          <img src="\assets\icons-light\give-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6 style={{textDecoration : "underline"}}>Give </h6> <span className="soon">Coming soon</span>
                        </a>
                      </li> */}
                       {/* <Link to="/claim">
                      <li>
                        <a
                          href=""
                          className="gg"
                        >
                          <img src="\assets\claim.png" class="img-fluid icon claim-icon" alt="" />
                          <h6>Claim</h6>
                        </a>
                      </li>
                      </Link> */}
                      <Link to="/">
                      <li>
                        <a
                          href=""
                          className="gg"
                        >
                          <img src="\assets\icons-light\zap-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6>Mint</h6>
                        </a>
                      </li>
                      </Link>
                      {/* <li>
                        <a
                          href="https://app.blk.finance/#/"
                          className="gg"
                        >
                          <img src="\assets\icons-light\wrap-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6 style={{textDecoration : "underline"}}>Airdrop</h6><span className="soon">Coming soon</span>
                        </a>
                      </li> */}
                     
                      <hr style={{backgroundColor : "rgba(255, 255, 255, 0.12)"}}/>
                      {/* <li>
                        <a
                          href="https://tell.ie/theblackdao/lYZQQAX3KwSM"
                          target="_blank"
                          className="gg"
                        >
                          <img
                            src="\assets\vuesax\bold\vuesax\bold\profile-2user.svg"
                            class="img-fluid icon"
                            alt=""
                          />
                          <h6>About</h6>
                        </a>
                      </li> */}
                      <li>
                        <a
                          href="https://discord.com/invite/N9JHyZjqK9"
                          className="gg"
                        >
                          <img src="\assets\icons-light\forum-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6>Forum</h6>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://vote.blk.finance/#/theblackdao.eth"
                          className="gg"
                        >
                          <img src="\assets\icons-light\governance-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6>Governance</h6>
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://docs.blk.finance/"
                          target="_blank"
                          className="gg"
                        >
                          <img
                            src="\assets\icons-light\docs-light.svg"
                            class="img-fluid icon"
                            alt=""
                          />
                          <h6>Docs</h6>
                        </a>
                      </li>
                      <li>
                      {/* <button class="btn button-connect-sidebar d-none" data-toggle="modal" data-target="#exampleModal" type="button">
             Connect Wallet
             </button> */}
                      </li>
                    </ul>
                    
                    <div className="sidebar-footer">
                      <div class="list-unstyled CTAs">
                        <a
                          href="https://discord.com/invite/N9JHyZjqK9"
                          target="_blank"
                        >
                          <i class="fab fa-github"></i>
                        </a>
                        <a
                          href="https://twitter.com/theblackdao"
                          target="_blank"
                        >
                         <i class="fab fa-medium"></i>
                        </a>
                        <a
                          href="https://mirror.xyz/theblackdao.eth"
                          target="_blank"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          href="https://github.com/The-Black-DAO"
                          target="_blank"
                        >
                         <i class="fab fa-discord"></i>
                        </a>
                      </div>
                    </div>
                  </nav>
                  <div id="content">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                      <div class="container-fluid">
                        <button
                          type="button"
                          id="sidebarCollapse"
                          class="btn btn-info"
                        >
                          <i class="fas fa-align-left"></i>
                          <span>Toggle Sidebar</span>
                        </button>
                        <button
                          class="btn btn-dark d-inline-block d-lg-none ml-auto"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <i class="fas fa-align-justify"></i>
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-12 p-0 right_side">
              <div className="main">
                <nav>
                  {/* <div className="btn">
                    <button className="btn-1">
                      <img
                        src="\assets\vuesax\bold\vuesax\bold\wallet-3.svg"
                        class="img-fluid "
                        alt="img"
                      />{" "}
                      Connect Wallet
                    </button>
                  </div> */}
                </nav>
              </div>
              <div className="bg-img">
                <div className="row m-0">
                  <div className="col-xl-8 col-12 m-auto">
                    <div className="mint-11">
                      <nervous-minter>
                        contract-address="0x0b471580741c3360Ed14C7cf084C739efC7d5204"
                        quantity-options="1,2,3,4,5,6,7,8,9,10" network="1"
                      </nervous-minter>
                      <h4 className="heading-main">
                        Abstract Diaspora Club Overview{" "}
                      </h4>
                      <p className="para-main">
                        As our first NFT collection, we will focus on honoring
                        one of the most prominent and highest selling,
                        post-mortem, Black painters and artists of all time,
                        Jean Michael-Basquiat, in collaboration with Animation
                        artist, and musician HighWestHus. <br /> These
                        generative pieces will include elements inspired by his
                        signature style of abstract expressionism, while also
                        including attributes representing diversity and
                        inclusion. Effectively giving our platform an aesthetic
                        identity outside of our economic structure and mission,
                        while also providing initial liquidity to treasury and
                        LPs. <br />
                        Mint Price: 0.05 ETH
                        <br />
                        Editions: 10,000
                        <br />
                        Attributes: 200+
                        <br />
                        No Roadmap
                        <br />
                        No Whitelists No Private Sale
                        <br />
                        No Discord Grinding
                        <br />
                        Similar to popular art generating reserve currency
                        projects, such as Squid DAO and NOUNS, this collection
                        aims to bring a stream of revenue to our DAO???s treasury,
                        and support our commitment to funding Black and African
                        creatives. In addition, these tokens will act as a
                        non-inflationary tool and an effective alternative to
                        excessive rebasing tokenomics.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="upper_image">
                  <img
                    src="assets\images\down.svg"
                    class="img-fluid"
                    alt="img"
                  />
                </div>
                <div className="circle_image  dkmsmmkss">
                  <img
                    src="assets\images\circle.svg"
                    class="img-fluid dkmsmmks"
                    alt="img"
                  />
                </div>
                <div>
                  <h6>Mint Page</h6>
                </div>
                <div className="down_image">
                  <img
                    src="assets\images\upper.svg"
                    class="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
