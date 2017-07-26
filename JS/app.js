'use strict';

var projects = [];

function Myproject(rawDataObj) {
  console.log(rawDataObj);
  this.title = rawDataObj.title;
  this.projUrl = rawDataObj.projUrl;
  this.image = rawDataObj.image;
  this.category = rawDataObj.category;
  this.completedOn = rawDataObj.completedOn;
}

Myproject.prototype.toHTML = function() {
  var myprojectsList = $('#project-template').text();
  var compiled = Handlebars.compile(myprojectsList);
  console.log(this);
  return compiled(this)
};


$('#articles').append(compiled(this));
rawData.forEach(function(project) {
  projects.push(new Myproject(project));
})

Myproject.forEach(function(this) {
  $('#projects').append(compiled(this));
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


// Myproject();
handleNav();
hideSections();
