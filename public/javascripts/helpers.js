
$('.feature').click(function (event) {
  let $newImg = event.target.attributes[1].value
  $('#projectImg').attr('src', `images/Bettergram/${$newImg}.gif`)
})
$('.feature2').click(function (event) {
  let $newImg = event.target.attributes[1].value
  $('#projectImg2').attr('src', `images/AlphaBlog/${$newImg}.gif`)
})

