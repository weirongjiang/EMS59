<template>
    <el-menu :router="true" :unique-opened="true" :default-active="path" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu v-for="item1 in rightList" :key="item1.id" :index="item1.path">
            <!-- 一级菜单 -->
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item1.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item v-for="item2 in item1.children" :Key="item2.id" :index="'/'+item2.path">
                <i class="el-icon-star-on"></i>
                {{item2.authName}}
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            rightList: []
        }
    },
    computed: {
        'path': function() {
            // 得到当前路由
            return this.$route.path
        }
    },
    // 当页面打开时，要动态得到当前登录用户的权限
    methods: {
        async getUserRight() {
            var res = await this.$http.request({
                url: '/menus',
                method: 'get'
            })
            var {data, meta} = res.data
            if (meta.status === 200) {
                this.rightList = data
                console.log(this.rightList)
            } else {
                this.$message.error(meta.msg)
            }
        }
    },
    mounted() {
        this.getUserRight()
    }
}
</script>

<style>
/* 侧边栏样式 */
.el-menu-vertical-demo {
    height: 100%;
}
</style>
