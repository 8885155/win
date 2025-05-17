$(function(){
    var tools=[
        {name:'此电脑',url:'http://sj.ysupan.com/8885155#/',icon:'./img/imageres_2.ico'},
        {name:'浏览器',url:'https://hzyo.cn/',icon:'./img/k.webp'},
        {name:'快报',url:'https://api.03c3.cn/api/zb',icon:'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/556197ac6b5b89689ce060a10ca77dde6727e49c17ffe14dba03cea9ea60a53033aa9f0c234362b44d8bd4c9491ad7de?pictype=scale&from=30111&version=3.3.3.3&fname=u%3D2015335363%2C3143986395%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG.webp&size=1024'},
        {name:'平凡博客',url:'https://blog.hzyo.cn/',icon:'https://blog.hzyo.cn/favicon.ico'},
        {name:'流量卡网厅',url:'https://blog.hzyo.cn/llk',icon:'./img/llkk.png'},
        {name:'代理注册',url:'https://blog.hzyo.cn/llk/dl.html',icon:'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/43c244d52c9d2eb76b5163287bde0c3acab9474b09d25c36c67a837fa60a0b9e2d418ab8392fa120f1b5463dc64e5dce?pictype=scale&from=30111&version=3.3.3.3&fname=PicsArt_05-28-09.01.21.jpg&size=1024'},
        {name:'安全检测',url:'https://detail.aiuys.com/',icon:'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/00fa17d69e57bb892e1258921711334f7764c967918d3c8434de469a222763e83adfc52b188d443bdd6289cb1a304c2f?pictype=scale&from=30111&version=3.3.3.3&fname=PicsArt_05-29-02.57.25.jpg&size=1024'},
        {name:'帮小忙',url:'https://tool.browser.qq.com/',icon:'https://m4.publicimg.browser.qq.com/publicimg/nav/qbtool/qbtool-latest.png'},
        {name:'文心一言',url:'https://yiyan.baidu.com/',icon:'./img/wxyy.jpg'},
        {name:'图片编辑',url:'https://m.baidu.com/sf/vsearch/image/front/edit?pageFr',icon:'https://hzyo.cn/style/img/icon.png'},
        {name:'壁纸图库',url:'https://blog.hzyo.cn/bz.html',icon:'./img/j.webp'},
        {name:'随机视频',url:'https://api.lolimi.cn/dy/',icon:'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/2c1c8fb9ec2320d8efe53ac2cb48279b3396ac163254d2ccbf2dcc8c578c70df1d91c4131bb773990f7a2c88776ebdb7?pictype=scale&from=30111&version=3.3.3.3&fname=icon_1711384802009.jpeg&size=1024'},
        {name:'游戏',url:'https://blog.hzyo.cn/tool/klkp.html',icon:'./img/g.webp'},
        {name:'影视',url:'https://tv.hzyo.cn/',icon:'./img/h.webp'},
        {name:'时钟',url:'https://blog.hzyo.cn/tool/clock.html',icon:'./img/tool.png'},
        {name:'音乐',url:'https://blog.hzyo.cn/music/',icon:'https://blog.hzyo.cn/music/app/logo.png'},
        {name:'留言支持',url:'https://blog.hzyo.cn/about.html',icon:'./img/6.png'},

    ]
    for(var i in tools){
        var tool=tools[i]
        var item="<li class='pc-icon desktoptools' data='"+JSON.stringify(tool)+"'>"+
        '<img class="mypc" src="'+tool.icon+'" />'+
        '<div>'+tool.name+'</div>'+
        '</li>';
        $('.desktop-list').append(item)
    }

   
    $('.desktoptools').click(function(){
        var data =JSON.parse($(this).attr('data'))
       // $('.right-top img').eq(0).click()
        layer.open({
            type: 2,
            title: data.name,
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['88%', '90%'],
            content: data.url
          });
    })



})
