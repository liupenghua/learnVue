<template>
	<div class="head">
		<div>
			<a href="#">
			<img src='../assets/cnodejs.svg' title='cnodejs.svg'>
			</a>
			<div class="head-right">
				<span>首页</span>
				<span>新手入门</span>
				<span>API</span>
				<span>关于</span>
				<span>注册</span>
				<span>登陆</span>	
			</div>			
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
/*		position: fixed;*/
		width: 100%;
		height: 50px;
		background-color: #444; 
	}
	div.head >div{
		height: 40px;
		width: 1500px;
		margin: 0px auto;
		padding: 5px 0;
	}
	div.head div a img{
		height: 40px;
		width: 150px;
		float: left;
	}
	div.head-right {
		display: inline-block;
		width: 360px;
		height: 40px;
		float: right;
		text-align: center;
	}
	div.head-right span{
		display: inline-block;
		margin: 10px ; 
		color: #ccc;
		font-size: 14px;
		cursor: pointer;

	}
</style>


