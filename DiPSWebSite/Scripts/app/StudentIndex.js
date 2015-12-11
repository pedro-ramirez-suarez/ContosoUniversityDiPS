﻿require(["/Scripts/app/Student.controller.js", "/Scripts/app/Student.binding.js", 'moment', 'utils', 'underscore'], function (studentController, appViewModel, moment, utils, _) {
    //first we need to subscribe
    diPSClient.Subscribe('StudentsUpdated', function (data) {
        appViewModel.Students.removeAll();
        _.each(data.Students, function (item) {
            appViewModel.add(item);
        });
    });
    //then we need to publish
    diPSClient.Publish('Students.GetStudents', { id: '' });
});