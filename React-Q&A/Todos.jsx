import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [task, settask] = useState('');
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (task.trim() == '') return;
    if (edit) {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, name: task } : item
        )
      );
      setEdit(false);
      setEditId(null);
    } else {
      let obj = { id: new Date(), name: task, status: false };
      setTodos([...todos, obj]);
    }
    settask('');
  };

  const handleStatus = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  const handleEdit = (id) => {
    const setData = todos.filter((item) => item.id == id);
    settask(setData[0].name);
    setEdit(true);
    setEditId(id);
  };
  return (
    <div>
      <input
        type="text"
        placeholder={edit ? 'update Task' : 'Add Task'}
        value={task}
        onChange={(e) => settask(e.target.value)}
      />
      <button onClick={handleAdd}>{edit ? 'update Data' : 'Add Task'}</button>

      <ul>
        {todos.map((item) => (
          <li>
            {item.name} - {item.status.toString()}
            <button onClick={() => handleStatus(item.id)}>Status</button>{' '}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleEdit(item.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
