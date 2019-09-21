// let $showing  = false;

$('#postForm').hide();
$('#contactMe').hide();

$('.feature').click(event => {
  let $newImg = event.target.attributes[1].value
  $('#projectImg').attr('src', `images/Bettergram/${$newImg}.gif`)
})
$('.feature2').click(event => {
  let $newImg = event.target.attributes[1].value
  $('#projectImg2').attr('src', `images/AlphaBlog/${$newImg}.gif`)
})

// $('#commentToggle').click(event => {
//   if($showing){
//     $('#postForm').hide();
//   }else{
//     $('#postForm').show();
//   }
// })

$('#mailTo').click(() => {
  $('#contactMe').show();
})


