<template>
  <div>
    <div v-if="projects && projects.length > 0">
      <el-card
        shadow="hover"
        v-for="item in projects"
        :key="item.id"
        style="margin-bottom: 20px;"
      >
        <div slot="header">
          <el-row>
            <el-col :span="16">
              <span>
                <a
                  style="text-decoration: none; cursor: pointer;"
                >
                   {{ item.node.name }}
                </a>
              </span>
            </el-col>
            <el-col :span="8">
              <div style="text-align: right;">
                <el-button
                  @click="goGithub(item.node.html_url)"
                  style="padding: 3px 0;"
                  type="text"
                  icon="el-icon-back"
                  >前往GitHub</el-button
                >
                <!-- <el-button
                  @click="$share('/user/project/details/' + item.node.name)"
                  style="padding: 3px 0;"
                  type="text"
                  icon="el-icon-share"
                ></el-button> -->
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="font-size: 0.9rem; line-height: 1.5; color: #606c71;">
          最近更新 {{ item.node.updated_at | formatTime }}
        </div>
        <div
          style="
            font-size: 1.1rem;
            line-height: 1.5;
            color: #303133;
            padding: 10px 0px 0px 0px;
          "
        >
          {{ item.node.description }}
        </div>
        <div
          style="font-size: 1.1rem; color: #303133; padding: 10px 0px 0px 0px;"
        >
          <el-row>
            <el-col :span="16" style="padding-top: 5px;">
              <el-tooltip
                effect="dark"
                :content="'star ' + item.node.stargazers_count"
                placement="bottom"
              >
                <i
                  class="el-icon-star-off"
                  style="margin: 0px 5px 0px 0px;"
                ></i>
              </el-tooltip>
              {{ item.node.stargazers_count }}
              <el-tooltip
                effect="dark"
                :content="'watch ' + item.node.watchers_count"
                placement="bottom"
              >
                <i class="el-icon-view" style="margin: 0px 5px 0px 15px;"></i>
              </el-tooltip>
              {{ item.node.watchers_count }}
              <el-tooltip
                effect="dark"
                :content="'fork ' + item.node.forks_count"
                placement="bottom"
              >
                <i class="el-icon-bell" style="margin: 0px 5px 0px 15px;"></i>
              </el-tooltip>
              {{ item.node.forks_count }}
            </el-col>
            <el-col :span="8" style="text-align: right;">
              <el-tag size="small" type="danger" v-if="item.node.license" style="margin-right: 10px">{{
                item.node.license.name
              }}</el-tag>
              <el-tag size="small" type="success" v-if="item.node.language">{{ item.node.language }}</el-tag>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <div style="text-align: center;">
        <Pager :info="$page.allRepo.pageInfo" class="el-pagination gridsome-pagination"/>
      </div>
    </div>

    <el-card
      shadow="never"
      style="
        margin-bottom: 20px;
        padding: 20px 0px 20px 0px;
        text-align: center;
      "
      v-if="!projects || projects.length == 0"
    >
      <font style="font-size: 30px; color: #dddddd;">
        <b>还没有开源项目 (╯°Д°)╯︵ ┻━┻</b>
      </font>
    </el-card>
  </div>
</template>
<page-query>
query($page: Int) {
  allRepo(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
				name
        full_name
        html_url
        language
        forks_count
        watchers_count
        stargazers_count
        description
        updated_at
        license {
          name
        }
      }
    }
  }
}
</page-query>
<script>
import { Pager } from 'gridsome'
export default {
  name: "Project",
  components: {
    Pager
  },
  metaInfo: {
    title: "开源项目",
  },
  data() {
    return {
      searchKey: '',
    }
  },
  computed: {
    projects() {
      return this.$page.allRepo.edges
    }
  },
  methods: {
    search() {},
    goGithub(url) {
      window.open(url)
    }
  }
};
</script>