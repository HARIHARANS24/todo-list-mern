import { useEffect, useState } from "react";
import './App.css';

export default function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [editId, setEditId] = useState(-1);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const apiUrl = "http://localhost:5000";

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    fetch(apiUrl + "/todos")
      .then((res) => res.json())
      .then((res) => {
        setTodos(res);
      })
      .catch(() => {
        setError("Unable to fetch todos");
      });
  };

  const handleSubmit = () => {
    setError("");
    if (title.trim() && description.trim()) {
      fetch(apiUrl + "/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      })
        .then((res) => {
          if (res.ok) {
            setTitle("");
            setDescription("");
            setMessage("Item added successfully");
            setTimeout(() => setMessage(""), 3000);
            getItems();
          } else setError("Unable to create Todo item");
        })
        .catch(() => setError("Unable to create Todo item"));
    }
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setEditTitle(item.title);
    setEditDescription(item.description);
  };

  const handleUpdate = () => {
    if (editTitle.trim() && editDescription.trim()) {
      fetch(`${apiUrl}/todos/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: editTitle, description: editDescription }),
      })
        .then((res) => {
          if (res.ok) {
            setMessage("Item updated successfully");
            setTimeout(() => setMessage(""), 3000);
            setEditId(-1);
            getItems();
          } else setError("Unable to update Todo item");
        })
        .catch(() => setError("Unable to update Todo item"));
    }
  };

  const handleEditCancel = () => {
    setEditId(-1);
    setEditTitle("");
    setEditDescription("");
  };

  const handleDelete = (id) => {
    fetch(`${apiUrl}/todos/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          setMessage("Item deleted successfully");
          setTimeout(() => setMessage(""), 3000);
          getItems();
        } else setError("Unable to delete Todo item");
      })
      .catch(() => setError("Unable to delete Todo item"));
  };

  return (
    <div className="container py-4 todo-container">
      <div className="bg-primary text-white text-center py-3 rounded mb-4">
        <h1 className="m-0">Todo Project With MERN Stack</h1>
      </div>

    
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-3 text-primary">Add New Task</h4>
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="row g-2">
            <div className="col-md-4">
              <input
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="form-control"
                type="text"
              />
            </div>
            <div className="col-md-5">
              <input
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="form-control"
                type="text"
              />
            </div>
            <div className="col-md-3">
              <button className="btn btn-dark w-100" onClick={handleSubmit}>
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <h4 className="card-title mb-3 text-primary">Your Tasks</h4>
          {todos.length === 0 ? (
            <p className="text-muted">No tasks found. Add one above!</p>
          ) : (
            <div className="row g-3">
              {todos
                .filter(
                  (item) =>
                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => (
                  <div className="col-sm-6 col-md-4 col-lg-3" key={item._id}>
                    <div className="card shadow-sm h-100 todo-card">
                      <div className="card-body d-flex flex-column">
                        {editId !== item._id ? (
                          <>
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text text-muted">{item.description}</p>
                            <div className="mt-auto d-flex gap-2">
                              <button
                                className="btn btn-sm btn-accent"
                                onClick={() => handleEdit(item)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handleDelete(item._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            <input
                              placeholder="Title"
                              className="form-control mb-2"
                              value={editTitle}
                              onChange={(e) => setEditTitle(e.target.value)}
                            />
                            <input
                              placeholder="Description"
                              className="form-control mb-2"
                              value={editDescription}
                              onChange={(e) => setEditDescription(e.target.value)}
                            />
                            <div className="d-flex gap-2 mt-auto">
                              <button
                                className="btn btn-sm btn-accent"
                                onClick={handleUpdate}
                              >
                                Save
                              </button>
                              <button
                                className="btn btn-sm btn-secondary"
                                onClick={handleEditCancel}
                              >
                                Cancel
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
