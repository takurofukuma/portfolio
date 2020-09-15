<template>
	<header class="l-header" role="banner">
		<div class="l-header-container">
			<h1>
				<a href="/">Takuro Fukuma</a>
			</h1>
			<p>Video Grapher</p>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	.l-header {
		position: relative;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
		padding: 30px 60px;
		@include mq('max') {
			padding: 20px 15px;
		}
		h1 {
			font-size: 2.6rem;
			font-weight: 800;
			font-family: Spectral;
			@include mq('max') {
				font-size: 2rem;
			}
		}
	}

	.l-header-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

</style>