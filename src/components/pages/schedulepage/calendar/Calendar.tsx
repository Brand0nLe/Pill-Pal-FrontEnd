// import * as React from 'react';
// import { LocalizationProvider, StaticDatePicker } from '@mui/lab';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import DayjsAdapter from '@mui/lab/AdapterDayjs';
// import { TextField, TextFieldProps } from '@mui/material';
// import dayjs from 'dayjs';

// interface CalendarProps {
//   selectedDate: dayjs.Dayjs;
//   handleDateChange: (date: dayjs.Dayjs | null) => void;
// }

// const Calendar: React.FC<CalendarProps> = ({ selectedDate, handleDateChange }) => {
//   return (
//     <LocalizationProvider dateAdapter={DayjsAdapter}>
//       <StaticDatePicker
//         displayStaticWrapperAs="desktop"
//         label="Select a date"
//         value={selectedDate}
//         onChange={(newValue: dayjs.Dayjs | null) => {
//           handleDateChange(newValue);
//         }}
//         renderInput={(params: TextFieldProps) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// };

// export default Calendar;



import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function FirstComponent() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
  );
}