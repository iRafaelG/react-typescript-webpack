// import node modules
import * as React from "react";

// import interfaces
import { ITask } from "./Task";

// class tasklist
class TaskList extends React.Component<ITaskListProps, any> {
  render(): JSX.Element[] {
    return this.props.tasks.map((task: ITask, i: number) => {
      return (
        <div className="col-md-6 mt-2" key={task.id}>
          <div className="card card-body">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button
            onClick={() => this.props.deleteTask(task.id)}
             className="btn btn-danger btn-block">Delete</button>
          </div>
        </div>
      );
    });
  }
}

// props interface
interface ITaskListProps {
  tasks: ITask[];
  deleteTask: (id: number) => void;
}

export default TaskList;
