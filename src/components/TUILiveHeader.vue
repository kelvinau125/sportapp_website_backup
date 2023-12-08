<!-- <template>
  <header class="tui-live-header" :class="className">
    <div class="tui-live-header-name">
      <h1>{{ group.name || group.groupID }}</h1>
      <slot name="menuIcon"></slot>
    </div>
    <div class="tui-live-header-content">
      <div class="tui-live-header-label">
        <Icon type="LIVING" width="12" height="12" />
        <p>Living</p>
      </div>
      <ul class="tui-live-list tag-list">
        <li
          v-for="(item, index) in groupCustomField"
          :key="index"
          class="tui-live-item tag-item"
          @click="handleTagClick(item.value, $event)"
        >
          {{ item.value }}
        </li>
      </ul>
      <ul class="tui-live-list">
        <li v-for="item in contentList" :key="item.icon" class="tui-live-item">
          <Icon :type="item.icon" width="12" height="12" />
          <span class="list-item-text">{{ formateNumber(item.value || 0, 1) }}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { Icon, IconTypes } from "@tencentcloud/chat";
// import { formateNumber } from "./untils";
import { TUILiveContext } from "./TUILiveContext.vue";

export default {
  props: {
    className: String,
    conversation: Object,
    // group: Object,
  },
  components: {
    Icon,
  },
  setup(props) {
    const {
      group: contextGroup,
      //   menuIcon: contextMenuIcon,
      onTagClick: contextOnTagClick,
      memberCount,
      groupCounters,
    } = TUILiveContext("TUILiveHeader");

    const group = computed(() => props.group || contextGroup);

    const handleTagClick = (value, event) => {
      if (props.onTagClick || contextOnTagClick) {
        const onTagClick = props.onTagClick || contextOnTagClick;
        onTagClick({ value, ele: event });
      }
    };

    const groupCustomField = computed(() =>
      (group.value?.groupCustomField || []).filter((item) => item?.value)
    );

    const contentList = computed(() => [
      {
        icon: IconTypes.MEMBER,
        value: memberCount,
      },
      {
        icon: IconTypes.UNION,
        value: groupCounters?.LiveDemoFollow || 0,
      },
      {
        icon: IconTypes.VECTOR,
        value: groupCounters?.LiveDemoSubscribe || 0,
      },
    ]);

    return {
      group,
      groupCustomField,
      contentList,
      handleTagClick,
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style> -->
