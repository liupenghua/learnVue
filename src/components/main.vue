<template>
	<div class="content">
		<div class="main-header">
			<a href="" class="sec">全部</a>
			<a href="">精华</a>
			<a href="">分享</a>
			<a href="">问答</a>
			<a href="">招聘</a>
			<a href="">客户端测试</a>
		</div>
		<div class="section">
			<div class="cell" v-for='item of content'>
				<a href="" class="user-img">
					<img :src='item.author.avatar_url' :title='item.author.loginname'>
				</a>
				<span>
					<span class="reply_count" title="回复数">{{item.reply_count}}/</span>
					<span class="visit_count" title="查看数">{{item.visit_count}}</span>
				</span>
				<a href="" class="reply-img">
					<img src="">
					<span title="最后回复时间">{{item.create_at.match(/.{10}/)[0]}}</span>
				</a>
				<div class="title-paper">
					<!-- <a href="">{{item.title}}</a> -->
					<router-link :to="{name: 'contentpart',params: {id:item.id}}">{{item.title}}</router-link>
				</div>
			</div>
		</div>
	</div>
</template>




<script>
export default {
	name: 'main',
	data() {
		return {
			content: []
		};
	},
	methods: {
		getData() {
            this.$http({
                url: 'https://cnodejs.org/api/v1/topics',
                method: 'get',
                params: {
                    page: 1,
                    limit: 50,
                    mdrender: 'false',
                },
            }).then((res) => {
                this.content = res.data.data;
            }).catch((res) => {
                console.log('error: ', res);
            });
        }
	},
	created() {
        this.getData();
    }

}
</script>


<style>
	div.content{
		position: relative;
		width: 1095px;
		height: auto;
		background-color: #fff;
		border-radius: 4px;
	}
	div.main-header{
		width: 1075px;
		height: 30px;
		padding: 10px;
		margin-top:4px; 
		background-color: #f6f6f6;
	}

	div.main-header >a{
		float: left;
		display: inline-block;
		height: 20px;
		padding: 5px ;
		margin-right: 10px;
		font-size: 13px;
		color: #469025;
	}
	div.main-header >a.sec{				 /*//改变选中后a标签样式*/
		color: #fff;
		background-color: #469025;
		border-radius: 6px;
	}
	div.cell{
		width: 1075px;
		height: 30px;
		padding: 10px;
		text-align: left;
		border-top:1px solid #f0f0f0; 
	}
	div.cell a.user-img>img{
		float: left;
		width: 30px;
		height: 30px;
	}
	div.cell>span{
		display: inline-block;
		float: left;
		color: #b4b4b4;
		width: 70px;
		height: 20px;
		text-align: center;
		font-size: 12px;
	}
	div.cell span.reply_count{
		font-size: 14px;
		color: #9e78c0;
	}
	div.cell a.reply-img{
		display: inline-block;
		height: 20px;
		padding: 5px 0;
		float: right;
		color: #b4b4b4;
		font-size: 12px;
	}
	div.title-paper a{
		color:#000;
	}

</style>
