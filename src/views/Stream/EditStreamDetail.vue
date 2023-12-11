<template>
    <div class="my-page-modal" v-show="showEditStreamDetailModal">
        <div class="modal-content">

            <!-- close button -->
            <CloseButton @click="closeEditStreamDetailModal"> </CloseButton>
            <!-- Above -->
            <div>
                <h2 class="text-xl font-bold" style="padding: 20px">{{ $t("Live broadcast settings") }}</h2>

                <div class="form-group flex">
                    <p class="text-lg font-normal mt-2 w-16 flex items-start">{{ $t("Title") }}</p>
                    <input :placeholder="$t('Please enter a title')"  type="text" v-model="title" required />
                </div>

                <div class="flex">
                    <p class="text-lg font-normal mt-2 w-14 flex items-start">{{ $t("Cover") }}</p>

                    <div class="flex flex-col items-start">
                        <label class="bg-white rounded flex items-center justify-center cursor-pointer" style="width: 117px; height: 67px; border: 1px solid #ccc;">
                            <img v-if="imageUrl" :src="imageUrl" class="w-full h-full border-2" />
                            <!-- <span v-if="!imageUrl" @click="removeImage" class="absolute top-[130px] left-[178px] cursor-pointer text-red-500 p-2"  >X</span> -->
                            <img v-if="!imageUrl" src="@/assets/add_picture.png" class="border-2 border-white mx-auto mt-6" style="width: 20px; height: 20px;" />
                            <!-- <img src="@/assets/add_picture.png" class="border-2 border-white mx-auto mt-4" style="width: 20px; height: 20px;" /> -->
                            <input type="file" id="upload" style="display: none;" @change="handleImageUpload" />
                        </label>
                    </div>
                </div>

                <div class="flex pt-5">
                    <p class="text-lg font-normal mt-2 w-16 flex items-start">{{ $t("Category") }}</p>
                    <input class="ml-4" v-model="category" disabled required />
                </div>
                

                <div class="flex flex-col items-start pt-5">
                    <div class="flex items-center">
                        <p class="text-lg font-normal mt-2">{{ $t("Server Address") }}</p>
                        <img src="@/assets/copy.png" class="ml-2 mt-2 cursor-pointer" style="width: 20px; height: 20px;" @click="copyToClipboard(true)"/>
                    </div>
                    <p class="text-gray-400 text-sm font-normal mt-2 cursor-pointer" @click="copyToClipboard(true)">{{ this.host }}</p>
                </div>

                
                <div class="flex flex-col items-start pt-5">
                    <div class="flex items-center">
                        <p class="text-lg font-normal mt-2">{{ $t("Push streaming code") }}</p>
                        <img src="@/assets/copy.png" class="ml-2 mt-2 cursor-pointer" style="width: 20px; height: 20px;"  @click="copyToClipboard(false)" />
                    </div>
                    <p class="text-gray-400 text-sm font-normal mt-2 h-16 break-all text-left cursor-pointer" @click="copyToClipboard(false)">{{ this.code }}</p>
                </div>
            </div>

            <!-- Warning message -->
            <div v-if="warningMessage" class="warning-message">
                {{ warningMessage }}
            </div>


            <div class="pt-8">
                <ButtonPress @click="editStream()" class="w-screen font-bold" style="height: 56px;">{{ $t("Confirm changes") }}</ButtonPress>
                <div class="flex justify-center" style="padding: 8px" />
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'

import ButtonPress from '@/components/ButtonPress.vue';
import CloseButton from '@/components/CloseButton.vue';
import Clipboard from 'clipboard';

import { getStreamDetails, editStreamDetails } from '@/service/apiStreamProvider.js';

export default {
    components: {
        ButtonPress,
        CloseButton,
    },

    data() {
        return {
            category: ref(""),
            title: ref(""),
            imageUrl: null,
            code: ref(""),
            host: ref(""),
            time: ref(""),
            file: ref(),
            warningMessage: '',
            
            streamid: this.LiveID,
        }
    },

    props: {
        showEditStreamDetailModal : Boolean,
        closeEditStreamDetailModal: Function,
        LiveID: String,
    },

    async mounted() {
        const getDetail = await getStreamDetails(this.streamid)

        this.category = (getDetail["sportType"] === "0" ? this.$t("Football") : this.$t("Basketball"))
        this.imageUrl = getDetail["cover"]
        this.title = getDetail["title"]
        this.host = getDetail["pushHost"]
        this.code = getDetail["pushCode"]
        this.date = getDetail["liveDate"]
    },

    methods: {
        handleImageUpload(event) {
            this.file = event.target.files[0];

            if (this.file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                this.imageUrl = e.target.result;
                };
                reader.readAsDataURL(this.file);
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
        copyToClipboard(details) {
            // true = host 
            // false = code

            let textToCopy;

            (details)
            ? textToCopy = this.host
            : textToCopy = this.code

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
        async editStream(){
            // validate empty value
            if ( (
                this.title === null || this.title === undefined || this.title.trim() === ''
            )) {
                this.warningMessage = this.$t("Title cannot be empty");
                return;
            }

            if ( (
                this.imageUrl === null || this.imageUrl === undefined || this.imageUrl.trim() === ''
            )) {
                this.warningMessage = this.$t("Image cannot be empty");
                return;
            }

            if(this.file == null) {
                this.warningMessage = this.$t("Make sure title and picture have changed");
                return;
            }

            this.warningMessage= ''

            const result = await editStreamDetails(this.streamid, this.title, this.file);

            if (result) {
                // close the modal and refresh the page
                this.closeEditStreamDetailModal();
                window.location.reload();
            } else {
                console.log("error to create stream")
            }

        }
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

.warning-message {
    color: red;
    margin-bottom: 10px;
}


</style>