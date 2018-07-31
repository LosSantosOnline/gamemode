<template>
  <el-form status-icon label-width="150px" label-position="left">
    <el-form-item v-if="character.gender === 'male'" label="Broda">
      <el-slider :min="0" :max="state.maxDrawables[0]" v-model="character.drawables[0]" @input="updatePed"></el-slider>
    </el-form-item>
    <el-form-item label="Włosy">
      <el-slider :min="0" :max="state.maxDrawables[2]" v-model="character.drawables[2]" @input="updatePed"></el-slider>
    </el-form-item>
    <el-form-item label="Kolor włosów">
      <el-slider :min="0" :max="63" v-model="character.hairColor[0]" @input="updatePed"></el-slider>
    </el-form-item>
    <el-form-item label="Kolor włosów 2">
      <el-slider :min="0" :max="63" v-model="character.hairColor[1]" @input="updatePed"></el-slider>
    </el-form-item>
  </el-form>
</template>

<script>
import updatePed from "./updatePed";
export default {
  name: "hair",
  data() {
    return {
    }
  },
  computed: {
    state () {
      return this.$store.state;
    },
    character () {
      return this.state.character;
    },
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
