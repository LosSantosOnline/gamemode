<template>
  <el-form status-icon label-width="150px" label-position="left">
    <el-form-item label="Spodnie">
      <el-slider :min="0" :max="state.maxDrawables[4]" v-model="character.drawables[4]" @input="updatePed"></el-slider>
    </el-form-item>
    <el-form-item label="Tekstura spodni">
      <el-slider :min="0" :max="state.maxTextures[4][character.drawables[4]]" v-model="character.textures[4]" @input="updatePed"></el-slider>
    </el-form-item>
  </el-form>

</template>

<script>
import updatePed from "./updatePed";
export default {
  name: "",
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
    updatePed,
  }
};
</script>

<style lang="scss">
</style>
