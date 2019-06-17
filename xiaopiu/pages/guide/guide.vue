<template>
	<view :style="classObj.transition + 'background-color:' + swiperItems[current].bgColor + ';'">
		<swiper indicator-dots :duration="duration" class="swiperStyle" @change="swiperChange($event)">
			<swiper-item v-for="(items, indexs) in swiperItems" :key="indexs" class="swiperItem">
				<block v-for="(item, index) in items.itemArray" :key="index">
					<block v-if="item&&item.type=='image'">
						<image :src="item.value" :mode="item.mode||'widthFix'" class="position_absolute" :style="classObj.transition + (current==indexs&&onReady?item.changeAfter:item.changeBefore) + item.css "></image>
					</block>
					<block v-else-if="item&&item.type=='text'">
						<view class="position_absolute" :style="classObj.transition + (current==indexs&&onReady?item.changeAfter:item.changeBefore) + item.css">
							{{item.value}}
						</view>
					</block>
					<block v-else-if="item&&item.type=='button'">
						<button type="primary" :size="item.mode||'mini'" class="position_absolute" :style="classObj.transition + (current==indexs&&onReady?item.changeAfter:item.changeBefore) + item.css" @tap="activeFc()">{{item.value}}</button>
					</block>
				</block>
			</swiper-item>
		</swiper>
		<button type="primary" size="mini" class="position_absolute" :style="classObj.goonBtn" v-show="current!==(swiperItems.length-1)" @tap="activeFc(true)">跳过</button>
	</view>
</template>

<script>
	export default {
		data() {
			const duration = 1000; //动画时长控制
			return {
				current: 0, //swiper的index
				//注意所有元素都是绝对定位
				swiperItems: [{ //元素级 该数据有多少长度则swiper-item有多少项（就是有几页）
					bgColor: 'rgb(206, 206, 206)', //current等于项swiper-item的indexs时背景色过渡为此颜色
					itemArray: [{
						type: 'image', //image类型
						css: 'width:30%;top:10%;left:50%;', //css代码 其中top|bottom ， left|right 一般是必填的
						value: '../../static/img/logo.png', //该项的value， 图片类型为图片路径
						changeBefore: 'transform: translate(-50%, -200%);', //过渡之前	//过渡之前到过渡之后又过度动画
						changeAfter: 'transform: translate(-50%, 0);' //过渡之后
					}, {
						type: 'text', //文本类型
						css: 'font-size: 5vh;top:30%;left:50%;font-weight: bold;', //css样式
						value: 'uni-app', //文本类型时 值为文本文字
						changeBefore: 'transform: translate(-50%, 200%);opacity:0;color:black;',
						changeAfter: 'transform: translate(-50%, 0);opacity:1;color:green;'
					}, {
						type: 'text',
						css: 'top:50%;left:5%;font-weight: bold;',
						value: '我是说明词',
						changeBefore: 'transform: rotate(90deg);opacity:0;',
						changeAfter: 'transform: rotate(0);opacity:1;'
					}, {
						type: 'text',
						css: 'top:55%;left:50%;font-weight: bold;',
						value: '我是说明词',
						changeBefore: 'transform: rotate(-90deg);opacity:0;',
						changeAfter: 'transform: rotate(0);opacity:1;'
					}, {
						type: 'text',
						css: 'bottom:20%;left:68%;font-weight: bold;',
						value: '我是说明词',
						changeBefore: 'transform: translate(-50%, 500%);opacity:0;',
						changeAfter: 'transform:  translate(-50%, 0);opacity:1;'
					}]
				},{
					bgColor: 'rgb(206, 206, 206)',
					itemArray: [{
						type: 'image',
						css: 'width:30%;top:10%;left:50%;',
						value: '../../static/img/logo.png',
						changeBefore: 'transform: translate(-50%, 0) scale(0,0);',
						changeAfter: 'transform: translate(-50%, 0) scale(1,1);'
					}, {
						type: 'text',
						css: 'font-size: 5vh;top:30%;left:50%;font-weight: bold;color:#fff',
						value: 'uni-app',
						changeBefore: 'transform: translate(-50%, 200%);opacity:0;color: black;',
						changeAfter: 'transform: translate(-50%, 0);opacity:1;color: white;'
					}, {
						type: 'text',
						css: 'top:50%;left:5%;font-weight: bold;color:#fff',
						value: '我是说明词',
						changeBefore: 'transform: rotate(90deg);opacity:0;',
						changeAfter: 'transform: rotate(0);opacity:1;'
					}, {
						type: 'text',
						css: 'top:55%;left:50%;font-weight: bold;color:#fff',
						value: '我是说明词',
						changeBefore: 'transform: rotate(-90deg);opacity:0;',
						changeAfter: 'transform: rotate(0);opacity:1;'
					}, {
						type: 'text',
						css: 'bottom:20%;left:68%;font-weight: bold;color:#fff',
						value: '我是说明词',
						changeBefore: 'transform: translate(-50%, 500%);opacity:0;',
						changeAfter: 'transform:  translate(-50%, 0);opacity:1;'
					}]
				},{
					bgColor: 'rgb(206, 206, 206)',
					itemArray: [{
						type: 'image',
						css: 'width:30%;top:10%;left:50%;',
						value: '../../static/img/logo.png',
						changeBefore: 'transform: translate(-50%, -200%);',
						changeAfter: 'transform: translate(-50%, 0);'
					}, {
						type: 'text',
						css: 'font-size: 5vh;top:30%;left:50%;font-weight: bold;',
						value: 'uni-app',
						changeBefore: 'transform: translate(-50%, 200%);opacity:0;',
						changeAfter: 'transform: translate(-50%, 0);opacity:1;'
					}, {
						type: 'text',
						css: 'bottom:45%;left:70%;font-weight: bold;',
						value: '我是说明词',
						changeBefore: 'transform: translate(-50%, 500%);opacity:0;',
						changeAfter: 'transform:  translate(-50%, 0);opacity:1;'
					}, {
						type: 'button', //button类型 在最后一页有跳转首页与设置iflLaunch标识为true方法
						css: 'bottom:15%;left:50%;background-color:#33cc33;color: #ffffff;border-radius: 8px;',
						mode: 'default', //button时为button的size，  图片类型是为图片的mode
						value: '立即体验',
						changeBefore: 'transform: translate(-50%, 0) scale(0,0);opacity:0;',
						changeAfter: 'transform: translate(-50%, 0) scale(1,1);opacity:1;'
					}]
				}],
				onReady: false,
				duration,
				classObj: {
					transition: 'transition: all ' + (duration/1000) + 's;',
					goonBtn: 'line-height:3;top:10%;right:10%;background-color:rgba(255,255,255,.6);color: #666666;border-radius: 8px;' //跳过的按钮样式
				}
			};
		},
		methods:{
			swiperChange(e) {
				this.current = e.detail.current
			},
			activeFc(goOn) {
				if(this.current===(this.swiperItems.length-1)||goOn) {
					uni.setStorageSync('ifLaunch', true);
					uni.reLaunch({
						url: '/pages/tabBar/index/index'
					})
				}
			}
		},
		onReady() {
			this.onReady = true;
		}
	}
</script>

<style scoped>
	button::after {
		border: none;
	}
	.swiperStyle{
		height: 100vh;
		width: 100vw;
	}
	.transition{
		transition: 1s;
	}
	.swiperItem{
		position: relative;
	}
	.position_absolute {
		position: absolute;
	}
	.img{
		width: 30%;
		position: absolute;
		top: 10%;
		left: 50%;
	}
	.text1{
		font-size: 5vh;
		font-weight: bold;
		position: absolute;
		top: 30%;
		left: 50%;
	}
	.text2{font-size: 3vh;position: absolute;top: 50%;left: 20%;}
</style>
