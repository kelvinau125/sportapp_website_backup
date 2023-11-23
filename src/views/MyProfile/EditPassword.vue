<template>
    <div class="edit-password-modal" v-show="showEditPasswordModal">
        <div class="modal-content">
    
        <!-- close button -->
        <CloseButton @click="closeEditPasswordModal"> </CloseButton>
    
        <!-- login -->
        <form @submit.prevent="">
            <h2 class="text-xl font-bold" style="padding: 20px">创建新密码</h2>
            <div class="form-group">
                <div class="password-container">
                <input
                :placeholder="$t('Please Enter Password')"
                :type="passwordFieldType"
                id="password"
                v-model="password"
                required
                />
                <div class="button mr-1.5">
                    <!-- <img :src="passwordVisibility ? '@/assets/hide.png' : '@/assets/hide.png'" /> -->
                    <img v-if="passwordVisibility" src="@/assets/unhide.png" alt="UnHide Password" @click="togglePasswordVisibility" />
                    <img v-else src="@/assets/hide.png" alt="Hide Password" @click="togglePasswordVisibility" />
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="password-container">
                <input
                :placeholder="$t('Please Enter Password Again')"
                :type="passwordFieldType2nd"
                id="password2nd"
                v-model="password2nd"
                required
                />
                <div class="button mr-1.5">
                    <!-- <img :src="passwordVisibility ? '@/assets/hide.png' : '@/assets/hide.png'" /> -->
                    <img v-if="passwordVisibility2nd" src="@/assets/unhide.png" alt="UnHide Password" @click="togglePasswordVisibility2nd" />
                    <img v-else src="@/assets/hide.png" alt="Hide Password" @click="togglePasswordVisibility2nd" />
                </div>
                </div>
            </div>

            <!-- Warning message -->
            <div v-if="warningMessage" class="warning-message">
                {{ warningMessage }}
            </div>

            <p class="mb-20">新的密码需要与旧的密码不相同</p>

    
            <div class="pt-12">
                <ButtonCom @click="editPassword" class="w-screen">重置密码</ButtonCom>
                <div class="flex justify-center" style="padding: 20px"/>
            </div>
        </form>
        </div>
    </div>
</template>
          
<script>
    // component
    import ButtonCom from '@/components/ButtonPress.vue';
    import CloseButton from '@/components/CloseButton.vue';

    // import to run the change password function
    import { UpdateUserPassword } from '@/service/apiProvider.js';

    export default {
    components:{
        ButtonCom,
        CloseButton,
    },

    props: {
        showEditPasswordModal: Boolean,
        closeEditPasswordModal: Function,
    },

    data() {
        return {
        countryCode: '',
        bindPropsUserInfo: {
            inputOptions: { showDialCode: true, tabindex: 0 },
            validCharactersOnly: true
        },
        warningMessage: '',

        
        passwordVisibility: false,
        passwordVisibility2nd: false,
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
        async editPassword() {
        // Validate password 
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // if (!this.password || !passwordRegex.test(this.password)) {
        //     this.warningMessage = this.$t("Password must be at least 8 characters and include at least 1 capital letter, number, and special character")
        //     return;
        // }

        // Validate confirm password
        if (this.password !== this.password2nd) {
            this.warningMessage =  this.$t("Please Make Sure Password are Same");
            return;
        }

        if ( (
            this.password === null || this.password === undefined || this.password.trim() === ''
        )) {
            this.warningMessage = this.$t("Passwords cannot be empty");
            return;
        }

        if ( (
            this.password2nd === null || this.password2nd === undefined || this.password2nd.trim() === ''
        )) {
            this.warningMessage = this.$t("Passwords cannot be empty");
            return;
        }

        // change password
        const result = await UpdateUserPassword(this.password);

        if (result === true) {
            // pass value to OTPVerficaition.vue
            // this.$store.dispatch('register', { nickName: nickname, phoneNumber: countryCode, password: password, userId: 1 })

            // // close the modal
            this.closeEditPasswordModal();
            // // show verify otp page
            // this.showOTPModal();
            
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
    };
</script>
        
<style scoped>
    .edit-password-modal {
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

    select{
    border: 1px solid #ccc;
    border-radius: 5px;
    }

    .warning-message {
    color: red;
    margin-bottom: 10px;
    }


</style>
          