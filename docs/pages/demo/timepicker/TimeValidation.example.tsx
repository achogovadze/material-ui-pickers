import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { TimePicker } from '@material-ui/pickers';

export default function TimeValidation() {
  const [selectedDate, handleDateChange] = React.useState<Date | null>(
    new Date('2020-01-01 12:00')
  );

  return (
    <React.Fragment>
      <TimePicker
        renderInput={(props) => <TextField {...props} />}
        value={selectedDate}
        onChange={(date) => handleDateChange(date)}
        minTime={new Date(0, 0, 0, 8)}
        maxTime={new Date(0, 0, 0, 18, 45)}
      />

      <TimePicker
        renderInput={(props) => <TextField {...props} />}
        ampm={false}
        label="24 hours"
        minTime={new Date(0, 0, 0, 8)}
        maxTime={new Date(0, 0, 0, 18, 45)}
        value={selectedDate}
        onChange={(date) => handleDateChange(date)}
      />

      <TimePicker
        renderInput={(props) => <TextField {...props} />}
        ampm={false}
        label="Disable odd hours"
        value={selectedDate}
        onChange={(date) => handleDateChange(date)}
        shouldDisableTime={(timeValue, clockType) => {
          if (clockType === 'hours' && timeValue % 2) {
            return true;
          }

          return false;
        }}
      />
    </React.Fragment>
  );
}
