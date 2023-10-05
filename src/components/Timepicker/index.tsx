import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function TimePickerValue({ onTimeChange }: { onTimeChange: (newTimeValue: string) => void }) {
  const initialTime = dayjs("2022-04-17T08:30").format("HH:mm");
  const [value, setValue] = React.useState<string>(initialTime);

  const handleTimeChange = (newValue: Dayjs | null) => {
    if (newValue) {
      const newTime = newValue.format("HH:mm");
      setValue(newTime);
      onTimeChange(newTime);
    } else {
      setValue("");
      onTimeChange("");
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker", "TimePicker"]}>
        <TimePicker label="Horário" value={dayjs(value, "HH:mm")} onChange={handleTimeChange} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
