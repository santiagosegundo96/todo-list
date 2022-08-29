import React from 'react';
import { Box } from "@mui/material";
import { VisualComponent } from '../core/interfaces';

export default function TaskList(props: VisualComponent): React.ReactElement {
    const {width, height} = props;
    
    return (
        <Box sx={{ height: height ?? "100%", width: width ?? "100%" }}>
            <div>Task List</div>
        </Box>
    );
}