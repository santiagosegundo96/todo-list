import React from 'react';
// import ISubmitEvent from "@rjsf/core";   
import { Button, Card, CardContent, FormGroup, Input, Typography } from "@mui/material";

function TaskList(): React.ReactElement {
    return (
            <CardContent>
                <div>task list</div>
            </CardContent>
    );
}

export default function Form(): React.ReactElement {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <Card
            sx={{
                width: 400,
                height: 600,
                backgroundColor: 'primary.grey',
            }}
        >
            <CardContent>
                <Typography variant="h3">Task List</Typography>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input 
                            sx={{ m: 2 }}
                            placeholder="Task Name"
                            required={true}
                            name="taskName"
                        />
                        <Button 
                            type="submit"
                            variant="contained"
                        >
                            Add Task
                        </Button>
                    </FormGroup>
                </form>
            </CardContent>
            <TaskList />
        </Card>
    );
}