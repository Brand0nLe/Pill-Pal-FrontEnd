import React from "react";
import ReactCalendar from "react-calendar";
import '/Calendar.css';

interface CalendarProps {
  initialDate: Date;
}

const Calendar: React.FC<CalendarProps> = ({ initialDate }) => {
  return (
    <ReactCalendar
      value={initialDate}
      onChange={(date: Date) => {
        console.log("Date selected:", date);
      }}
    />
  );
};

export default Calendar;
