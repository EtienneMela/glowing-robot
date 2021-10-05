<template>
  <div>
    <h1 class="mt-5 mb-5">Nos produits</h1>
    <div id="tasks" class="row">
      <div
        class="product col-12 col-md-6 mb-5"
        v-for="(task, i) in tasks"
        :key="i"
      >
        <router-link :to="{ name: 'show', params: { id: task._id } }">
          <div class="square">
            <span class="tag">Sale</span>
            <img class="product-img" :src="task.img" :alt="task.title" />
          </div>
        </router-link>
        <div class="d-flex justify-content-between mt-3">
          <div>
            <h3>{{ task.title }}</h3>
            <p>{{ task.desc }}</p>
          </div>
          <p>{{ task.price }} €</p>
        </div>

        <p
          width="75"
          class="center aligned"
          @click.prevent="onDestroy(task._id)"
        >
          <a :href="`/tasks/${task._id}`">Delete</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  name: "tasks",
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm("Are you sure?");
      if (!sure) return;
      await api.deletetask(id);
      this.flash("task deleted sucessfully!", "success");
      const newtasks = this.tasks.filter((task) => task._id !== id);
      this.tasks = newtasks;
    },
  },
  async mounted() {
    this.tasks = await api.gettasks();
  },
};
</script>

<style scoped>
.product {
  position: relative;
}

.tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgb(255, 72, 0);
  padding: 3px 12px;
  color: white;
  text-transform: uppercase;
  border-radius: 5px;
}

h3 {
  margin-bottom: 0;
}
.product-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
}
.square {
  position: relative;
  width: 100%;
  background-color: rgb(238, 237, 237);
}

.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
</style>