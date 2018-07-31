<template>
  <el-form @change="updatePed" status-icon label-width="100px" label-position="left">
    <el-form-item label="Płeć">
      <el-select v-model="gender">
        <el-option label="Mężczyzna" value="male">
        </el-option>
        <el-option label="Kobieta" value="female">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Model">
      <el-slider :min="0" :max="genderLength" v-model="model" :format-tooltip="getSelectedModel" @change="updateModel"></el-slider>
    </el-form-item>
  </el-form>
</template>

<script>
import updatePed from "./updatePed";
export default {
  name: "gender",
  data() {
    return {
      model: 0,
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
    updateModel() {
      mp.trigger('updateModel', this.character.model);
    }
  }
};
</script>

<style lang="scss">
</style>
