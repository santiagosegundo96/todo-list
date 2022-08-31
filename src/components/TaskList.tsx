import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { List } from "@mui/material";
import { ITask } from "../core/interface";

export default function TaskList(props: {taskList: ITask[]}): React.ReactElement {
    return (
        <List>
            {props.taskList.map(task => {
                return (
                    <ListItem key={task.id}>
                        <ListItemText primary={task.taskName} />
                    </ListItem>
                );
            })}
        </List>
	);
}