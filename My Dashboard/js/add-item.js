$(function () {
    $('[data-toggle="popover"]').popover()
})

let main = ["Phone","TV","Fruit","Book","Coffee"];
let sub = [
    {name: "Apple",cetegory_id: 0},
    {name: "MI",cetegory_id: 0},
    {name: "Vivo",cetegory_id: 0},
    {name: "Oppo",cetegory_id: 0},
    {name: "Fuji",cetegory_id: 1},
    {name: "Mac",cetegory_id: 1},
    {name: "Panasonic",cetegory_id: 1},
    {name: "SONY",cetegory_id: 1},
    {name: "Orange",cetegory_id: 2},
    {name: "Strawberry",cetegory_id: 2},
    {name: "Pine Apple",cetegory_id: 2},
    {name: "Water Melon",cetegory_id: 2},
    {name: "Apolo",cetegory_id: 3},
    {name: "Unicolor",cetegory_id: 3},
    {name: "Top Choice",cetegory_id: 3},
    {name: "Premier",cetegory_id: 4},
    {name: "Super",cetegory_id: 4},
    {name: "Htoo Char",cetegory_id: 4},
    {name: "Gant Gaw",cetegory_id: 4}
];


main.map(function(el,index){
    $("#main").append(`<option value="${index}">${el}</option>`);
});

sub.map(function(el,index){
    $("#sub").append(`<option value="${index}"  item-id="${el.cetegory_id}">${el.name}</option>`);
});

$("#main").on("change",function(){
   let result = $(this).val();
   $("#sub option").hide();
   $(`[item-id = ${result}]`).show();
});


//For item list


$(".max-min").click(function(){
    $(".all-parent").toggleClass("view_screen");
    let has=$(".all-parent").hasClass("view_screen");
    if(has){
     $(".c").removeClass("feather-maximize-2");
     $(".c").addClass("feather-minimize-2");
    }else{
        $(".c").removeClass("feather-minimize-2");
        $(".c").addClass("feather-maximize-2");
    }
});

let screenHeight = $(window).height();
let see = $(".nav-menu .see").offset().top;

if(screenHeight-200 < see){
    $(".side").animate({
        scrollTop : see
    })
}


