import './HistoryPage.css'

import React from 'react'

export default function HistoryPage() {
  return (
    <div className='parent-bg'>
      <table className='history-table'>
        <thead>
          <tr>
            <th>Date Prescribed</th>
            <th>Medication</th>
            <th>Strength</th>
            <th>Prescribing Dr</th>
            <th>Directions for Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01-01-2023</td>
            <td>Alprazolam</td>
            <td>1 mg</td>
            <td>Harpreet Singh</td>
            <td>1 Tablet everyday as needed</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

