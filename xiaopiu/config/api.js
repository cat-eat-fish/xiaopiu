import {Ip} from "./base.js"
// 使用
// onLoad(){
// 	this.getInfo()
// },
// methods:{
// 	async getInfo(){
// 		let info = await test(204262);
// 	}
// }


export function test(userId){
	return new Promise((resolve, reject) => {
        uni.request({
            url: `${Ip}/ams/system/distribute.htm?module=waitApprove_YD&userId=${userId}`,
            success: (res) => {
                resolve(res.data);
            },
            fail: (err) => {
                reject('err')
            }
        });
    })
}

