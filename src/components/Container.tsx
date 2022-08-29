import React from 'react';
import FormTodo from './FormTodo';
import TaskList from './TaskList';

export default function CreateContainer(): React.ReactElement {
    return (
        <div>
            <FormTodo />
            <TaskList />
        </div>
    );
}