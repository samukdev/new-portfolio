new Vue({
  el: '#app',
  data: {
    habilidades: {},
    idiomas: {},
    links: {},
    formacao: {},
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
      fetch("assets/json/links.json")
        .then(r => r.json())
        .then(r => {
          this.links = r;
        });
      fetch("assets/json/formacao.json")
        .then(r => r.json())
        .then(r => {
          this.formacao = r;
        });
    }
  },
  mounted: function () {
    this.buscarJson();
    // BACKGROUND NAVBAR ON SCROLL
    var vm = this;
    window.addEventListener('scroll', function () {
      vm.menuIsVisible = false;
      if (window.pageYOffset > 10) {
        vm.menuIsSticky = true;
      }
      else {
        vm.menuIsSticky = false;
      }

    });


  }

})