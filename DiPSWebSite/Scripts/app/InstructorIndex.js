require(["/Scripts/app/Instructor.controller.js", "/Scripts/app/Instructor.binding.js", 'moment', 'utils', 'underscore'], function (instructorController, appViewModel, moment, utils, _) {
    //first we need to subscribe
    diPSClient.Subscribe('InstructorsUpdated', function (data) {
        appViewModel.Instructors.removeAll();
        _.each(data.Instructors, function (item) {
            appViewModel.add(item);
        });
    });
    //then we need to publish
    diPSClient.Publish('Instructors.GetInstructors', { id: '' });
});