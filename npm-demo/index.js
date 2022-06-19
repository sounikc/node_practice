var _= require('underscore');

var isCourseAvailable = (course)=>{
    var courses = ['Angular','React.JS','Node.JS'];
    var res =  _.contains(courses, course);
    return res;
}

console.log(isCourseAvailable('Angular'));