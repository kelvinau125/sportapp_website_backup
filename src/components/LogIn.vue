<template>
  
  <div class="profileForm flex flex-col items-center">
    <!-- Above -->
    <div class="flex flex-col justify-around items-center " style="height: 278px; width: 343px;">
      <div>
        <div class="">
          <form class="flex flex-col items-center" action="">
            <div class="relative">
              <img src="@/assets/ProfilePicture.png" style="width: 114px; height: 114px;" />
              <!-- Add upload button here -->
              <label for="upload" class="absolute bottom-0 right-0 cursor-pointer">
                <img src="@/assets/upload-icon.png" style="width: 24px; height: 24px;" />
                <input type="file" id="upload" style="display: none;" @change="handleImageUpload" />
              </label>
            </div>
          </form>

        </div>
        <div class="flex flex-col items-center pt-5">
          <p class="text-lg font-semibold ">NIAMAMAX</p>
          <p class="text-sm font-medium">01113393481</p>
        </div>
      </div>

      <div class="flex justify-around pt-7" style="width: 100%;">
        <div>
          <ButtonPress class="w-full bg-white" style="width: 105px; height: 60px; border-radius: 8px;">
            <p class="text-base font-normal" style="color: #333333;">系统消息</p>
          </ButtonPress>

        </div>
        <div>
          <ButtonPress class="w-full bg-white" style="width: 105px; height: 60px;">
            <p class="text-base font-normal" style="color: #333333;">联系我们</p>
          </ButtonPress>

        </div>
        <div>
          <ButtonPress class="w-full bg-white" style="width: 105px; height: 60px;">
            <p class="text-base font-normal" style="color: #333333;">系统设置</p>
          </ButtonPress>

        </div>
      </div>
    </div>
    <ButtonPress class="w-full my-14" style="width: 331px; height: 56px;">
      <p class="text-base font-semibold">退出登录</p>
    </ButtonPress>


  </div>
</template>

<script setup>
import ButtonPress from '@/components/ButtonPress.vue'

</script>


<style scoped>
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
