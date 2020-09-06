<template>
  <div>
    <el-card shadow="never">
      <div slot="header">
        <el-row>
          <el-col :span="12">
            <span>{{ post.title }}</span>
          </el-col>
          <el-col :span="12">
            <div style="text-align: right;">
              <el-button
                style="padding: 3px 0;"
                type="text"
                icon="el-icon-backs"
                @click="$router.back()"
                >返回</el-button
              >
            </div>
          </el-col>
        </el-row>
      </div>
      <div style="font-size: 0.9rem; line-height: 1.5; color: #606c71;">
        发布 {{ post.createdAt | formatTime }} <br />
        更新 {{ post.updatedAt | formatTime }}
      </div>
      <div
        style="
          font-size: 1.1rem;
          line-height: 1.5;
          color: #303133;
          border-bottom: 1px solid #e4e7ed;
          padding: 5px 0px 5px 0px;
        "
      >
        <pre style="font-family: '微软雅黑';">{{ post.description }}</pre>
      </div>
      <div
        v-html="$formatMarkDown(post.content)"
        class="markdown-body"
        style="padding-top: 20px;"
      ></div>
    </el-card>
  </div>
</template>
<page-query>
query($id: ID!) {
    strapiPost(id: $id) {
        title
        content
        createdAt
        updatedAt
    }
}
</page-query>
<script>
export default {
  name: 'PostDetail',
  metaInfo() {
    return {
      title: this.$page.strapiPost.title
    }
  },
  computed: {
    post() {
      return this.$page.strapiPost
    }
  },
  methods: {
    more() {}
  },
}
</script>