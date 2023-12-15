<template>
    <div class="my-page-modal" v-show="showStreamPreviewModal">
        <div class="modal-content">

            <!-- close button -->
            <CloseButton @click="closeStreamPreviewModal"> </CloseButton>
            <ReverseButton @click="gobackStreamDetail"> </ReverseButton>
            <!-- Above -->
            <div>
                <h2 class="text-xl font-bold" style="padding: 20px">{{ $t("Start preview") }}</h2>

                <div class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4">
                    <div @click="toLiveStream" class="card-body relative">
                    <div class="w-full h-full border-2">
                        <img class="w-full h-full border-2" :src= streamDetailsData.imageUrl alt="Image" />
                    </div>
                    <div class="gradient_bottom w-full flex absolute bottom-0 items-center p-1 pb-2">
                        <div class="pr-1 pl-1 z-10 w-10 pb-1.5">
                            <img :src= avatar class="rounded-full border-2 border-white" alt="Image" style="border-radius:20px "/>
                        </div>
                        <div class="flex flex-col pl-1 items-start w-[200px] z-10">
                            <div class="font-normal text-sm text-white text-start multiline-ellipsis w-[210px] ">{{ streamDetailsData.title }}</div>
                            <div class="text-10px text-white font-bold opacity-60 text-start multiline-ellipsis  w-[210px]">{{ nickname }}</div>
                        </div>

                        <!-- <div class="flex flex-col pl-1 z-10  pb-1.5">
                        <div class="text-white font-normal text-sm break-all w-[220px]">
                            <span class="multiline-ellipsis">{{ streamDetailsData.title }}</span>
                        </div>
                        <div class="text-10px font-bold text-white opacity-60 break-all w-[220px]">
                            <span class="multiline-ellipsis">{{ nickname }}</span>
                        </div>
                        </div> -->
                    </div>
                    </div>
                </div>
                
                <div class="flex flex-col items-start pt-5 pl-10">
                    <p class="text-lg font-normal mt-2">{{ $t("Live broadcast time") }}</p>
                    <p class="text-gray-400 text-sm font-normal mt-2 h-16 break-all text-left">{{ streamDetailsData.time }}</p>
                </div>
            </div>

            <div class="pt-8">
                <ButtonPress @click="startStream()" class="w-screen font-bold" style="height: 56px;">{{ $t("Start live broadcast") }}</ButtonPress>
                <div class="flex justify-center" style="padding: 8px" />
            </div>
        </div>
    </div>
</template>
  
<script>
import ButtonPress from '@/components/ButtonPress.vue';
import CloseButton from '@/components/CloseButton.vue';
import ReverseButton from '@/components/ReverseButton.vue';

// get the avatar
import VueCookies from 'vue-cookies';

// import the remove cookie function
import { removeCookie } from '@/service/cookie';

import { createStream } from '@/service/apiStreamProvider.js';

export default {
    components: {
        ButtonPress,
        CloseButton,
        ReverseButton,
    },

    data() {
        return {
            nickname: VueCookies.get('username'),
            phonenumber: VueCookies.get('phoneNumber'),
            avatar: VueCookies.get('avatar'),
        }
    },

    props: {
        showStreamPreviewModal : Boolean,
        closeStreamPreviewModal: Function,
        gobackStreamDetail: Function,
        streamDetailsData: Object,
    },

    methods: {
        logout() {
            removeCookie();
            window.location.reload();
        },
        async startStream(){
            const result = await createStream(this.streamDetailsData.selectedSport,this.streamDetailsData.time, this.streamDetailsData.host, this.streamDetailsData.code, this.streamDetailsData.file, this.streamDetailsData.title);

            if (result) {
                // close the modal and refresh the page
                this.closeStreamPreviewModal();
                window.location.reload();
            } else {
                // console.log("error to create stream")
            }
        }
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
.card {
  display: inline-block;
  width: 287px;
  height: 162px;

}

.card-body {
  text-align: center;
  height: 161px;
  width: 100%;
  cursor: pointer;
  position: relative;
}

.card-body img {
  width: 100%;
  border-radius: 8px;
}


.gradient_bottom::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);

  background-size: cover;
  border-radius: 8px;
}

.multiline-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.multiline-ellipsis::after {
  content: '...';
  display: inline-block;
}
</style>