axios.interceptors.request.use(
    config => {
      if (localStorage.getItem("oneToken") != null) {
        config.headers["authorization"] ='Bearer ' + localStorage.getItem("oneToken");
      }
  
      return config;
    },
    err => Promise.reject(err)
  );

if (localStorage.oneToken) {
    axios.get('/api/user')
    .then(res => {
        console.log(res)
    })
}

$('button').click(() => {
    const username = $("#name").val(),
          password = $("#password").val();
    console.log(username, password);
    axios.post('/api/login', {
        username, 
        password
    })
    .then(res => {
        console.log(res.data);
        localStorage.setItem('oneToken', res.data);
    })
})