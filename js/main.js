$(document).ready(function(){

    //As a User (AAU), I don't want to see any developer skills when the page first loads so that I can start with a fresh slate.
    
    $("ul").css("display", "none");

    //AAU, I want to be able to type in a skill and have it added to my list of skills by clicking a button.
    //I know the code below doesn't work, but I figured I would play out how I was hoping it should work and then see exactly how far off I am!

    function newLi(){
        var skill = $(`<li class="newSkill"></li>`);

        $("ul").append(skill);
        $("newSkill").append(input=text);
    };

        $("#addSkill").on("click", function(){
            $("ul").append(skill);
        
    });


    //AAU, I want to be able to remove an individual skill one at a time in case I make a mistake.

    $("#delete").on("click", function(){
        $("#delete li").remove

    });


});