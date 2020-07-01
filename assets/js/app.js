new Vue({
  el: '#app',
  data: {
    habilidades: {},
    idiomas: {},
    menuIsVisible: false,
    menuIsSticky: false
  },
  methods: {
    buscarJson: function () {
      fetch("assets/json/habilidades.json")
        .then(r => r.json())
        .then(r => {
          this.habilidades = r.habilidades;
        });
      fetch("assets/json/idiomas.json")
        .then(r => r.json())
        .then(r => {
          this.idiomas = r.habilidades;
        });
    }
  },
  mounted: function () {
    this.buscarJson();
    // BACKGROUND NAVBAR ON SCROLL
    var vm = this;
    window.addEventListener('scroll', function () {

      if (window.pageYOffset > 10) {
        vm.menuIsSticky = true;
      }
      else {
        vm.menuIsSticky = false;
      }

    });


  }

})