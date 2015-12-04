define(['jquery', 'utils'], function ($, utils) {
    var ajaxCalls = {};
    var baseUrl = "/Course", //This is the controller on MVC%
        getCoursesUrl = baseUrl + "/GetCourses", //this is the method on the MVC5 controller
        getCourseUrl = baseUrl + "/GetCourse";
    
    function getCourses() {
        return utils.makeAjaxCall(getCoursesUrl);
    }
    
    function getCourse(id) {
        var data = {
            id: id    
        };
        
        return utils.makeAjaxCall(getCourseUrl, data);
    }
    
    ajaxCalls = {
        getCourses: getCourses,
        getCourse: getCourse
    };


    return ajaxCalls;
});
