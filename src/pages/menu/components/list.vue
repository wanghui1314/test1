<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="菜单编号" sortable width="180">
      </el-table-column>
      <el-table-column prop="title" label="菜单名称" sortable width="180">
      </el-table-column>
      <el-table-column prop="icon" label="菜单图标"> </el-table-column>
      <el-table-column prop="url" label="菜单地址"> </el-table-column>
      <el-table-column prop="status" label="状态">
        <!-- 作用域插槽 用来获取数据-->
        <template slot-scope="scope">
          <div>
               <el-button type='primary' v-if="scope.row.status==1">启用</el-button>
               <el-button type='info' v-else disabled>禁用</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">


         <template slot-scope="scope">
          <div>
               <el-button type='primary' @click="updata(scope.row.id)">修改</el-button>
               <el-button type='danger' @click="del(scope.row.id)">删除</el-button>
          </div>
        </template>
        
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
//解构store中的数据
import {mapActions,mapGetters} from 'vuex'
import {reqMenuDel} from '../../../util/request'
export default {
  computed: {
    ...mapGetters({
      list:'menu/list'
    })
  },
  components: {},
  data() {
    return {
     
    };
  },
  methods: {
    ...mapActions({
      reqMenuList:'menu/reqMenuList'
    }),
    // 删除
    del(id){
        reqMenuDel({id:id}).then(res=>{
            this.reqMenuList()
        })
    },
    // 更新
    updata(id){
      this.$emit('edit',id)
    }
  },
  mounted() {
    this.reqMenuList()
  },
};
</script>
<style scoped>
</style>