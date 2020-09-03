<template>
  <div style="min-height: 600px;">
    <el-card shadow="never" style="margin-bottom: 20px;">
      <el-input
        placeholder="请输入关键字"
        v-model="searchKey"
        clearable
        style="width: 300px;"
      ></el-input>
      <el-button
        @click="search"
        icon="el-icon-search"
        style="margin-left: 10px;"
        circle
        plain
      ></el-button>
      <el-button
        style="margin-left: 10px;"
        icon="el-icon-share"
        type="warning"
        plain
        circle
      ></el-button>
    </el-card>

    <div v-if="posts && posts.length > 0">
      <el-card
        shadow="hover"
        v-for="(post, index) in posts"
        :key="'p' + index"
        style="margin-bottom: 20px;"
      >
        <div slot="header">
          <el-row>
            <el-col :span="16">
              <span>
                <g-link
                  style="text-decoration: none; cursor: pointer;"
                  :to="'/post/' + post.node.id"
                >
                  {{ post.node.title }}
                </g-link>
              </span>
            </el-col>
            <el-col :span="8">
              <div style="text-align: right;">
                <el-button
                  @click="$share('/user/blog/details/' + post.node.id)"
                  style="padding: 3px 0;"
                  type="text"
                  icon="el-icon-share"
                ></el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="font-size: 0.9rem; line-height: 1.5; color: #606c71;">
          最近更新 {{ post.node.updatedAt }}
        </div>
        <div
          style="
            font-size: 1.1rem;
            line-height: 1.5;
            color: #303133;
            padding: 10px 0px 0px 0px;
          "
        >
          {{ post.node.content }}
        </div>
      </el-card>
      <div style="text-align: center;">
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page.sync="query.page"
          :page-size="query.pageSize"
          :total="query.pageNumber * query.pageSize"
        >
        </el-pagination>
      </div>
    </div>

    <el-card
      shadow="never"
      style="
        margin-bottom: 20px;
        padding: 20px 0px 20px 0px;
        text-align: center;
      "
      v-if="!posts || posts.length == 0"
    >
      <font style="font-size: 30px; color: #dddddd;">
        <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
      </font>
    </el-card>
  </div>
</template>
<page-query>
query {
    allStrapiPost {
        edges {
            node {
                title
                content
                updatedAt
            }
        }
    }
}
</page-query>
<script>
export default {
  name: "PostPage",
  metaInfo: {
    title: "博客列表",
  },
  data() {
    return {
      searchKey: '',
      query: {
        page: 1,
        pageSize: 10
      }
    }
  },
  computed: {
    posts() {
      return this.$page.allStrapiPost.edges
    }
  },
  methods: {
    search() {}
  }
};
</script>