<template>
    <div class="form1">
        <div class="text">
            <span> Get 50% OFF!</span>
            <p> Your next ride by joining our Newsletter</p>
        </div>
        <form class='ui form' ref='form' @submit.prevent='submit'>
            <div>
                <label id="eggs">First Name</label>
               
                <input id="chicken" type="text" placeholder="Enter your name" v-model="firstName" required />
                <ul v-if="firstNameErrors.length">
                    <li v-for="e in firstNameErrors" :key="e">{{  e  }}</li>
                </ul>

            </div>
                <div>
                <label id="eggs"> Surname</label>
                <input id="chicken"  type="text" placeholder="Enter your Surname" v-model="lastName" required  />
                <ul v-if="lastNameErrors.length">
                    <li v-for="e in lastNameErrors" :key="e">{{  e  }}</li>
                </ul>
            </div>
                <div>
                <label id="eggs">E-mail</label>
                <input id="chicken"  type="text" placeholder="Enter your Email" v-model="email" required />
                 <ul v-if="emailErrors.length">
                    <li v-for="e in emailErrors" :key="e">{{  e  }}</li>
                </ul>
            </div>
             <!-- TODO: newsletter frequency in a dropdown menu: weekly (default), fortnightly, monthly -->
            <div>
                <label id="eggs">Newsletter frequency</label>
                <div class="ui selection dropdown">
                    <input type="hidden" name="frequency">
                    <i class="dropdown icon"></i>
                    <div class="default text">Select frequency</div>
                    <div class="menu">
                        <div class="item" data-value="2">Weekly</div>
                        <div class="item" data-value="1">Fortnightly</div>
                        <div class="item" data-value="0">Monthly</div>
                    </div>
                </div>
            </div>

            <div class="field">
                <div class="ui checkbox">
                    <input class="ui checkbox" type="checkbox" v-model="agreed" />
                    <label>I agree to the Privacy Policy and Terms and Conditions</label>
                    <ul v-if="emailErrors.length">
                        <li>{{  agreeError  }}</li>
                    </ul>
                </div>
            </div>
           <button class="ui button" id="btn" type="submit">Confirm</button>
        </form>
    </div>    
</template>

<script>
import db from "../firestoreInit";
import emailjs from "@emailjs/browser";

export default {
    data: function () {
        return {
            firstName: "",
            lastName: "",
            email: "",
            agreed: false,
            firstNameErrors: [],
            lastNameErrors: [],
            emailErrors: [],
            agreeError: ""
        };
    },
    methods: {
        validateFirstName: function (firstName) {
            // reset so errors don't duplicate
            this.firstNameErrors = [];

            if (firstName.length < 2) {
                this.firstNameErrors.push("❌ A name must be at least two letters");
            }

            if (/\d/.test(firstName)) {
                this.firstNameErrors.push("❌ A name cannot contain a number");
            }

            if (!/^[a-zA-Z0-9&._-]+$/.test(firstName)) {
                this.firstNameErrors.push("❌ A name cannot contain special characters");
            }
        },
        validateLastName: function (lastName) {
            this.lastNameErrors = [];

            if (lastName.length < 2) {
                this.lastNameErrors.push("❌ A name must be at least two letters");
            }

            if (/\d/.test(lastName)) {
                this.lastNameErrors.push("❌ A name cannot contain a number");
            }

            if (!/^[a-zA-Z0-9&._-]+$/.test(lastName)) {
                this.lastNameErrors.push("❌ A name cannot contain special characters");
            }
        },
        validateEmail: function (email) {
            this.emailErrors = [];

            if (!/\b((?!@)\w)*@(?!.*@)\w*/.test(email)) {
                this.emailErrors.push("❌ An email address must contain exactly one @");
            }

            if (!/\./.test(email)) {
                this.emailErrors.push("❌ An email address must contain at least one full stop (.)");
            }
        },
        submit: function () {
            this.validateFirstName(this.firstName);
            this.validateLastName(this.lastName);
            this.validateEmail(this.email);

            this.agreeError = (this.agreed) ? "" : "You must agree to the Privacy Policy and Terms and Conditions in order to continue.";

            if ((this.firstNameErrors.length === 0) && (this.lastNameErrors.length === 0) && (this.emailErrors.length === 0) && this.agreed) {
                // TO FIREBASE
                db.collection("email_addresses").add({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email
                });
                // TO EMAIL
                const templateParams = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email
                };

                emailjs.send('service_qvex2mk', 'template_0s841gu', templateParams, 'VDK0Jw8DR-D-cvBiu').then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                });
            } else {
                console.log("Submission failed. Please fix your input.");
            }
        }
    }
}
</script>

<style>
.error {
    color: red;
}
.form1{
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
    padding-bottom: 5px;
}
.text p, .text span{
    font-size: 190%;
    margin-bottom: 20px;
}
.text span{
    text-decoration: underline;
    font-weight: bold;
}
#chicken {
    text-align: center;
    width: 70%;
}
#eggs{
    font-size: 125%;
    display: inline-block;

}
#btn{
    margin:5px;
    background-color: rgb(220, 247, 247);
    border-radius: 5px;
    width: 10em;
    margin: 10px auto;
}
.checkbox{
    margin: 10px;
}
</style>