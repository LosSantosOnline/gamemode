<template>
  <el-form @change="updatePed" status-icon label-width="150px" label-position="left">
    <template v-for="(input, index) in inputs" v-if="index == 1 && character.gender !== 'female'">
      <el-form-item :label="input" :key="index">
        <el-slider :min="0" :max="values[index]" v-model="character.overlays[index]" @input="updatePed"></el-slider>
      </el-form-item>
      <el-form-item :label="'Kolor ' + input" :key="index*12" v-if="[1,2,5,8,10].includes(index)">
        <el-slider :min="0" :max="63" v-model="character.overlaysColor[index]" @input="updatePed"></el-slider>
      </el-form-item>
      <el-form-item :label="'Kolor ' + input" :key="index*13" v-if="[1,2,5,8,10].includes(index)">
        <el-slider :min="0" :max="63" v-model="character.overlaysColor2[index]" @input="updatePed"></el-slider>
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
import updatePed from "./updatePed";
export default {
  name: "facedetails",
  data() {
    return {
      inputs: ["Skazy", "Zarost", "Brwi", "Zmarszczki", "Makijaż", "Rumieńce", "Karnacja", "Opalenia", "Szminka", "Piegi"],
      values: [23, 28, 33, 14, 74, 6, 11, 10, 9, 17, 16, 11, 1]
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
