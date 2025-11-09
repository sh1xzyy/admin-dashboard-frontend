import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const styles = {
  textFieldStyles: {
    width: "100%",
    "& .MuiPickersInputBase-root": {
      backgroundColor: "white",
      height: "44px",
      borderRadius: "30px",
      paddingRight: "8px",
      border: "1px solid rgba(29, 30, 33, 0.1)",
    },
    "& .MuiPickersOutlinedInput-root": {
      backgroundColor: "white",
      height: "44px",
      borderRadius: "30px",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "1.5",
      color: "#1d1e21",
      border: "1px solid rgba(29, 30, 33, 0.1)",
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "white",
      height: "44px",
      borderRadius: "30px",
      paddingRight: "8px",
      border: "1px solid rgba(29, 30, 33, 0.1)",
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
    "& .MuiIconButton-root": {
      marginRight: "0px",
      padding: "8px",
    },
    "& .MuiInputBase-input": {
      padding: "10px 16px",
      fontSize: "12px",
      color: "#1d1e21",
      fontWeight: "400",
      lineHeight: "1.5",
    },
    "& .MuiInputAdornment-root": {
      marginLeft: "0px",
    },
    "& .MuiPickersTextField-root input": {
      "&::placeholder": {
        color: "rgba(29, 30, 33, 0.4)",
        opacity: "1 !important",
      },
    },
    "& .MuiInputBase-input::placeholder": {
      color: "rgba(29, 30, 33, 0.4)",
      opacity: 1,
      fontWeight: "400",
      fontSize: "12px",
    },
    "& input::placeholder": {
      color: "rgba(29, 30, 33, 0.4)",
      opacity: 1,
      fontWeight: "400",
      fontSize: "12px",
    },
    "& .MuiSvgIcon-root": {
      color: "#4caf50",
      fontSize: "20px",
    },
  },
  errorText: {
    color: "#d32f2f",
    fontSize: "12px",
    marginTop: "4px",
    marginLeft: "14px",
  },
};

export default function CustomDatePicker({ value, onChange, error }) {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          onChange={onChange}
          format="MMMM DD, YYYY"
          slotProps={{
            textField: {
              placeholder: "Delivery date",
              sx: styles.textFieldStyles,
              InputProps: {
                placeholder: "Delivery date",
              },
            },
          }}
        />
      </LocalizationProvider>
      {error && <p style={styles.errorText}>{error}</p>}
    </div>
  );
}
