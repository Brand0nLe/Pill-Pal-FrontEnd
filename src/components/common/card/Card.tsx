import React, { useState } from 'react'
import './Card.css'
import defaultProfilePicture from '../../assets/images/default-profile-picture.png';

import AddIcon from '@mui/icons-material/Add';


interface CardProps {
    name: string;
}
export default function Card(props: CardProps) {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(
        () => localStorage.getItem('profilePicture') || defaultProfilePicture
      );
      
  const [hasProfilePicture, setHasProfilePicture] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);

      setProfilePictureUrl(imageUrl);
      setHasProfilePicture(true);
    }
  };
  const handleProfilePictureUpdate = () => {
    if (selectedFile) {
      
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        localStorage.setItem('profilePicture', reader.result as string);
        console.log('profilepicture changed!')
      };
    } else {
      localStorage.removeItem('profilePicture');
    }
  
    setSelectedFile(null);
    setHasProfilePicture(false);
  };
  
    return (
        <div className="card-parent">
            <div className="card-bg">
                <div className="card-body">
                    <img
                        id=""
                        src={profilePictureUrl || defaultProfilePicture}
                        alt=""
                    />
                    <input
                        accept="image/png, image/jpeg"
                        type="file"
                        name="profilePicture"
                        id=""
                        onChange={handleFileChange}
                    />
                    <p>{props.name}</p>
                    <button onClick={handleProfilePictureUpdate}>
                        <AddIcon />
                        Add Med
                    </button>
                </div>
            </div>
        </div>
    )
}
