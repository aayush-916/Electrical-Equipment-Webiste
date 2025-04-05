import React from 'react';
import "./App.css";
function Contact() {
  return (
    <>
      <div className="container">
        <div className="text">Contact us</div>
        <form>
          <div className="form-row">
            <div className="input-data">
              <input type="text" required />
              <div className="underline"></div>
              <label>First Name</label>
            </div>
            <div className="input-data">
              <input type="text" required />
              <div className="underline"></div>
              <label>Last Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="text" required />
              <div className="underline"></div>
              <label>Email Address</label>
            </div>
            
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea rows="8" cols="80" required></textarea>
              <br />
              <div className="underline"></div>
              <label>Write your message</label>
            </div>
          </div>
          <div className="form-row submit-btn">
            <div className="input-data">
              <div className="inner"></div>
              <input type="submit" value="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
