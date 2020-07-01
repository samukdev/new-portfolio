new Vue({
  el: '#app',
  data: {
    habilidades: {},
    idiomas: {}
  },
  methods: {
    buscarJson: function () {
      fetch("../json/habilidades.json")
        .then(r => r.json())
        .then(r => {
          this.habilidades = r.habilidades;
        });
      fetch("../json/idiomas.json")
        .then(r => r.json())
        .then(r => {
          this.idiomas = r.habilidades;
        });
    }
  },
  mounted: function () {
    this.buscarJson();
    // BACKGROUND NAVBAR ON SCROLL
    var nav = document.getElementById('bg-sticky');
    window.addEventListener('scroll', function () {

      if (window.pageYOffset > 10) {
        nav.classList.add('sticky-active');
      }
      else {
        nav.classList.remove('sticky-active');
      }

    });


  }

})