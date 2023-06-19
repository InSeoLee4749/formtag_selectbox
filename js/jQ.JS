//jQuery의 $가 충돌되지 않도록, jb를 $대신 사용하겠다(내이름 이니셜적기)
// var jb = jQuery.noConflict();
// jb(document).ready(function () {});
// const IISjQ = Query.noConflict();

$(function () {
    $("#emailsection .form-select").change(function () {
        if ($(this).val() == "직접입력" || $(this).val() == "") {
            $("#emailsection").addClass("act");
            $("#emailsection.directw").focus();
        } else {
            if ($(this).val() == "naver.com" || $(this).val() == "") {
                $("#emailsection").removeClass("act");
            }
        }
    });
});
