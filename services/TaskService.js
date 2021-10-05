import axios from "axios"

export default {
  async getEvents() {
    let res = await axios.get("http://localhost:8080/tasks");
    return res.data;
  },
  async getEventSingle(taskId) {
    let res = await axios.get("http://localhost:8080/tasks/" + taskId);
    return res.data;
  }
}