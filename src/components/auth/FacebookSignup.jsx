import React, { useState, useEffect } from "react";
import axios from "axios";

const FacebookSignup = () => {
  const [status, setStatus] = useState("");

  const statusChangeCallback = (response) => {
    console.log("statusChangeCallback", response);
    if (response.status === "connected") {
      // User is logged into your webpage and Facebook.
      fetchUserData();
    } else {
      // User is not logged into your webpage or unable to tell.
      setStatus("Please log into this webpage.");
    }
  };

  const checkLoginState = () => {
    window.FB.getLoginStatus((response) => {
      statusChangeCallback(response);
    });
  };

  const fetchUserData = () => {
    window.FB.api("/me", (response) => {
      console.log("Successful login for:", response.name);
      // Handle sending data to the backend for user signup
      sendUserData(response);
    });
  };

  const sendUserData = (userData) => {
    // Send userData to your backend
    axios
      .post("http://localhost:8000/social_auth/facebook/", {
        auth_token: window.FB.getAccessToken(),
      })
      .then((response) => {
        console.log("Response from backend:", response.data);
        setStatus(`Thanks for signing up, ${userData.name}!`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus("An error occurred during signup.");
      });
  };

  const initializeFacebookSDK = () => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "YOUR_FACEBOOK_APP_ID",
        cookie: true,
        xfbml: true,
        version: "v12.0",
      });

      window.FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
      });
    };

    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  // Load Facebook SDK and render login button when component mounts
  useEffect(() => {
    initializeFacebookSDK();

    // Render the Facebook login button
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      // Ensure FB.XFBML.parse is called after the SDK is fully loaded
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "256363950903213",
          cookie: true,
          xfbml: true,
          version: "v12.0",
        });
        window.FB.XFBML.parse();
      };
    }
  }, []);

  return (
    <div>
      <div
        className="fb-login-button"
        data-scope="public_profile,email"
        data-onlogin="checkLoginState();"
      ></div>
      <h5>Login</h5>
      <div id="status">{status}</div>
    </div>
  );
};

export default FacebookSignup;
