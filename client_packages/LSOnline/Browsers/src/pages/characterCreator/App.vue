<template>
  <div>
    <div class="container border-shadow">
      <div class="content">
        <template v-if="step === 1">
          <el-collapse @change="handleChange">
            <el-collapse-item title="Płeć i model" name="1">
              <gender></gender>
            </el-collapse-item>
            <el-collapse-item title="Rodzice" name="2">
              <parents></parents>
            </el-collapse-item>
            <el-collapse-item title="Owłosienie" name="4">
              <hair></hair>
            </el-collapse-item>
            <el-collapse-item title="Twarz" name="3">
              <face-shape></face-shape>
            </el-collapse-item>
            <el-collapse-item title="Szczegóły twarzy" name="5">
              <face-overlay></face-overlay>
            </el-collapse-item>
          </el-collapse>
          <el-button type="primary" @click="step++">Ubranie
            <i class="el-icon-arrow-right el-icon-right"></i>
          </el-button>
        </template>
        <template v-else>
          <el-collapse @change="handleChange">
            <el-collapse-item title="Tors" name="6">
              <tors></tors>
            </el-collapse-item>
            <el-collapse-item title="Spodnie" name="7">
              <legs></legs>
            </el-collapse-item>
            <el-collapse-item title="Buty" name="8">
              <feet></feet>
            </el-collapse-item>
          </el-collapse>
          <el-button style="float: left" type="primary" @click="step--">
            <i class="el-icon-arrow-left el-icon-left"></i>Wróć
          </el-button>
          <el-button type="success" @click="savePed">Zapisz postać
            <i class="el-icon-edit"></i>
          </el-button>
        </template>
      </div>
    </div>

    <div class="rotation">
      <el-slider v-model="rotation" :min="0" :max="360" :show-tooltip="false" @input="rotatePed"></el-slider>
    </div>
  </div>
</template>

<script>
import Gender from './components/Gender.vue';
import Parents from './components/Parents.vue';
import FaceShape from './components/FaceShape.vue';
import FaceOverlay from './components/FaceOverlay.vue';
import Tors from './components/Torso.vue';
import Legs from './components/Legs.vue';
import Feet from './components/Feet.vue';
import Hair from './components/Hair.vue';


export default {
  name: "creationParent",
  data() {
    return {
      step: 1,
      rotation: 180,
    }
  },
  computed: {
    character () {
      return this.$store.state.character;
    }
  },
  methods: {
    rotatePed() {
      console.log(this.character);
      mp.trigger('rotatePed', this.rotation)
    },
    savePed() {
      mp.trigger('saveOutfit', JSON.stringify(this.character))
    },
    handleChange(val) {
      let current = val[val.length-1]
      let camera = "start";

      // scary code
      if([2,5,3].includes(Number(current))) {
        camera = "head"
      } 
      if([6].includes(Number(current))) {
        camera = "torso"
      } 
      if([7,8].includes(Number(current))) {
        camera = "legs"
      } 

      mp.trigger('switchCamera', camera);

    }
  },
  components: {
    Gender,
    Parents,
    FaceShape,
    FaceOverlay,
    Tors,
    Legs,
    Feet,
    Hair
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");
@import "../../assets/scss/shared.scss";
@import "../../assets/scss/transitions.scss";

$background-color: #f8f9fb;

html,
body {
  * {
    font-family: "Roboto", sans-serif;
  }

  background: rgba(0, 0, 0, 0);
  margin: 0;
  padding: 0;
  font-weight: 400;
}
.container {
  position: absolute;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  max-width: 30%;
  min-width: 30%;
  left: 1rem;
  top: 1rem;
  background-color: rgba($background-color, 1);
  max-height: 90%;
  overflow-y: scroll;
}
.header,
.content {
  padding: 1rem;

  width: 100%;
}
.divider-container {
  width: 100%;
}
.header {
  padding: 2rem 3rem 0rem;
}
.rotation {
  position: absolute;
  width: 30%;
  bottom: 2rem;
  margin-left: 35%;
}
.el-checkbox {
  font-weight: 400 !important;
}
.el-collapse-item__wrap,
.el-collapse-item__header {
  background-color: rgba($background-color, 1) !important;
}
.el-collapse-item__wrap {
  padding-top: 1rem;
  overflow: hidden !important;
}
.el-form-item {
  max-width: 95%;
}
.el-button {
  margin-top: 1rem !important;
  float: right;
}
</style>
