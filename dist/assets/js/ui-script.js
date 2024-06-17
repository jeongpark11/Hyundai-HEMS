$(function(){

    // 카테고리 interaction
    const cat =  $('.categories .ct-title');
    const expCat = $('.categories .expand>ul li');
    cat.click(function(){
        const exp =  $(this).parents('.expand');
        const ico =  $(this).children('i.open');
        expCat.removeClass('active');
        $(this).next().children().first().addClass('active');
        ico.attr('class','close');
        exp.attr('class').includes('open')?
        exp.toggleClass('open'):
        (cat.parents('.expand').removeClass('open'),exp.toggleClass('open'));
    });
    expCat.click(function(){
        expCat.removeClass('active');
        $(this).addClass('active');
    })



    // 페이지네이션 interaction
    const page =  $('.pagination .pg');
    page.click(function(){
        page.removeClass('active');
        $(this).addClass('active');
    })
})