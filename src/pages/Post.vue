<template>
  <div>
    <div v-if="posts && posts.length > 0">
      <el-card
        shadow="hover"
        v-for="(post, index) in posts"
        :key="'p' + index"
        style="margin-bottom: 20px"
      >
        <div slot="header">
          <el-row>
            <el-col :span="16">
              <span>
                <g-link
                  style="text-decoration: none; cursor: pointer"
                  :to="'/post/' + post.node.id"
                >
                  {{ post.node.title }}
                </g-link>
              </span>
            </el-col>
            <!-- <el-col :span="8">
              <div style="text-align: right">
                <el-button
                  @click="$share('/user/blog/details/' + post.node.id)"
                  style="padding: 3px 0"
                  type="text"
                  icon="el-icon-share"
                ></el-button>
              </div>
            </el-col> -->
          </el-row>
        </div>
        <div style="font-size: 0.9rem; line-height: 1.5; color: #606c71">
          发表时间 {{ post.node.updatedAt | formatTime }}
        </div>
        <div
          style="font-size: 1.1rem;line-height: 1.5;color: #303133; padding: 10px 0px 0px 0px;"
          v-html="$formatMarkDown(post.node.content)"
        >
        </div>
      </el-card>
      <div style="text-align: center">
        <Pager :info="$page.allStrapiPost.pageInfo" class="el-pagination gridsome-pagination"/>
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
      <font style="font-size: 30px; color: #dddddd">
        <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
      </font>
    </el-card>
  </div>
</template>
<page-query>
query($page: Int) {
    allStrapiPost(perPage: 10, page: $page) @paginate {
        pageInfo {
          totalPages
          currentPage
        }
        edges {
            node {
                id
                title
                content
                updatedAt
            }
        }
    }
}
</page-query>
<script>
import { Pager } from 'gridsome'
export default {
  name: "PostPage",
  components: {
    Pager
  },
  metaInfo: {
    title: "博客列表",
  },
  data() {
    return {
      searchKey: ""
    };
  },
  computed: {
    posts() {
      return this.$page.allStrapiPost.edges;
    },
  },
  methods: {
    search() {},
  },
};
</script>