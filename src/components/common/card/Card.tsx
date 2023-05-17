import React from 'react'
import './Card.css'
import defaultProfilePicture from '../../assets/images/default-profile-picture.png';

import AddIcon from '@mui/icons-material/Add';

interface CardProps {
    name: string;
}
export default function Card(props: CardProps) {

    return (
        <div className='card-parent'>
            <div className="card-bg">
                <div className="card-body">
                    <img id='' src={defaultProfilePicture} alt="" />
                    <p>{props.name}</p>

                    <button>
                        < AddIcon />
                        Add Med
                    </button>
                </div>
            </div>
        </div>
    )
}
