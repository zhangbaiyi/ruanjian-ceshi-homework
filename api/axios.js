import axios from "axios";

const baseUrl = '/api'

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }

    intercepters(instance) {
        //instance 是 axios 的一个实例
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            console.log(config)
            return config;
        }, function (error) {
            // 对请求错误做些什么
            console.log(error)
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            console.log(response)
            return response;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            console.log(error)
            return Promise.reject(error);
        });
    }

    request(options) {
        const instance = axios.create()
        options = {...this.getInsideConfig(), ...options}
        this.intercepters(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)