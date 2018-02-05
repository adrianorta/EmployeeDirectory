const randomUserAPI = 'https://randomuser.me/api/?results=12';
const userOptions = {dataType: 'json'};
function displayEmployees(data){
  let employeeDisplayHTML = '<h1>AWESOME STARTUP EMPLOYEE DIRECTORY</h1><ul>';
  $.each(data.results, (i, user) => {
    // employeeDisplayHTML += '<a href="'+ user.picture.large +'" data-lightbox="employee"';
    // employeeDisplayHTML += 'data-title="'
    // + user.name.first + ' ' + user.name.last + '<br>'
    // + user.login.username + '<br>'
    // + user.location.street + ' ' + user.location.city + ', ' + user.location.state + ' ' + user.location.postcode + '<br> DOB: '
    // +convertDate(user.dob) + '<br>'
    // +user.phone+'">';
    employeeDisplayHTML += '<a href="#"data-toggle="modal" data-target="#'+ user.login.username +'">';
    employeeDisplayHTML += '<li class="empBox">';
    employeeDisplayHTML += '<img src="'+ user.picture.large +'">';
    employeeDisplayHTML += '<div class="empContent"><h2 class="capitalize">' + user.name.first + ' ' + user.name.last + '</h2>';
    employeeDisplayHTML += '<h3>' + user.email + '</h3>';
    employeeDisplayHTML += '<h3 class="capitalize">' + user.location.city + '</h3>';
    employeeDisplayHTML += '</div></li></a>';

    employeeDisplayHTML += '<div class="modal fade" id="'+ user.login.username +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
    employeeDisplayHTML += '<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header">';
    employeeDisplayHTML += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    employeeDisplayHTML += '<span aria-hidden="true">&times;</span></button></div>';
    employeeDisplayHTML += '<div class="modal-body">';
    employeeDisplayHTML += '<img src="'+ user.picture.large +'">'
    employeeDisplayHTML += '<h2 class="capitalize">'+ user.name.first + ' ' + user.name.last + '</h2>'
    employeeDisplayHTML += '<h3 class="capitalize">'+ user.login.username +'</h3>'
    employeeDisplayHTML += '<h3>' + user.email + '</h3>';
    employeeDisplayHTML += '<hr />';
    employeeDisplayHTML += '<h3 class="capitalize">'+user.phone+ '</h3>'
    employeeDisplayHTML += '<h3 class="capitalize">'+ user.location.street + ' ' + user.location.city + ', ' + user.location.state + ' ' + user.location.postcode + '</h3>'

    employeeDisplayHTML += '<h3 class="capitalize">Birthday:' +convertDate(user.dob) + '</h3>'

    employeeDisplayHTML += '</div></div></div></div>';
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
  let newDate = month + '/' + day + '/' + yr;
  return newDate;
}
