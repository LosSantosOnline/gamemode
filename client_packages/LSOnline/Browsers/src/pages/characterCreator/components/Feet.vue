<template>
  <el-form status-icon label-width="150px" label-position="left">
    <el-form-item label="Buty">
      <el-slider :min="0" :max="state.maxDrawables[6]" v-model="character.drawables[6]" @input="updatePed"></el-slider>
    </el-form-item>
    <el-form-item label="Tekstura butów">
      <el-slider :min="0" :max="state.maxTextures[6][character.drawables[6]]" v-model="character.textures[6]" @input="updatePed"></el-slider>
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
