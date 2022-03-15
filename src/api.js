import { API_URL } from "./config";

export const fetchAllTasks = async () => {
  const data = await fetch(`${API_URL}/tasks`);
  return data.json();
};

export const addNewTask = async ({ task }) => {
  try {
    const response = await fetch(`${API_URL}/task`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    });

    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  } catch (err) {
    return { success: false, error: err };
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${API_URL}/task`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId }),
    });
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  } catch (err) {
    return { success: false, error: err };
  }
};

export const modifyTask = async (taskId, newTask) => {
  try {
    const response = await fetch(`${API_URL}/task`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId, newTask }),
    });
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  } catch (err) {
    return { success: false, error: err };
  }
};

export const markRealized = async (taskId) => {
  try {
    const response = await fetch(`${API_URL}/realized`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId }),
    });
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  } catch (err) {
    return { success: false, error: err };
  }
};
