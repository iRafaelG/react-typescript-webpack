// import node modules
import * as React from "react";

// import interfaces
import { ITask } from "./Task";

// taskform class
class TaskForm extends React.Component<ITaskFormProps, any> {
  constructor(props: ITaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  getCurrentTimeStamp(): number {
    return new Date().getTime();
  }

  handleNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let task: ITask = {
      id: this.getCurrentTimeStamp(),
      title: this.state.title,
      description: this.state.description,
      completed: false,
    };
    this.props.addNewTask(task);
    this.setState({title: '', description: ''});
  }

  handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="card card-body">
        <form onSubmit={(e) => this.handleNewTask(e)}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Task title"
              onChange={(e) => this.handleInputChange(e)}
              value={this.state.title}
            />
          </div>

          <div className="form-group">
            <textarea
              name="description"
              className="form-control"
              placeholder="Task description"
              onChange={(e) => this.handleInputChange(e)}
              value={this.state.description}
            ></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// props interface
interface ITaskFormProps {
  addNewTask: (task: ITask) => void;
}

// state interface
interface ITaskFormState {
  title: string;
  description: string;
}

export default TaskForm;
