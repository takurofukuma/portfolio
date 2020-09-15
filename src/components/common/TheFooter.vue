<template>
	<footer class="l-footer" role="contentinfo">
		<div class="l-footer__inner">
			<p class="l-footer__credit"><small lang="en">© 2020 Takuro Fukuma</small></p>
			<ul class="l-footer__sns-items">
				<li class="l-footer__sns-item"><a href="https://twitter.com/chirichiritv" target="_blank" rel="noopener">Twitter</a></li>
				<li class="l-footer__sns-item"><a href="https://www.facebook.com/chirichiritv" target="_blank" rel="noopener">Facebook</a></li>
			</ul>
		</div>
	</footer>
</template>
<style lang="scss" scoped>
	.l-footer {
		padding: 80px 60px;
		text-align: center;
		 @include mq('max') {
			padding: 40px 15px;
		}
	}
	.l-footer__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.l-footer__sns-items {
		display: flex;
		flex-wrap: wrap;
		margin: -20px 0 0 -20px;
	}
	.l-footer__sns-item {
		margin: 20px 0 0 20px;
	}
	.l-footer__credit {
		display: block;
		font-size: 1rem;
		font-weight: 800;
		font-family: Spectral;
	}
</style>