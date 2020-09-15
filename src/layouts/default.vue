<template>
  <div>
    <TheHeader/>
      <main class="l-main" role="main">
        <nuxt/>
      </main>
    <TheFooter/>
  </div>
</template>

<script>
	import TheHeader from '~/components/common/TheHeader';
	import TheFooter from '~/components/common/TheFooter';
	export default {
		components: {
			TheHeader,
			TheFooter
		}
	}
</script>

<style lang="scss" scoped>
</style>
