<template>
  <div>
    <h1>Details du produit</h1>

    <div class="ui labeled input fluid">
      <input type="text" readonly :value="task.title" />
    </div>

    <div class="ui labeled input fluid">
      <input type="text" readonly :value="task.desc" />
    </div>

    <div class="ui labeled input fluid">
      <input type="text" readonly :value="task.price" />
    </div>

    <img class="img" :src="task.img" :alt="task.title" />

    <div class="actions">
      <router-link
        :to="{ name: 'edit', params: { id: this.$route.params.id } }"
      >
        Modifier le produit
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  name: "show",
  data() {
    return {
      task: "",
    };
  },
  async mounted() {
    this.task = await api.gettask(this.$route.params.id);
  },
};
</script>

<style scoped>
.img {
  width: 100px;
}
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>