import React, { useState } from "react";
import Calendar from "react-calendar";

interface Med {
  name: string;
  time: string;
}interface MedsListProps {
  myDate: Date;
}

const MedsList: React.FC<MedsListProps> = ({ myDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [meds, setMeds] = useState<Med[]>([
    {
      name: "Advil",
      time: "10:00 AM",
    },
    {
      name: "Tylenol",
      time: "12:00 PM",
    },
    {
      name: "Ibuprofen",
      time: "2:00 PM",
    },
  ]);

  const handleDateChange = (date: Date) => {
    setCurrentDate(date);
  };

  return (
    <div>
      <Calendar initialDate={currentDate} onSelectDate={handleDateChange} />
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