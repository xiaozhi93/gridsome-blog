<template>
  <div>
    <el-card shadow="never" style="min-height: 400px;" v-if="news.length">
      <div
        v-for="item in news"
        :key="item.node.id"
        v-html="$formatMarkDown(item.node.content)"
        class="markdown-body"
        style="padding-top: 20px;"
      ></div>
    </el-card>
    <el-card
      shadow="never"
      style="
        margin-bottom: 20px;
        padding: 20px 0px 20px 0px;
        text-align: center;
      "
      v-else
    >
      <font style="font-size: 30px; color: #dddddd;">
        <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
      </font>
    </el-card>
  </div>
</template>
<page-query>
query($page: Int) {
  allStrapiNew(perPage: 10, page: $page) @paginate {
    edges {
      node {
        id
        content
      }
    }
  }
}
</page-query>
<script>
export default {
  name: "IndexPage",
  metaInfo: {
    title: "最新动态",
  },
  data() {
    return {
      query: {
        page: 1,
        pageSize: 1,
      }
    };
  },
  computed: {
    news() {
      return this.$page.allStrapiNew.edges
    }
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
