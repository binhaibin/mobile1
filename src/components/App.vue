<template>
<Page actionBarHidden="true">
    <ActionBar title="Login" />
    <FlexboxLayout class="page">
        <StackLayout class="form">
            <!-- <Image class="logo" src="~/images/logo.png" /> -->
            <Label class="header" text="SMILE" />

            <StackLayout class="input-field" marginBottom="25">
                <TextField class="input" hint="UserName" keyboardType="text" autocorrect="false" autocapitalizationType="none" v-model="user" returnKeyType="next" fontSize="18" />
                <StackLayout class="hr-light" />
            </StackLayout>

            <StackLayout class="input-field" marginBottom="25">
                <TextField ref="password" class="input" hint="Password" secure="true" v-model="pass" :returnKeyType="isLoggingIn ? 'done' : 'next'" fontSize="18" />
                <StackLayout class="hr-light" />
            </StackLayout>

            <Button :text="isLoggingIn ? 'Log In' : 'Sign Up'" @tap="goToLogin" class="btn btn-primary m-t-20" />
        </StackLayout>
    </FlexboxLayout>
</Page>
</template>

<script>
import Vue from "nativescript-vue";
import Home from './Home';
import axios from "axios";
const toasty = require('nativescript-toasty').Toasty;
export default {
    data() {
        return {
            isLoggingIn: true,
            user: "",
            pass: "",
        }
    },
    methods: {
        goToLogin() {
            // let dataLogin = {
            //   "uid": "sml",
            //   "pwd": "0cc175b9c0f1b6a831c399e269772661",
            //   "lang": "vi"
            // };
            // let config = {
            //     headers: {
            //             act:"token",
            //             papp:"SVR"
            //             // ,
            //             // origin:"http://localhost:44330"
            //     }
            // };
            // axios.post("http://192.168.3.111/sml_svr_api/api/1.0/receivedata", dataLogin, config)
            //     .then(response  => {                     
            //       console.log(response.data);
            //        console.log('abcc');
            //        console.log(response);
            //         if (response.data.success == true) {
            //             var toast = new toasty({ text: 'Login success!' });
            //             toast.show();                            
            //             this.$navigateTo(Home);                 
            //         } else {                            
            //              var toast = new toasty({ text: 'Login false!' });
            //             toast.show();  
            //         } 
            //     })
            //     .catch(error  => {
            //         console.log(error )
            //     }); 
            // let dataLogin = {
            //   username: "username",
            //   password: "password"
            // };
            // let config = {
            //     headers: { "Content-Type": "application/json" },
            // };
            // axios.post("https://httpbin.org/post", dataLogin, config)
            //     .then(response  => {                     
            //       console.log(response.data);
            //        console.log('abcc');
            //        console.log(response);
            //         if (response.data.success == true) {
            //             var toast = new toasty({ text: 'Login success!' });
            //             toast.show();                            
            //             this.$navigateTo(Home);                 
            //         } else {                            
            //              var toast = new toasty({ text: 'Login false!' });
            //             toast.show();  
            //         } 
            //     })
            //     .catch(error  => {
            //         console.log(error )
            //     });  
            //    axios({ method: "GET", "url": "http://dummy.restapiexample.com/api/v1/employees" }).then(result => {
            //    var pokemon =result.data;
            //     console.log(pokemon);                
            // }, error => {
            //     console.error(error);
            // });
            // const requestOptions = {
            //     method: 'Get'
            //     // ,
            //     // headers: {
            //     //                     Authorization: "Basic c21pbGU6c21pbGVAMTIz"
            //     //                 },
            //     // body: JSON.stringify({
            //     //                  hcode: "MT1001"
            //     //             })
            // };
            // fetch('http://192.168.3.147:8083/api/v1.0/ping', requestOptions)
            //     .then(async response => {
            //         const data = await response.json();
            //         console.log('abc');
            //         console.log(data);
            //     })
            //     .catch(error => {
            //         console.error('There was an error!', error);
            //     });
            this.$navigateTo(Home); 
            // http.request({
            //     url: "https://httpbin.org/post",
            //     method: "POST",
            //     headers: { "Content-Type": "application/json", origin: '123231'},
            //     content: JSON.stringify({
            //         username: "username",
            //         password: "password"
            //     })
            // }).then(response => {
            //   console.log(JSON.stringify( response.headers));
            //     var result = response.content.toJSON();
            //     console.log(result);
            // }, error => {
            //     console.error(error);
            // });
            // http.getJSON("http://dummy.restapiexample.com/api/v1/employees").then(result => {
            //   console.log(result);
            // }, error => {
            //     console.log(error);
            // });
        }
    }
}
</script>

<style scoped>
/* .page {

align-items: center;

flex-direction: column;
	} */

.form {
    margin-left: 30;
    margin-right: 30;
    flex-grow: 2;
    vertical-align: middle;
}

.logo {
    margin-bottom: 12;
    height: 90;
    font-weight: bold;
}

.header {
    /* horizontal-align: center; */
    font-size: 25;
    font-weight: 600;
    margin-bottom: 70;
    text-align: center;
    color: #D51A1A;
}

.input-field {
    margin-bottom: 25;
}

.input {
    font-size: 18;
    /* placeholder-color: #A8A8A8; */
}

.input-field .input {
    font-size: 54;
}

.btn-primary {
    height: 50;
    margin: 30 5 15 5;
    background-color: #D51A1A;
    border-radius: 5;
    font-size: 20;
    font-weight: 600;
    color: white;
}

.login-label {
    /* horizontal-align: center; */
    color: #A8A8A8;
    font-size: 16;
}

.sign-up-label {
    margin-bottom: 20;
}

.bold {
    color: #000000;
}
</style>

