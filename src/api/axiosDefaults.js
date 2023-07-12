import axios from "axios";

axios.defaults.baseURL = 'https://moments1-faccff00f097.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true
