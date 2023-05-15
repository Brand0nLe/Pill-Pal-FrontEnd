import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

interface CalendarProps {
  initialDate: Date;
}

const Calendar: React.FC<CalendarProps> = ({ initialDate }) => {
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && (date.getDay() === 0 || date.getDay() === 6)) {
      return <div className="weekend">{date.getDate()}</div>;
    }

    return <div>{date.getDate()}</div>;
  };

  return (
    <ReactCalendar
      value={initialDate}
      onChange={(date: Date) => {
        console.log("Date selected:", date);
      }}
      tileContent={tileContent}
    />
  );
};

export default Calendar;
