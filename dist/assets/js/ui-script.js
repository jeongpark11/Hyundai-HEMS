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
    });

    // 모달 interaction
    const btnCk = $('.pop-ck');
    const btnCl = $('.pop-cl');
    const btnDel = $('.pop-del');
    const tbBtnDel = $('button.del');
    const btnChange = $('');

    // 모달 보여지기/사라지기 함수 (모달dom, 상태(1:show, 0:hide))
    const modalShowHide=function(modal,sh){
        !sh? 
        (modal.parents('.modal').removeClass('active'),
        $('.dimmed').css('display','none'))
        : 
        (modal.addClass('active'),
        $('.dimmed').css('display','block'));
    };

    btnCk.click(function(){
        modalShowHide($(this),0);
    })

    tbBtnDel.click(function(){
        modalShowHide($('.modal.del'),1);
    })
    
    btnCl.click(function(){
        modalShowHide($(this),0);
    })

    btnDel.click(function(){
        modalShowHide($(this),0);
        modalShowHide($('.modal.fail'),1);
    });

    
})