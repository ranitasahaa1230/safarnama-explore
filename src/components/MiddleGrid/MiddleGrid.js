import React from "react";
import {
  feed3,
  feed2,
  feed5,
  feed6,
  feed7,
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
    <div class="middle">
      <form action="" class="create-post">
        <div class="profile-photo">
          <img src={profile1} />
        </div>
        <input
          type="text"
          placeholder="What's on your mind,Diana?"
          id="create-post"
        />
        <input type="submit" value="Post" class="btn btn-primary" />
      </form>

      <div class="feeds">
        <div class="feed">
          <div class="head">
            <div class="user">
              <div class="profile-photo">
                <img src={profile13} />
              </div>
              <div class="ingo">
                <h3>Lana Rose</h3>
                <small>California, 15 MINUTES AGO</small>
              </div>
            </div>
            <span class="edit">
              <i class="uil uil-ellipsis-h"></i>
            </span>
          </div>
          <div class="photo">
            <img src={feed2} alt="" />
          </div>

          <div class="action-button">
            <div class="interaction-buttons">
              <span>
                <i class="uil uil-heart"></i>
              </span>
              <span>
                <i class="uil uil-comment-dots"></i>
              </span>
              <span>
                <i class="uil uil-share-alt"></i>
              </span>
            </div>
            <div class="bookmark">
              <span>
                <i class="uil uil-bookmark-full"></i>
              </span>
            </div>
          </div>

          <div class="liked-by">
            <span>
              <img src={profile4} />
            </span>
            <span>
              <img src={profile3} />
            </span>
            <span>
              <img src={profile5} />
            </span>
            <p>
              Liked by <b>Ernest Bras</b> and <b>2,323 others</b>
            </p>
          </div>

          <div class="caption">
            <p>
              <b>Lana Rose</b>lorem ipsum dot sit mkllll mm.
              <span class="harsh-tag">#lifestyle</span>
            </p>
          </div>

          <div class="comments text-muted">View all 277 comments</div>
        </div>

        <div class="feed">
          <div class="head">
            <div class="user">
              <div class="profile-photo">
                <img src={profile6} />
              </div>
              <div class="ingo">
                <h3>Ria Singh</h3>
                <small>Dubai, 20 MINUTES AGO</small>
              </div>
            </div>
            <span class="edit">
              <i class="uil uil-ellipsis-h"></i>
            </span>
          </div>
          <div class="photo">
            <img src={feed3} alt="" />
          </div>

          <div class="action-button">
            <div class="interaction-buttons">
              <span>
                <i class="uil uil-heart"></i>
              </span>
              <span>
                <i class="uil uil-comment-dots"></i>
              </span>
              <span>
                <i class="uil uil-share-alt"></i>
              </span>
            </div>
            <div class="bookmark">
              <span>
                <i class="uil uil-bookmark-full"></i>
              </span>
            </div>
          </div>

          <div class="liked-by">
            <span>
              <img src={profile6} />
            </span>
            <span>
              <img src={profile7} />
            </span>
            <span>
              <img src={profile8} />
            </span>
            <p>
              Liked by <b>Rohan Dubey</b> and <b>2,323 others</b>
            </p>
          </div>

          <div class="caption">
            <p>
              <b>Lana Rose</b>lorem ipsum dot sit mkllll mm.
              <span class="harsh-tag">#travel</span>
            </p>
          </div>

          <div class="comments text-muted">View all 277 comments</div>
        </div>

        <div class="feed">
          <div class="head">
            <div class="user">
              <div class="profile-photo">
                <img src={profile12} />
              </div>
              <div class="ingo">
                <h3>Cindrella Rose</h3>
                <small>Sikkim, 5 MINUTES AGO</small>
              </div>
            </div>
            <span class="edit">
              <i class="uil uil-ellipsis-h"></i>
            </span>
          </div>
          <div class="photo">
            <img src={feed5} alt="" />
          </div>

          <div class="action-button">
            <div class="interaction-buttons">
              <span>
                <i class="uil uil-heart"></i>
              </span>
              <span>
                <i class="uil uil-comment-dots"></i>
              </span>
              <span>
                <i class="uil uil-share-alt"></i>
              </span>
            </div>
            <div class="bookmark">
              <span>
                <i class="uil uil-bookmark-full"></i>
              </span>
            </div>
          </div>

          <div class="liked-by">
            <span>
              <img src={profile10} />
            </span>
            <span>
              <img src={profile11} />
            </span>
            <span>
              <img src={profile13} />
            </span>
            <p>
              Liked by <b>Kiara Singhania</b> and <b>233 others</b>
            </p>
          </div>

          <div class="caption">
            <p>
              <b>Lana Rose</b>lorem ipsum dot sit mkllll mm.
              <span class="harsh-tag">#travel</span>
            </p>
          </div>

          <div class="comments text-muted">View all 277 comments</div>
        </div>

        <div class="feed">
          <div class="head">
            <div class="user">
              <div class="profile-photo">
                <img src={profile10} />
              </div>
              <div class="ingo">
                <h3>Rosy Kiara</h3>
                <small>Argentina, 45 MINUTES AGO</small>
              </div>
            </div>
            <span class="edit">
              <i class="uil uil-ellipsis-h"></i>
            </span>
          </div>
          <div class="photo">
            <img src={feed6} alt="" />
          </div>

          <div class="action-button">
            <div class="interaction-buttons">
              <span>
                <i class="uil uil-heart"></i>
              </span>
              <span>
                <i class="uil uil-comment-dots"></i>
              </span>
              <span>
                <i class="uil uil-share-alt"></i>
              </span>
            </div>
            <div class="bookmark">
              <span>
                <i class="uil uil-bookmark-full"></i>
              </span>
            </div>
          </div>

          <div class="liked-by">
            <span>
              <img src={profile9} />
            </span>
            <span>
              <img src={profile14} />
            </span>
            <span>
              <img src={profile15} />
            </span>
            <p>
              Liked by <b>Ernest Archieve</b> and <b>2,323 others</b>
            </p>
          </div>

          <div class="caption">
            <p>
              <b>Lana Rose</b>lorem ipsum dot sit mkllll mm.
              <span class="harsh-tag">#lifestyle</span>
            </p>
          </div>

          <div class="comments text-muted">View all 277 comments</div>
        </div>
      </div>
    </div>
  );
};
