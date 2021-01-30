var app = new Vue({
  // Daniel Rodriguez S.
    el: '#app',
    data: {
      hoursworked:0,
      shoes:0,
      total:0
    },
    methods: {
    Calculate: function() {
      var VrHD=6300, VrZE=1000;
    if(this.hoursworked>24){
      alert("The day only has 24 hours")
    }else{
        this.total=(parseFloat(this.hoursworked)*parseFloat(VrHD))+(parseFloat(this.shoes)*parseFloat(VrZE))      
      }
    }       
  },
})