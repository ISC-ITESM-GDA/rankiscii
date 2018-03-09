<template lang="html">
  <div class="ui segment">
    <h1>Voting Form for Team {{teamNumber}}</h1>
    <form class="ui form">
      <div class="sixteen wide field">
        <div class="ui divider"></div>
        <label>1) Art - {{vote.art}} <small>/8</small> </label>
        <p>It is evident the students designed/implemented custom art for their application.</p>
        <sui-rating class="ui huge star rating" :rating="vote.art" :max-rating="8"  @rate="handleVote1"/>
      </div>
      <div class="sixteen wide field">
        <div class="ui divider"></div>
        <label>2) Programming - {{vote.programming}} <small>/8</small> </label>
        <p>Elements follow the rules of physic. Programming goes beyond the application by thinking out of the box (gathering data and storing it to a DB, applying AI/ML).</p>
        <sui-rating class="ui huge star rating" :rating="vote.programming" :max-rating="8"  @rate="handleVote2"/>
      </div>
      <div class="sixteen wide field">
        <div class="ui divider"></div>
        <label>3) Usability/Gameplay - {{vote.usability}} <small>/8</small> </label>
        <p>It is easy to uderstand straight away, users can interact with the application without previous training.</p>
        <sui-rating class="ui huge star rating" :rating="vote.usability" :max-rating="8"  @rate="handleVote3"/>
      </div>
      <div class="sixteen wide field">
        <div class="ui divider"></div>
        <label>4) Innovation - {{vote.innovation}} <small>/8</small> </label>
        <p>The solution has evident impact on the propossed goal. It goes beyond and has a clear use for VR/AR in it.</p>
        <sui-rating class="ui huge star rating" :rating="vote.innovation" :max-rating="8"  @rate="handleVote4"/>
      </div>
      <div class="sixteen wide field">
        <div class="ui divider"></div>
        <label>5) Impact - {{vote.impact}} <small>/8</small> </label>
        <p>How viable is it for this solution to be implemented in real world.</p>
        <sui-rating class="ui huge star rating" :rating="vote.impact" :max-rating="8"  @rate="handleVote5"/>
      </div>
      <div class="sixteen wide field">
        <div class="ui divider"></div>
        <label>6) User Experience - {{vote.ux}} <small>/8</small> </label>
        <p>What is the feeling of users after living the experience.</p>
        <sui-rating class="ui huge star rating" :rating="vote.ux" :max-rating="8"  @rate="handleVote6"/>
      </div>
      <div class="sixteen wide field">
        <div class="ui divider"></div>
        <label>7) Documentation - {{vote.documentation}} <small>/8</small> </label>
        <p>Evidence of clear and complete documentation.</p>
        <sui-rating class="ui huge star rating" :rating="vote.documentation" :max-rating="8"  @rate="handleVote7"/>
      </div>
      <div class="sixteen wide field">
        <div class="ui divider"></div>
        <label>8) Pitch - {{vote.pitch}} <small>/8</small> </label>
        <p>Team is able to present the solution and demo within the 5 minute pitch.</p>
        <sui-rating class="ui huge star rating" :rating="vote.pitch" :max-rating="8"  @rate="handleVote8"/>
      </div>
      <div class="sixteen wide field">
        <div class="ui divider"></div>
        <label>Comments <small>Optional</small> </label>
        <p>Comments towards the development of the team's proposal.</p>
        <input type="text" name="" value="" v-model="vote.comments">
      </div>
      <div class="ui divider"></div>
      <div @click="addItem" class="ui basic wide button">Submit</div>
    </form>
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
      teamNumber: '',
      vote: {
        art: 1,
        programming: 1,
        usability: 1,
        innovation: 1,
        impact: 1,
        ux: 1,
        documentation: 1,
        pitch: 1,
        comments: '',
        total: ''
      }
    }
  },
  created(){
    this.teamNumber = this.$route.params.team
  },
  firebase: function () {
    var url = 'teams/'+this.$route.params.team+'/votes'
    return {
      team: db.ref(url)
    }
  },
  methods:{
    handleVote1(evt, props) {
      this.vote.art = props.rating;
    },
    handleVote2(evt, props) {
      this.vote.programming = props.rating;
    },
    handleVote3(evt, props) {
      this.vote.usability = props.rating;
    },
    handleVote4(evt, props) {
      this.vote.innovation = props.rating;
    },
    handleVote5(evt, props) {
      this.vote.impact = props.rating;
    },
    handleVote6(evt, props) {
      this.vote.ux = props.rating;
    },
    handleVote7(evt, props) {
      this.vote.documentation = props.rating;
    },
    handleVote8(evt, props) {
      this.vote.pitch = props.rating;
    },
    addItem () {
      //normalize data
      var submitVote = {}
      submitVote.comments = this.vote.comments
      submitVote.art = (this.vote.art * 12.5) /8
      submitVote.programming = (this.vote.programming * 12.5) /8
      submitVote.usability = (this.vote.usability * 12.5) /8
      submitVote.innovation = (this.vote.innovation * 12.5) /8
      submitVote.impact = (this.vote.impact * 12.5) /8
      submitVote.ux = (this.vote.ux * 12.5) /8
      submitVote.documentation = (this.vote.documentation * 12.5) /8
      submitVote.pitch = (this.vote.pitch * 12.5) /8
      submitVote.total = this.vote.art+this.vote.programming+this.vote.usability+this.vote.innovation+this.vote.impact+this.vote.ux+this.vote.documentation+this.vote.pitch
      if(this.$firebaseRefs.team.push(submitVote)){
        alert('Thank you! Your vote has been recorded')
        this.$router.go(-1);
      }

    }
  }
}
</script>

<style lang="css">
</style>
