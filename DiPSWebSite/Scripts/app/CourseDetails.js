require(["/Scripts/app/Course.controller.js", "/Scripts/app/Course.binding.js", 'utils'], function (courseController, appViewModel, utils) {
    var id = getParameterByName('id');
    //first we need to subscribe
    diPSClient.Subscribe('CourseReturned' + id, function (data) {
        var model = data.course;
        console.log(model);
        appViewModel.add(model);
    });
    //then we need to publish
    diPSClient.Publish('Courses.GetCourse', { Id: id });
});