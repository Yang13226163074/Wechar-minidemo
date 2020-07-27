const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    load: true,
    tabID:'tab1',
    score:{
      comprehensive:4.3,
      quality:3.7,
      service:4.8,
      speed:4.7
    },
    grade:{
      classify:[
        { name: "全部", num: 334 },
        { name: "好评", num: 263 },
        { name: "中评", num: 45 },
        { name: "差评", num: 26 },
        { name: "有图", num: 305 },
        { name: "好看大气", num: 14 },
        { name: "服务好", num: 12 },
        { name: "有磕碰", num: 3 },
      ],
      list:[
        {
          userpath:"https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2091259171,3321536767&fm=26&gp=0.jpg",
          name:'靓仔一号',
          score:4,
          productName:'木质单人床',
          time:'2020-04-18',
          content:'床很好，质量不错，但送货速度有点慢，总体来说还是不错的，值得推荐性价比高！',
          img:[
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593164520421&di=de0e81ed21e27b004745eab81dbd5654&imgtype=0&src=http%3A%2F%2Fimg3.99114.com%2Fgroup1%2FM00%2FBF%2F6B%2FwKgGS1kXbaCAQGogAAKMlCah16I978.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593164541815&di=cbabbc82d883b0e6e9e5cc346739bec8&imgtype=0&src=http%3A%2F%2Fimg9.jiwu.com%2Fjiwu_news_pics%2F20160930%2F2834197.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2709385408,2352057585&fm=26&gp=0.jpg'
          ],
          reply:'谢谢亲的支持，您的支持就是我们最大的动力',
          replyDay:0
        },
        {
          userpath: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1658257471,3899085118&fm=26&gp=0.jpg",
          name: '靓女一号',
          score: 1,
          productName: '桦木床头柜',
          time: '2020-05-26',
          content: '差评！严重差评，和图片严重不符，矮了一大截，根本无法使用，而且有磕碰',
          img: [
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1684765822,3788956259&fm=26&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=292389273,2574709614&fm=15&gp=0.jpg',
          ],
          reply: '没能让您满意我们感到很抱歉，我们会积极改善产品，请亲理解',
          replyDay:1
        }
      ]
    }

  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    let list = [{}];
    for (let i = 0; i < 26; i++) {
      list[i] = {};
      list[i].name = "分类"+i;
      list[i].id = i;
      list[i].data = [{
        "imgpath": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593164520421&di=de0e81ed21e27b004745eab81dbd5654&imgtype=0&src=http%3A%2F%2Fimg3.99114.com%2Fgroup1%2FM00%2FBF%2F6B%2FwKgGS1kXbaCAQGogAAKMlCah16I978.jpg",
        "name": "单人床",
        "grade": 5.0,
        "price": 998,
        "id":1,
        "tag": ["服务态度好", "价格实惠"]
      }, {
          "imgpath": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1684765822,3788956259&fm=26&gp=0.jpg",
          "name": "桦木床头柜",
          "grade": 4.7,
          "price": 142,
          "id": 2,
          "tag": ["上门安装", "售后完善", "坚固耐用"]
        }]
    }
    this.setData({
      list: list,
      listCur: list[0]
    })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    console.log(list[5].top);
    for (let i = 0; i < list.length; i++) {
      
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  },
  curTab:function(e){
    console.log(e);
    this.setData({
      tabID:e.currentTarget.id
    })
  }
})