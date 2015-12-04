define(['jquery', 'utils'], function ($, utils) {
    var ajaxCalls = {};
    var baseUrl = "/Instructor", //This is the controller on MVC%
        getInstructorsUrl = baseUrl + "/GetInstructors", //this is the method on the MVC5 controller
        getInstructorUrl = baseUrl + "/GetInstructor";
    
    function getInstructors() {
        return utils.makeAjaxCall(getInstructorsUrl);
    }
    
    function getInstructor(id) {
        var data = {
            id: id    
        };
        
        return utils.makeAjaxCall(getInstructorUrl, data);
    }
    
    ajaxCalls = {
        getInstructors: getInstructors,
        getInstructor: getInstructor
    };


    return ajaxCalls;
});
