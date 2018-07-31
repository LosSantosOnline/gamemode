<template>
  <el-form @change="updatePed" status-icon label-width="150px" label-position="left">
    <el-form-item :label="input" v-for="(input, index) in inputs" :key="index">
      <el-slider :max="1" :step="0.05" v-model="character.features[index]" @input="updatePed"></el-slider>
    </el-form-item>
  </el-form>
</template>

<script>
import updatePed from "./updatePed";
export default {
  name: "faceshape",
  data() {
    return {
      inputs: ["Szerokość nosa", "Wysokość nosa", "Długość nosa", "Kość nosa", "Czubek nosa", "Krzywizna kości", "Wysokość brwi", "Szerokość brwi",
      "Wysokość kości policzków", "Szerokość kości policzków", "Szerokość policzków", "Oczy", "Usta", "Szerokość szczęki", "Wysokość szczęki", "Długość podbródka",
      "Pozycja podbródka", "Szerokość podbródka", "Kształt podbródka", "Szerokość szyji"],
      gender: 'male',
    }
  },
  computed: {
    state () {
      return this.$store.state;
    },
    character () {
      return this.state.character;
    },
    genderLength () {
      return this.state.models[this.gender].length-1;
    }
  },
  watch: {
    model (val) {
      this.state.character.model = this.getSelectedModel();
    },
    gender(val) {
      this.model = 0;
      this.state.character.model = this.getSelectedModel();
      this.updateModel();
    }
  },
  methods: {
    getSelectedModel () {
      return this.state.models[this.gender][this.model]
    },
    updatePed,
  }
};
</script>

<style lang="scss">
</style>
