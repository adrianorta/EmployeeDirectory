const randomUserAPI = 'https://randomuser.me/api/?results=12';
const userOptions = {dataType: 'json'};
function displayEmployees(data){
  let employeeDisplayHTML = '<h1>AWESOME STARTUP EMPLOYEE DIRECTORY</h1><ul>';
  $.each(data.results, (i, user) => {
    employeeDisplayHTML += '<a href="'+ user.picture.large +'" data-lightbox="employee"';
    employeeDisplayHTML += 'data-title="'
    + user.name.first + ' ' + user.name.last + '<br>'
    + user.login.username + '<br>'
    + user.location.street + ' ' + user.location.city + ', ' + user.location.state + ' ' + user.location.postcode + '<br> DOB: '
    +convertDate(user.dob) + '<br>'
    +user.phone+'">'
    employeeDisplayHTML += '<li class="empBox">';
    employeeDisplayHTML += '<img src="'+ user.picture.large +'">';
    employeeDisplayHTML += '<div class="empContent"><h2>' + user.name.first + ' ' + user.name.last + '</h2>';
    employeeDisplayHTML += '<h3>' + user.email + '</h3>';
    employeeDisplayHTML += '<h3>' + user.location.city + '</h3>';
    employeeDisplayHTML += '</div></li></a>';
  }); // end each
  employeeDisplayHTML += '</ul>';
  $('#content').html(employeeDisplayHTML);
} // end displayEmployees
$.getJSON(randomUserAPI, userOptions, displayEmployees);
function convertDate(userDate){
  let date= new Date(userDate);
  let yr = date.getFullYear();
  let month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
  let day = date.getDate()  < 10 ? '0' + date.getDate()  : date.getDate();
  let newDate = yr + '-' + month + '-' + day;
  return newDate;
}
