function makeCountry(name, continent, visited = false) {
  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '.' +
        ' I have' + (this.visited ? '' : "n't") + ' visited ' + this.name;
    },

    visitCountry: function() {
      this.visited = true;
    }
  };
}