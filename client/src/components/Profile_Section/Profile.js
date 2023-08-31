import React from "react";
import ProfileCSS from "./Profile.module.css";

const Profile = () => {
  return (
    <section id="profile">
      <div className={ProfileCSS.profile_section}>
        <div class="container">
          <h1>Create Your Co-Founder Profile</h1>
          <p className={ProfileCSS.p}>Welcome to your Co-Founder Connect profile! This is your opportunity to make a strong impression 
            during the matching process. Everything you share here will play a crucial role in finding your ideal 
            co-founder. Feel free to express yourself as much or as little as you'd like for each question. Keep in 
            mind that providing detailed information about yourself increases your chances of finding a compatible co-founder.</p>
          <form
            action="submit_profile.php"
            method="post"
            enctype="multipart/form-data"
          >
            <div class="profile-picture">
              <label for="profile-pic">Profile Picture</label>
              <input
                type="file"
                id="profile-pic"
                name="profile-pic"
                accept="image/*"
                required
              />
            </div>
            <div class="name-container">
              <div class="first-name">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required />
              </div>
              <div class="last-name">
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required />
              </div>
            </div>
            <div class="email">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="location">
              <label for="location">Location</label>
              <select id="location" name="location">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <div class="introduction">
              <label for="introduction">Introduction</label>
              <textarea
                id="introduction"
                name="introduction"
                rows="4"
              ></textarea>
            </div>
            <div class="video-resume">
              <label for="video-resume">Video Resume URL</label>
              <input type="url" id="video-resume" name="video-resume" />
            </div>
            <div class="accomplishments">
              <label for="accomplishments">Accomplishments</label>
              <textarea
                id="accomplishments"
                name="accomplishments"
                rows="4"
              ></textarea>
            </div>
            <div class="education">
              <label for="education">Education</label>
              <textarea
                id="education"
                name="education"
                rows="4"
              ></textarea>
            </div>
            <div class="work-experience">
              <label for="work-experience">Work Experience</label>
              <textarea
                id="work-experience"
                name="work-experience"
                rows="4"
              ></textarea>
            </div>
            <div class="gender">
              <label for="gender">Gender</label>
              <select id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="linkedin">
              <label for="url-linkedin">LinkedIn URL</label>
              <input
                type="url"
                id="url-linkedin"
                name="url-linkedin"
                pattern="https://.*"
                required
              />
            </div>
            <div class="social-media">
              <label for="instagram">Instagram URL</label>
              <input type="url" id="instagram" name="instagram" />
              <label for="twitter">Twitter URL</label>
              <input type="url" id="twitter" name="twitter" />
            </div>
            
            <div class="submit-button">
              <button type="submit">Create Profile</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
