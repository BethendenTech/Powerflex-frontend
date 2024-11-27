import { SliderThumb, SliderValueLabelProps, Tooltip } from "@mui/material";
import React from "react";

export const ValueLabelComponent = (props: SliderValueLabelProps) => {
    const { children, value } = props;

    return (
        <Tooltip color="primary" enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}