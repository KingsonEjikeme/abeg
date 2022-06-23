import { Grid } from "@mui/material";
import React from "react";
import "./SupportTab.css";
import DraftsIcon from "@mui/icons-material/Drafts";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Donation from "./../../assets/donation.png";
import Hand from "./../../assets/hand.png";
import Volunteer from "./../../assets/volunteer.png";

const SupportTab = () => {
  return (
    <div className="support-tab">
      <div className="support-tab-container">
          <div className="support-item">
            <div className="support-tab-icon" item xs={6}>
              <img src={Donation} alt="" className="support-icon" />
            </div>
            <div className="support-item-content">
              <div className="support-tab-title" container>
                Donate Books
              </div>
              <div className="support-tab-text" container>
                Donate your new or used books, give kids the resource they need
                for learning.
              </div>
            </div>
          </div>

          <div className="support-item">
            <div className="support-tab-icon" item xs={6}>
              <img src={Hand} alt="" className="support-icon" />
            </div>
            <div className="support-item-content">
              <div className="support-tab-title" container>
                Donate Funds
              </div>
              <div className="support-tab-text" container>
                Donate your new or used books, give kids the resource they need
                for learning.
              </div>
            </div>
          </div>

          <div className="support-item">
            <div className="support-tab-icon" item xs={6}>
              <img src={Volunteer} alt="" className="support-icon" />
            </div>
            <div className="support-item-content">
              <div className="support-tab-title" container>
                Volunteer
              </div>
              <div className="support-tab-text" container>
                Donate your new or used books, give kids the resource they need
                for learning.
              </div>
            </div>
          </div>
      </div>
      </div>
  );
};

export default SupportTab;
