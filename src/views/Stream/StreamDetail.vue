<template>
    <div class="my-page-modal" v-show="showStreamDetailModal">
        <div class="modal-content">

            <!-- close button -->
            <CloseButton @click="closeStreamDetailModal"> </CloseButton>
            <ReverseButton @click="gobackmypage"> </ReverseButton>
            <!-- Above -->
            <div>
                <h2 class="text-xl font-bold" style="padding: 20px">我要开播</h2>

                <div class="form-group flex">
                    <p class="text-lg font-normal mt-2 w-16 flex items-start">标题</p>
                    <input placeholder="请输入标题"  type="text" v-model="title" required />
                </div>

                <div class="flex">
                    <p class="text-lg font-normal mt-2 w-14 flex items-start">封面</p>

                    <div class="flex flex-col items-start">
                        <label class="bg-white rounded py-1.5 flex items-center justify-center cursor-pointer" style="width: 117px; height: 67px; border: 1px solid #ccc;">
                            <img v-if="imageUrl" :src="imageUrl" class="border-2 border-white mx-auto mt-4" style="width: 100%; height: 100%;" />
                            <!-- <span v-if="!imageUrl" @click="removeImage" class="absolute top-[130px] left-[178px] cursor-pointer text-red-500 p-2"  >X</span> -->
                            <img v-if="!imageUrl" src="@/assets/add_picture.png" class="border-2 border-white mx-auto mt-4" style="width: 20px; height: 20px;" />
                            <!-- <img src="@/assets/add_picture.png" class="border-2 border-white mx-auto mt-4" style="width: 20px; height: 20px;" /> -->
                            <input type="file" id="upload" style="display: none;" @change="handleImageUpload" />
                        </label>
                    </div>
                </div>
                

                <div class="flex flex-col items-start pt-5">
                    <div class="flex items-center">
                        <p class="text-lg font-normal mt-2">推流码</p>
                        <img src="@/assets/copy.png" class="ml-2 mt-2 cursor-pointer" style="width: 20px; height: 20px;" @click="copyToClipboard"/>
                    </div>
                    <p class="text-gray-400 text-sm font-normal mt-2 cursor-pointer" @click="copyToClipboard">rtmp://190299.push.tlivecloud.com/live/</p>
                </div>

                
                <div class="flex flex-col items-start pt-5">
                    <div class="flex items-center">
                        <p class="text-lg font-normal mt-2">服务器地址</p>
                        <img src="@/assets/copy.png" class="ml-2 mt-2 cursor-pointer" style="width: 20px; height: 20px;"  @click="copyToClipboard" />
                    </div>
                    <p class="text-gray-400 text-sm font-normal mt-2 h-16 break-all text-left cursor-pointer" @click="copyToClipboard">phillip?txSecret=08a985db4f4c8801fd64d63bc8f74233&txTime=656E9BEC</p>
                </div>
            </div>

            <div class="pt-8">
                <ButtonPress @click="showStreamPreviewModal()" class="w-screen font-bold" style="height: 56px;">开播浏览</ButtonPress>
                <div class="flex justify-center" style="padding: 8px" />
            </div>
        </div>
    </div>
</template>
  
<script>
import ButtonPress from '@/components/ButtonPress.vue';
import CloseButton from '@/components/CloseButton.vue';
import ReverseButton from '@/components/ReverseButton.vue';
import Clipboard from 'clipboard';

export default {
    components: {
        ButtonPress,
        CloseButton,
        ReverseButton,
    },

    data() {
        return {
            title: "",
            imageUrl: null,
        }
    },

    props: {
        showStreamDetailModal : Boolean,
        closeStreamDetailModal: Function,
        showStreamPreviewModal: Function,
        gobackmypage: Function,
    },

    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                this.imageUrl = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        removeImage() {
            this.imageUrl = null;
            // If you want to clear the input file as well
            const input = this.$refs.upload;
            if (input) {
                input.value = null;
            }
        },
        copyToClipboard() {
            const textToCopy = 'phillip?txSecret=08a985db4f4c8801fd64d63bc8f74233&txTime=656E9BEC';

            const clipboard = new Clipboard('.text-gray-400', {
                text: () => textToCopy,
            });

            clipboard.on('success', () => {
                console.log('Text successfully copied to clipboard');
                clipboard.destroy();
            });

            clipboard.on('error', () => {
                console.error('Unable to copy text to clipboard');
                clipboard.destroy();
            });

            clipboard.onClick({ currentTarget: document.querySelector('.text-gray-400') });
        },
    }

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

</style>