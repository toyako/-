const app = getApp()
const $ = wx.createSelectorQuery()
const oWrap = $.select('.wrap')
const img = $.select('.imgs')
for(let i=0;i<img.length;i++){
  img[i].startX=parseInt(getStyle(img[i],'left'))
}
Page({})
