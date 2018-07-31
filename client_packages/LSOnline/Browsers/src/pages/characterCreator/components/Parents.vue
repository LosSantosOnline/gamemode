<template>
  <el-form @change="updatePed" status-icon label-width="100px" label-position="left">
    <el-form-item label="Matka">
      <el-slider :min="0" :max="mothers.length-1" v-model="mother" :format-tooltip="getSelectedMother" @input="updatePed"></el-slider>
    </el-form-item>
    <el-form-item label="Ojciec">
      <el-slider :min="0" :max="fathers.length-1" v-model="father" :format-tooltip="getSelectedFather" @input="updatePed"></el-slider>
    </el-form-item>
    <el-form-item label="Podobieństwo">
      <el-slider :min="0" :step="0.05" :max="1" v-model="character.shapeMix" @input="updatePed">
      </el-slider>
    </el-form-item>
    <el-form-item label="Kolor skóry">
      <el-slider :min="0" :step="0.05" :max="1" v-model="character.skinMix" @input="updatePed"></el-slider>
    </el-form-item>
  </el-form>
</template>

<script>
import updatePed from "./updatePed";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "parents",
  data() {
    return {
      mother: 0,
      father: 0,
      fathers: [{ name: "Benjamin", value: 0}, { name: "Daniel", value: 1}, { name: "Joshua", value: 2}, { name: "Noah", value: 3}, { name: "Andrew", value: 4}, { name: "Juan", value: 5}, { name: "Alex", value: 6}, { name: "Isaac", value: 7}, { name: "Evan", value: 8}, { name: "Ethan", value: 9}, { name: "Vincent", value: 10}, { name: "Angel", value: 11}, { name: "Diego", value: 12}, { name: "Adrian", value: 13}, { name: "Gabriel", value: 14}, { name: "Michael", value: 15}, { name: "Santiago", value: 16}, { name: "Kevin", value: 17}, { name: "Louis", value: 18}, { name: "Samuel", value: 19}, { name: "Anthony", value: 20}, {name: "Claude", value: 42}, {name: "Niko", value: 43}, {name: "John", value: 44}],
      mothers: [{ name: "Hannah", value: 21}, { name: "Audrey", value: 22},{ name: "Jasmine", value: 23},{ name: "Giselle", value: 24},{ name: "Amelia", value: 25},{ name: "Isabella", value: 26},{ name: "Zoe", value: 27},{ name: "Ava", value: 28},{ name: "Camila", value: 29},{ name: "Violet", value: 30},{ name: "Sophia", value: 31},{ name: "Evelyn", value: 32},{ name: "Nicole", value: 33},{ name: "Ashley", value: 34},{ name: "Grace", value: 35},{ name: "Brianna", value: 36},{ name: "Natalie", value: 37},{ name: "Olivia", value: 38},{ name: "Elizabeth", value: 39},{ name: "Charlotte", value: 40},{ name: "Emma", value: 41},{ name: "Misty", value: 45}]
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
  watch: {
    mother (val) {
      this.state.character.shapeFirstID = this.mothers[this.mother].value
    },
    father (val) {
      this.state.character.shapeSecondID = this.fathers[this.father].value
    }
  },
  methods: {
    getSelectedMother () {
      return this.mothers[this.mother].name
    },
    getSelectedFather() {
      return this.fathers[this.father].name
    },
    updatePed,
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss">
</style>
