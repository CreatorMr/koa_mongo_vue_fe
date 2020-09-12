<template>
<div class="article">
  <h3 v-if="params.tag_id" class="left-title">{{tag_name}} 相关的文章：</h3>
  <div class="search">
    <el-input placeholder="请输入内容" v-model="params.keyword">
    </el-input>
    <el-button type="primary" @click="getArticleList">搜索</el-button>
  </div>
  <div class="article-list">
    <!-- <div v-for="item in articleList" :key="item._id" class="article-item">
      <router-link class="router-link" :to="`/articleDetail?articleId=${item._id}`">
        <h3 class="title"> {{item.title}}</h3>
        <div class="desc"> {{item.desc}}</div>

        <div class="tags">
          <div v-for="i in item.tags.map(_=>_.name)" :key="i">
            {{i}}
          </div>
        </div>
        <div class="category">
          <div v-for="i in item.category.map(_=>_.name)" :key="i">
            {{i}}
          </div>
        </div>
      </router-link>
    </div> -->
    <div class="wrapper">
      <div class="box" v-for="item in articleList" :key="item._id">
        <router-link class="router-link" :to="`/articleDetail?articleId=${item._id}`">
          <div class="front-face">
            <div class="icon"><i class="el-icon-edit"></i></div>
            <span>{{item.title}}</span>
            <div class="tags">
              <div v-for="i in item.tags.map(_=>_.name)" :key="i">
                {{i}}
              </div>
            </div>
            <div class="category">
              <div v-for="i in item.category.map(_=>_.name)" :key="i">
                {{i}}
              </div>
            </div>
          </div>
          <div class="back-face">
            <span>{{item.title}}</span>
            <p>{{item.desc}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <el-pagination v-if="total" background :current-page.sync="params.pageNum" :page-size="params.pageSize" @current-change="getArticleList" :page-sizes="[10, 20, 50, 100]" layout=" prev, pager, next" :total="total">
  </el-pagination>
</div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch
} from 'vue-property-decorator';
import {
  Route
} from "vue-router";

import {
  getList
} from "../api/article.js"
@Component
export default class Article extends Vue {
  articleList: Array < [] > = []
  private tag_name = '';
  private total = 0
  private params = {
    keyword: "",
    likes: "", // 是否是热门文章
    state: 1, // 文章发布状态 => 0 草稿，1 已发布,'' 代表所有文章
    tag_id: '',
    category_id: '',
    pageNum: 1,
    pageSize: 10
  };
  async getArticleList() {
    const res = await getList(this.params)
    this.articleList = res.data
    this.total = res.count
  }
  mounted() {
    // this.$route.query
    this.routeChange(this.$route, this.$route);
    this.getArticleList()
  }

  @Watch("$route")
  routeChange(val: Route): void {
    // 处理 获取链接上的tag_name tag_id category_id 等
    const {
      tag_id = '', tag_name = '', category_id = ''
    } = val.query
    this.tag_name = tag_name;
    this.params.tag_id = tag_id;
    this.params.category_id = category_id;
    this.articleList = [];
    this.params.pageNum = 1;
    this.getArticleList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.article {
  // margin: 5px 20px 10px;
  display: flex;
  flex-direction: column;
  padding-bottom: 170px;
  overflow: auto;
  min-width: 60%;
  padding-top: 25px;

  .search {
    display: flex;
    background: #d2cf2a;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 40px;
  }
}

.article-list {
  flex: 1;
  margin-top: 20px;

  .title {
    display: flex;
  }

  .desc {
    color: #5d5151;
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space: nowrap;
    text-align: left;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .tags {
    display: flex;
    margin-top: 10px;

    div {
      border: 1px solid #ff4891;
      margin-right: 10px;
      padding: 1px 10px;
      border-radius: 8px;
      color: #FF5722;
    }
  }

  .category {
    display: flex;
    margin-top: 10px;

    div {
      margin-right: 10px;
      padding: 1px 10px;
      border-radius: 8px;
      color: #FF5722;
    }
  }
}

.article-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #2fdf3f;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
}

.article-item:nth-child(odd) {
  background: #2fdf3f;
}

.article-item:nth-child(even) {
  background: #7fcfe9;
}

.router-link {
  text-decoration: none;
}

.wrapper {
  display: grid;
  margin: 0 90px auto;
  grid-gap: 80px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  .box {
    width: 350px;
    margin: 0 auto;
    position: relative;
    perspective: 1000px;

    .front-face {
      background: #fff;
      height: 220px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px;
      box-shadow: 0 5px 20px 0px rgba(0, 81, 250, 0.1);
      transition: all 0.5s ease;

      .icon {
        height: 80px;

        i {
          font-size: 65px;
          background: linear-gradient(-135deg, #c850c0, #4158d0);
        }
      }

      span {
        font-size: 22px;
        font-weight: 600;
        text-transform: uppercase;
        background: linear-gradient(-135deg, #c850c0, #4158d0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .back-face {
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      z-index: 1;
      height: 220px;
      width: 100%;
      padding: 30px;
      opacity: 0;
      transform-style: preserve-3d;
      backface-visibility: hidden;
      background: linear-gradient(-135deg, #c850c0, #4158d0);
      transform: translateY(110px) rotateX(-90deg);
      transition: all 0.5s ease;

      span {
        font-size: 22px;
        font-weight: 600;
        text-transform: uppercase;
        // background: linear-gradient(-135deg, #c850c0, #4158d0);
        // -webkit-background-clip: text;
      }

      p {
        margin-top: 10px;
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
      }
    }
  }

  .box:hover {
    .back-face {
      opacity: 1;
      transform: rotateX(0deg);
    }

    .front-face {
      opacity: 0;
      transform: translateY(-110px) rotateX(90deg);
    }
  }
}
</style>
