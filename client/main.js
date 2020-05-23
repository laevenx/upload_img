function upload(event) {
    event.preventDefault()
    let bodyFormData = new FormData()
    bodyFormData.append('url', $('input[type=file]')[0].files[0])
    $.ajax({
        url: 'http://localhost:3000/',
        method: 'post',
        processData: false,
        contentType: false,
        data: bodyFormData
    })
        .done(data => {
            $('.result').append(`<img src="${data.url}">`)
        })
        .fail(err => {
            console.log(err)
        })   
}