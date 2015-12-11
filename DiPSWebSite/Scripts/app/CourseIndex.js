﻿require(["/Scripts/app/Course.controller.js", "/Scripts/app/Course.binding.js", 'moment', 'utils', 'underscore'], function (courseController, appViewModel, moment, utils, _) {
    //first we need to subscribe
    diPSClient.Subscribe('CoursesUpdated', function (data) {
        appViewModel.Courses.removeAll();
        _.each(data.courses, function (item) {
            appViewModel.add(item);
        });
    });
    //then we need to publish
    diPSClient.Publish('Courses.GetCourses', { id: '' });
});