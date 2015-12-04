define(['jquery', 'utils'], function ($, utils) {
    var ajaxCalls = {};
    var baseUrl = "/Student", //This is the controller on MVC%
        getStudentsUrl = baseUrl + "/GetStudents", //this is the method on the MVC5 controller
        getStudentUrl = baseUrl + "/GetStudent";
    
    function getStudents() {
        return utils.makeAjaxCall(getStudentsUrl);
    }
    
    function getStudent(id) {
        var data = {
            id: id    
        };
        
        return utils.makeAjaxCall(getStudentUrl, data);
    }
    
    ajaxCalls = {
        getStudents: getStudents,
        getStudent: getStudent
    };


    return ajaxCalls;
});
