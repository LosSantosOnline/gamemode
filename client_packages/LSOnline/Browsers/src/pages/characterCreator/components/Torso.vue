<template>
  <el-form status-icon label-width="150px" label-position="left">
    <el-form-item label="Tors">
      <el-slider :min="0" :max="state.maxDrawables[3]" v-model="character.drawables[3]" @input="updatePed"></el-slider>
    </el-form-item>
    <el-form-item label="Tekstura torsu">
      <el-slider :min="0" :max="state.maxTextures[3][character.drawables[3]]" v-model="character.textures[3]" @input="updatePed"></el-slider>
    </el-form-item>
    <el-form-item label="Podkoszulki">
      <el-slider :min="0" :max="state.maxDrawables[8]" v-model="character.drawables[8]" @input="updatePed"></el-slider>
    </el-form-item>
    <el-form-item label="Tekstura podkoszulki">
      <el-slider :min="0" :max="state.maxTextures[8][character.drawables[8]]" v-model="character.textures[8]" @input="updatePed"></el-slider>
    </el-form-item>
    <el-form-item label="Topy">
      <el-slider :min="0" :max="state.maxDrawables[11]" v-model="character.drawables[11]" @input="updatePed"></el-slider>
    </el-form-item>
    <el-form-item label="Tekstura topu">
      <el-slider :min="0" :max="state.maxTextures[11][character.drawables[11]]" v-model="character.textures[11]" @input="updatePed"></el-slider>
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
