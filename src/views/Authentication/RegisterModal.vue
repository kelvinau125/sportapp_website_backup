<template>
    <div class="register-modal" v-show="showRegModal" @keyup.esc="closeRegModal">
        <div class="modal-content">

            <!-- close button -->
            <CloseButton @click="closeRegModal"> </CloseButton>

            <!-- Register -->
            <form @submit.prevent="">
                <h2 class="text-xl font-bold" style="padding: 20px">{{ $t('Welcome to Register, Get Started!') }}</h2>

                <div class="form-group flex">
                    <input :placeholder="$t('Please Enter Username')" type="text" v-model="nickName" required />
                </div>

                <div class="form-group flex">
                    <!-- https://vuejsexamples.com/international-telephone-input-with-vue/ -->
                    <!-- API website for future modify -->
                    <vue-tel-input v-model="countryCode" v-bind="bindPropsUserInfo"
                        style="width: 100%; background: white; padding: 5px" />
                </div>


                <div class="form-group">
                    <div class="password-container">
                        <input :placeholder="$t('Please Enter Password')" :type="passwordFieldType" v-model="password"
                            required />
                        <div class="button mr-1.5">
                            <!-- <img :src="passwordVisibility ? '@/assets/hide.png' : '@/assets/hide.png'" /> -->
                            <img v-if="passwordVisibility" src="@/assets/unhide.png" alt="UnHide Password"
                                @click="togglePasswordVisibility" />
                            <img v-else src="@/assets/hide.png" alt="Hide Password" @click="togglePasswordVisibility" />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="password-container">
                        <input :placeholder="$t('Please Enter Password Again')" :type="passwordFieldType2nd"
                            v-model="password2nd" required />
                        <div class="button mr-1.5">
                            <!-- <img :src="passwordVisibility ? '@/assets/hide.png' : '@/assets/hide.png'" /> -->
                            <img v-if="passwordVisibility2nd" src="@/assets/unhide.png" alt="UnHide Password"
                                @click="togglePasswordVisibility2nd" />
                            <img v-else src="@/assets/hide.png" alt="Hide Password" @click="togglePasswordVisibility2nd" />
                        </div>
                    </div>
                </div>

                <!-- Warning message -->
                <div v-if="warningMessage" class="warning-message">
                    {{ warningMessage }}
                </div>

                <div class="pt-12">
                    <ButtonCom @click="register" class="w-screen" :disabled="registerDisabled">{{ $t("Register") }}</ButtonCom>
                    <div class="flex justify-center" style="padding: 20px">
                        <p>{{ $t("Already Have An Account? ") }} <button class="text-green-500" @click="showLoginModal">{{
                            $t("Login Now") }}</button></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
          
<script>
import ButtonCom from '@/components/ButtonPress.vue';
import CloseButton from '@/components/CloseButton.vue';
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css';

// import to run the get otp function
import { getOTP } from '@/service/apiProvider.js';

// pass value to OTPVerficaition.vue
import { mapActions } from 'vuex'

export default {
    components: {
        VueTelInput,
        ButtonCom,
        CloseButton,

    },

    props: {
        showRegModal: Boolean,
        closeRegModal: Function,
        showLoginModal: Function,
        showOTPModal: Function,
    },

    data() {
        return {
            nickName: '',
            password: '',
            password2nd: '',
            countryCode: '',

            bindPropsUserInfo: {
                inputOptions: { showDialCode: true, tabindex: 0 },
                validCharactersOnly: true
            },

            passwordVisibility: false,
            passwordVisibility2nd: false,

            warningMessage: '',

            registerDisabled: false,
        };
    },

    computed: {
        passwordFieldType() {
            return this.passwordVisibility ? 'text' : 'password';
        },
        passwordFieldType2nd() {
            return this.passwordVisibility2nd ? 'text' : 'password';
        },
    },

    methods: {
        closeModalOnEsc(event) {
            // Check if the pressed key is 'Esc' (key code 27)
            if (event.keyCode === 27) {
                this.closeRegModal();
            }
        },
        ...mapActions(['register']),

        async register() {
            this.registerDisabled = true;

            // validate phone number
            if (this.countryCode.startsWith('+60') || this.countryCode.startsWith('+86')) {
                if (this.countryCode.trim().length < 12) {
                    this.warningMessage = this.$t("Please enter the correct phone number");
                    this.registerDisabled = false;
                    return;
                }
            } else {
                if (this.countryCode.trim().length < 8) {
                    this.warningMessage = this.$t("Please enter the correct phone number");
                    this.registerDisabled = false;
                    return;
                }
            }

            // Validate password
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if (!this.password || !passwordRegex.test(this.password)) {
                this.warningMessage = this.$t("Password must be at least 8 characters and include at least 1 capital letter, number, and special character")
                this.registerDisabled = false;
                return;
            }

            // Validate confirm password
            if (this.password !== this.password2nd) {
                this.warningMessage = this.$t("Please Make Sure Password are Same");
                this.registerDisabled = false;
                return;
            }

            // validate empty value
            if ((
                this.nickName === null || this.nickName === undefined || this.nickName.trim() === ''
            )) {
                this.warningMessage = this.$t("NickName cannot be empty");
                this.registerDisabled = false;
                return;
            }

            if ((
                this.countryCode === null || this.countryCode === undefined || this.countryCode.trim() === ''
            )) {
                this.warningMessage = this.$t("Phone Number cannot be empty");
                this.registerDisabled = false;
                return;
            }

            if ((
                this.password === null || this.password === undefined || this.password.trim() === ''
            )) {
                this.warningMessage = this.$t("Passwords cannot be empty");
                this.registerDisabled = false;
                return;
            }

            if ((
                this.password2nd === null || this.password2nd === undefined || this.password2nd.trim() === ''
            )) {
                this.warningMessage = this.$t("Passwords cannot be empty");
                this.registerDisabled = false;
                return;
            }

            const nickname = this.nickName
            const countryCode = this.countryCode
            const password = this.password

            // send OTP to user phone
            const result = await getOTP(countryCode, "1");

            if (result === true) {
                // pass value to OTPVerficaition.vue
                this.$store.dispatch('register', { nickName: nickname, phoneNumber: countryCode, password: password, userId: 1 })

                // close the modal
                this.closeRegModal();
                // show verify otp page
                this.showOTPModal();

            } else if (result === false) {
                this.warningMessage = "Please check your network";
            } else {
                this.warningMessage = result;
            }
        },

        togglePasswordVisibility() {
            this.passwordVisibility = !this.passwordVisibility;
        },

        togglePasswordVisibility2nd() {
            this.passwordVisibility2nd = !this.passwordVisibility2nd;
        },
    },
    watch: {
        // Add a watch to listen for changes in the showModal prop
        showRegModal(newValue) {
            if (newValue) {
                // Add the 'keyup' event listener when the modal is shown
                document.addEventListener('keyup', this.closeModalOnEsc);
            } else {
                // Remove the 'keyup' event listener when the modal is hidden
                document.removeEventListener('keyup', this.closeModalOnEsc);
            }
        },
    },
};
</script>
        
<style scoped>
.register-modal {
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
    z-index: 1000;

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

.password-container {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    width: 100%;
    position: relative;
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

select {
    border: 1px solid #ccc;
    border-radius: 5px;
}

.warning-message {
    color: red;
    margin-bottom: 10px;
}
</style>
        