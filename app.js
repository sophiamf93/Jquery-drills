
$(document).ready(function () {
    let inputText = $("#text-input")
    let btnSubmit = $('#btnSubmit')
    let myDiv = $('<div id="newDiv"></div>');

    btnSubmit.on('click', function (event) {
        let randomColors = [
            "pink",
            "yellow",
            "purple",
            "green",
            "tomato",
            "blue",
            "peachpuff",
            "orange",
            "brown",
        ]
        let newUl = $('<ul id="new list"></ul>');
        let li = $(`<li>${inputText.val()}</li>`)
        event.preventDefault()
        $('form').submit(function () {
            alert(inputText.val());
        });


        newUl.append(li);
        myDiv.append(newUl)
        $('body').append(myDiv)

        li.click(function () {
            $(this).css('color', randomColors[Math.floor(Math.random() * randomColors.length)]);

        })

        li.dblclick(function (e) {
            $(e.target).remove();

        })
    });

    // $("<div><h2></h2></div>").appendTo("body")


    btnSubmit.click(function (event) {

        // let h2 = $(`<h2>${$inputText.val()}</h2>`)
        //     myDiv.append(h2); 
        // $(li).mouseover(function (event) {
        //     $(this).css({
        //         "background-color": "blue",
        //         "border-radius": "2px"
        //     });
        // });
    });






})

