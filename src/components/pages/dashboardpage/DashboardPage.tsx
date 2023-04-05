import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CommonButton from '../../common/button/Button'
import './DashboardPage.css'

export default function DashboardPage() {
    return (
        <div className='parent-bg'>
            < Container >
                < Row className='justify-content-md-center mt-5' >
                    < Col md={6}>
                        < CommonButton />
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
                        <table className='horizontal-tbl'>
                            <tr>
                                <th>table</th>
                                <td>content</td>
                                <td>content</td>
                            </tr>
                            <tr>
                                <th>table</th>
                                <td>content</td>
                                <td>content</td>
                            </tr>
                        </table>

                    </div>
                </Row>
            </Container>
        </div>
    );
}
