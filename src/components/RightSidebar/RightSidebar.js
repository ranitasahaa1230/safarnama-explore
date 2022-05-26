import React from "react";
import {
  profile3,
  profile1,
  profile5,
  profile6,
  profile7,
  profile8,
  profile9,
  profile10,
  profile11,
} from "../../assets";
import "./RightSidebar.css";

export const RightSidebar = () => {
  return (
    <div className="right">
      <div className="follow">
        <div className="heading">
          <h4>Who To Follow</h4>
        </div>

        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input
            type="search"
            placeholder="Enter username"
            id="message-search"
          />
        </div>

        <div className="follow-request">
          <div className="profile-photo">
            <img src={profile10} alt="profile-pic"/>
          </div>
          <div className="message-body">
            <h5>Ede Quitt</h5>
            <p className="text-muted">@edeQuitt45</p>
          </div>
          <button className="btn btn-follow">Follow</button>
        </div>

        <div className="follow-request">
          <div className="profile-photo">
            <img src={profile11} alt="profile-pic"/>
          </div>
          <div className="message-body">
            <h5>Rohan Dubey</h5>
            <p className="text-muted">@dubeyRoh</p>
          </div>
          <button className="btn btn-follow">Follow</button>
        </div>

        <div className="follow-request">
          <div className="profile-photo">
            <img src={profile3} alt="profile-pic"/>
          </div>
          <div className="message-body">
            <h5>Nidhi Vasa</h5>
            <p className="text-muted">@nidhivasaa</p>
          </div>
          <button className="btn btn-follow">Follow</button>
        </div>

        <div className="follow-request">
          <div className="profile-photo">
            <img src={profile1} alt="profile-pic"/>
          </div>
          <div className="message-body">
            <h5>Aryanii T</h5>
            <p className="text-muted">@aryantri123</p>
          </div>
          <button className="btn btn-follow">Follow</button>
        </div>

        <div className="follow-request">
          <div className="profile-photo">
            <img src={profile5} alt="profile-pic"/>
          </div>
          <div className="message-body">
            <h5>Ishita Verma</h5>
            <p className="text-muted">@Kishita</p>
          </div>
          <button className="btn btn-follow">Follow</button>
        </div>

        <div className="follow-request">
          <div className="profile-photo">
            <img src={profile6} alt="profile-pic"/>
          </div>
          <div className="message-body">
            <h5>Ria Singh</h5>
            <p className="text-muted">@riasinghh145</p>
          </div>
          <button className="btn btn-follow">Follow</button>
        </div>

        <div className="follow-request">
          <div className="profile-photo">
            <img src={profile9} alt="profile-pic"/>
          </div>
          <div className="message-body">
            <h5>Keshav Tarak</h5>
            <p className="text-muted">@keshavtarak</p>
          </div>
          <button className="btn btn-follow">Follow</button>
        </div>

        <div className="follow-request">
          <div className="profile-photo">
            <img src={profile7} alt="profile-pic"/>
          </div>
          <div className="message-body">
            <h5>Manoj S</h5>
            <p className="text-muted">@manojpaaji</p>
          </div>
          <button className="btn btn-follow">Follow</button>
        </div>
      </div>

      <div className="friend-requests">
        <h4>Requests</h4>
        <div className="request">
          <div className="info">
            <div className="profile-photo">
              <img src={profile6} alt="profile-pic"/>
            </div>

            <div>
              <h5>Ria Singh</h5>
              <p className="text-muted">8 mutual friends</p>
            </div>
          </div>

          <div className="action">
            <button className="btn btn-primary">Accept</button>
            <button className="btn">Decline</button>
          </div>

          <div className="info">
            <div className="profile-photo">
              <img src={profile8} alt="profile-pic"/>
            </div>

            <div>
              <h5>Rohan Singh</h5>
              <p className="text-muted">18 mutual friends</p>
            </div>
          </div>

          <div className="action">
            <button className="btn btn-primary">Accept</button>
            <button className="btn">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};
