$(document).ready(function fun () {
    $('form').on('submit',function fun (e) {
        e.preventDefault()
        const ul = $('ul')
        let val = $('#tarefa').val()
        $('#tarefa').val('')
        $(`<li><a class='uncheck' id='${val}'>${val}</a></li>`).appendTo(ul)
    })
    $('ul').on('click',function fun (e) {
        console.log(e.target)
        e.target.className = e.target.className == 'uncheck' ? 'check' : 'uncheck'
    })
})
