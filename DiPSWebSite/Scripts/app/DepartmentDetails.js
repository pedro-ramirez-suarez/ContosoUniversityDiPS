﻿require(["/Scripts/app/Department.controller.js", "/Scripts/app/Department.binding.js", 'utils'], function (departmentController, appViewModel, utils) {
    var id = getParameterByName('id');
    //first we need to subscribe
    diPSClient.Subscribe('DepartmentReturned' + id, function (data) {
        var model = data.Department;
        appViewModel.add(model);
    });
    //then we need to publish
    diPSClient.Publish('Departments.GetDepartment', { Id: id });
});