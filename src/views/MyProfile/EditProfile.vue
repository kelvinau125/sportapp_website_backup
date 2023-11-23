<template>
    <div class="edit-profile-modal" v-show="showEditProfileModal">
        <div class="modal-content">
    
        <!-- close button -->
        <CloseButton @click="closeEditProfileModal"> </CloseButton>
        <!-- Above -->
        <div>
            <h2 class="text-xl font-bold" style="padding: 20px">创建新密码</h2>
            <div class="">
                <div class="flex flex-col items-center">
                    <div class="relative">
                        <img src="@/assets/ProfilePicture.png" style="width: 114px; height: 114px;" />
                        <!-- Add upload button here -->
                        <label for="upload" class="absolute bottom-0 right-0 cursor-pointer">
                        <img src="@/assets/upload-icon.png" style="width: 24px; height: 24px;" />
                        <input type="file" id="upload" style="display: none;" @change="handleImageUpload" />
                        </label>
                    </div>
                </div>
            </div>

            <div class="pt-12">
                <ButtonPress @click="editPassword" class="w-screen bg-white" style="height: 60px;">
                    <p class="text-base font-normal" style="color: #333333;">修改昵称</p>
                </ButtonPress>
            </div>

            <div class="pt-5 pb-32">
                <ButtonPress @click="editPassword" class="w-screen bg-white" style="height: 60px;">
                    <p class="text-base font-normal" style="color: #333333;">修改密码</p>
                </ButtonPress>
            </div>
        </div>
    </div>
    </div>
</template>
  
<script>
  import ButtonPress from '@/components/ButtonPress.vue';
  import CloseButton from '@/components/CloseButton.vue';


  export default {
    components:{
        ButtonPress,
        CloseButton,

    },

    props: {
        showEditProfileModal: Boolean,
        CloseEditProfileModal: Function,
    },
}
</script>
  
  
<style scoped>
    .edit-profile-modal {
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

  
</style>