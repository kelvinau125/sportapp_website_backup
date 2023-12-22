<template>
  <div class="modal" v-show="showDownloadAPPModal">
    <div class="modal-content">
      <!-- close button -->
      <CloseButton @click="closeDownloadAPPModal"> </CloseButton>

      <!-- edit user nickname -->
      <form @submit.prevent="">
        <div class="flex justify-center p-8">
          <img
            class="w-[119px] h-[130px] items-center"
            src="@/assets/downloadlogo.png"
            alt="download logo"
          />
        </div>

        <h2 class="text-[20px] font-semibold" style="color: #16b13b">
          {{ $t("Download App") }}
        </h2>
        <h2 class="text-[14px] pt-3 font-medium">{{ $t("For more live matches, click to download the App") }}</h2>

        <div class="pt-8">
          <ButtonCom @click="downloadlink()" class="w-screen"> {{ $t("Download") }} </ButtonCom>
          <div class="flex justify-center pb-5" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// component
import ButtonCom from "@/components/ButtonPress.vue";
import CloseButton from "@/components/CloseButton.vue";

export default {
  components: {
    ButtonCom,
    CloseButton,
  },

  props: {
    showDownloadAPPModal: Boolean,
    closeDownloadAPPModal: Function,
  },

  methods: {
    async downloadlink() {},
  },

};
</script>

<style scoped>
.modal {
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
  background: #f4f9f4;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 80%;
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

select {
  border: 1px solid #ccc;
  border-radius: 5px;
}

.warning-message {
  color: red;
  margin-bottom: 10px;
}
</style>
