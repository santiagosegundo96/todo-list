import React, { useState } from "react";

import { Card, CardContent, Container, Typography } from "@mui/material";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ITask } from "./core/interface";

export interface AddTask {
	addTask: (task: ITask) => void;
}

function App(): React.ReactElement {
	const [ taskList, setTaskList ] = useState<ITask[]>([]);

	const addTask = (task: ITask): void => {
		let copy: ITask[] = [...taskList];
		copy = [...copy, { id: taskList.length + 1, taskName: task.taskName, deadline: task.deadline }];
		setTaskList(copy);
	};

	return (
		<Container maxWidth="sm">
            <Card>
                <CardContent>
                    <Typography align="center" variant="h2">Task List</Typography>
                    <TaskForm addTask={addTask} />
                    <TaskList taskList={taskList} />
                </CardContent>
            </Card>
        </Container>
	);
}

export default App;
