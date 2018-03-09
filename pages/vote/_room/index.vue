<template lang="html">
<div class="ui four cards">
  <div class="red card" v-for="team in teams" :key="team.id" v-if="team.room == room">
    <div class="content">
      <div class="header">
        Team {{team.id}}
      </div>
      <div class="meta">
        {{team.goal}}
      </div>
      <div class="description">
        <strong>Leaders</strong>
        <ul>
          <li v-if="team.leaders">{{team.leaders.isc}} (ISC)</li>
          <li v-if="team.leaders">{{team.leaders.lad}} (LAD)</li>
        </ul>
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div @click="goTo(team.id)" class="ui basic green button">
          Vote
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyC_q6RDw7qNLNktCyzNgZaBzr3I2UQ2Qzk",
  authDomain: "taller-vertical-isc-2018.firebaseapp.com",
  databaseURL: "https://taller-vertical-isc-2018.firebaseio.com",
  projectId: "taller-vertical-isc-2018",
  storageBucket: "taller-vertical-isc-2018.appspot.com",
  messagingSenderId: "420720474481"
}
var firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
var db = firebaseApp.database()

export default {
  data () {
    return {
      room: ''
    }
  },
  mounted: function () {
    this.room = this.$route.params.room
  },
  methods: {
    goTo: function (id) {
      this.$router.push('/vote/team/'+id);
    }
  },
  firebase: {
    teams: {
      source: db.ref('teams'),
      // asObject: true,
    }
  }
}
</script>

<style lang="css">
</style>
