<template>
  <footer class="bg-black text-white pt-3 pb-4 h-full">
    <div class="max-w-7xl m-auto flex flex-col items-center">
      <div class="footer-links flex text-center items-center mt-1 text-grayText">
        <p class="text-10px md:text-xs font-normal px-1">{{ $t("User service") }}</p>
        <span>|</span>
        <p class="text-10px md:text-xs font-normal px-1">
          {{ $t("Agreement Privacy Policy") }}
        </p>
        <span>|</span>
        <p class="text-10px md:text-xs font-normal px-1">{{ $t("Disclaimer") }}</p>
        <span>|</span>
        <p class="text-10px md:text-xs font-normal px-1">
          {{ $t("Permission details") }}
        </p>
        <span>|</span>
        <p class="text-10px md:text-xs font-normal px-1">{{ $t("ContactUs") }}</p>
        <span>|</span>
      </div>
      <div
        class="w-full flex justify-center text-10px md:text-xs font-normal text-grayText"
      >
        <span class="text-center">
          {{
            $t(
              "All live broadcasts on this site are from the Internet. This site is not engaged in any business. It only provides free live broadcasts for sports enthusiasts. If your rights are infringed, please contact us"
            )
          }}
        </span>
      </div>
      <div
        class="flex justify-center text-10px md:text-xs font-normal text-grayText mt-1"
      >
        <span>Copyright © 2021 All Rights Reserved</span>
      </div>
    </div>
  </footer>
</template>

<style>
.footer-links {
  margin-bottom: 5px;
}
</style>
