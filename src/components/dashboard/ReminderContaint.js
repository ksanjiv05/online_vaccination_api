import React, { useState } from "react";

const ReminderContaint = () => {
  const [data, setData] = useState({});
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();

    console.log(data);
  };
  return (
    <div className="vacc-background">
      <div>
        <form onSubmit={(ev) => handleSubmit(ev)}>
          <div className="memo-left">
            <input
              type="text"
              className="memo-title"
              placeholder="title"
              name="tite"
              onChange={(ev) => changeHandler(ev)}
            />
            <textarea
              placeholder="Reminder Memo"
              className="memo"
              name="memo"
              onChange={(ev) => changeHandler(ev)}></textarea>
          </div>
          <div className="memo-right">
            <input
              type="date"
              className="date"
              name="date"
              onChange={(ev) => changeHandler(ev)}
            />
            <input
              type="time"
              className="time"
              name="time"
              onChange={(ev) => changeHandler(ev)}
            />
            <input
              type="text"
              className="place"
              placeholder="Add Place"
              name="place"
              onChange={(ev) => changeHandler(ev)}
            />
            <button className="btn btn-success btn-reminder ">
              Add New Reminder
            </button>
          </div>
        </form>
      </div>

      <div className="reminders">reminders </div>
    </div>
  );
};

export default ReminderContaint;
