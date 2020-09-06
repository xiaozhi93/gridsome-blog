<template>
  <div class="page">
    <el-card
      shadow="never"
      style="min-height: 400px; margin-bottom: 20px; padding: 0px 0px 20px 0px;"
    >
      <el-tabs v-model="activeTab" type="card" @tab-click="onSelect">
        <el-tab-pane
          :label="'粉丝 ' + githubInfo.followers"
          name="followers"
          style="padding: 5px;"
        >
          <div>
            <div v-if="followersList.length">
              <el-row style="min-height: 200px;">
                <el-col
                  :span="8"
                  v-for="(item, index) in followersList"
                  :key="'followers' + index"
                  style="padding: 10px;"
                >
                  <el-card
                    shadow="hover"
                    style="font-size: 13px; color: #606266; line-height: 20px;"
                  >
                    <i class="el-icon-star-off"></i>&emsp;
                    <a
                      @click="$router.push(`/user/social/details/${item.name}`)"
                      style="text-decoration: none; cursor: pointer;"
                      >{{ item.name }}</a
                    >
                    <br />
                    <i class="el-icon-message"></i>&emsp;
                    <a
                      :href="item.htmlUrl"
                      target="_blank"
                      style="text-decoration: none; cursor: pointer;"
                      >TA的主页</a
                    >
                    <br />
                    <img
                      :src="item.avatarUrl"
                      style="width: 100%; border-radius: 5px; margin-top: 5px;"
                    />
                  </el-card>
                </el-col>
              </el-row>
              <div style="text-align: center; margin-top: 10px;">
                <Pager :info="$page.allFollowers.pageInfo" class="el-pagination gridsome-pagination"/>
              </div>
            </div>
            <div
              style="
                min-height: 300px;
                margin-bottom: 20px;
                padding: 20px 0px 20px 0px;
                text-align: center;
              "
              v-else
            >
              <font style="font-size: 30px; color: #dddddd;">
                <b>(￢_￢) 没有一个粉丝</b>
              </font>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          :label="'关注 ' + githubInfo.following"
          name="following"
          style="padding: 5px;"
        >
          <div>
            <div v-if="followingList.length">
              <el-row style="min-height: 200px;">
                <el-col
                  :span="8"
                  v-for="item in followingList"
                  :key="item.id"
                  style="padding: 10px;"
                >
                  <el-card
                    shadow="hover"
                    style="font-size: 13px; color: #606266; line-height: 20px;"
                  >
                    <i class="el-icon-star-off"></i>&emsp;
                    <a
                      @click="$router.push(`/user/social/details/${item.node.login}`)"
                      style="text-decoration: none; cursor: pointer;"
                      >{{ item.node.login }}</a
                    >
                    <br />
                    <i class="el-icon-message"></i>&emsp;
                    <a
                      :href="item.node.html_url"
                      target="_blank"
                      style="text-decoration: none; cursor: pointer;"
                      >TA的主页</a
                    >
                    <br />
                    <img
                      :src="item.node.avatar_url"
                      style="width: 100%; border-radius: 5px; margin-top: 5px;"
                    />
                  </el-card>
                </el-col>
              </el-row>
              <div style="text-align: center; margin-top: 10px;">
                <Pager :info="$page.allFollowing.pageInfo" class="el-pagination gridsome-pagination"/>
              </div>
            </div>
            <div
              style="
                min-height: 300px;
                margin-bottom: 20px;
                padding: 20px 0px 20px 0px;
                text-align: center;
              "
              v-else
            >
              <font style="font-size: 30px; color: #dddddd;">
                <b>(￢_￢) 还没有关注一个人</b>
              </font>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<page-query>
query($page: Int) {
  allFollowing(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
				login
        avatar_url
        html_url
      }
    }
  }
  allFollowers(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
      }
    }
  }
  allUser {
    edges {
      node {
        followers
        following
      }
    }
  }
}
</page-query>
<script>
import { Pager } from 'gridsome'
export default {
  name: "SocialPage",
  components: {
    Pager
  },
  metaInfo: {
    title: "社交圈",
  },
  data() {
    return {
      activeTab: 'followers',
      followersTotal: 0,
      followingTotal: 0,
    }
  },
  computed: {
    followersList() {
      return this.$page.allFollowers.edges
    },
    followingList() {
      return this.$page.allFollowing.edges
    },
    githubInfo() {
      return this.$page.allUser.edges[0].node
    }
  },
  methods: {
    onSelect() {}
  }
};
</script>