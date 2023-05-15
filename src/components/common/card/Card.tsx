import React from 'react'
import './Card.css'
import defaultProfilePicture from '../../assets/images/default-profile-picture.png';

import AddIcon from '@mui/icons-material/Add';

export default function Card() {
    return (
        <div className='card-parent'>
            <div className="card-bg">
                <div className="card-body">
                    <img id='' src={defaultProfilePicture} alt="" />
                    <p>Doan Nguyen</p>

                    <button>
                        < AddIcon />
                        Add Med
                    </button>
                </div>
            </div>
        </div>
    )
}
