import React from "react";
import {FaRegCopy} from "./ReactICON/index";

const Withdraw = ( {setWithdrawPoolID, poolDetails}) => {
  const poolArray = poolDetails?.poolInfoArray ?? [];
  eturn (
    <div className="section" id="crypto">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-xl-6 offset-lg-3">
            <div className="section__title">
              <h2>Staking Rewards</h2>
              <p>Lorem ipsum gni iusto sit rerum ab voluptates!</p>
            </div>
          </div>
        </div>




        <div className="row">
          {
            poolArray.map((pool, index) => (
              <div key={index} className={`col-12 col-md-6 col-lg-4`}>
                <div className="node">
                  <h3 className={`node__title node__title--${index == 0 ? "orange": index === 1 ? "green" : index == 2 ? "blue" : "orange"}`} >
                    <b>{pool.amount}</b> {pool?.rewardToken.symbol}
                  </h3>
                  <span className="node__date">{pool?.lockDays}</span>
                  <span className="node__price">{""}<b>Reward:</b> {pool?.userReward} {pool?.rewardToken.symbol}</span>

                  <span className="node__line"><img src="img/dodgers/dots--line-orange.svg" alt="" /></span>

                  <ul className="node__list">
                    <li>
                      <b>{pool?.depositToken.symbol} &nbsp; &nbsp;</b>
                      {pool?.depositToken.address.slice(0, 15)}... <FaRegCopy />
                    </li>
                    <li>
                      <b>{pool?.rewardToken.symbol} &nbsp; &nbsp;</b>
                      {pool?.rewardToken.address.slice(0, 15)}... <FaRegCopy />
                    </li>
                    <li>
                      <b>Current APY: &nbsp; &nbsp;</b>
                      {pool?.apy}
                    </li>
                    <li>
                      <b>LR: &nbsp; &nbsp;</b>
                      {pool?.lastRewardAt} &nbsp; {pool?.rewardToken.symbol}
                    </li>
                  </ul>

                  <button className="node__btn" data-bs-target="#modal-apool" type="button" data-bs-toggle="modal" onClick={() => setWithdrawPoolID(index == 0 ? 0 : index == 1 ? 1 : index == 2 ? 2 : "")} >
                    Withdraw / Claim
                  </button>




                  {/* <div className="tab-content">
                    <div className={"tab-pane fade show active"} id={index == 0 ? "atab-1" : index == 1 ? "atab-3" : index == 2 ? "atab-5" : ""} role="tabpanel">
                      <div className="apool_content">
                        <span className="apool__value">
                          Deposited: {pool?.amount} {pool?.depositToken.symbol}
                        </span>
                        <span className="apool__value">Reward: {pool?.userReward}{pool?.depositToken.symbol}</span>
                      </div>
                    </div>
                    <div className="tab-pane fade" id={index == 0 ? "atab-2" : index == 1 ? "atab-4" : index == 2 ? "atab-6" : ""} role="tabpanel">
                      <div className="apool__content">
                        <span className="apool__value">
                          <b>{pool?.depositToken.symbol} &nbsp;</b>: {" "} {pool?.depositToken.address.slice(0, 15)}...{" "}
                          <FaRegCopy />
                        </span>

                        <span className="apool__value">
                          <b>Current APY &nbsp;</b>:{pool?.apy} %
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="apool__group">
                    <label htmlFor="pool1" className="apool__label">Total Deposited Amount</label>
                    <input type="text" style={{backgroundColor: "transparent",}} className="apool__input" placeholder={`${pool?.depositedToken} ${pool?.depositToken.symbol}`} disabled />
                  </div>
                  <button className="apool__btn" data-bs-target="#modal-apool" type="button" data-bs-toggle="modal" onClick={(()=> setPoolID(index == 0 ? 0 : index == 1 ? 1 : index == 2 ? 2 : ""), setSelectedPool(pool), setSelectedToken(pool))} >
                    Invest
                  </button>
                  <span className={`block-icon block-icon--${index == 0 ? "orange" : index == 1 ? "green" : index == 2 ? "blue" : "orange" }`}>
                    <MdOutlineAttachMoney  style={{color: "white", fontSize: "1.5rem",}}/>
                  </span>
                  <span className="screw screw--line-tr" /> */}
                </div>
              </div>
            )).slice(0, 3)}
        </div>


      </div>
    </div>
  )
};

export default Withdraw;
