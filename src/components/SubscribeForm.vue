<template>
    <div class="form">
        <div class="text">
            <h1 class=""> Get 50% OFF!</h1>
            <h2> Your next ride by joining our Newsletter</h2>
        </div>
        <form class='signup'>
            <div>
                Name:
                <input type="text" placeholder="Enter your name" v-model="firstName" required />
            </div>
                <div>
                Surname:
                <input type="text" placeholder="Enter your Surname" v-model="lastName" required  />
            </div>
                <div>
                E-mail:
                <input type="text" placeholder="Enter your Email" v-model="email" required />
            </div>
            <div class="field">
                <div class="ui checkbox">
                    <input type="checkbox" tabindex="0" class="hidden">
                    <label>I agree to the Terms and Conditions</label>
                </div>
            </div>
            <button>Submit</button>
        </form>
    </div>    
</template>

<script>
// import db from "../firestoreInit";
// import emailjs from '@emailjs/browser';

export default {
    data: function () {
        return {
            firstName: "",
            lastName: "",
            email: "",
            firstNameErrors: [],
            lastNameErrors: [],
            emailError: []
        };
    },
    methods: {
        isValidName: function(name) {
            if (name.length <= 2) {
                this.firstNameErrors.push("A name must be at least two letters.");
            }

            if (/\d/.test(name)) {
                this.firstNameErrors.push("A name cannot contain a number.");
            }

            return this.firstNameErrors.length === 0;
        },
        isValidEmail: function() {

        },
        submit: function () {
            if (this.isValidName(this.firstName)) {
                console.log("awa");
            } else {
                console.log("uwa!");
            }

            // // TO FIREBASE
            // db.collection("email_addresses").add({
            //     firstName: this.firstName,
            //     lastName: this.lastName,
            //     email: this.email
            // });
            // // TO EMAIL
            // const templateParams = {
            //     firstName: this.firstName,
            //     lastName: this.lastName,
            //     email: this.email
            // };

            // emailjs.send('service_qvex2mk', 'template_0s841gu', templateParams, 'VDK0Jw8DR-D-cvBiu').then(function (response) {
            //     console.log('SUCCESS!', response.status, response.text);
            // }, function (error) {
            //     console.log('FAILED...', error);
            // });
        }
    }
}
</script>

<style>
.error {
    color: red;
}
.form{
    border: 2px solid black;
    border-radius: 15px;
    margin: 10px;
    text-align: center;
}
.text{
    text-align: center;
    justify-items: center;
}
h1{
    text-decoration: underline;
}
.form form{
    display: inline;
    
}
input{
    text-align: center;
    border-radius: 8px;
}
button{
    margin:5px;
    background-color: rgb(220, 247, 247);
    border-radius: 5px;
    width: 10em;
}
.checkbox{
    margin: 10px;
}
</style>