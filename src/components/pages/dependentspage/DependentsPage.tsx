import './DependentsPage.css'
import { Col, Container } from 'react-bootstrap'

import  defaultProfilePicture  from '../../assets/images/default-profile-picture.png'
import defaultMedCardFront from '../../assets/images/Med-card-template.webp'
import defaultMedCardBack from '../../assets/images/Med-card-two-template.jpg'
import CommonButton from '../../common/button/Button'
import { IconButton
} from '@mui/material'
import { AddCircle } from '@mui/icons-material'
import NewHistoryForm from '../historypage/HistoryPage'




export default function DependentsPage() {
  return (
    <div className='parent-bg'>
        < Container >
        < Col md={6}>
                        <div className="profile-area">
                
                        <div className="profile-picture-container">

                            <img id='profile-picture' src={defaultProfilePicture} alt="" />
                        
                        </div>
                        <div className="profile-info">

                            <h3 className='profileName'>Brandon Nguyen</h3>
                            <p className='profileDate'>01-01-1993</p>
                            <p className='profileAddressLine1'>4321 Eureka Ct,</p>
                            <p className='profileAddressLine2'>Stockton Ca, 95212.</p>
                            < CommonButton />

                        </div>
                        <img src={defaultMedCardFront} alt="" id="medCardFront" />
                        <img src={defaultMedCardBack} alt="" id="medCardBack" />
                        </div>
                        < div className='tables-area'>

                        <table id='allergies' className='my-tbl'>
                            <thead>
                                <tr>
                                    <th>Allergies</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>< IconButton >
                                        Input allergy here< AddCircle />
                                    </IconButton></td>
                                </tr>
                            </tbody>
                        </table>

                        <table id='Diagnosis' className='my-tbl'>
                            <thead>
                                <tr>
                                    <th>Diagnosis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>< IconButton >
                                <p>Input diagnosis here</p>< AddCircle />
                                    </IconButton></td>
                                </tr>
                            </tbody>
                        </table>

                        <table id='doctorContact' className='my-tbl'>
                            <thead>
                                <tr>
                                    <th>Doctor's Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Doctor's Name</td>
                                </tr>
                                <tr>
                                    <td>Mobile Number</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                </tr>
                                <tr>
                                    <td>Address Line 2</td>
                                </tr>
                                <tr>
                                    <td>Address Line 3</td>
                                </tr>
                            </tbody>
                        </table>

                        <table id='pharmacyHours' className='my-tbl'>
                            <thead>
                                <tr>
                                    <th>Pharmacy Hours & Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pharmacy Name</td>
                                </tr>
                                <tr>
                                    <td>Pharmacy Phone Number</td>
                                </tr>
                                <tr>
                                    <td>Address Line 1</td>
                                </tr>
                                <tr>
                                    <td>Address Line 2</td>
                                </tr>
                                <tr>
                                    <td>Pharmacy Hours of Operation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='active-meds-area'>
                        <table id='pharmacyHours' className='horizontal-tbl'>
                            <thead>
                                <tr>
                                    <th>Current Active Medications</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Medication name will appear here</th>
                                    <td>Directions for use</td>
                                    <td>Prescribing Doctor</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </Col>
                    
                    < NewHistoryForm />
                    
        </Container>
    </div>
  )
}
