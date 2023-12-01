<template>
    <div class="edit-nickname-modal" v-show="showEditNicknameModal">
        <div class="modal-content">
    
        <!-- close button -->
        <CloseButton @click="closeEditNicknameModal"> </CloseButton>

        <!-- edit user nickname -->
        <form @submit.prevent="">

            <h2 class="text-xl font-bold" style="padding: 20px"> {{ $t("Change Nickname") }} </h2>

            <div class="form-group flex">
                <input :placeholder="$t('Please Enter Username')"  type="text" id="nickname"  v-model="nickName" required />
            </div>

            <!-- Warning message -->
            <div v-if="warningMessage" class="warning-message">
                {{ warningMessage }}
            </div>
    
            <div class="pt-12">
                <ButtonCom @click="editNickname" class="w-screen">{{ $t("Update Nickname") }}</ButtonCom>
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
    import { UpdateUserNickname } from '@/service/apiProvider.js';

    export default {
    components:{
        ButtonCom,
        CloseButton,
    },

    props: {
        showEditNicknameModal: Boolean,
        closeEditNicknameModal: Function,
        showEditProfileModal: Function,
    },

    data() {
        return {
        nickName: '',
        warningMessage: '',
        };
    },

    methods: {
        async editNickname() {
        // validate empty value
        if ( (
            this.nickName === null || this.nickName === undefined || this.nickName.trim() === ''
        )) {
            this.warningMessage = this.$t("NickName cannot be empty");
            return;
        }

        // change nickname
        const result = await UpdateUserNickname(this.nickName);

        if (result === true) {
            this.nickName= '',
            this.warningMessage= '',
            this.closeEditNicknameModal();
            this.showEditProfileModal(); 

        } else if (result === false) {
            this.warningMessage = "Please check your network";
        } else {
            this.warningMessage = result;
        }

        },
    
    },
    };
</script>
        
<style scoped>
    .edit-nickname-modal {
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
    z-index: 1000 ;

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

    .warning-message {
    color: red;
    margin-bottom: 10px;
    }


</style>
          