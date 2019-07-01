(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/product/product"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/web/xiaopiu/xiaopiu/pages/index/product/product.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// 如下为分享内容定义，可根据业务需求自行定义
var strShareUrl = "https://uniapp.dcloud.io";
var strShareTitle = "跨端神器uni-app，开发一次，App、小程序、H5全覆盖";
var strShareSummary = "iOS、Android、H5、微信/支付宝/百度小程序，一套代码全覆盖";
var strShareImageUrl = "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png";
var screenWidth = plus.screen.resolutionWidth;
var margin = 25,
iconWidth = 55,
icontextSpace = 5,
textHeight = 12;
var left1 = margin / 360 * screenWidth;
var iconSpace = (screenWidth - left1 * 2 - iconWidth * 4) / 3; //屏幕宽度减去左右留白间距，再减去4个图标的宽度，就是3个同行图标的间距
if (iconSpace <= 5) {//屏幕过窄时，缩小边距和图标大小，再算一次
  margin = 15;
  iconWidth = 40;
  left1 = margin / 360 * screenWidth;
  iconSpace = (screenWidth - left1 * 2 - iconWidth * 4) / 3; //屏幕宽度减去左右留白间距，再减去4个图标的宽度，就是3个同行图标的间距
}
var left2 = left1 + iconWidth + iconSpace;
var left3 = left1 + (iconWidth + iconSpace) * 2;
var left4 = left1 + (iconWidth + iconSpace) * 3;
var top1 = left1;
var top2 = top1 + iconWidth + icontextSpace + textHeight + left1;
var nvMask = new plus.nativeObj.View("nvMask", {
  top: '0px',
  left: '0px',
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.8)' });

//处理遮罩层点击
nvMask.addEventListener("click", function () {
  nvMask.hide();
  nvImageMenu.hide();
});
//创建底部图标菜单
var nvImageMenu = new plus.nativeObj.View("nvImageMenu", {
  bottom: '0px',
  left: '0px',
  height: '264px',
  width: '100%',
  backgroundColor: 'rgb(255,255,255)' });

//绘制底部图标菜单的内容
nvImageMenu.draw([
// 灰线
{
  tag: 'rect',
  color: '#e7e7e7',
  position: {
    top: '0px',
    height: '1px' } },


//底部取消按钮的文字
{
  tag: 'font',
  id: 'sharecancel',
  text: '取消分享',
  textStyles: {
    size: '14px' },

  position: {
    bottom: '0px',
    height: '44px' } },


//底部取消按钮的顶部边线
{
  tag: 'rect',
  color: '#e7e7e7',
  position: {
    bottom: '45px',
    height: '1px' } },


{
  tag: 'img',
  id: 'imgwechatfriend',
  src: '/static/img/sharemenu/wechatfriend.png',
  position: {
    top: top1,
    left: left1,
    width: iconWidth,
    height: iconWidth } },


{
  tag: 'font',
  id: 'fontwechatfriend',
  text: '微信好友',
  textStyles: {
    size: textHeight },

  position: {
    top: top1 + iconWidth + icontextSpace,
    left: left1,
    width: iconWidth,
    height: textHeight } },


{
  tag: 'img',
  id: 'imgwechatmoments',
  src: '/static/img/sharemenu/wechatmoments.png',
  position: {
    top: top1,
    left: left2,
    width: iconWidth,
    height: iconWidth } },


{
  tag: 'font',
  id: 'fontwechatmoments',
  text: '微信朋友圈',
  textStyles: {
    size: textHeight },

  position: {
    top: top1 + iconWidth + icontextSpace,
    left: left2 - 2.5,
    width: iconWidth + 5,
    height: textHeight } },


{
  tag: 'img',
  id: 'imgweibo',
  src: '/static/img/sharemenu/weibo.png',
  position: {
    top: top1,
    left: left3,
    width: iconWidth,
    height: iconWidth } },


{
  tag: 'font',
  id: 'fontweibo',
  text: '微博',
  textStyles: {
    size: textHeight },

  position: {
    top: top1 + iconWidth + icontextSpace,
    left: left3,
    width: iconWidth,
    height: textHeight } },


{
  tag: 'img',
  id: 'imgqq',
  src: '/static/img/sharemenu/qq.png',
  position: {
    top: top1,
    left: left4,
    width: iconWidth,
    height: iconWidth } },


{
  tag: 'font',
  id: 'fontqq',
  text: 'QQ',
  textStyles: {
    size: textHeight },

  position: {
    top: top1 + iconWidth + icontextSpace,
    left: left4,
    width: iconWidth,
    height: textHeight } },


{
  tag: 'img',
  id: 'imgcopyurl',
  src: '/static/img/sharemenu/copyurl.png',
  position: {
    top: top2,
    left: left1,
    width: iconWidth,
    height: iconWidth } },


{
  tag: 'font',
  id: 'fontcopyurl',
  text: '复制',
  textStyles: {
    size: textHeight },

  position: {
    top: top2 + iconWidth + icontextSpace,
    left: left1,
    width: iconWidth,
    height: textHeight } },


{
  tag: 'img',
  id: 'imgmore',
  src: '/static/img/sharemenu/more.png',
  position: {
    top: top2,
    left: left2,
    width: iconWidth,
    height: iconWidth } },


{
  tag: 'font',
  id: 'fontmore',
  text: '更多',
  textStyles: {
    size: textHeight },

  position: {
    top: top2 + iconWidth + icontextSpace,
    left: left2,
    width: iconWidth,
    height: textHeight } }]);




nvImageMenu.addEventListener("click", function (e) {//处理底部图标菜单的点击事件，根据点击位置触发不同的逻辑
  // console.log("click menu"+JSON.stringify(e));
  if (e.screenY > plus.screen.resolutionHeight - 44) {//点击了底部取消按钮
    nvMask.hide();
    nvImageMenu.hide();
  } else if (e.clientX < 5 || e.clientX > screenWidth - 5 || e.clientY < 5) {
    //屏幕左右边缘5像素及菜单顶部5像素不处理点击
  } else {//点击了图标按钮
    var iClickIndex = -1; //点击的图标按钮序号，第一个图标按钮的index为0
    var iRow = e.clientY < top2 - left1 / 2 ? 0 : 1;
    var iCol = -1;
    if (e.clientX < left2 - iconSpace / 2) {
      iCol = 0;
    } else if (e.clientX < left3 - iconSpace / 2) {
      iCol = 1;
    } else if (e.clientX < left4 - iconSpace / 2) {
      iCol = 2;
    } else {
      iCol = 3;
    }
    if (iRow == 0) {
      iClickIndex = iCol;
    } else {
      iClickIndex = iCol + 4;
    }
    // console.log("3: " + iClickIndex);
    if (iClickIndex >= 0 && iClickIndex <= 5) {//处理具体的点击逻辑，此处也可以自行定义逻辑。如果增减了按钮，此处也需要跟着修改
      var strProvider = "",
      strScene = "";
      switch (iClickIndex) {
        case 0:
          strProvider = "weixin";
          strScene = "WXSceneSession";
          break;
        case 1:
          strProvider = "weixin";
          strScene = "WXSenceTimeline";
          break;
        case 2:
          strProvider = "sinaweibo";
          break;
        case 3:
          strProvider = "qq";
          break;
        case 4:
          uni.setClipboardData({
            data: strShareUrl,
            complete: function complete() {
              uni.showToast({
                title: "已复制到剪贴板" });

            } });

          break;
        case 5:
          plus.share.sendWithSystem({
            content: strShareUrl });

          break;}

      if (strProvider != "") {//点击了0-3序号的这4个按钮
        uni.share({
          provider: strProvider,
          scene: strScene,
          type: 0,
          href: strShareUrl,
          title: strShareTitle,
          summary: strShareSummary,
          imageUrl: strShareImageUrl,
          success: function success(res) {
            console.log("success:" + JSON.stringify(res), " at pages\\index\\product\\product.vue:489");
          },
          fail: function fail(err) {
            console.log("fail:" + JSON.stringify(err), " at pages\\index\\product\\product.vue:492");
          } });

      }
    }
  }
});

// import share from '@/components/share';
var _default = {
  // components: {share},
  data: function data() {
    return {
      shareList: [],
      favorite: false,
      specSelected: [],
      comment: [{
        src: "http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg",
        name: "Leo you",
        content: "商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢。",
        time: "2019-04-01 19:21",
        type: "XL 红色" },

      {
        src: "http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg",
        name: "Leo you",
        content: "商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢。",
        time: "2019-04-01 19:21",
        type: "XL 红色" }],


      // 图片详情 列表
      desc: [{
        id: 0,
        src: "https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg" },

      {
        id: 0,
        src: "https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg" },

      {
        id: 0,
        src: "https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg" },

      {
        id: 0,
        src: "https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg" },

      {
        id: 0,
        src: "https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" }],


      // desc: `
      // 	<div style="width:100%">
      // 		<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg" />
      // 		<img style="width:100%;display:block;" src="https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg" />
      // 		<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg" />
      // 		<img style="width:100%;display:block;" src="https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg" />
      // 		<img style="width:100%;display:block;" src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" />
      // 	</div>
      // `,
      // 主图 图片列表
      imgList: [{
        src: 'https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg' },

      {
        src: 'https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg' },

      {
        src: 'https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg' }],


      specList: [{
        id: 1,
        name: '尺寸' },

      {
        id: 2,
        name: '颜色' }],


      specChildList: [{
        id: 1,
        pid: 1,
        name: 'XS' },

      {
        id: 2,
        pid: 1,
        name: 'S' },

      {
        id: 3,
        pid: 1,
        name: 'M' },

      {
        id: 4,
        pid: 1,
        name: 'L' },

      {
        id: 5,
        pid: 1,
        name: 'XL' },

      {
        id: 6,
        pid: 1,
        name: 'XXL' },

      {
        id: 7,
        pid: 2,
        name: '白色' },

      {
        id: 8,
        pid: 2,
        name: '珊瑚粉' },

      {
        id: 9,
        pid: 2,
        name: '草木绿' }],





      //控制渐变标题栏的参数
      beforeHeaderzIndex: 11, //层级
      afterHeaderzIndex: 10, //层级
      beforeHeaderOpacity: 1, //不透明度
      afterHeaderOpacity: 0, //不透明度
      //是否显示返回按钮

      showBack: true,





      //轮播图下标
      currentSwiper: 0,
      anchorlist: [], //导航条锚点
      selectAnchor: 0, //选中锚点
      serviceClass: '', //服务弹窗css类，控制开关动画
      specClass: 'none', //规格弹窗css类，控制开关动画
      shareClass: '', //分享弹窗css类，控制开关动画
      // 商品信息
      goodsData: {
        id: 1,
        name: "商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
        price: "127.00",
        number: 1,
        service: [{
          name: "正品保证",
          description: "此商品官方保证为正品" },

        {
          name: "极速退款",
          description: "此商品享受退货极速退款服务" },

        {
          name: "7天退换",
          description: "此商品享受7天无理由退换服务" }],


        spec: ["XS", "S", "M", "L", "XL", "XXL"],
        comment: {
          number: 102,
          userface: '../../static/img/face.jpg',
          username: '大黑哥',
          content: '很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！' } },



      isKeep: false, //收藏
      //商品描述html
      descriptionStr: '<div style="text-align:center;"><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOogx.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOHKK.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOTv6.jpg"/></div>' };

  },
  onLoad: function () {var _onLoad = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(options) {var _this = this;var id;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:




              id = options.id;
              if (id) {
                this.$api.msg("\u70B9\u51FB\u4E86".concat(id));
              }
              //规格 默认选中第一条
              this.specList.forEach(function (item) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
                  for (var _iterator = _this.specChildList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var cItem = _step.value;
                    if (cItem.pid === item.id) {
                      _this.$set(cItem, 'selected', true);
                      _this.specSelected.push(cItem);
                      break; //forEach不能使用break
                    }
                  }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return != null) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
              });_context.next = 5;return (
                this.$api.json('shareList'));case 5:this.shareList = _context.sent;case 6:case "end":return _context.stop();}}}, _callee, this);}));function onLoad(_x) {return _onLoad.apply(this, arguments);}return onLoad;}(),

  onReady: function onReady() {
    this.calcAnchor(); //计算锚点高度，页面数据是ajax加载时，请把此行放在数据渲染完成事件中执行以保证高度计算正确
  },
  onBackPress: function onBackPress() {
    //监听back键，关闭弹出菜单
    if (nvImageMenu.isVisible()) {
      nvImageMenu.hide();
      nvMask.hide();
      return true;
    }
  },
  onPageScroll: function onPageScroll(e) {
    //锚点切换
    this.selectAnchor = e.scrollTop >= this.anchorlist[2].top ? 2 : e.scrollTop >= this.anchorlist[1].top ? 1 : 0;
    //导航栏渐变
    var tmpY = 375;
    e.scrollTop = e.scrollTop > tmpY ? 375 : e.scrollTop;
    this.afterHeaderOpacity = e.scrollTop * (1 / tmpY);
    this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
    //切换层级
    this.beforeHeaderzIndex = e.scrollTop > 0 ? 10 : 11;
    this.afterHeaderzIndex = e.scrollTop > 0 ? 11 : 10;
  },
  methods: {
    //收藏
    toFavorite: function toFavorite() {
      this.favorite = !this.favorite;
    },
    //规格弹窗开关
    toggleSpec: function toggleSpec() {var _this2 = this;
      if (this.specClass === 'show') {
        this.specClass = 'hide';
        setTimeout(function () {
          _this2.specClass = 'none';
        }, 250);
      } else if (this.specClass === 'none') {
        this.specClass = 'show';
      }
    },
    //选择规格
    selectSpec: function selectSpec(index, pid) {var _this3 = this;
      var list = this.specChildList;
      list.forEach(function (item) {
        if (item.pid === pid) {
          _this3.$set(item, 'selected', false);
        }
      });

      this.$set(list[index], 'selected', true);
      //存储已选择
      /**
       * 修复选择规格存储错误
       * 将这几行代码替换即可
       * 选择的规格存放在specSelected中
       */
      this.specSelected = [];
      list.forEach(function (item) {
        if (item.selected === true) {
          _this3.specSelected.push(item);
        }
      });

    },
    //轮播图指示器
    swiperChange: function swiperChange(event) {
      this.currentSwiper = event.detail.current;
    },
    goMsg: function goMsg() {
      uni.navigateTo({
        url: '/pages/mine/msg/msg' });

    },
    //消息列表
    toMsg: function toMsg() {
      uni.navigateTo({
        url: '/pages/mine/msg/msg' });

    },
    // 客服
    toChat: function toChat() {
      uni.navigateTo({
        url: "../msg/chat/chat?name=客服008" });

    },
    // 分享
    share: function share() {

      this.shareClass = 'show';
      nvMask.show();
      nvImageMenu.show(); //5+应支持从底部向上弹出的动画













    },
    hideShare: function hideShare() {var _this4 = this;
      this.shareClass = 'hide';
      setTimeout(function () {
        _this4.shareClass = 'none';
      }, 150);
    },
    //收藏
    keep: function keep() {
      this.isKeep = this.isKeep ? false : true;
    },
    // 加入购物车
    joinCart: function joinCart() {
      if (this.selectSpec == null) {
        return this.showSpec(function () {
          uni.showToast({
            title: "已加入购物车" });

        });
      }
      uni.showToast({
        title: "已加入购物车" });

    },
    //立即购买
    buy: function buy() {var _this5 = this;
      if (this.selectSpec == null) {
        return this.showSpec(function () {
          _this5.toConfirmation();
        });
      }
      this.toConfirmation();
    },
    //跳转确认订单页面
    toConfirmation: function toConfirmation() {
      var tmpList = [];
      var goods = {
        id: this.goodsData.id,
        img: '/static/img/goods/p1.jpg',
        name: this.goodsData.name,
        spec: '规格:' + this.goodsData.spec[this.selectSpec],
        price: this.goodsData.price,
        number: this.goodsData.number };

      tmpList.push(goods);
      uni.setStorage({
        key: 'buylist',
        data: tmpList,
        success: function success() {
          uni.navigateTo({
            url: '/pages/index/createOrder/createOrder' });

        } });

    },
    //跳转评论列表
    showComments: function showComments(goodsid) {

    },
    //减少数量
    sub: function sub() {
      if (this.goodsData.number <= 1) {
        return;
      }
      this.goodsData.number--;
    },
    //增加数量
    add: function add() {
      this.goodsData.number++;
    },
    //跳转锚点
    toAnchor: function toAnchor(index) {
      this.selectAnchor = index;
      uni.pageScrollTo({
        scrollTop: this.anchorlist[index].top,
        duration: 200 });

    },
    //计算锚点高度
    calcAnchor: function calcAnchor() {var _this6 = this;
      this.anchorlist = [{
        name: '主图',
        top: 0 },

      {
        name: '评价',
        top: 0 },

      {
        name: '详情',
        top: 0 }];


      var commentsView = uni.createSelectorQuery().select("#comments");
      commentsView.boundingClientRect(function (data) {
        var statusbarHeight = 0;
        //APP内还要计算状态栏高度

        statusbarHeight = plus.navigator.getStatusbarHeight();

        var headerHeight = uni.upx2px(100);
        _this6.anchorlist[1].top = data.top - headerHeight - statusbarHeight;
        _this6.anchorlist[2].top = data.bottom - headerHeight - statusbarHeight;
      }).exec();
    },
    //返回上一页
    back: function back() {
      uni.navigateBack();
    },
    //服务弹窗
    showService: function showService() {
      console.log('show', " at pages\\index\\product\\product.vue:911");
      this.serviceClass = 'show';
    },
    //关闭服务弹窗
    hideService: function hideService() {var _this7 = this;
      this.serviceClass = 'hide';
      setTimeout(function () {
        _this7.serviceClass = 'none';
      }, 200);
    },
    //规格弹窗
    showSpec: function showSpec(fun) {
      console.log('show', " at pages\\index\\product\\product.vue:923");
      this.specClass = 'show';
      this.specCallback = fun;
    },
    specCallback: function specCallback() {
      return;
    },
    stopPrevent: function stopPrevent() {},
    //关闭规格弹窗
    hideSpec: function hideSpec() {var _this8 = this;
      this.specClass = 'hide';
      //回调

      this.selectSpec && this.specCallback && this.specCallback();
      this.specCallback = false;
      setTimeout(function () {
        _this8.specClass = 'none';
      }, 200);
    },
    discard: function discard() {
      //丢弃
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!E:/web/xiaopiu/xiaopiu/pages/index/product/product.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue?vue&type=template&id=d9e5f708&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/web/xiaopiu/xiaopiu/pages/index/product/product.vue?vue&type=template&id=d9e5f708& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue":
/*!**************************************************************!*\
  !*** E:/web/xiaopiu/xiaopiu/pages/index/product/product.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_vue_vue_type_template_id_d9e5f708___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=d9e5f708& */ "E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue?vue&type=template&id=d9e5f708&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.vue?vue&type=style&index=0&lang=scss& */ "E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_vue_vue_type_template_id_d9e5f708___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_vue_vue_type_template_id_d9e5f708___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/web/xiaopiu/xiaopiu/pages/index/product/product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** E:/web/xiaopiu/xiaopiu/pages/index/product/product.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** E:/web/xiaopiu/xiaopiu/pages/index/product/product.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue?vue&type=template&id=d9e5f708&":
/*!*********************************************************************************************!*\
  !*** E:/web/xiaopiu/xiaopiu/pages/index/product/product.vue?vue&type=template&id=d9e5f708& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_d9e5f708___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=template&id=d9e5f708& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\web\\xiaopiu\\xiaopiu\\pages\\index\\product\\product.vue?vue&type=template&id=d9e5f708&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_d9e5f708___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuildx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_d9e5f708___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["E:\\web\\xiaopiu\\xiaopiu\\main.js?{\"page\":\"pages%2Findex%2Fproduct%2Fproduct\"}","common/runtime","common/vendor"]]]);