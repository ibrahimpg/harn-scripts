<template>
  <div class="resultContainer">
    <span v-html="result"></span>
  </div>

  <div class="functionLayout">
    <!-- <div class="functionContainer">
      <div>
        Max: <input v-model="rollMax" type="number">
      </div>
      <div class="button" @click="result = roll(rollMax)">
        roll
      </div>
    </div>

    <div class="functionContainer">
      <div>
        Times: <input v-model="rollMultipleTimes" type="number">
        Die: <input v-model="rollMultipleDie" type="number">
      </div>
      <div class="button" @click="result = rollMultiple(rollMultipleTimes, rollMultipleDie)">
        rollMultiple
      </div>
    </div> -->

    <div class="functionContainer">
      <div>
        Environ:
        <select v-model="environ">
          <option>Urban</option>
          <option>Rural</option>
          <option>Highway</option>
          <option>River</option>
          <option>Sealanes</option>
          <option>Open Sea</option>
          <option>Wilderness</option>
          <option>Underworld</option>
          <option>Underground</option>
        </select>
        <br>
        Law:
        <select v-model="law">
          <option>Lawful</option>
          <option>Lawless</option>
        </select>
        <br>
        Time:
        <select v-model="time">
          <option>Day</option>
          <option>Night</option>
        </select>
        <br>
      </div>
      <div class="button" @click="result = rollEncounterFunc()">
        rollEncounter
      </div>
    </div>

    <div class="functionContainer" style="justify-content: flex-end;">
      <div class="button" @click="result = generateMonthlyEvents()">
        generateMonthlyEvents
      </div>
    </div>

    <div class="functionContainer" style="justify-content: flex-end;">
      <div class="button" @click="result = getLocation()">
        getLocation
      </div>
    </div>

    <div class="functionContainer" style="justify-content: flex-end;">
      <div class="button" @click="result = calculateSiblingRank()">
        calculateSiblingRank
      </div>
    </div>

    <div class="functionContainer" style="justify-content: flex-end;">
      <div class="button" @click="genWeather()">
        generateWeather
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import roll from './functions/roll';
// import rollMultiple from './functions/rollMultiple';
import rollEncounter from './functions/rollEncounter';
import generateMonthlyEvents from './functions/generateMonthlyEvents';
import getLocation from './functions/getLocation';
import calculateSiblingRank from './functions/calculateSiblingRank';
import generateWeather from './functions/generateWeather';
import downloadCsv from './functions/downloadCsv';

// const temporaryGenWeather = () => alert('not ready yet');
// const rollMax: any = '';

// const rollMultipleTimes: any = '';
// const rollMultipleDie: any = '';

const environ = ref('Urban');
const law = ref('Lawful');
const time = ref('Day');

const rollEncounterFunc = () => rollEncounter(environ.value, law.value, time.value);

const result: any = ref('');

const genWeather = async () => {
  const weatherArray = await generateWeather();
  downloadCsv(weatherArray);
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.resultContainer {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  background-color: #d3d3d3;
}
.functionLayout {
  display: flex;
  flex-wrap: wrap;
}
.functionContainer {
  width: 210px;
  height: 150px;
  margin: 10px;
  background-color: #d3d3d3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-radius: 5px;
}
input[type="number"], input[type="text"] {
  width: 50px;
}
.button {
  width: 180px;
  height: 50px;
  background-color: #333333;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
}
</style>
