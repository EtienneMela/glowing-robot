<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Plz renseigner tous les champs</p>

    <div class="mb-3 mt-5">
      <div class="form-label">Nom du produit</div>
      <input type="text" class="form-control" placeholder="" v-model="task.title" />
    </div>

    <div class="mb-3">
      <div class="form-label">Description</div>
      <input type="text" class="form-control" placeholder="" v-model="task.desc" />
    </div>

    <div class="mb-3">
      <div class="form-label">Price</div>
      <input type="text" class="form-control" placeholder="" v-model="task.price" />
    </div>

    <div class="mb-3">
      <div class="form-label">Img</div>
      <input type="text" class="form-control" placeholder="" v-model="task.img" />
    </div>

    <button class="btn btn-primary mt-3">Valider</button>
  </form>
</template>

<script>
export default {
  name: "task-form",
  props: {
    task: {
      type: Object,
      required: false,
      default: () => {
        return {
          title: "",
          desc: "",
          price: "",
          img: ""
        };
      },
    },
  },
  data() {
    return {
      errorsPresent: false,
    };
  },
  methods: {
    onSubmit: function () {
      if (this.task.task1 === "" || this.task.task2 === "") {
        this.errorsPresent = true;
      } else {
        this.$emit("createOrUpdate", this.task);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>