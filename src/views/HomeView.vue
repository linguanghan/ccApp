<template>
  <div class="home">
    <template>
      <div class="container">
        <div class="header">header</div>
        <div class="body">
          <router-view />
        </div>
        <div class="foot">
          <TabBar
            class="tab-bar"
            v-model="selectedLabelDefault"
            :data="tabs"
            @click="clickHandler"
            @change="changeHandler"
          >
          </TabBar>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { TabBar } from "cube-ui";
import "./index.less";

export default {
  data() {
    return {
      selectedLabelDefault: "Home",
      tabs: [
        {
          label: "Home",
          icon: "cubeic-home",
        },
        {
          label: "Like",
          icon: "cubeic-like",
        },
        {
          label: "Vip",
          icon: "cubeic-vip",
        },
        {
          label: "My",
          icon: "cubeic-person",
        },
      ],
    };
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
      this.$router.push({ path: "/about" });
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      console.log(label);
    },
  },
  name: "HomeView",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TabBar,
  },
};
</script>
