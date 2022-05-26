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
    <div class="right">
      <div class="follow">
        <div class="heading">
          <h4>Who To Follow</h4>
        </div>

        <div class="search-bar">
          <i class="uil uil-search"></i>
          <input
            type="search"
            placeholder="Enter username"
            id="message-search"
          />
        </div>

        <div class="follow-request">
          <div class="profile-photo">
            <img src={profile10} />
          </div>
          <div class="message-body">
            <h5>Ede Quitt</h5>
            <p class="text-muted">@edeQuitt45</p>
          </div>
          <button class="btn btn-follow">Follow</button>
        </div>

        <div class="follow-request">
          <div class="profile-photo">
            <img src={profile11} />
          </div>
          <div class="message-body">
            <h5>Rohan Dubey</h5>
            <p class="text-muted">@dubeyRoh</p>
          </div>
          <button class="btn btn-follow">Follow</button>
        </div>

        <div class="follow-request">
          <div class="profile-photo">
            <img src={profile3} />
          </div>
          <div class="message-body">
            <h5>Nidhi Vasa</h5>
            <p class="text-muted">@nidhivasaa</p>
          </div>
          <button class="btn btn-follow">Follow</button>
        </div>

        <div class="follow-request">
          <div class="profile-photo">
            <img src={profile1} />
          </div>
          <div class="message-body">
            <h5>Aryanii T</h5>
            <p class="text-muted">@aryantri123</p>
          </div>
          <button class="btn btn-follow">Follow</button>
        </div>

        <div class="follow-request">
          <div class="profile-photo">
            <img src={profile5} />
          </div>
          <div class="message-body">
            <h5>Ishita Verma</h5>
            <p class="text-muted">@Kishita</p>
          </div>
          <button class="btn btn-follow">Follow</button>
        </div>

        <div class="follow-request">
          <div class="profile-photo">
            <img src={profile6} />
          </div>
          <div class="message-body">
            <h5>Ria Singh</h5>
            <p class="text-muted">@riasinghh145</p>
          </div>
          <button class="btn btn-follow">Follow</button>
        </div>

        <div class="follow-request">
          <div class="profile-photo">
            <img src={profile9} />
          </div>
          <div class="message-body">
            <h5>Keshav Tarak</h5>
            <p class="text-muted">@keshavtarak</p>
          </div>
          <button class="btn btn-follow">Follow</button>
        </div>

        <div class="follow-request">
          <div class="profile-photo">
            <img src={profile7} />
          </div>
          <div class="message-body">
            <h5>Manoj S</h5>
            <p class="text-muted">@manojpaaji</p>
          </div>
          <button class="btn btn-follow">Follow</button>
        </div>
      </div>

      <div class="friend-requests">
        <h4>Requests</h4>
        <div class="request">
          <div class="info">
            <div class="profile-photo">
              <img src={profile6} />
            </div>

            <div>
              <h5>Ria Singh</h5>
              <p class="text-muted">8 mutual friends</p>
            </div>
          </div>

          <div class="action">
            <button class="btn btn-primary">Accept</button>
            <button class="btn">Decline</button>
          </div>

          <div class="info">
            <div class="profile-photo">
              <img src={profile8} />
            </div>

            <div>
              <h5>Rohan Singh</h5>
              <p class="text-muted">18 mutual friends</p>
            </div>
          </div>

          <div class="action">
            <button class="btn btn-primary">Accept</button>
            <button class="btn">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};
