/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function start_first_popup(x) {
    var y = x;
    $("#check_login_type").val('home_start');
    $("#pop_up_background").show();
    $("#home_start_first_popup").show();
    if (y === 1)
        $("#home_start_first_popup_extension").hide();
    else
        $("#home_start_first_popup_extension").show();

}


function close_start_first_popup() {
    $("#home_start_first_popup").hide("fast");
    $("#pop_up_background").hide('slow');
    $("#login_link").show();
    window.scroll(0, 0);
}

function home_start_person_box() {
    $("#home_start_first_popup").hide();
    $("#home_start_person_box").show();
    window.scroll(0, 0);

}

function back_home_start_person() {
    $("#home_start_person_box").hide();
    $("#home_start_first_popup").show();
    window.scroll(0, 0);
}

function close_home_start_person() {
    $("#home_start_person_box").hide();
    $("#pop_up_background").hide();
    window.scroll(0, 0);
    $("#login_link").show();
}

function start_eligible_personal_details() {
    $("#check_person_backbutton").val('home_start_person');
    $("#user_type").val('same-building');
    $("#home_start_person_box").hide();
    $("#start_eligible_personal_details").show();
    window.scroll(0, 0);
}


function close_start_eligible_personal_details() {
    $("#start_eligible_personal_details").hide("fast");
    $("#pop_up_background").hide('fast');
    window.scroll(0, 0);
}
function back_start_eligible_personal_details() {

    $("#start_eligible_personal_details").hide();
    if ($(check_person_backbutton).val() === 'home_start_person') {
        $("#home_start_person_box").show('fast');
    }
    else if ($(check_person_backbutton).val() === 'start_person_type_residence') {
        $("#start_person_type_popup").show('fast');
    }
    else if ($(check_person_backbutton).val() === 'start_person_type_office') {
        $("#start_person_type_popup").show('fast');
    }

    window.scroll(0, 0);
}

function start_person_type_box() {
    $("#home_start_person_box").hide();
    $("#start_person_type_popup").show();
    window.scroll(0, 0);

}

function close_start_person_type_popup() {
    $("#start_person_type_popup").hide();
    $("#pop_up_background").hide();
    window.scroll(0, 0);
}
function back_start_person_type_popup() {
    $("#start_person_type_popup").hide();
    $("#home_start_person_box").show();
    window.scroll(0, 0);
}



function request_create_residence() {

    $("#check_person_backbutton").val('start_person_type_residence');
    $("#user_type").val('request-residence');
    $("#start_person_type_popup").hide();
    $("#home_start_person_box").hide();
    $("#start_eligible_personal_details").show();

}
function request_create_office() {

    $("#check_person_backbutton").val('start_person_type_office');
    $("#user_type").val('request-office');
    $("#start_person_type_popup").hide();
    $("#home_start_person_box").hide();
    $("#start_eligible_personal_details").show();
}

function home_start_person_business_details() {
    $("#home_start_first_popup").hide();
    $("#home_start_person_business_details").show();
    window.scroll(0, 0);
}


function close_home_start_person_business_details() {
    $("#home_start_person_business_details").hide();
    $("#pop_up_background").hide();
    window.scroll(0, 0);
}
function back_home_start_person_business_details() {
    $("#home_start_person_business_details").hide();
    $("#home_start_first_popup").show();
    window.scroll(0, 0);
}

function home_start_person_business_greet() {
    $("#home_start_person_business_details").hide();
    $("#home_start_person_business_greet").show();
    window.scroll(0, 0);
}


function home_start_person_personoffice_greet() {
    $("#home_start_person_business_details").hide();
    $("#home_start_person_personoffice_greet").show();
    window.scroll(0, 0);
}

function close_home_start_person_business_greet() {
    $("#home_start_person_business_greet").hide();
    $("#pop_up_background").hide();
    window.scroll(0, 0);
}
function close_home_start_person_personoffice_greet() {
    $("#home_start_person_personoffice_greet").hide();
    $("#pop_up_background").hide();
    window.scroll(0, 0);
}

function forgot_password_show() {
    $("#home_start_first_popup").hide();
    $("#password_forgot_popup").show();
    window.scroll(0, 0);

}
function close_forgot_password_shows() {
    $("#password_forgot_popup").hide();
    $("#pop_up_background").hide();
    $(".button_previous").show();
    $("#password_request_email").show();
    $("#password_request_text").hide();
    window.scroll(0, 0);
}
function back_forgot_password_show() {
    $("#password_forgot_popup").hide();
    $("#home_start_first_popup").show();
    window.scroll(0, 0);
}

function password_reset_link() {
    $("#password_request_email").hide();
    $("#password_request_text").show();
    $(".button_previous").hide();

    window.scroll(0, 0);
}



function userpage_show() {

    $("#home_start_first_popup").hide();
    $("#homepage_header").hide();
    $("#home_page").hide();
    $("#start_eligible_personal_details").hide();

    $("#userpage_body_body").show();


}
function userpage_plan_select() {
    $("#pop_up_background2").show();

    $("#gear_account_show").hide();
    $(".setting_icon").show();
    $("#start_eligible_plan_select_box").show();

}





function close_start_eligible_plan_select_box() {
    $("#start_eligible_plan_select_box").hide();
    $("#pop_up_background2").hide();
}


function start_eligible_duration_select() {
    $("#start_eligible_plan_select_box").hide();
    $("#start_eligible_duration_select").show();
    window.scroll(0, 0);
}

function close_start_eligible_duration_select() {
    $("#start_eligible_duration_select").hide();
    $("#pop_up_background2").hide();
}
function back_start_eligible_duration_select() {
    $("#start_eligible_duration_select").hide();
    $("#start_eligible_plan_select_box").show();
}


function the_end() {
    alert("hehe this is demo so cant show all the steps... thank you vignesh :)");
    $("#start_eligible_duration_select").hide();
    $("#pop_up_background2").hide();
}


function user_logout() {
    $(".setting_icon").show();
    $("#pop_up_background2").hide();
    $("#pop_up_background").hide();
    $("#gear_account_show").hide();
    $("#userpage_body_body").hide();


    $("#homepage_header").show();
    $("#home_page").show();




}