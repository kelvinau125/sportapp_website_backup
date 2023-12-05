<template>
    <div class="my-page-modal" v-show="showStreamPreviewModal">
        <div class="modal-content">

            <!-- close button -->
            <CloseButton @click="closeStreamPreviewModal"> </CloseButton>
            <ReverseButton @click="gobackStreamDetail"> </ReverseButton>
            <!-- Above -->
            <div>
                <h2 class="text-xl font-bold" style="padding: 20px">开播预览</h2>

                <div class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4">
                    <div @click="toLiveStream" class="card-body relative">
                    <div class="">
                        <img class="" src="@/assets/live/LiveImage.png" alt="Image" />
                    </div>
                    <div class="gradient_bottom w-full flex absolute bottom-0 items-center p-1 pb-2">
                        <div class="pr-1 pl-1 z-10 w-10 pb-1.5">
                        <img src="@/assets/ProfilePicture.png" alt="Image" />
                        </div>
                        <div class="flex flex-col pl-1 z-10 items-start pb-1.5">
                        <div class="text-white font-normal text-sm">hello</div>
                        <div class="text-10px font-bold text-white opacity-60">limin</div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div class="flex flex-col items-start pt-5 pl-10">
                    <p class="text-lg font-normal mt-2">直播时间</p>
                    <p class="text-gray-400 text-sm font-normal mt-2 h-16 break-all text-left">2023年12月4日 上午10:50</p>
                </div>
            </div>

            <div class="pt-8">
                <ButtonPress @click="showStreamDetailModal()" class="w-screen font-bold" style="height: 56px;">开始直播</ButtonPress>
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
    },

    methods: {
        logout() {
            removeCookie();
            window.location.reload();
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
</style>