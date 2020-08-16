/**
 * @description login and registion logic
 * @author Uni
 */

/**
 * 
 * @param {string} type 
 * @description login and register switch
 */
function handleChange() {
    const status = $('.switch').is('.login-switch');
    if (status) {
        $('#app').removeClass('app-login').addClass('app-sign')
        $('.container-title').removeClass('container-title-login').addClass('container-title-sign').text('注册')
        $('.input-box').removeClass('login-input').addClass('sign-input')
        $('.input-bottom').removeClass('login-background').addClass('sign-background')
        $('.button').removeClass('login-background').addClass('sign-background').text('注册')
        $('.switch').removeClass('login-switch').addClass('sign-switch').text('已有账号？赶快登录吧 >>')
        $('input').val('')
    } else if (!status){
        $('#app').removeClass('app-sign').addClass('app-login')
        $('.container-title').removeClass('container-title-sign').addClass('container-title-login').text('登录')
        $('.input-box').removeClass('sign-input').addClass('login-input')
        $('.input-bottom').removeClass('sign-background').addClass('login-background')
        $('.button').removeClass('sign-background').addClass('login-background').text('登录')
        $('.switch').removeClass('sign-switch').addClass('login-switch').text('没有账号？去注册一个吧 >>')
        $('input').val('')
    } else {
        console.error("check status!")
    }
}

$(".switch").click(handleChange);