import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButton({ label, onClick, textColor, size, fontColor, margin, width, padding}) {
  return (
    <Button onClick={onClick} style={{color:textColor, fontSize:size, backgroundColor:fontColor, marginTop:margin, width:width, padding:padding}}>
      {label}
    </Button>
  );
}