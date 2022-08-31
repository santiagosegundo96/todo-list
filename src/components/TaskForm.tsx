import React, { useState } from "react";
import { Button, Card, CardContent, FormGroup, Input } from "@mui/material";
import { ITask } from "../core/interface";
import { AddTask } from "../App";

export default function TaskForm( { addTask }: AddTask ): React.ReactElement {
	
	const [ nameInput, setNameInput ] = useState('');
	// const [ dateInput, setDateInput ] = useState<Date>(0);
	
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNameInput(event.currentTarget.value);
    }

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		const task: ITask = {
			id: -1,
			taskName: nameInput,
			deadline: new Date(),
		}

		addTask(task);
		setNameInput('');
	};

	return (
		<Card
			sx={{
				backgroundColor: "primary.grey",
			}}>
			<CardContent>
				<form onSubmit={handleSubmit}>
					<FormGroup>
						<Input 
							value={nameInput}
							type="text"
							onChange={handleChange}
							placeholder="Task Name" 
							required={true}
							sx={{ m: 2 }} 
						/>
						<Button type="submit" variant="contained">
							Add Task
						</Button>
					</FormGroup>
				</form>
			</CardContent>
		</Card>
	);
}