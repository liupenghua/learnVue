<template>
	<div class="head">
		<div>
			<a href="#">
			<img src='../assets/cnodejs.svg' title='cnodejs.svg'>
			</a>
			<span>首页</span>
			<span>新手入门</span>
			<span>API</span>
			<span>关于</span>
			<span>注册</span>
			<span>登陆</span>			
		</div>
	</div>
</template>


<script >
export default{
  name: 'head'
}
</script>


<style type="text/css">
	.head{
		position: fixed;
		width: 100%;
		height: 50px;
		background-color: #444; 
	}
	div.head div{
		height: 50px;
		width: 1500px;
		margin: 0px auto;
	}
	div.head div img{
		height: 50px;
		width: 150px;
		float: left;
	}
	div.head div span{
		display: inline-block;
		float: right;
		width: 80px;
		height: 30px;
		margin-top: 20px; 
		color: #ccc;
		font-size: 14px;
		cursor: pointer;

	}
</style>


