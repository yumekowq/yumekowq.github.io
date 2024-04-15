function welcome(){
    let welcome_text = '欢迎光顾个人技术博客~'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: " 欢迎！",
        text: welcome_text+'\n博客技术仅用于展示~请勿用于非法途径！',
        imageUrl: "/image/bg.jpg",
        timer: 5000,
        showConfirmButton: false
    });
}
$(document).ready(()=>{
    welcome()
})

