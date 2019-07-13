<template>
	<view>
		<catTab  :navList="navList" :initIndex="initIndex" @change="tabChange" />
		<view v-show="initIndex == 0">
			<cat-filter :menuList="menuList"></cat-filter>
			<list />
		</view>
		<view v-show="initIndex == 1">
			<cat-filter :menuList="menuList"></cat-filter>
			<list2 />
		</view>
		
		
	</view>
</template>
<script>
	import list from "@/pagecomponents/list2.vue"
	import list2 from "@/pagecomponents/getList.vue"
	import catTab from "@/components/cat-tab.vue"
	import catFilter from "@/components/cat-filter/cat-filter.vue"
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	//高德SDK
	import amap from '@/common/SDK/amap-wx.js';
	export default {
		components: {list,list2,uniLoadMore,catFilter,catTab},
		data() {
			return {
				navList:[
					{text:'商品列表'},
					{text:'求购列表'},
				],
				initIndex:0,
				menuList:[
						{
							'title': '筛选',
							isScroll:true,
							'key': 'salary',
							len:3,
							mode:"scroll",
							'detailList': [
								{
									label:"A",value:0,
									childer:[
										{
											label:"A1",value:'00',childer:[
												{label:"A11",value:'000',},
												{label:"A12",value:'001',}
											],
										},
										{label:"A2",value:'01',childer:[
												{label:"A21",value:'010',},
												{label:"A22",value:'011',}
											],
										}
									],
								},{
									label:"B",value:0,
									childer:[
										{
											label:"B1",value:'00',childer:[
												{label:"B11",value:'000',},
												{label:"B12",value:'001',}
											],
										},{
											
											label:"B2",value:'01',childer:[
												{label:"B11",value:'010',},
												{label:"B12",value:'011',}
											],
										}
									],
								},{
									label:"C",value:0,
									childer:[
										{
											label:"C1",value:'00',childer:[
												{label:"C11",value:'000',},
												{label:"C12",value:'001',}
											],
										},{
											label:"C2",value:'01',childer:[
												{label:"C11",value:'010',},
												{label:"C12",value:'011',}
											],
										}
									],
								},
								
							]
						},
						{
							'title': '综合排序',
							'key': 'sort',
							'isSort': true,
							'reflexTitle': true,
							'defaultSelectedIndex': 2,
							'detailList': [{
									'title': '默认排序',
									'value': ''
								},
								{
									'title': '发布时间',
									'value': 'add_time'
								},
								{
									'title': '薪资最高',
									'value': 'wages_up'
								},
								{
									'title': '离我最近',
									'value': 'location'
								}
							]
						}
				],
				
				showCategoryIndex:0,
				headerPosition:"fixed",
				cateMaskState: 0, //分类面板展开状态
				headerTop:"0px",
				loadingType: 'more', //加载更多状态
				filterIndex: 0, 
				cateId: 0, //已选三级分类id
				priceOrder: 0, //1 价格从低到高 2价格从高到低
				cateList: [],
				goodsList: []
			}
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		onLoad() {
			// #ifdef H5
			this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight+'px';
			// #endif
			// this.cateId = options.tid;
			// this.loadCateList(options.fid,options.sid);
			this.loadData();
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新
		onPullDownRefresh(){
			this.loadData('refresh');
		},
		//加载更多
		onReachBottom(){
			this.loadData();
		},
		methods: {
			tabChange(i){
				this.initIndex = i;
			},
			
			//加载分类
			async loadCateList(fid, sid){
				let list = await this.$api.json('cateList');
				let cateList = list.filter(item=>item.pid == fid);
				
				cateList.forEach(item=>{
					let tempList = list.filter(val=>val.pid == item.id);
					item.child = tempList;
				})
				this.cateList = cateList;
			},
			//加载商品 ，带下拉刷新和上滑加载
			async loadData(type='add', loading) {
				//没有更多直接返回
				if(type === 'add'){
					if(this.loadingType === 'nomore'){
						return;
					}
					this.loadingType = 'loading';
				}else{
					this.loadingType = 'more'
				}
				
				let goodsList = await this.$api.json('goodsList');
				if(type === 'refresh'){
					this.goodsList = [];
				}
				//筛选，测试数据直接前端筛选了
				if(this.filterIndex === 1){
					goodsList.sort((a,b)=>b.sales - a.sales)
				}
				if(this.filterIndex === 2){
					goodsList.sort((a,b)=>{
						if(this.priceOrder == 1){
							return a.price - b.price;
						}
						return b.price - a.price;
					})
				}
				
				this.goodsList = this.goodsList.concat(goodsList);
				
				//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
				this.loadingType  = this.goodsList.length > 20 ? 'nomore' : 'more';
				if(type === 'refresh'){
					if(loading == 1){
						uni.hideLoading()
					}else{
						uni.stopPullDownRefresh();
					}
				}
			},
			//筛选点击
			tabClick(index){
				if(this.filterIndex === index && index !== 2){
					return;
				}
				this.filterIndex = index;
				if(index === 2){
					this.priceOrder = this.priceOrder === 1 ? 2: 1;
				}else{
					this.priceOrder = 0;
				}
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			//显示分类面板
			toggleCateMask(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState = 2;
				setTimeout(()=>{
					this.cateMaskState = state;
				}, timer)
			},
			//分类点击
			changeCate(item){
				this.cateId = item.id;
				this.toggleCateMask();
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			//详情
			navToDetailPage(item){
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/index/product/product?id=${id}`
				})
			},
			stopPrevent(){},
			//消息列表
			toMsg(){
				uni.navigateTo({url: '/pages/mine/msg/msg'})
			},
			//搜索跳转
			toSearch(){
				uni.navigateTo({url:"/pages/index/search/search"})
			}
		}
	}
</script>
<style lang="scss">
	page, .content{
		background: $page-color-base;
	}
	.content{
		padding-top: 96upx;
	}
	
	.navbar{
		position: fixed;
		left: 0;
		top: var(--window-top);
		display: flex;
		width: 100%;
		height: 80upx;
		background: #fff;
		box-shadow: 0 2upx 10upx rgba(0,0,0,.06);
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30upx;
			color: $font-color-dark;
			position: relative;
			&.current{
				color: $base-color;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 120upx;
					height: 0;
					border-bottom: 4upx solid $base-color;
				}
			}
		}
		.p-box{
			display: flex;
			flex-direction: column;
			.yticon{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 30upx;
				height: 14upx;
				line-height: 1;
				margin-left: 4upx;
				font-size: 26upx;
				color: #888;
				&.active{
					color: $base-color;
				}
			}
			.xia{
				transform: scaleY(-1);
			}
		}
		.cate-item{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 80upx;
			position: relative;
			font-size: 44upx;
			&:after{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				border-left: 1px solid #ddd;
				width: 0;
				height: 36upx;
			}
		}
	}
	
	/* 分类 */
	.cate-mask{
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0);
		z-index: 95;
		transition: .3s;
		
		.cate-content{
			width: 630upx;
			height: 100%;
			background: #fff;
			float:right;
			transform: translateX(100%);
			transition: .3s;
		}
		&.none{
			display: none;
		}
		&.show{
			background: rgba(0,0,0,.4);
			
			.cate-content{
				transform: translateX(0);
			}
		}
	}
	.cate-list{
		display: flex;
		flex-direction: column;
		height: 100%;
		.cate-item{
			display: flex;
			align-items: center;
			height: 90upx;
			padding-left: 30upx;
			font-size: 28upx;
			color: #555;
			position: relative;
		}
		.two{
			height: 64upx;
			color: #303133;
			font-size: 30upx;
			background: #f8f8f8;
		}
		.active{
			color: $base-color;
		}
	}
	
	/* 商品列表 */
	.goods-list{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.goods-item{
			display:flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: $font-lg;
			color: $font-color-dark;
			line-height: 80upx;
		}
		.price-box{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-right: 10upx;
			font-size: 24upx;
			color: $font-color-light;
		}
		.price{
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
			&:before{
				content: '￥';
				font-size: 26upx;
			}
		}
	}
</style>
