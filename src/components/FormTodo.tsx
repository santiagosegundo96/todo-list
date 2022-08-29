import React from 'react';
import { ISubmitEvent } from "@rjsf/core";
import { Card, CardContent } from '@mui/material';
import MuiForm from "@rjsf/material-ui/v5";

import schema from "./schema.json";

export default function FormTodo(): React.ReactElement {
    
    function onSubmit(event: ISubmitEvent<unknown>): void {
        console.log(event.formData);
    } 


    return (
        <Card
            className="add-new-task"
        >
            <CardContent>
                <MuiForm
                    className="add-new-task-form"
                    schema={schema as Record<string, unknown>}
                    onSubmit={onSubmit}
                >
                </MuiForm>
            </CardContent>

        </Card>
    );
}