$('.feature').click(function(event){
    let $newImg = event.target.attributes[1].value;
    $('#projectImg').attr('src',`images/Bettergram/${$newImg}.gif`)
})