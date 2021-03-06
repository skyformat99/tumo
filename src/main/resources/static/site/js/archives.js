//设置全局表单提交格式
Vue.http.options.emulateJSON = true;

// Vue实例
var vm = new Vue({
    el: '#app',
    data() {
        return {
            entity: {
                archives: [{
                    date: '',
                    articles: [{
                        id: '',
                        title: '',
                        publishTime: '',
                    }],
                }],
                newArticle: [{
                    id: '',
                    title: '',
                }],
                newComments: [{
                    id: '',
                    author: '',
                    content: '',
                }],
            },

        }
    },
    methods: {
        /**
         * 一些初始化数据
         */
        init(){
            //文章Archives列表
            this.$http.get('/article/findArchives').then(result => {
                this.entity.archives = result.body;
            });
            //最新文章
            this.$http.get('/article/findAll').then(result => {
                this.entity.newArticle = result.body;
            });
            //最新评论
            this.$http.get('/comments/findAll').then(result => {
                this.entity.newComments = result.body;
            });
        },


    },
    // 生命周期函数
    created() {
        this.init();
    },

});

