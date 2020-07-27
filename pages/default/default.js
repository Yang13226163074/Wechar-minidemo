// pages/default/default.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 记录滚动距离
    scrollTop: 0,
    // 是否显示弹窗
    popup:false,
    // 弹窗类型 排序||筛选
    popupType:"sort",
    // 筛选的条件数据
    filter:[
      {
        "name":"主打商品",
        "type":"checkbox",
        "id":0,
        "list":[
          { "name": "沙发", "checked": true ,"id":1},
          { "name": "茶几", "checked": false, "id": 2 },
          { "name": "书桌", "checked": false, "id": 3 },
          { "name": "电视柜", "checked": false, "id": 4},
          { "name": "床", "checked": false, "id": 5 },
          { "name": "酒架", "checked": false, "id": 6}
        ]
      },
      {
        "name": "服务",
        "type": "checkbox",
        "id": 1,
        "list": [
          { "name": "上门组装", "checked": true, "id": 1},
          { "name": "送货上门", "checked": false, "id": 2},
          { "name": "免费维修", "checked": false, "id": 3},
          { "name": "个性定制", "checked": false, "id": 4},
          { "name": "支持预定", "checked": false, "id": 5},
        ]
      },
      {
        "name": "优惠活动",
        "type": "checkbox",
        "id": 2,
        "list": [
          { "name": "买赠活动", "checked": true, "id": 1},
          { "name": "限时酬宾", "checked": false, "id": 2},
          { "name": "会员减免", "checked": false, "id": 3 },
          { "name": "满减活动", "checked": false, "id": 4 },
          { "name": "新人立减", "checked": false, "id": 5 },
          { "name": "折扣商品", "checked": false, "id": 6},
          { "name": "新店开张", "checked": false, "id": 7},
        ]
      }
    ],
    // 附近商家数据
    merchantList:[
      {
        "imgpath":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588503078069&di=337ced2972d6822afc50a15cce808535&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F4e704b16jw1f2m18epv0oj205k05kq3a.jpg",
        "name":"臻品家居",
        "grade":5.0,
        "sales":8622,
        "commodity":["沙发","吊顶灯","床"],
        "tag":["服务态度好","价格实惠"]
      },
      {
        "imgpath": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1829983130,2944434239&fm=15&gp=0.jpg",
        "name": "蓝天白云家居",
        "grade": 4.7,
        "sales": 8250,
        "commodity": ["书柜", "书桌", "酒架"],
        "tag": ["上门安装", "售后完善","坚固耐用"]
      },
      {
        "imgpath": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1829983130,2944434239&fm=15&gp=0.jpg",
        "name": "蓝天白云家居",
        "grade": 4.7,
        "sales": 8250,
        "commodity": ["书柜", "书桌", "酒架"],
        "tag": ["上门安装", "售后完善", "坚固耐用"]
      },
      {
        "imgpath": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1829983130,2944434239&fm=15&gp=0.jpg",
        "name": "蓝天白云家居",
        "grade": 4.7,
        "sales": 8250,
        "commodity": ["书柜", "书桌", "酒架"],
        "tag": ["上门安装", "售后完善", "坚固耐用"]
      },
      {
        "imgpath": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1829983130,2944434239&fm=15&gp=0.jpg",
        "name": "蓝天白云家居",
        "grade": 4.7,
        "sales": 8250,
        "commodity": ["书柜", "书桌", "酒架"],
        "tag": ["上门安装", "售后完善", "坚固耐用"]
      },
      {
        "imgpath": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588503078069&di=337ced2972d6822afc50a15cce808535&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F4e704b16jw1f2m18epv0oj205k05kq3a.jpg",
        "name": "臻品家居",
        "grade": 5.0,
        "sales": 8622,
        "commodity": ["沙发", "吊顶灯", "床"],
        "tag": ["服务态度好", "价格实惠"]
      },
      {
        "imgpath": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588503078069&di=337ced2972d6822afc50a15cce808535&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F4e704b16jw1f2m18epv0oj205k05kq3a.jpg",
        "name": "臻品家居",
        "grade": 5.0,
        "sales": 8622,
        "commodity": ["沙发", "吊顶灯", "床"],
        "tag": ["服务态度好", "价格实惠"]
      },
      {
        "imgpath": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1829983130,2944434239&fm=15&gp=0.jpg",
        "name": "蓝天白云家居",
        "grade": 4.7,
        "sales": 8250,
        "commodity": ["书柜", "书桌", "酒架"],
        "tag": ["上门安装", "售后完善", "坚固耐用"]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onChange(event) {
    console.log(event.detail, 'click right menu callback data')
  },
  //页面滚动执行方式
  onPageScroll(event) {
    this.setData({
      scrollTop: event.scrollTop
    })
  },
  // 关闭弹窗
  closePopup:function(){
    this.setData({
      popup: false
    })
  },
  // 弹窗弹出的事件，可辨别是排序还是筛选
  cutPopup:function(e){
    let type = e.target.dataset.type;
    let $this = this;
    if (this.data.popup && type == this.data.popupType){
      this.setData({
        popup:false
      })
    }else{
      if ($this.data.scrollTop < (e.detail.y-30)){
        wx.pageScrollTo({
          scrollTop: e.detail.y,
          duration: 300
        });
        setTimeout(function(){
          $this.setData({
            popup: true,
            popupType: type
          })
        },350)
      }else{
        $this.setData({
          popup: true,
          scrollTop: e.detail.y,
          popupType: type
        })
      }
    } 
  },
  // 筛选的选择的事件
  checkedFilter:function(e){
    let $this = this;
    for (let i = 0; i < $this.data.filter.length;i++){
      if ($this.data.filter[i].id == e.target.dataset.parentid){
        for (let j = 0; j < $this.data.filter[i].list.length;j++){
          if ($this.data.filter[i].type != "checkbox") {
            $this.setData({
              ["filter[" + i + "].list[" + j + "].checked"]: false
            })
          }
          if ($this.data.filter[i].list[j].id == e.target.dataset.id){
            $this.setData({
              ["filter[" + i + "].list[" + j + "].checked"] : !$this.data.filter[i].list[j].checked
            })
          }
        }
        return;
      }
    }
  }
})