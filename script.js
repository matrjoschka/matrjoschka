
Vue.component('riddle', {
    props: ['msg'],
    template: '<div><div class="enigma-box"> {{ msg }} </div></div>'
  })


  var app = new Vue({
    el: '#app',
    data: {
        message: [
            { id: 0, msg: 'first image', correctAnswer:'Zmlyc3Q='},
            { id: 1, msg: 'second image', correctAnswer:'c2Vjb25k'}
        ],
        counter: 0,
        answer: 'type answer here...'
    },
    methods: {
        submit: function (event) {
            if (atob(app.message[app.counter].correctAnswer) == app.answer) {
                app.counter += 1
            }
            else {
                alert('wrong')
            }
        }
      }
  })