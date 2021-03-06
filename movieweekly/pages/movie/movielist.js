// pages/movie/movielist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList:[
      { 'name': '复仇者联盟1', 'actor': '小海', 'banner': '../../resource/image/fuchouzhe3.jpg' },
      { 'name': '复仇者联盟2', 'actor': '小海', 'banner': '../../resource/image/fuchouzhe3.jpg' },
      { 'name': '复仇者联盟3', 'actor': '小海', 'banner': '../../resource/image/fuchouzhe3.jpg' },
      { 'name': '复仇者联盟4', 'actor': '小海', 'banner': '../../resource/image/fuchouzhe3.jpg' }],
      currentPageIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentPageIndex: this.data.movieList.length - 1
    })
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
  backMovieRecommandPage: function () {
    this.setData({
      currentPageIndex: this.data.movieList.length-1
    })
  }
})