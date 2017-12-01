/**
 * Create bu zechun.chen on 2016/12/22
 * api配置
 */
import axios from 'axios'

let url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';

let func_axios = (api,cb) => {
    axios.get(api).then(function(res){
        if(res.status >= 200 && res.status <300){
            cb(res.data)
        }
    }).catch((error) => {
        // new Error('desc');
        return Promise.reject(error)
    })
}

let fun_axios_post = (api, body, cb) => {
    axios.post(api, body)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data);
        }
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  }

export default {
   
}
