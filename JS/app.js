'use strict'

var projects = [];

function Project(rawDataObj) {
  this.title = rawDataObj.title;
  this.projUrl = rawDataObj.projUrl;
  this.image = rawDataObj.image;
  this.category = rawDataObj.category;
  this.completedOn = rawDataObj.completedOn;
}

Project.prototype.toHtml = function() {
  var myprojectsList = $('#myprojectsList-template').html();
  var compiled = Handlebars.compile(myprojectsList);
  return compiled(this)
};


projects.forEach(function(Project) {
  $('#articles').append(Project.toHtml());
});

console.log('is this thing on');
function hideSections(){
  $('#main').siblings().hide();
}
function handleNav(){
  $('#navbut').on('click', 'button',
  function(){
    console.log($(this).html())
    $('#main').siblings().hide();
    $('#' + $(this).html()).show();
  })
}


// Project();
handleNav();
hideSections();
