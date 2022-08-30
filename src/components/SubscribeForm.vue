<template>
    <div>
        <form ref="form" @submit.prevent="submit">
            <input type="text" placeholder="First name" v-model="firstName" required />
            <ul v-if="firstNameErrors.length">
                <li v-for="e in firstNameErrors" :key="e">{{ e }}</li>
            </ul>
            <input type="text" placeholder="Last name" v-model="lastName" required />
            <input type="text" placeholder="Email address" v-model="email" required />
            <input type="submit" />
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
</style>