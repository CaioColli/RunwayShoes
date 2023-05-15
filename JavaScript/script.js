alert ('Este projeto teve seu foco no desenvolvimento mobile. Para visualizar todas as funcionalidades do projeto, sugiro que o visualize em um dispositivo móvel ou aplique a responsividade em seu dispositivo uma resolução máxima de 700 pixels.')

// Show More Promo Flash

const arrowDownButton = document.querySelector('.flash_promo_icon_arrow_down')
const arrowUpButton = document.querySelector('.flash_promo_icon_arrow_up')

arrowDownButton.addEventListener('click', function () {
    const abautPromoFlash = document.querySelector('.promo_flash_abaut')
    abautPromoFlash.style.display = 'block'
    arrowDownButton.style.display = 'none'
    arrowUpButton.style.display = 'block'
})

arrowUpButton.addEventListener('click', function () {
    const abautPromoFlash = document.querySelector('.promo_flash_abaut')
    arrowDownButton.style.display = 'block'
    abautPromoFlash.style.display = 'none'
    arrowUpButton.style.display = 'none'
})

// Show More Promo Flash End

// Side Menu Burguer

const btnBurguer = document.querySelector('.nav_icon_burguer')
const btnExitBurguer = document.querySelector('.burguer_menu_header_exitIcon')
const sideMenu = document.querySelector('.burguer_menu')

btnBurguer.addEventListener('click', function () {
    sideMenu.style.left = '0'
    sideMenu.style.transform = 'translateX(0)'
})

btnExitBurguer.addEventListener('click', function () {
    sideMenu.style.left = '-28.125rem'
    sideMenu.style.transform = 'translateX(-28.125rem)'
})

document.addEventListener('click', function (event) {
    if (!sideMenu.contains(event.target) && !btnBurguer.contains(event.target)) {
        sideMenu.style.left = '-28.125rem';
    }
})

// Side Menu Burguer End  

// Carousel 

const carousel = document.querySelector('.carousel_abaut_content');
const carouselSlide = document.querySelectorAll('.carousel_abaut_content_slide');
const prevButton = document.querySelector('.carousel_abaut_icon_preview');
const nextButton = document.querySelector('.carousel_abaut_icon_next');
let positionSlide = 0;

function moveSlide(n) {
    carouselSlide[positionSlide].classList.remove('active');
    positionSlide = (n + carouselSlide.length) % carouselSlide.length;
    carouselSlide[positionSlide].classList.add('active');
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

function nextSlide() {
    moveSlide(positionSlide + 1);
    carousel.style.display = 'none'
}

function prevSlide() {
    moveSlide(positionSlide - 1);
}

setInterval(nextSlide, 4000)

// Carousel End

// Modal Of New Products

// Modal 1 
const btnBuy_1_flash = document.querySelector('#promo_flash_card_btnBuy_paragraph_1')
const btnClose_1_flash = document.querySelector('#promo_flash_card_modal_iconClose_1')
const btnBuyModal_1_flash = document.querySelector('#promo_flash_card_modal_btnBuy_1')
const modal_1_flash = document.querySelector('#promo_flash_card_modal_1')

const divTabletAndDesk = document.querySelector('.promo_flash_displayTabletDesk')


btnBuy_1_flash.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_1_flash.style.left = '0'
        modal_1_flash.style.position = 'relative'
        modal_1_flash.style.marginBottom = '1rem'

        document.addEventListener('click', function (event) {
            if (!modal_1_flash.contains(event.target) && !btnBuy_1_flash.contains(event.target)) { // Esse código faz com que ao clicar fora do Modal ele feche automaticamente
                modal_1_flash.style.left = '-21.875rem'
                setTimeout(function () {
                    modal_1_flash.style.position = "absolute"
                }, 950)
            }
        })
    } else if (window.innerWidth < 992) {
        modal_1_flash.style.position = 'relative'
        modal_1_flash.style.left = '0'

        document.addEventListener('click', function(event){
            if (!modal_1_flash.contains(event.target) && !btnBuy_1_flash.contains(event.target)) {
                modal_1_flash.style.left = '-37.5rem'
                setTimeout(function(){
                    modal_1_flash.style.position = 'absolute'
                }, 950)
            }
        })
    } else {

    }
}) 

btnClose_1_flash.addEventListener("click", function () {
    if (window.innerWidth < 700) {
        modal_1_flash.style.left = "-21.875rem"
        setTimeout(function () {
            modal_1_flash.style.position = "absolute"
        }, 950)
    } else if (window.innerWidth < 992) {
        modal_1_flash.style.left = '-37.5rem'
        setTimeout(function(){
            modal_1_flash.style.position = 'absolute'
        }, 950)
    } else {

    }
})

btnBuyModal_1_flash.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_1_flash.style.left = "-21.875rem"
        setTimeout(function () {
            modal_1_flash.style.position = "absolute"
        }, 950)
    } else if (window.innerWidth < 992) {
        modal_1_flash.style.left = '-37.5rem'
        setTimeout(function(){
            modal_1_flash.style.position = 'absolute'
        }, 950)
    } else {

    }
})
// Modal 1 End

// Modal 2
const btnBuy_2_flash = document.querySelector('#promo_flash_card_btnBuy_paragraph_2')
const btnClose_2_flash = document.querySelector('#promo_flash_card_modal_iconClose_2')
const btnBuyModal_2_flash = document.querySelector('#promo_flash_card_modal_btnBuy_2')
const modal_2_flash = document.querySelector('#promo_flash_card_modal_2')

btnBuy_2_flash.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_2_flash.style.left = '0'
        modal_2_flash.style.position = 'relative'
        modal_2_flash.style.marginBottom = '1rem'
    
        document.addEventListener('click', function (event) {
            if (!modal_2_flash.contains(event.target) && !btnBuy_2_flash.contains(event.target)) {
                modal_2_flash.style.left = '-21.875rem'
                setTimeout(function () {
                    modal_2_flash.style.position = "absolute"
                }, 950)
            }
        })
    } else if (window.innerWidth < 992) {
        modal_2_flash.style.position = 'relative'
        modal_2_flash.style.left = '0'

        document.addEventListener('click', function(event){
            if (!modal_2_flash.contains(event.target) && !btnBuy_2_flash.contains(event.target)) {
                modal_2_flash.style.left = '-37.5rem'
                setTimeout(function(){
                    modal_2_flash.style.position = 'absolute'
                }, 950)
            }
        })
    } else {

    }
})

btnClose_2_flash.addEventListener("click", function () {
    if (window.innerWidth < 700) {
        modal_2_flash.style.left = "-21.875rem"
        setTimeout(function () {
            modal_2_flash.style.position = "absolute"
        }, 950)
    } else if (window.innerWidth < 992) {
        modal_2_flash.style.left = '-37.5rem'
        setTimeout(function(){
            modal_2_flash.style.position = 'absolute'
        }, 950)
    } else {

    }
})

btnBuyModal_2_flash.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_2_flash.style.left = "-21.875rem"
        setTimeout(function () {
            modal_2_flash.style.position = "absolute"
        }, 950)
    } else if (window.innerWidth < 992) {
        modal_2_flash.style.left = '-37.5rem'
        setTimeout(function(){
            modal_2_flash.style.position = 'absolute'
        }, 950)
    } else {

    }
})
// Modal 2 End

// Modal 3
const btnBuy_3_flash = document.querySelector('#promo_flash_card_btnBuy_paragraph_3')
const btnClose_3_flash = document.querySelector('#promo_flash_card_modal_iconClose_3')
const btnBuyModal_3_flash = document.querySelector('#promo_flash_card_modal_btnBuy_3')
const modal_3_flash = document.querySelector('#promo_flash_card_modal_3')

btnBuy_3_flash.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_3_flash.style.left = '0'
        modal_3_flash.style.position = 'relative'
        modal_3_flash.style.marginBottom = '1rem'
    
        document.addEventListener('click', function (event) {
            if (!modal_3_flash.contains(event.target) && !btnBuy_3_flash.contains(event.target)) {
                modal_3_flash.style.left = '-21.875rem'
                setTimeout(function () {
                    modal_3_flash.style.position = "absolute"
                }, 950)
            }
        })
    } else if (window.innerWidth < 992) {
        modal_3_flash.style.position = 'relative'
        modal_3_flash.style.left = '0'

        document.addEventListener('click', function(event){
            if (!modal_3_flash.contains(event.target) && !btnBuy_3_flash.contains(event.target)) {
                modal_3_flash.style.left = '-37.5rem'
                setTimeout(function(){
                    modal_3_flash.style.position = 'absolute'
                }, 950)
            }
        })
    } else {

    }
})

btnClose_3_flash.addEventListener("click", function () {
    if (window.innerWidth < 700) {
        modal_3_flash.style.left = "-21.875rem"
        setTimeout(function () {
            modal_3_flash.style.position = "absolute"
        }, 950)
    } else if (window.innerWidth < 992) {
        modal_3_flash.style.left = '-37.5rem'
        setTimeout(function(){
            modal_3_flash.style.position = 'absolute'
        }, 950)
    } else {

    }
})

btnBuyModal_3_flash.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_3_flash.style.left = "-21.875rem"
        setTimeout(function () {
            modal_3_flash.style.position = "absolute"
        }, 950)
    } else if (window.innerWidth < 992) {
        modal_3_flash.style.left = '-37.5rem'
        setTimeout(function(){
            modal_3_flash.style.position = 'absolute'
        }, 950)
    } else {

    }
})
// Modal 3 End

// Modal 4
const btnBuy_4_flash = document.querySelector('#promo_flash_card_btnBuy_paragraph_4')
const btnClose_4_flash = document.querySelector('#promo_flash_card_modal_iconClose_4')
const btnBuyModal_4_flash = document.querySelector('#promo_flash_card_modal_btnBuy_4')
const modal_4_flash = document.querySelector('#promo_flash_card_modal_4')

btnBuy_4_flash.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_4_flash.style.left = '0'
        modal_4_flash.style.position = 'relative'
        modal_4_flash.style.marginBottom = '1rem'
    
        document.addEventListener('click', function (event) {
            if (!modal_4_flash.contains(event.target) && !btnBuy_4_flash.contains(event.target)) {
                modal_4_flash.style.left = '-21.875rem'
                setTimeout(function () {
                    modal_4_flash.style.position = "absolute"
                }, 950)
            }
        })
    } else if (window.innerWidth < 992) {
        modal_4_flash.style.position = 'relative'
        modal_4_flash.style.marginBottom = '2rem'
        modal_4_flash.style.left = '0'

        document.addEventListener('click', function(event){
            if (!modal_4_flash.contains(event.target) && !btnBuy_4_flash.contains(event.target)) {
                modal_4_flash.style.left = '-37.5rem'
                setTimeout(function(){
                    modal_4_flash.style.position = 'absolute'
                }, 950)
            }
        })
    } else {

    }
})

btnClose_4_flash.addEventListener("click", function () {
    if (window.innerWidth < 700) {
        modal_4_flash.style.left = "-21.875rem"
        setTimeout(function () {
            modal_4_flash.style.position = "absolute"
        }, 950)
    } else if (window.innerWidth < 992) {
        modal_4_flash.style.left = '-37.5rem'
        setTimeout(function(){
            modal_4_flash.style.position = 'absolute'
        }, 950)
    } else {

    }
})

btnBuyModal_4_flash.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_4_flash.style.left = "-21.875rem"
        setTimeout(function () {
            modal_4_flash.style.position = "absolute"
        }, 950)
    } else if (window.innerWidth < 992) {
        modal_4_flash.style.left = '-37.5rem'
        setTimeout(function(){
            modal_4_flash.style.position = 'absolute'
        }, 950)
    } else {

    }
})

// Modal 4 End

// Modal End

// Show More New Products

const btnShowMoreNewProducts = document.querySelector('#new_products_btn_showMore_newProducts')
const moreNewProducts = document.querySelector('#new_products_showMore_newProducts')
const btnSeeLessNewProducts = document.querySelector('#new_products_btn_seeLess_newProducts')

btnShowMoreNewProducts.addEventListener('click', function () {
    btnShowMoreNewProducts.style.display = 'none'
    moreNewProducts.style.left = '0'
    moreNewProducts.style.position = "relative"
})

btnSeeLessNewProducts.addEventListener('click', function () {
    moreNewProducts.style.left = '-21.875rem'
    setTimeout(function () {
        moreNewProducts.style.position = 'absolute'
    }, 950)
    setTimeout(function () {
        btnShowMoreNewProducts.style.display = 'inline-block'
    }, 980)
})

// Show More New Products End

// Modal Of New Products

// Modal 1
const btnBuy_1_new = document.querySelector('#new_product_content_btn_buyProduct_1')
const btnClose_1_new = document.querySelector('#new_product_modal_iconClose_1')
const modal_1_new = document.querySelector('#new_product_modal_1')
const btnBuyModal_1_new = document.querySelector('#new_card__btnBuy_1')

btnBuy_1_new.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_1_new.style.position = 'relative'
        modal_1_new.style.left = '0'
        modal_1_new.style.marginBottom = '1rem'
        document.addEventListener('click', function (event) {
            if (!modal_1_new.contains(event.target) && !btnBuy_1_new.contains(event.target)) {
                modal_1_new.style.left = '-21.875rem'
                setTimeout(function () {
                    modal_1_new.style.position = 'absolute'
                }, 950)
            }
        })
    } else {} //Desabilitei os modais na versão de tablet
})

btnClose_1_new.addEventListener('click', function () {
    modal_1_new.style.left = '-21.875rem'
    setTimeout(function () {
        modal_1_new.style.position = 'absolute'
    }, 950)
})

btnBuyModal_1_new.addEventListener('click', function () {
    modal_1_new.style.left = '-21.875rem'
    setTimeout(function () {
        modal_1_new.style.position = 'absolute'
    }, 950)
})
// Modal 1 End

// Modal 2
const btnBuy_2_new = document.querySelector('#new_product_content_btn_buyProduct_2')
const btnClose_2_new = document.querySelector('#new_product_modal_iconClose_2')
const modal_2_new = document.querySelector('#new_product_modal_2')
const btnBuyModal_2_new = document.querySelector('#new_card__btnBuy_2')

btnBuy_2_new.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_2_new.style.position = 'relative'
        modal_2_new.style.left = '0'
        modal_2_new.style.marginBottom = '1rem'
        document.addEventListener('click', function (event) {
            if (!modal_2_new.contains(event.target) && !btnBuy_2_new.contains(event.target)) {
                modal_2_new.style.left = '-21.875rem'
                setTimeout(function () {
                    modal_2_new.style.position = 'absolute'
                }, 950)
            }
        })
    } else {} //Desabilitei os modais na versão de tablet
})

btnClose_2_new.addEventListener('click', function () {
    modal_2_new.style.left = '-21.875rem'
    setTimeout(function () {
        modal_2_new.style.position = 'absolute'
    }, 950)
})

btnBuyModal_2_new.addEventListener('click', function () {
    modal_2_new.style.left = '-21.875rem'
    setTimeout(function () {
        modal_2_new.style.position = 'absolute'
    }, 950)
})
// Modal 2 End

// Modal 3 
const btnBuy_3_new = document.querySelector('#new_product_content_btn_buyProduct_3')
const btnClose_3_new = document.querySelector('#new_product_modal_iconClose_3')
const modal_3_new = document.querySelector('#new_product_modal_3')
const btnBuyModal_3_new = document.querySelector('#new_card__btnBuy_3')

btnBuy_3_new.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_3_new.style.position = 'relative'
        modal_3_new.style.left = '0'
        modal_3_new.style.marginBottom = '1rem'
        document.addEventListener('click', function (event) {
            if (!modal_3_new.contains(event.target) && !btnBuy_3_new.contains(event.target)) {
                modal_3_new.style.left = '-21.875rem'
                setTimeout(function () {
                    modal_3_new.style.position = 'absolute'
                }, 950)
            }
        })
    } else {} //Desabilitei os modais na versão de tablet
})

btnClose_3_new.addEventListener('click', function () {
    modal_3_new.style.left = '-21.875rem'
    setTimeout(function () {
        modal_3_new.style.position = 'absolute'
    }, 950)
})

btnBuyModal_3_new.addEventListener('click', function () {
    modal_3_new.style.left = '-21.875rem'
    setTimeout(function () {
        modal_3_new.style.position = 'absolute'
    }, 950)
})
// Modal 3 End
// Modal Of New Products End

// Modal Of More New Products
// Modal 1
const btnBuy_1_new_more = document.querySelector('#more_new_product_content_btn_buyProduct_1')
const btnClose_1_new_more = document.querySelector('#more_new_product_modal_iconClose_1')
const modal_1_new_more = document.querySelector('#more_new_product_modal_1')
const btnBuyModal_1_new_more = document.querySelector('#more_new_card__btnBuy_1')

btnBuy_1_new_more.addEventListener('click', function () {
    modal_1_new_more.style.position = "relative"
    modal_1_new_more.style.left = '0'
    modal_1_new_more.style.marginBottom = '1rem'

    document.addEventListener("click", function (event) {
        if (!modal_1_new_more.contains(event.target) && !btnBuy_1_new_more.contains(event.target)) {
            modal_1_new_more.style.left = '-21.875rem'
            setTimeout(function () {
                modal_1_new_more.style.position = 'absolute'
            }, 950)
        }
    })
})

btnClose_1_new_more.addEventListener('click', function () {
    modal_1_new_more.style.left = '-21.875rem'
    setTimeout(function () {
        modal_1_new_more.style.position = "absolute"
    }, 950)
})

btnBuyModal_1_new_more.addEventListener('click', function () {
    modal_1_new_more.style.left = '-21.875rem'
    setTimeout(function () {
        modal_1_new_more.style.position = 'absolute'
    }, 950)
})
// Modal 1 End

// Modal 2
const btnBuy_2_new_more = document.querySelector('#more_new_product_content_btn_buyProduct_2')
const btnClose_2_new_more = document.querySelector('#more_new_product_modal_iconClose_2')
const modal_2_new_more = document.querySelector('#more_new_product_modal_2')
const btnBuyModal_2_new_more = document.querySelector('#more_new_card__btnBuy_2')

btnBuy_2_new_more.addEventListener('click', function () {
    modal_2_new_more.style.position = "relative"
    modal_2_new_more.style.left = '0'
    modal_2_new_more.style.marginBottom = '1rem'
    document.addEventListener('click', function (event) {
        if (!modal_2_new_more.contains(event.target) && !btnBuy_2_new_more.contains(event.target)) {
            modal_2_new_more.style.left = '-21.875rem'
            setTimeout(function () {
                modal_2_new_more.style.position = 'absolute'
            }, 950)
        }
    })
})

btnClose_2_new_more.addEventListener('click', function () {
    modal_2_new_more.style.left = '-21.875rem'
    setTimeout(function () {
        modal_2_new_more.style.position = 'absolute'
    }, 950)
})

btnBuyModal_2_new_more.addEventListener('click', function () {
    modal_2_new_more.style.left = '-21.875rem'
    setTimeout(function () {
        modal_2_new_more.style.position = 'absolute'
    }, 950)
})
// Moldal 2 End

// Modal 3 
const btnBuy_3_new_more = document.querySelector('#more_new_product_content_btn_buyProduct_3')
const btnClose_3_new_more = document.querySelector('#more_new_product_modal_iconClose_3')
const modal_3_new_more = document.querySelector('#more_new_product_modal_3')
const btnBuyModal_3_new_more = document.querySelector('#more_new_card__btnBuy_3')

btnBuy_3_new_more.addEventListener('click', function () {
    modal_3_new_more.style.position = 'relative'
    modal_3_new_more.style.left = '0'
    modal_3_new_more.style.marginBottom = '1rem'
    document.addEventListener('click', function (event) {
        if (!modal_3_new_more.contains(event.target) && !btnBuy_3_new_more.contains(event.target)) {
            modal_3_new_more.style.left = '-21.875rem'
            setTimeout(function () {
                modal_3_new_more.style.position = 'absolute'
            }, 950)
        }
    })
})

btnClose_3_new_more.addEventListener('click', function () {
    modal_3_new_more.style.left = '-21.875rem'
    setTimeout(function () {
        modal_3_new_more.style.position = 'absolute'
    }, 950)
})

btnBuyModal_3_new_more.addEventListener('click', function () {
    modal_3_new_more.style.left = '-21.875rem'
    setTimeout(function () {
        modal_3_new_more.style.position = 'absolute'
    }, 950)
})
// Modal 3 End

// Modal End
// Modal Of New Products End

// Modal Of Sports Products

// Modal 1
const btnBuy_1_sports = document.querySelector('#sports_product_content_btn_buyProduct_1')
const btnClose_1_sports = document.querySelector('#sports_product_modal_iconClose_1')
const modal_1_sports = document.querySelector('#sports_product_modal_1')
const btnBuyModal_1_sports = document.querySelector('#sports_card__btnBuy_1')

btnBuy_1_sports.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_1_sports.style.position = 'relative'
        modal_1_sports.style.left = '0'
        modal_1_sports.style.marginBottom = '1rem'
        document.addEventListener('click', function (event) {
            if (!modal_1_sports.contains(event.target) && !btnBuy_1_sports.contains(event.target)) {
                modal_1_sports.style.left = '-21.875rem'
                setTimeout(function () {
                    modal_1_sports.style.position = 'absolute'
                }, 950)
            }
        })
    } else {} //Desabilitei os modais na versão de tablet
})

btnClose_1_sports.addEventListener('click', function () {
    modal_1_sports.style.left = '-21.875rem'
    setTimeout(function () {
        modal_1_sports.style.position = 'absolute'
    }, 950)
})

btnBuyModal_1_sports.addEventListener('click', function () {
    modal_1_sports.style.left = '-21.875rem'
    setTimeout(function () {
        modal_1_sports.style.position = 'absolute'
    }, 950)
})
// Modal 1 End

// Modal 2
const btnBuy_2_sports = document.querySelector('#sports_product_content_btn_buyProduct_2')
const btnClose_2_sports = document.querySelector('#sports_product_modal_iconClose_2')
const modal_2_sports = document.querySelector('#sports_product_modal_2')
const btnBuyModal_2_sports = document.querySelector('#sports_card__btnBuy_2')

btnBuy_2_sports.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_2_sports.style.position = 'relative'
        modal_2_sports.style.left = '0'
        modal_2_sports.style.marginBottom = '1rem'
        document.addEventListener('click', function (event) {
            if (!modal_2_sports.contains(event.target) && !btnBuy_2_sports.contains(event.target)) {
                modal_2_sports.style.left = '-21.875rem'
                setTimeout(function () {
                    modal_2_sports.style.position = 'absolute'
                }, 950)
            }
        })
    } else {} //Desabilitei os modais na versão de tablet
})

btnClose_2_sports.addEventListener('click', function () {
    modal_2_sports.style.left = '-21.875rem'
    setTimeout(function () {
        modal_2_sports.style.position = 'absolute'
    }, 950)
})

btnBuyModal_2_sports.addEventListener('click', function () {
    modal_2_sports.style.left = '-21.875rem'
    setTimeout(function () {
        modal_2_sports.style.position = 'absolute'
    }, 950)
})
// Modal 2 End


// Modal 3
const btnBuy_3_sports = document.querySelector('#sports_product_content_btn_buyProduct_3')
const btnClose_3_sports = document.querySelector('#sports_product_modal_iconClose_3')
const modal_3_sports = document.querySelector('#sports_product_modal_3')
const btnBuyModal_3_sports = document.querySelector('#sports_card__btnBuy_3')

btnBuy_3_sports.addEventListener('click', function () {
    if (window.innerWidth < 700) {
        modal_3_sports.style.position = 'relative'
        modal_3_sports.style.left = '0'
        modal_3_sports.style.marginBottom = '1rem'
        document.addEventListener('click', function (event) {
            if (!modal_3_sports.contains(event.target) && !btnBuy_3_sports.contains(event.target)) {
                modal_3_sports.style.left = '-21.875rem'
                setTimeout(function () {
                    modal_3_sports.style.position = 'absolute'
                }, 950)
            }
        })
    } else {} //Desabilitei os modais na versão de tablet
})

btnClose_3_sports.addEventListener('click', function () {
    modal_3_sports.style.left = '-21.875rem'
    setTimeout(function () {
        modal_3_sports.style.position = 'absolute'
    }, 950)
})

btnBuyModal_3_sports.addEventListener('click', function () {
    modal_3_sports.style.left = '-21.875rem'
    setTimeout(function () {
        modal_3_sports.style.position = 'absolute'
    }, 950)
})
// Modal 3 End

// Show More Sports Products

const btnShowMoreSports = document.querySelector('#sports_products_btn_showMore')
const moreSportsProducts = document.querySelector('#sports_products_showMore')
const btnSeeLessSportsProducts = document.querySelector('#sports_products_btn_seeLess_newProducts')

btnShowMoreSports.addEventListener('click', function () {
    btnShowMoreSports.style.display = 'none'
    moreSportsProducts.style.left = '0'
    moreSportsProducts.style.position = "relative"
})

btnSeeLessSportsProducts.addEventListener('click', function () {
    moreSportsProducts.style.left = '-21.875rem'
    setTimeout(function () {
        moreSportsProducts.style.position = 'absolute'
    }, 950)
    setTimeout(function () {
        btnShowMoreSports.style.display = 'inline-block'
    }, 980)
})

// Show More New Products End

// Modal Of More Sports Products
// Modal 1
const btnBuy_1_sports_more = document.querySelector('#more_sports_product_content_btn_buyProduct_1')
const btnClose_1_sports_more = document.querySelector('#more_sports_product_modal_iconClose_1')
const modal_1_sports_more = document.querySelector('#more_sports_product_modal_1')
const btnBuyModal_1_sports_more = document.querySelector('#more_sports_card__btnBuy_1')

btnBuy_1_sports_more.addEventListener('click', function () {
    modal_1_sports_more.style.position = "relative"
    modal_1_sports_more.style.left = '0'
    modal_1_sports_more.style.marginBottom = '1rem'

    document.addEventListener("click", function (event) {
        if (!modal_1_sports_more.contains(event.target) && !btnBuy_1_sports_more.contains(event.target)) {
            modal_1_sports_more.style.left = '-21.875rem'
            setTimeout(function () {
                modal_1_sports_more.style.position = 'absolute'
            }, 950)
        }
    })
})

btnClose_1_sports_more.addEventListener('click', function () {
    modal_1_sports_more.style.left = '-21.875rem'
    setTimeout(function () {
        modal_1_sports_more.style.position = "absolute"
    }, 950)
})

btnBuyModal_1_sports_more.addEventListener('click', function () {
    modal_1_sports_more.style.left = '-21.875rem'
    setTimeout(function () {
        modal_1_sports_more.style.position = 'absolute'
    }, 950)
})
// Modal 1 End

// Modal 2
const btnBuy_2_sports_more = document.querySelector('#more_sports_product_content_btn_buyProduct_2')
const btnClose_2_sports_more = document.querySelector('#more_sports_product_modal_iconClose_2')
const modal_2_sports_more = document.querySelector('#more_sports_product_modal_2')
const btnBuyModal_2_sports_more = document.querySelector('#more_sports_card__btnBuy_2')

btnBuy_2_sports_more.addEventListener('click', function () {
    modal_2_sports_more.style.position = "relative"
    modal_2_sports_more.style.left = '0'
    modal_2_sports_more.style.marginBottom = '1rem'

    document.addEventListener("click", function (event) {
        if (!modal_2_sports_more.contains(event.target) && !btnBuy_2_sports_more.contains(event.target)) {
            modal_2_sports_more.style.left = '-21.875rem'
            setTimeout(function () {
                modal_2_sports_more.style.position = 'absolute'
            }, 950)
        }
    })
})

btnClose_2_sports_more.addEventListener('click', function () {
    modal_2_sports_more.style.left = '-21.875rem'
    setTimeout(function () {
        modal_2_sports_more.style.position = "absolute"
    }, 950)
})

btnBuyModal_2_sports_more.addEventListener('click', function () {
    modal_2_sports_more.style.left = '-21.875rem'
    setTimeout(function () {
        modal_2_sports_more.style.position = 'absolute'
    }, 950)
})
// Modal 2 End

// Modal 2
const btnBuy_3_sports_more = document.querySelector('#more_sports_product_content_btn_buyProduct_3')
const btnClose_3_sports_more = document.querySelector('#more_sports_product_modal_iconClose_3')
const modal_3_sports_more = document.querySelector('#more_sports_product_modal_3')
const btnBuyModal_3_sports_more = document.querySelector('#more_sports_card__btnBuy_3')

btnBuy_3_sports_more.addEventListener('click', function () {
    modal_3_sports_more.style.position = "relative"
    modal_3_sports_more.style.left = '0'
    modal_3_sports_more.style.marginBottom = '1rem'

    document.addEventListener("click", function (event) {
        if (!modal_3_sports_more.contains(event.target) && !btnBuy_3_sports_more.contains(event.target)) {
            modal_3_sports_more.style.left = '-21.875rem'
            setTimeout(function () {
                modal_3_sports_more.style.position = 'absolute'
            }, 950)
        }
    })
})

btnClose_3_sports_more.addEventListener('click', function () {
    modal_3_sports_more.style.left = '-21.875rem'
    setTimeout(function () {
        modal_3_sports_more.style.position = "absolute"
    }, 950)
})

btnBuyModal_3_sports_more.addEventListener('click', function () {
    modal_3_sports_more.style.left = '-21.875rem'
    setTimeout(function () {
        modal_3_sports_more.style.position = 'absolute'
    }, 950)
})
// Modal 2 End