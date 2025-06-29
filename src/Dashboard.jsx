import { Taskcard } from "./Taskcard";
import { Taskstatus } from "./Taskstatus";
import { NavLink } from "react-router-dom";
export function Dashboard() {

  return (
    <>
      <div className="dashboard-wrapper">
        <h2 className="text-color-dark margin-bottom-12">Dashboard</h2>

        <div className="flex">
          <div className="col-50">
            <div className="box-shadow section-wrapper">
              <div className="flex justify-between align-items-center margin-bottom-12">
                <h4 className="text-color-dark">Today <span className="text-color-red">Task</span> </h4>
                <NavLink to="/task-categories" className="add-task-btn">  <span className="text-color-red sec-header">+</span> Add Task</NavLink>
              </div>

              <Taskcard />
              <Taskcard />
              <Taskcard />
            </div>

          </div>
          <div className="col-50">
            <div className="box-shadow section-wrapper">
              <h4 className="text-color-red"> Task Status </h4>

              <Taskstatus />

            </div>
            <div className="box-shadow section-wrapper">
              <h4 className="text-color-red"> Completed Task </h4>
            </div>

          </div>
        </div>


      </div>
    </>
  );
}