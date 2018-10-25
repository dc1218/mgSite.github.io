// mp3音乐外链网：http://www.ytmp3.cn/
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "三寸天堂",
        artist: '严艺丹',
        url: 'http://www.ytmp3.cn/down/54110.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/28.jpg',
      },
      {
        name: '越来越不懂',
        artist: '王贰浪',
        url: 'http://www.ytmp3.cn/down/53975.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/86.jpg',
      },	  
      {
        name: '耳朵',
        artist: '李荣浩',
        url: 'http://www.ytmp3.cn/down/53975.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/66.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://www.ytmp3.cn/down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/23.jpg',
      },
	   {
        name: 'Somewhere In Brooklyn',
        artist: 'Bruno Mars',
        url: 'http://www.ytmp3.cn/down/53920.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/26.jpg',
      },
	  {
		  name: '沙漠骆驼',
		  artist: '展展与罗罗',
		  url: 'http://www.ytmp3.cn/down/53809.mp3',
		  cover: 'http://oeff2vktt.bkt.clouddn.com/image/54.jpg',
	  }
    ]
});