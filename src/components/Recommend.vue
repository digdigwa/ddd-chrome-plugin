<template>
  <div class="main">
    <el-form ref="form" :model="form" label-width="80px" size='small' :rules="rules">
          <el-form-item label="标题" prop="title">
              <el-input v-model="form.title" maxlength="100" show-word-limit placeholder="请填写标题"></el-input>
          </el-form-item>
          <el-form-item label="链接地址"  prop="sourceUrl">
              <el-input v-model="form.sourceUrl" maxlength="500" show-word-limit placeholder="请填写链接地址"></el-input>
          </el-form-item>
          <el-form-item label="标签选择">
              <el-select v-model="form.tags" multiple filterable allow-create default-first-option
                style="width:100%"
                placeholder="请选择文章标签">
                <!-- 这里使用name不使用id，方便没有时自动创建 -->
                <el-option
                  v-for="item in tags"
                  :key="item.tagName"
                  :label="item.tagName"
                  :value="item.tagName">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="推荐团队">
              <el-select v-model="form.teamId" clearable placeholder="未关联团队则直接发布到首页" style="width:100%">
                <el-option
                  v-for="item in teams"
                  :key="item.teamId"
                  :label="item.teamName"
                  :value="item.teamId">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="推荐理由" prop="reason">
              <el-input type="textarea" v-model="form.reason" rows="10" placeholder="请填写推荐理由"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="onSubmit">推荐</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import { getMyJoinTeams } from '../service/team'
import { getAlltags } from '../service/tag'
import { createDoc } from '../service/doc'
import { getCurPageInfo } from '../common/chromePlugin'

const ON_CLOSE = 'onClose'
export default {
  data () {
    return {
      dialogVisible: true,
      teams: [],
      tags: [],
      form: {
        title: '',
        sourceUrl: '',
        tags: [],
        teamId: '',
        reason: ''
      },
      rules: {
        title: [{ required: true, message: '标题不能为空', trigger: 'blur' }],
        sourceUrl: [{ required: true, message: '链接地址不能为空', trigger: 'blur' }],
        reason: [{ required: true, message: '推荐理由不能为空', trigger: 'blur' }]
      }
    }
  },
  async created () {
    this.teams = await getMyJoinTeams()
    this.tags = await getAlltags()
    const pageInfo = await getCurPageInfo()
    this.form.title = pageInfo.title
    this.form.sourceUrl = pageInfo.href
    this.form.reason = pageInfo.description
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          // console.log(this.form)
          const res = await createDoc(this.form)
          if (res) {
            this.$message.success('推荐成功')
            this.$emit(ON_CLOSE)
          }
        }
      })
    }
  }
}
</script>

<style>
.main{
  margin-top: 20px;
}
</style>
