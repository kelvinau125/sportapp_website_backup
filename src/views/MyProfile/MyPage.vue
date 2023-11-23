<template>
    <div class="my-page-modal" v-show="showMyPageModal">
        <div class="modal-content">
    
        <!-- close button -->
        <CloseButton @click="closeMyPageModal"> </CloseButton>
        <!-- Above -->
        <div class="mt-10">

            <div class="">
                <div class="flex flex-col items-center">
                    <div class="relative">
                        <img src="@/assets/ProfilePicture.png" style="width: 114px; height: 114px;" />
                        <!-- Add upload button here -->
                        <!-- <label for="upload" class="absolute bottom-0 right-0 cursor-pointer">
                        <img src="@/assets/upload-icon.png" style="width: 24px; height: 24px;" />
                        <button style="display: none;" @click="showEditProfileModal" />
                        </label> -->

                        <button class="absolute bottom-0 right-0 cursor-pointer" @click="showEditProfileModal">
                        <img src="@/assets/upload-icon.png" style="width: 24px; height: 24px;" />
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center pt-5">
                <p class="text-lg font-semibold mt-2">NIAMAMAX</p>
                <p class="text-sm font-medium mt-2">01113393481</p>
            </div>
            </div>
    
            <div class="flex justify-between pt-7" style="width: 100%;">
                <div>
                    <ButtonPress class="w-full bg-white pl-6 pr-6" style="width: 100%; height: 60px; border-radius: 8px;">
                    <p class="text-base font-normal" style="color: #333333;">系统消息</p>
                    </ButtonPress>
        
                </div>
                <div>
                    <ButtonPress class="w-full bg-white pl-6 pr-6" style="width: 100%; height: 60px;">
                    <p class="text-base font-normal" style="color: #333333;">联系我们</p>
                    </ButtonPress>
        
                </div>
                <div>
                    <ButtonPress class="w-full bg-white pl-6 pr-6" style="width: 100%; height: 60px;">
                    <p class="text-base font-normal" style="color: #333333;">系统设置</p>
                    </ButtonPress>
        
                </div>
            </div>

        <div class="pt-12">
            <ButtonPress @click="editPassword" class="w-screen" style="height: 56px;">退出登录</ButtonPress>
            <div class="flex justify-center" style="padding: 20px"/>
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
        showMyPageModal: Boolean,
        closeMyPageModal: Function,
        showEditProfileModal: Function,
    },
}
</script>
  
  
<style scoped>
    .my-page-modal {
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

    .profileForm {
        max-width: 375px;
        max-height: 514px;
        margin: 0 auto;
        padding: 20px;
        padding-top: 50px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #F4F9F4;
    
    }
  
</style>