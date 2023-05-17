
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CommonButton from '../../common/button/Button';
import './DashboardPage.css';
import defaultProfilePicture from '../../assets/images/default-profile-picture.png';
import defaultMedCardFront from '../../assets/images/Med-card-template.webp';
import defaultMedCardBack from '../../assets/images/Med-card-two-template.jpg';
import NavBar from '../../navbarheader/NavBarHeader';
import Footer from '../../footer/Footer';


export default function DashboardPage() {

    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        profileName: 'Brandon Nguyen',
        profileDate: '1993-01-01',
        profileAddressLine1: '4321 Eureka Ct,',
        profileAddressLine2: 'Stockton Ca, 95212.'
    });


    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProfileData({ ...profileData, [name]: value });
    };


    return (

        < div className='dashboard-parent'>

            <NavBar />

            <Container>

                < Row className='justify-content-md-center mt-5' >
                    < Col md={6}>
                        <div className="profile-area">

                            <div className="profile-picture-container">

                                <img id='profile-picture' src={defaultProfilePicture} alt="" />

                            </div>
                            <div className="profile-info">
                                {isEditing ? (
                                    <>
                                        <input
                                            type="text"
                                            name="profileName"
                                            value={profileData.profileName}
                                            onChange={handleInputChange}
                                        />
                                        <input
                                            type="date"
                                            name="profileDate"
                                            value={profileData.profileDate}
                                            onChange={handleInputChange}
                                        />
                                        <input
                                            type="text"
                                            name="profileAddressLine1"
                                            value={profileData.profileAddressLine1}
                                            onChange={handleInputChange}
                                        />
                                        <input
                                            type="text"
                                            name="profileAddressLine2"
                                            value={profileData.profileAddressLine2}
                                            onChange={handleInputChange}
                                        />
                                        < Button onClick={handleSaveClick} >Save</Button>
                                        {/* <CommonButton onClick={handleSaveClick}>Save</CommonButton> */}
                                    </>
                                ) : (
                                    <>
                                        <h3 className='profileName'>{profileData.profileName}</h3>
                                        <p className='profileDate'>{profileData.profileDate}</p>
                                        <p className='profileAddressLine1'>{profileData.profileAddressLine1}</p>
                                        <p className='profileAddressLine2'>{profileData.profileAddressLine2}</p>
                                        < Button onClick={handleEditClick} >Edit Profile</Button>
                                        {/* <CommonButton onClick={handleEditClick}>Edit</CommonButton> */}
                                    </>
                                )}


                            </div>
                            <img src={defaultMedCardFront} alt="" id="medCardFront" />
                            <img src={defaultMedCardBack} alt="" id="medCardBack" />
                        </div>
                    </Col>
                    < div className='tables-area'>

                        <table id='allergies' className='my-tbl'>
                            <thead>
                                <tr>
                                    <th>Allergies</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Peanuts</td>
                                </tr>
                                <tr>
                                    <td>Shellfish</td>
                                </tr>
                                <tr>
                                    <td>Dust mites</td>
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
                                    <td>Alzheimer's</td>
                                </tr>
                                <tr>
                                    <td>Diabetes Type 2</td>
                                </tr>
                                <tr>
                                    <td>Hypertension</td>
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
                                    <td>Harpreet Singh, M.D.</td>
                                </tr>
                                <tr>
                                    <td>(209) 954-3370</td>
                                </tr>
                                <tr>
                                    <td>Stockton Medical Plaza 1</td>
                                </tr>
                                <tr>
                                    <td>2505 West Hammer Lane</td>
                                </tr>
                                <tr>
                                    <td>Stockton, CA 95209</td>
                                </tr>
                            </tbody>
                        </table>

                        <table id='pharmacyHours' className='my-tbl'>
                            <thead>
                                <tr>
                                    <th>Pharmacy Hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CVS Pharmacy</td>
                                </tr>
                                <tr>
                                    <td>(209) 951-6544</td>
                                </tr>
                                <tr>
                                    <td>6632 Pacific Ave.</td>
                                </tr>
                                <tr>
                                    <td>Stockton, CA 95209</td>
                                </tr>
                                <tr>
                                    <td>Mon-Fri 8AM-8PM | Sat-Sun 10AM-6PM | Lunch 12:30-1PM every day </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='active-meds-area'>
                        <table id='pharmacyHours' className='horizontal-tbl'>
                            <thead>
                                <tr>
                                    <th>Current Active Meds</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Losartan 25 mg</th>
                                    <td>Take 1 tablet everyday.</td>
                                    <td>Harpreet Singh</td>
                                </tr>
                                <tr>
                                    <th>Alprazolam 1 mg</th>
                                    <td>Take 1 tablet daily as needed.</td>
                                    <td>Harpreet Singh</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Row>
            </Container>
            <Footer />

        </div>

    );
}