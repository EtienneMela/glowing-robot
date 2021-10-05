import axios from "axios"

export default {
  async getEvents(accessToken) {
    let res = await axios.get("http://localhost:8080/tasks", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return res.data;
  },
  async getEventSingle(taskId, accessToken) {
    let res = await axios.get("http://localhost:8080/tasks/" + taskId, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return res.data;
  }
}