<template>
    <BackgroundImage>
        <div class="h-[650px] flex items-center justify-center">
            <span class="font-medium text-2xl text-white">{{ $t("Page Not Exist") }}</span>
            <img class="pl-5" src="@/assets/pandaNotFound.gif" alt="panda loading" style="width: 108px; height: 108px" />
        </div>
    </BackgroundImage>
</template>

<script>
import BackgroundImage from "@/components/BackGround.vue";

export default ({
    components: {
        BackgroundImage,
    }
})

</script>