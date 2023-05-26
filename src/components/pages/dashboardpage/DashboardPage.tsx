import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CommonButton from '../../common/button/Button';
import './DashboardPage.css';
import defaultProfilePicture from '../../assets/images/default-profile-picture.png';
import defaultMedCardFront from '../../assets/images/Med-card-template.png';
import defaultMedCardBack from '../../assets/images/Med-card-two-template.jpg';
import NavBar from '../../navbarheader/NavBarHeader';
import { createAccount, login, GetLoggedInUserData, GetLoggedInUserDataById, GetPublishedBlogItems, checkToken, loggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem } from '../../services/DataService';

export default function DashboardPage() {

    const [userId, setUserId] = useState(0)
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        profileName: 'Brandon Nguyen',
        profileDate: '1993-01-01',
        profileAddressLine1: '4321 Eureka Ct,',
        profileAddressLine2: 'Stockton Ca, 95212.'
    });

    useEffect(() => {
        const storedUserIdString: string | null = sessionStorage.getItem('UserId');
        if (storedUserIdString != null) {
            const storedUserIdInt = parseInt(storedUserIdString);
            setUserId(storedUserIdInt);
            console.log(userId);
        }
    }, []);

    useEffect(() => {
        const storedUserFname = sessionStorage.getItem('FirstName');
        const storedUserLname = sessionStorage.getItem('LastName');
        if (userId != 0) {
            GetLoggedInUserDataById(userId).then(result => {
                console.log(result);
            })
            if (storedUserFname !== null && storedUserLname !== null) {
                setProfileData({
                    profileName: (storedUserFname + " " + storedUserLname),
                    profileDate: '1993-01-01',
                    profileAddressLine1: profileData.profileAddressLine1,
                    profileAddressLine2: 'Stockton Ca, 95212.'
                })
            }
        }
    }, [userId])


    useEffect(() => {
        const savedProfileData = localStorage.getItem('profileData');
        if (savedProfileData) {
            setProfileData(JSON.parse(savedProfileData));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('profileData', JSON.stringify(profileData));
    }, [profileData]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProfileData((prevProfileData) => ({
            ...prevProfileData,
            [name]: value,
        }));
    };

    return (
        <div className='dashboard-parent'>
            <NavBar />
            <Container>
                <Row className='justify-content-lg-center mt-5 d-none d-lg-flex'>
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
                                    < button className='save-btn' onClick={handleSaveClick} >Save</button>
                                    {/* <CommonButton onClick={handleSaveClick}>Save</CommonButton> */}
                                </>
                            ) : (
                                <>
                                    <h3 className='profileName'>{profileData.profileName}</h3>
                                    <p className='profileDate'>{profileData.profileDate}</p>
                                    <p className='profileAddressLine1'>{profileData.profileAddressLine1}</p>
                                    <p className='profileAddressLine2'>{profileData.profileAddressLine2}</p>
                                    < button className='save-btn' onClick={handleEditClick} >Edit Profile</button>
                                </>
                            )}


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
                <Row className='d-lg-none justify-content-center mt-5'>
                    <Col xs={12} sm={10} md={8} className='d-flex flex-column'>
                        <button className='my-btn-2 mb-3' style={{ width: '100%' }}>Allergies/Diagnosis</button>
                        <button className='my-btn-2 mb-3' style={{ width: '100%' }}>Insurance</button>
                        <button className='my-btn-2 mb-3' style={{ width: '100%' }}>Doctors</button>
                        <button className='my-btn-2 mb-3' style={{ width: '100%' }}>Pharmacy</button>
                        <button className='my-btn-2' style={{ width: '100%' }}>Current Medications</button>
                    </Col>
                </Row>
            </Container>
            <div className='bottomspace'></div>
        </div>
    );
}