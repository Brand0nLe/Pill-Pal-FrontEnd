import * as React from 'react';
import { LocalizationProvider, StaticDatePicker } from '@mui/lab';
import DayjsAdapter from '@mui/lab/AdapterDayjs';
import { TextField, TextFieldProps } from '@mui/material';
import dayjs from 'dayjs';

interface CalendarProps {
  selectedDate: dayjs.Dayjs;
  handleDateChange: (date: dayjs.Dayjs | null) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, handleDateChange }) => {
  return (
    <LocalizationProvider dateAdapter={DayjsAdapter}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        label="Select a date"
        value={selectedDate}
        onChange={(newValue: dayjs.Dayjs | null) => {
          handleDateChange(newValue);
        }}
        renderInput={(params: TextFieldProps) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
