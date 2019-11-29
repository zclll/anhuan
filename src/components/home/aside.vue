<template>
  <aside class="aside-wrapper">
    <div class="full-control">
      <div class="list">
        <md-list :md-expand-single="expandSingle">
          <md-list-item md-expand v-for="cf in config" :key="cf.id">
            <md-icon>{{cf.icon}}</md-icon>
            <span class="md-list-item-text">{{cf.title}}</span>

            <md-list slot="md-expand">
              <md-list-item
                class="md-inset"
                v-for="ch in cf.child"
                :key="ch.id"
                :to="ch.path"
              >{{ch.title}}</md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface Config {
  id: number;
  title: string;
  icon: string;
  child: Child[];
}

interface Child {
  id: number;
  title: string;
  path: string;
}

@Component
export default class ExpertApproval extends Vue {
  expandSingle: boolean = false;
  config: Array<Config> = [
    {
      id: 1,
      title: "系统管理",
      icon: "security",
      child: [
        { id: 101, title: "账号管理", path: "/account" },
        { id: 102, title: "行业类别", path: "/industry" },
        { id: 103, title: "行业子类别", path: "/industryChild" },
        { id: 104, title: "查看专业", path: "/profession" },
        { id: 105, title: "客户管理", path: "/customer" },
        { id: 106, title: "角色查看", path: "/role" },
        { id: 107, title: "权限管理", path: "/permission" },
        { id: 108, title: "标签管理", path: "/label" }
      ]
    },
    {
      id: 2,
      title: "基础数据",
      icon: "storage",
      child: [
        { id: 201, title: "设备类型", path: "/device" },
        { id: 202, title: "指标类型字典", path: "/quotaType" },
        { id: 203, title: "指标子类型字典", path: "/quotaChildType" },
        { id: 204, title: "指标单位", path: "/quotaUnit" },
        { id: 205, title: "作业角色管理", path: "/taskRole" },
        { id: 206, title: "作业权限管理", path: "/taskPermission" },
        { id: 207, title: "作业动作管理", path: "/taskAction" },
        { id: 208, title: "作业类型管理", path: "/taskType" }
      ]
    },
    {
      id: 3,
      title: "设备管理",
      icon: "brightness_high",
      child: [
        { id: 301, title: "设备信息", path: "/deviceInfo" },
        { id: 302, title: "设备出库", path: "/deviceOut" },
        { id: 303, title: "参数配置", path: "/paramConfig" },
        { id: 304, title: "协议管理", path: "/protocol" },
        { id: 305, title: "指令字典", path: "/instruction" },
        { id: 306, title: "告警配置", path: "/alarm" },
        { id: 307, title: "安全宝管理", path: "/security" }
      ]
    },
    {
      id: 4,
      title: "专家管理",
      icon: "person",
      child: [
        { id: 401, title: "专家信息", path: "/expertInfo" },
        { id: 402, title: "专家类型", path: "/expertType" },
        { id: 403, title: "专家审批", path: "/expertApproval" }
      ]
    }
  ];
}
</script>

<style lang="scss" scoped>
$list-width: 320px;

.aside-wrapper {
  height: calc(100vh - 184px);
  overflow-x: hidden;
  overflow-y: scroll;
  width: 240px;
}

.full-control {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
}

.list {
  width: $list-width;
}

.full-control > .md-list {
  width: $list-width;
  max-width: 100%;
  height: 400px;
  display: inline-block;
  overflow: auto;
  border: 1px solid rgba(#000, 0.12);
  vertical-align: top;
}

.control {
  min-width: 250px;
  display: flex;
  flex-direction: column;
  padding: 16px;
}
</style>