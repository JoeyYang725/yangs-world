import ajax from './ajax'
export default {
  getWeather: () => ajax(`https://www.tianqiapi.com/free/day`, {appid: 85777924, appsecret: 'V1UBPCWS'}),
  getEnglish: () => ajax('http://api.tianapi.com/txapi/ensentence/index', {key: '638d2fc973f273d4e6f07aa5a15e4771'})
}
