<!-- <template>
    <footer class="tui-live-footer" :class="className">
      <Avatar :size="40" :image="ownerProfile.avatar || defaultUserAvatar" />
      <div class="tui-live-footer-main">
        <div class="owner-name">
          <h1>{{ ownerProfile.nick || ownerProfile.userID }}</h1>
          <Icon :type="IconTypes.OWNER" width="15" height="15" />
        </div>
        <ul class="tui-live-list tag-list">
          <li v-for="(item, index) in ownerProfileCustomField" :key="index" class="tui-live-item tag-item">
            {{ item.value }}
          </li>
        </ul>
      </div>
      <ul class="tui-live-list opate-list">
        <Follow :active="false" />
        <Subscribe :active="false" />
        <LikeOrUnlike :active="false" />
        <slot name="activePlugins"></slot>
      </ul>
    </footer>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import { useLiveActiveElements } from './hooks/useLiveActiveElements';
  import { Icon, IconTypes, Avatar } from '@tencentcloud/chat-uikit-react';
  import { formateNumber } from './untils';
  import { useTUILiveContext } from './context/TUILiveContext';
  
  const defaultUserAvatar = 'https://web.sdk.qcloud.com/component/TUIKit/assets/avatar_21.png';
  
  export default {
    props: {
      className: String,
      conversation: Object,
      group: Object,
      ownerLabelList: Array,
      ownerProfile: Object,
      myProfile: Object,
      activePlugins: Array,
    },
    components: {
      Icon,
      Avatar,
    },
    setup(props) {
      const {
        group: contextGroup,
        ownerProfile: contextOwnerProfile,
        myProfile: contextMyProfile,
        activePlugins: contextActivePlugins,
        ownerLabelList: contextOwnerLabelList,
        groupCounters,
      } = useTUILiveContext('TUILiveHeader');
  
      const group = computed(() => props.group || contextGroup);
      const myProfile = props.myProfile || contextMyProfile;
      const ownerLabelList = props.ownerLabelList || contextOwnerLabelList;
      const ownerProfile = props.ownerProfile || contextOwnerProfile;
      const ownerProfileCustomField = computed(() =>
        ownerLabelList || (ownerProfile?.memberCustomField || []).filter((item) => item?.value)
      );
  
      const Follow = useLiveActiveElements({
        icon: IconTypes.UNUNION,
        activeIcon: IconTypes.UNION,
        name: 'Follow',
        iconWidth: 12,
        iconHeight: 12,
        key: 'LiveDemoFollow',
        value: false,
      });
  
      const Subscribe = useLiveActiveElements({
        icon: IconTypes.UNVECTOR,
        activeIcon: IconTypes.VECTOR,
        name: 'Subscribe',
        key: 'LiveDemoSubscribe',
        value: false,
      });
  
      const LikeOrUnlike = useLiveActiveElements({
        icon: IconTypes.LIKE,
        activeIcon: IconTypes.LIKED,
        name: formateNumber(groupCounters?.LiveDemoLike || 0, 1),
        value: false,
        key: 'LiveDemoLike',
        suffix: {
          icon: IconTypes.UNLIKE,
          activeIcon: IconTypes.UNLIKED,
          value: false,
        },
      });
  
      return {
        group,
        myProfile,
        ownerProfile,
        ownerProfileCustomField,
        Follow,
        Subscribe,
        LikeOrUnlike,
        defaultUserAvatar,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
   -->