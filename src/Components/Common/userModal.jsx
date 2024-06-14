// UserSelectModal.jsx
import React, { useState } from "react";

const UserSelectModal = ({ onGroupSelect }) => {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && group) {
      onGroupSelect(name, group);
    }
  };

  return (
    <div className="user-select-modal">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Select Group:
          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            required
          >
            <option value="">--Select Group--</option>
            <option value="event-planner">Event Planner</option>
            <option value="farmer">Farmer</option>
            <option value="traveler">Traveler</option>
            <option value="sports">Sports</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserSelectModal;
