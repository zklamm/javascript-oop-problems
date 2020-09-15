function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(this.name + ' is a ' + this.year + ' year student');
    },

    listCourses: function() {
      return this.courses;
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    getCourse: function(code) {
      return this.courses.find(function(course) {
        return course.code === code;
      });
    },

    addNote: function(code, note) {
      var course = this.getCourse(code);
      course.notes ? course.notes.push(note) : course.notes = [note];
    },

    viewNotes: function() {
      this.courses.forEach(function(course) {
        if (course.notes) {
          console.log(course.name + ': ' + course.notes.join('; '));
        }
      });
    },

    updateNote: function(code, newNote) {
      var course = this.getCourse(code);
      course.notes = [newNote];
    },
  }
}

var school = {

};

var foo = 