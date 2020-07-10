import React from "react";

const ReminderContaint = () => {
  return (
    <div className="vacc-background">
      <div>
        <div className="memo-left">
          <input type="text" className="memo-title" placeholder="title" />
          <textarea placeholder="Reminder Memo" className="memo"></textarea>
        </div>
        <div className="memo-right">
          <input type="date" className="date" />
          <input type="time" className="time" />
          <input type="text" className="place" placeholder="Add Place" />
          <button className="btn btn-success btn-reminder ">
            Add New Reminder
          </button>
        </div>
      </div>

      <div className="reminders">reminders </div>
    </div>
  );
};

export default ReminderContaint;
