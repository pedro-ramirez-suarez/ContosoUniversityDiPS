define(['jquery', 'utils'], function ($, utils) {
    var ajaxCalls = {};
    var baseUrl = "/Department", //This is the controller on MVC%
        getDepartmentsUrl = baseUrl + "/GetDepartments", //this is the method on the MVC5 controller
        getDepartmentUrl = baseUrl + "/GetDepartment";
    
    function getDepartments() {
        return utils.makeAjaxCall(getDepartmentsUrl);
    }
    
    function getDepartment(id) {
        var data = {
            id: id    
        };
        
        return utils.makeAjaxCall(getDepartmentUrl, data);
    }
    
    ajaxCalls = {
        getDepartments: getDepartments,
        getDepartment: getDepartment
    };


    return ajaxCalls;
});
