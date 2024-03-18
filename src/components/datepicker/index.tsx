/* eslint-disable react/display-name */
// ** React Imports
import { useState } from 'react';
// ** MUI Imports
import type { ReactDatePickerProps } from 'react-datepicker';
import DatePicker from 'react-datepicker';

import Box from '@mui/material/Box';

// ** Third Party Imports

// ** Custom Component Imports
import CustomInput from '../pickers/PickersCustomInput';

// ** Types
import type { DateType } from './reactDatepickerTypes';

const DefaultDatePicker = ({
  popperPlacement
}: {
  readonly popperPlacement: ReactDatePickerProps['popperPlacement']
}) => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date());

  return (
    <Box className="demo-space-x" sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <DatePicker
          customInput={<CustomInput label="Basic" />}
          id="basic-input"
          placeholderText="Click to select a date"
          popperPlacement={popperPlacement}
          selected={date}
          onChange={(date: Date) => setDate(date)} />
      </div>

    </Box>
  );
};

export default DefaultDatePicker;
