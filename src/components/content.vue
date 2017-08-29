<template>
<div class="content">
	<div class="content-title">
		<h2>12345</h2>
		<div>
			<span>12</span>
			<span>23</span>
			<span>45</span>
		</div>
	</div>
	<div v-html='content.content' id="content"></div>
</div>
	
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				content:{}
			};
		},
		created(){
			 this.$http({
                url: 'https://cnodejs.org/api/v1'+this.$route.path,
                method: 'get'
            }).then((res) => {
                this.content = res.data.data;
            }).catch((res) => {
                console.log('error: ', res);
            });
		}
	}



</script>






<style scoped>
	@import url('../markdown-github.css');
	div.content{
		text-align: left;
		width: 1075px;
		height: auto;
		background-color: #fff;
		padding: 10px;
		border-top-left-radius:2px;
		border-top-right-radius:2px;
		/*border-bottom:1px solid #f0f0f0;*/
	}
	div.content-title >h2{
		margin: 10px 0;
	}


</style>