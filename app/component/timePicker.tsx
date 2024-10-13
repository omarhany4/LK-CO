import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";

export default function ResponsiveDateTimePickers() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "DateTimePicker",
          "MobileDateTimePicker",
          "DesktopDateTimePicker",
          "StaticDateTimePicker",
        ]}
      >
        <DemoItem label="">
          <StaticDateTimePicker
            defaultValue={dayjs()}
            className="text-skin-primary"
            sx={{
              "& .MuiPickersDay-root.Mui-selected": {
                backgroundColor: "#ff7517",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ff7517",
                },
              },
              "& .MuiSvgIcon-root": {
                color: "#ff7517 !important", // This styles all icons
                "&:hover": {
                  color: "#ff7517 !important", // Ensure hover state matches
                },
              },
              "& .MuiTabs-root .Mui-selected": {
                borderBottom: "2px solid #ff7517", // Style the bottom border of the active icon
              },

              "& .MuiClockPointer-thumb": {
                backgroundColor: "#ff7517 !important",
                borderColor: "#ff7517 !important",
              },
              "& .MuiClock-pin": {
                backgroundColor: "#ff7517 !important",
              },
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
