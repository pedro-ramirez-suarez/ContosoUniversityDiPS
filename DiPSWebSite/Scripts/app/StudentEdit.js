﻿require(["/Scripts/app/Student.controller.js", "/Scripts/app/Student.binding.js", "/Scripts/app/Student.validate.js", 'utils', 'typeahead'], function (StudentController, appViewModel, formValidator, utils, type) {
    var drew = false;
    var lastResult = [];
    var id = getParameterByName('id');
    //first we need to subscribe
    diPSClient.Subscribe('StudentReturned' + id, function (data) {
        var model = data.Student;
        appViewModel.add(model);
        formValidator.initViewModel(appViewModel);
        formValidator.initValidator();

        //the autocomplete
        $('.autocomplete').on('keyup', function (event) {
            //launch the search
            var query = $(this).val();
            if (query.length > 1) {
                //send the query
                diPSClient.Publish('Courses.SearchCourse', { query: query, id: id });
                if (!drew) {
                    //Create list for results
                    $('#addCourse').after('<ul id="res"></ul>');
                    drew = true;
                    $("#res").on("click", "li", function () {
                        //set the value on the hidden field
                        $('#addCourse').children('.autocomplete').val($(this).text());
                        $('#addCourse').children(':hidden:first').val($(this).attr('iId')).change();
                        //clear results
                        $("#res").empty();
                    });
                }
            } else if (drew) {
                $("#res").empty();
            }
        });

        $('.addCourse').on('click', function () {
            var cId = $('#CourseID').val();
            if (cId == '' || cId == undefined || cId == '00000000-0000-0000-0000-000000000000') {
                alert('You must select a value from the suggestions');
                return;
            }
            //add the course to the user and reload the page
            diPSClient.Publish('Students.AddCourse', { StudentId: id, CourseId: cId });
            window.location.reload();
        });

        $('.deleteCourse').on('click', function () {
            var cId = $(this).attr('id');
            //delete the course to the user and reload the page
            diPSClient.Publish('Students.DeleteCourse', { Id: cId });
            window.location.reload();
        });
    });




    diPSClient.Subscribe('CourseSearch' + id, function (data) {
        //compare the results, if are the same, do not redraw
        if (data.length == lastResult.length) {
            var equal = true;
            for (r in data) {
                if (data[r].Id != lastResult[r].Id) {
                    $("#res").empty();
                    equal = false;
                    break;
                }
            }
            if (equal)
                return; //all are the same
        }
        else
            $("#res").empty();
        //draw the results
        for (term in data) {
            $("#res").append("<li iId='" + data[term].Id + "'>" + data[term].Name + "</li>");
        }
        lastResult = data;
    });

    //get the Student
    diPSClient.Publish('Students.GetStudent', { Id: id });

});