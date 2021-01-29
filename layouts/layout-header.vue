<template>
  <div>
    <div class="layout-header h5:hidden pc:flex items-center bg-white">
      <div class="header-wrapper flex  justify-between items-center ">
        <img
          class="logo cursor-pointer"
          src="~/assets/images/home/logo.png"
          @click="$router.push({ path: '/' })"
          alt=""
        />
        <ul class=" flex text-font-16 text-black-main ">
          <li
            v-for="(item, index) in menuList"
            :key="'menu' + index"
            @click="$router.push({ path: item.path })"
            :class="[
              isMatchedPath(item.path) && !item.children
                ? item.activeClassPc
                : ''
            ]"
          >
            <template v-if="item.children">
              <div
                class=" flex items-center about-us "
                :class="[activeParent(item) ? 'menu-active' : '']"
              >
                {{ item.name }}
                <svg
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  class=" stroke-current"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path stroke="#fff" opacity=".487" d="M0 16V0h16v16z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.243 6L8 10.243 3.757 6h0"
                    />
                  </g>
                </svg>
              </div>
              <div class="sub-menu-wrapper ">
                <div class=" w-full h-10"></div>
                <div class="sub-menu text-white">
                  <a
                    v-for="(subItem, subIndex) in item.children"
                    :key="'menu' + index + 'subMenu' + subIndex"
                    @click="$router.push({ path: subItem.path })"
                    :class="[
                      isMatchedPath(subItem.path) ? subItem.activeClassPc : ''
                    ]"
                  >
                    {{ subItem.name }}
                  </a>
                </div>
              </div>
            </template>
            <template v-else>
              {{ item.name }}
            </template>
          </li>
        </ul>
      </div>
    </div>
    <div class="pc:hidden relative">
      <div class="layout-header-h5  flex items-center justify-between">
        <img
          src="@/assets/images/home/logo.png"
          alt=""
          class="logo cursor-pointer"
          @click="$router.push({ path: '/' })"
        />
        <div @click="showMenu = !showMenu">
          <img
            v-if="showMenu"
            src="@/assets/images/menu-close.png"
            alt=""
            class="bread-menu cursor-pointer"
          />
          <img
            v-else
            src="@/assets/images/bread-menu.png"
            alt=""
            class="bread-menu cursor-pointer"
          />
        </div>
      </div>
      <div class="expand-menu text-black-main text-font-24" v-if="showMenu">
        <ul>
          <li
            v-for="(item, index) in menuList"
            :key="'menu' + index"
            @click="clickMbMenu(item)"
            :class="[
              isMatchedPath(item.path) && !item.children
                ? item.activeClassMb
                : ''
            ]"
          >
            <template v-if="item.children">
              <el-collapse accordion>
                <el-collapse-item
                  :title="item.name"
                  :class="[activeParent(item) ? 'h5-menu-active' : '']"
                >
                  <ul class="submenu-list">
                    <li
                      v-for="(subItem, subIndex) in item.children"
                      :key="'menu' + index + 'subMenu' + subIndex"
                      @click="clickMbMenu(subItem)"
                      :class="[
                        isMatchedPath(subItem.path) ? subItem.activeClassMb : ''
                      ]"
                    >
                      {{ subItem.name }}
                    </li>
                  </ul>
                </el-collapse-item>
              </el-collapse>
            </template>
            <template v-else>
              {{ item.name }}
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      currentPath: '',
      menuList: [
        {
          name: '首页',
          path: '/',
          activeClassPc: 'menu-active',
          activeClassMb: 'h5-menu-active'
        },
        {
          name: '诊所网络',
          path: '/clinical-networks',
          activeClassPc: 'menu-active',
          activeClassMb: 'h5-menu-active'
        },
        {
          name: '医疗服务',
          path: '/service',
          activeClassPc: 'menu-active',
          activeClassMb: 'h5-menu-active'
        },
        {
          name: '医生团队',
          path: '/medical-team',
          activeClassPc: 'menu-active',
          activeClassMb: 'h5-menu-active'
        },
        {
          name: '优惠套餐',
          path: '/package',
          activeClassPc: 'menu-active',
          activeClassMb: 'h5-menu-active'
        },
        {
          name: '关于我们',
          children: [
            {
              name: '富乐中国',
              path: '/fuller-china',
              activeClassPc: 'sub-menu-active',
              activeClassMb: 'h5-menu-activeMb '
            },
            {
              name: '富乐全球',
              path: '/fuller-global',
              activeClassPc: 'sub-menu-active',
              activeClassMb: 'h5-menu-activeMb'
            },
            {
              name: '新闻及活动',
              path: '/news',
              activeClassPc: 'sub-menu-active',
              activeClassMb: 'h5-menu-activeMb'
            },
            {
              name: '保险直付',
              path: '/insurance',
              activeClassPc: 'sub-menu-active',
              activeClassMb: 'h5-menu-activeMb'
            },
            {
              name: '联系我们',
              path: '/contact-us',
              activeClassPc: 'sub-menu-active',
              activeClassMb: 'h5-menu-activeMb'
            }
          ]
        }
      ]
    }
  },
  watch: {
    '$route.path': {
      handler(val) {
        this.currentPath = val
      },
      immediate: true
    }
  },
  mounted() {},
  methods: {
    isMatchedPath(path) {
      if (!path) return false
      if (this.currentPath == '/') {
        return path === this.currentPath
      } else {
        let pathArr = path
          .replace(/\//g, ' ')
          .trim()
          .split(' ')
        let currentPathArr = this.currentPath
          .replace(/\//g, ' ')
          .trim()
          .split(' ')
        return pathArr[0] == currentPathArr[0]
      }
    },
    activeParent(item) {
      return (
        item.children.filter((subItem) => this.isMatchedPath(subItem.path))
          .length > 0
      )
    },
    clickMbMenu(item) {
      if (item.children) return
      this.showMenu = false
      this.$router.push({ path: item.path })
    }
  }
}
</script>

<style lang="less">
.layout-header {
  width: 100%;
  height: 82px;
  position: fixed;
  z-index: 999;
  box-shadow: 0px 6px 10px -10px rgba(115, 121, 141, 0.5);
  .header-wrapper {
    width: 1200px;
    margin: auto;
  }
  .logo {
    width: 170px;
    height: 40px;
  }
  ul {
    .menu-active {
      @apply text-primary;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: -8px;
        width: 100%;
        height: 2px;
        background: currentColor;
      }
    }
    li {
      display: inline-block;
      margin-left: 30px;
      cursor: pointer;
      position: relative;
      .sub-menu-wrapper {
        position: absolute;
        top: 0px;
        width: 130px;
        left: 50%;
        margin-left: -65px;
        visibility: hidden;
        .sub-menu {
          width: 100%;
          padding: 20px;
          background: theme('colors.primary');
          transition: all ease 0.3s;
          transform-origin: top;
          transform: scaleY(0);
          .sub-menu-active {
            border-bottom: 1px solid white;
          }
          & > a {
            text-align: white;
            display: inline-block;
            margin-bottom: 10px;

            &:hover {
              .sub-menu-active;
            }
            &:last-child {
              margin-bottom: 0px;
            }
          }
        }
      }

      &:hover {
        .menu-active;
        .sub-menu-wrapper {
          opacity: 1;
          visibility: visible;
          .sub-menu {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        svg {
          transition: all ease 0.3s;
          transform: rotate(180deg);
        }
      }
    }
  }
}
.layout-header-h5 {
  width: 100%;
  height: 82px;
  position: fixed;
  z-index: 999;
  box-shadow: 0px 6px 10px -10px rgba(115, 121, 141, 0.5);
  background-color: white;
  padding: 0 1.25rem;
  .logo {
    width: 139px;
    height: 32px;
  }
  .bread-menu {
    width: 24px;
    height: 24px;
  }
}
@keyframes expand {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
.expand-menu {
  position: fixed;
  top: 82px;
  bottom: 0;
  animation: expand 0.3s ease-in-out 0s;
  overflow-y: scroll;
  left: 0;
  right: 0;
  z-index: 998;
  padding: 10px 20px;
  background-color: white;
  .h5-menu-active {
    @apply text-primary;
    .el-collapse-item__header {
      @apply text-primary;
    }
  }
  li {
    height: 48px;
    line-height: 48px;
    &:active {
      .h5-menu-active;
    }
  }
  .el-collapse {
    border-top: none;
    border-bottom: none;
  }
  .el-collapse-item__header {
    border-bottom: none;
    @apply text-font-24 text-black-main;
    font-weight: normal;
  }
  .el-collapse-item__wrap {
    border-bottom: none;
  }
  .el-icon-arrow-right:before {
    content: '\e6df';
  }
  .el-collapse-item__arrow.is-active {
    transform: rotate(-180deg);
  }

  .el-collapse-item__content {
    padding-bottom: 0;
  }
  .submenu-list {
    .h5-menu-activeMb {
      .h5-menu-active;
    }
    li {
      height: 42px;
      line-height: 42px;
      padding-left: 10px;
      @apply text-font-18 text-black-main;
      &:active {
        .h5-menu-active;
      }
    }
  }
}
</style>
