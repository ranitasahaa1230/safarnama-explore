import React from "react";
import {
  feed3,
  feed2,
  feed5,
  feed6,
//   feed7,
  profile1,
  profile13,
  profile3,
  profile4,
  profile5,
  profile6,
  profile7,
  profile8,
  profile9,
  profile10,
  profile11,
  profile12,
  profile14,
  profile15,
} from "../../assets";
import "./MiddleGrid.css";

export const MiddleGrid = () => {
  return (
    <div className="middle">
      <form action="" className="create-post">
        <div className="profile-photo">
          <img src={profile1} alt="profile-pic"/>
        </div>
        <input
          type="text"
          placeholder="What's on your mind,Diana?"
          id="create-post"
        />
        <input type="submit" value="Post" className="btn btn-primary" />
      </form>

      <div className="feeds">
        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-photo">
                <img src={profile13} alt="profile-pic"/>
              </div>
              <div className="ingo">
                <h3>Lana Rose</h3>
                <small>California, 15 MINUTES AGO</small>
              </div>
            </div>
            <span className="edit">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </div>
          <div className="photo">
            <img src={feed2} alt="profile-pic"/>
          </div>

          <div className="action-button">
            <div className="interaction-buttons">
              <span>
                <i className="uil uil-heart"></i>
              </span>
              <span>
                <i className="uil uil-comment-dots"></i>
              </span>
              <span>
                <i className="uil uil-share-alt"></i>
              </span>
            </div>
            <div className="bookmark">
              <span>
                <i className="uil uil-bookmark-full"></i>
              </span>
            </div>
          </div>

          <div className="liked-by">
            <span>
              <img src={profile4} alt="profile-pic"/>
            </span>
            <span>
              <img src={profile3} alt="profile-pic"/>
            </span>
            <span>
              <img src={profile5} alt="profile-pic"/>
            </span>
            <p>
              Liked by <b>Ernest Bras</b> and <b>2,323 others</b>
            </p>
          </div>

          <div className="caption">
            <p>
              <b>Lana Rose</b>lorem ipsum dot sit mkllll mm.
              <span className="harsh-tag">#lifestyle</span>
            </p>
          </div>

          <div className="comments text-muted">View all 277 comments</div>
        </div>

        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-photo">
                <img src={profile6} alt="profile-pic"/>
              </div>
              <div className="ingo">
                <h3>Ria Singh</h3>
                <small>Dubai, 20 MINUTES AGO</small>
              </div>
            </div>
            <span className="edit">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </div>
          <div className="photo">
            <img src={feed3} alt="profile-pic" />
          </div>

          <div className="action-button">
            <div className="interaction-buttons">
              <span>
                <i className="uil uil-heart"></i>
              </span>
              <span>
                <i className="uil uil-comment-dots"></i>
              </span>
              <span>
                <i className="uil uil-share-alt"></i>
              </span>
            </div>
            <div className="bookmark">
              <span>
                <i className="uil uil-bookmark-full"></i>
              </span>
            </div>
          </div>

          <div className="liked-by">
            <span>
              <img src={profile6} alt="profile-pic"/>
            </span>
            <span>
              <img src={profile7} alt="profile-pic"/>
            </span>
            <span>
              <img src={profile8} alt="profile-pic"/>
            </span>
            <p>
              Liked by <b>Rohan Dubey</b> and <b>2,323 others</b>
            </p>
          </div>

          <div className="caption">
            <p>
              <b>Lana Rose</b>lorem ipsum dot sit mkllll mm.
              <span className="harsh-tag">#travel</span>
            </p>
          </div>

          <div className="comments text-muted">View all 277 comments</div>
        </div>

        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-photo">
                <img src={profile12} alt="profile-pic"/>
              </div>
              <div className="ingo">
                <h3>Cindrella Rose</h3>
                <small>Sikkim, 5 MINUTES AGO</small>
              </div>
            </div>
            <span className="edit">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </div>
          <div className="photo">
            <img src={feed5} alt="profile-pic"/>
          </div>

          <div className="action-button">
            <div className="interaction-buttons">
              <span>
                <i className="uil uil-heart"></i>
              </span>
              <span>
                <i className="uil uil-comment-dots"></i>
              </span>
              <span>
                <i className="uil uil-share-alt"></i>
              </span>
            </div>
            <div className="bookmark">
              <span>
                <i className="uil uil-bookmark-full"></i>
              </span>
            </div>
          </div>

          <div className="liked-by">
            <span>
              <img src={profile10} alt="profile-pic"/>
            </span>
            <span>
              <img src={profile11} alt="profile-pic"/>
            </span>
            <span>
              <img src={profile13} alt="profile-pic"/>
            </span>
            <p>
              Liked by <b>Kiara Singhania</b> and <b>233 others</b>
            </p>
          </div>

          <div className="caption">
            <p>
              <b>Lana Rose</b>lorem ipsum dot sit mkllll mm.
              <span className="harsh-tag">#travel</span>
            </p>
          </div>

          <div className="comments text-muted">View all 277 comments</div>
        </div>

        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-photo">
                <img src={profile10} alt="profile-pic"/>
              </div>
              <div className="ingo">
                <h3>Rosy Kiara</h3>
                <small>Argentina, 45 MINUTES AGO</small>
              </div>
            </div>
            <span className="edit">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </div>
          <div className="photo">
            <img src={feed6} alt="profile-pic" />
          </div>

          <div className="action-button">
            <div className="interaction-buttons">
              <span>
                <i className="uil uil-heart"></i>
              </span>
              <span>
                <i className="uil uil-comment-dots"></i>
              </span>
              <span>
                <i className="uil uil-share-alt"></i>
              </span>
            </div>
            <div className="bookmark">
              <span>
                <i className="uil uil-bookmark-full"></i>
              </span>
            </div>
          </div>

          <div className="liked-by">
            <span>
              <img src={profile9} alt="profile-pic"/>
            </span>
            <span>
              <img src={profile14} alt="profile-pic"/>
            </span>
            <span>
              <img src={profile15} alt="profile-pic"/>
            </span>
            <p>
              Liked by <b>Ernest Archieve</b> and <b>2,323 others</b>
            </p>
          </div>

          <div className="caption">
            <p>
              <b>Lana Rose</b>lorem ipsum dot sit mkllll mm.
              <span className="harsh-tag">#lifestyle</span>
            </p>
          </div>

          <div className="comments text-muted">View all 277 comments</div>
        </div>
      </div>
    </div>
  );
};
