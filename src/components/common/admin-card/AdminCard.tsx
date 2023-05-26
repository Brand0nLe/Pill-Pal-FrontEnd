
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminCard.css';
import defaultProfilePicture from '../../assets/images/default-profile-picture.png';
import AddIcon from '@mui/icons-material/Add';


export default function AdminCard() {
  return (
    <div className="admin-card-parent">
        <div className="admin-card-bg">
        <div className="admin-card-body">
          <img id="" src={defaultProfilePicture} alt="" />
          <h1>Admin</h1>
        </div>
      </div>
    </div>
  )
}