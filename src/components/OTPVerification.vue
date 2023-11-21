<template>
    <div class="otp-verification-modal" v-show="showOTPModal">
        <div class="modal-content">
    
         <!-- close button -->
         <button class="close-button" @click="closeOTPModal"> 
            <img src="../assets/close.png" alt="Close" />
         </button>
    
        <!-- Register -->
        <form @submit.prevent="">
            <h2 class="text-xl font-bold" style="padding: 20px">验证码验证</h2>
    
            <div v-for="(controller, index) in controllers" :key="index" class="digit-input">
                <input
                v-model="controller.value"
                @input="handleInput(index)"
                @focus="handleFocus(index)"
                @blur="handleBlur(index)"
                :class="{ 'green-border': controller.value !== '' }"
                type="text"
                maxlength="1"
                class="digit-field"
                ref="inputRefs"
                />
            </div>

            <!-- <button @click="readValues">Read Values</button> -->
    
            <!-- Warning message -->
            <div v-if="warningMessage" class="warning-message">
                {{ warningMessage }}
            </div>
    
            <div class="pt-12">
                <ButtonCom @click="verify" class="w-screen">验证</ButtonCom>
                <div class="flex justify-center" style="padding: 20px">
                    <p>没有收到验证码？<button class="text-green-500" @click="routerPush()">再次发送</button></p>
                </div>
            </div>
        </form>
        </div>
    </div>
</template>
          
<script>
    import ButtonCom from './ButtonPress.vue';

    // get user cookie
    import VueCookies from 'vue-cookies';

    // import the remove cookie function
    import { removeCookieRegister } from '@/service/cookie';

    // import to run the register function
    import { verifyOTP } from '@/service/apiProvider.js';
    // import { verifyOTP, registerUser } from '@/service/apiProvider.js';

    export default {
    components:{
        ButtonCom,
    },

    props: {
        showOTPModal: Boolean,
        closeOTPModal: Function,
        showLoginModal: Function,
    },

    data() {
        return {
        warningMessage: '',

        controllers: [
            { value: '' },
            { value: '' },
            { value: '' },
            { value: '' },
        ],
        };
    },

    methods: {
        async verify() {
            const OTPvalue = (this.controllers.map(controller => controller.value).join('')).toString();
            console.log('Input values:', OTPvalue);

            const result = await verifyOTP(VueCookies.get('mobile'), OTPvalue, "1");

            if (result) {
                // const result = await registerUser(VueCookies.get('nickname'),VueCookies.get('mobile'),VueCookies.get('password'));
                const result = true;

                if (result) {
                // remove cookie
                removeCookieRegister();
                // close the modal and refresh the page
                this.closeOTPModal();
                // show the login modal
                this.showLoginModal();

                // this.closeRegModal();
                // window.location.reload();
                // // show the login modal
                // this.showLoginModal();
                } else {
                    this.warningMessage = "Please check internet connection";
                }

            } else {
                this.warningMessage = "Please check internet connection";
            }
        },

        routerPush() {
            // // close the modal and refresh the page
            // this.closeRegModal();

            // // show the login modal
            // this.showLoginModal();
        },

        handleInput(index) {
        let inputValue = this.controllers[index].value;

        // Check if the entered value is a digit
        if (typeof inputValue === 'string') {
            inputValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters
        }

        // Check if inputValue is still a string before proceeding
        if (typeof inputValue === 'string') {
            this.controllers[index].value = inputValue;
        }

        if (this.controllers[index].value.length === 1) {
            this.focusNext(index);
        } else if (this.controllers[index].value.length === 0) {
            this.focusPrevious(index);
        }
        },
        
        handleFocus() {
        },

        handleBlur() {
        },

        focusNext(index) {
        if (index < this.controllers.length - 1) {
            const nextInput = this.$refs.inputRefs[index + 1];
            if (nextInput) {
            nextInput.focus();
            }
        } else {
            // Last input, submit or do something else
        }
        },

        focusPrevious(index) {
        if (index > 0) {
            const prevInput = this.$refs.inputRefs[index - 1];
            if (prevInput) {
            prevInput.focus();
            }
        } else {
            // First input, do something if needed
        }
        },
    },
    };
</script>
        
<style scoped>
    .otp-verification-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    }
    
    .modal-content {
    background: #F4F9F4;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 400px;
    color: black;
    position: relative; 
    }

    .form-group {
    margin-bottom: 15px;
    }

    input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    }

    label {
    display: block;
    font-weight: bold;
    }
    
    .button {
    position: absolute;
    right: 5px;
    background: none;
    border: none;
    cursor: pointer;
    }

    select{
    border: 1px solid #ccc;
    border-radius: 5px;
    }

    .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    }

    .close-button img {
    width: 20px;
    }

    .warning-message {
    color: red;
    margin-bottom: 10px;
    }

    .digit-input {
    display: inline-block;
    margin-right: 10px;
    margin-left: 10px; /* Adjust as needed */
    }

    .digit-field {
    height: 60px; /* Adjust as needed */
    width: 70px; /* Adjust as needed */
    text-align: center;
    font-size: 22px; /* Adjust as needed */
    border: 1px solid #ccc; /* Adjust as needed */
    border-radius: 6px; /* Adjust as needed */
    margin-bottom: 80px; /* Adjust as needed */
    }

    .green-border {
    border: 3px solid  rgb(34 197 94); /* Change to your desired color */
    }


</style>
        