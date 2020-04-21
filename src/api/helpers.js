import axios from 'axios'

const ERR_OK = 0

export function get(url) {
  return function(params) {
    return axios.get(url, {
      params
    }).then((res) => {
       const { errno, data } = res.data // 结构赋值，errno=res.data.errno,data=res.data.data
       if (errno === ERR_OK) {
        return data
       }
    }).catch(() => {})
  }
}
