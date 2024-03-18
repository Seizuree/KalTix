/* eslint-disable react/display-name */
// ** React Imports
import { forwardRef } from 'react';

// ** Custom Component Import
import { TextField } from '@mui/material';

interface PickerProps {
  readonly label?: string
  readonly readOnly?: boolean
}

const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
  // ** Props
  const { label, readOnly } = props;

  return (
    <TextField
      {...props}
      inputRef={ref}
      label={label || ''}
      {...(readOnly && { inputProps: { readOnly: true } })} />
  );
});

export default PickersComponent;
