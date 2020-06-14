// import node modules
import * as React from "react";

// import components
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

// import interfaces
import { ITask } from "./Task";

// app class
export class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addNewTask(task: ITask) {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  }

  deleteTask(id: number) {
    let tasks: ITask[] = this.state.tasks.filter(
      (task: ITask) => task.id !== id
    );
    this.setState({ tasks });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            {this.props.title}
          </a>
        </nav>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-4">
              <TaskForm addNewTask={this.addNewTask.bind(this)} />
            </div>
            <div className="col-md-8">
              <div className="row">
                <TaskList
                  tasks={this.state.tasks}
                  deleteTask={this.deleteTask.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// props interface
interface IProps {
  title: string;
}

// state interface
interface IState {
  tasks: ITask[];
}
