<template>
  <div>
    <section>
      <h1>Bet</h1>

      <h3 v-if='!account'><strong>PLEASE LOGIN TO MetaMask</strong></h3>

      <template v-if='account'>
        <p>My account balance: <strong>{{ balance }} ETH</strong></p>
        <p>My account address: <strong>{{ account }} ETH</strong></p>
        <p>Owner address: <strong>{{ owner }} ETH</strong></p>
      </template>

      <template>
        <div class=”casino”>
          <h1>Welcome to the Casino</h1>
          <h4>Please pick a number between 1 and 10</h4>
          Amount to bet: <input type='number' :value.number='betAmount' @input='updateBetAmount' placeholder="0 Ether">
          <ul>
            <li v-on:click="betHandler">1</li>
            <li v-on:click="betHandler">2</li>
            <li v-on:click="betHandler">3</li>
            <li v-on:click="betHandler">4</li>
            <li v-on:click="betHandler">5</li>
            <li v-on:click="betHandler">6</li>
            <li v-on:click="betHandler">7</li>
            <li v-on:click="betHandler">8</li>
            <li v-on:click="betHandler">9</li>
            <li v-on:click="betHandler">10</li>
          </ul>
          <img v-if="betSpinnerPendingStatus" id="loader" src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif">
          <!--<div class="event" v-if="winEvent">-->
            <!--Won: {{ winEvent._status }}-->
            <!--Amount: {{ winEvent._amount }} Wei-->
          <!--</div>-->
        </div>
      </template>

    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/mutation-types';

export default {
  name: 'bet-app',
  created() {
    // this.$store.dispatch('watchTime');
  },
  computed: {
    ...mapGetters({
      account: 'account',
      balance: 'balance',
      betAmount: 'betAmount',
      owner: 'owner',
      betSpinnerPendingStatus: 'betSpinnerPendingStatus'
    }),
  },
  methods: {
      updateBetAmount(e) {
          this.$store.commit(types.UPDATE_BET_AMOUNT, e.target.value ? parseInt(e.target.value, 10) : '');
      },
      betHandler() {
          if (this.betAmount) {
              this.$store.dispatch('bet');
          }
      },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
section {
  margin-top: 3em;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25em;
}

input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #ccc;
  margin-bottom: 1em;
}

button {
  padding: 0.5em 1em;
  background-color: #7FC76A;
  font-size: 1em;
  color: white;
  cursor: pointer;
  border: 0;
}

h1, h2 {
  font-weight: normal;
}

ul, ol {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

ol li {
  display: block;
}

a {
  color: #42b983;
}
</style>
