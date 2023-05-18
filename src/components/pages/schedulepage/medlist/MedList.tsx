import React, { useState } from "react";
import Calendar from "react-calendar";

interface Med {
  name: string;
  time: string;
}
  
  interface MedsListProps {
    myDate: Date;
    onDateChange: (date: Date) => void;
  }
  
  const MedsList: React.FC<MedsListProps> = ({ myDate, onDateChange }) => {
    const [meds, setMeds] = useState<Med[]>([]);
  
    const handleDateChange = (date: Date) => {
      onDateChange(date);
    };
  
    return (
      <div>
          <Calendar
            value={myDate}
            onChange={handleDateChange}
            calendarType="US"
            locale="en-US"
            startWeekDay={0}
          />
          <ul>
            {meds.map((med: Med) => (
              <li key={med.name}>
                {med.name} - {med.time}
              </li>
            ))}
          </ul>
      </div>
    );
  };

export default MedsList;