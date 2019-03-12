<template>
	<ul>
		<li v-for="tweet in tweets" :key="tweet.id">
			{{ tweet.text }}
		</li>
	</ul>
</template>

<script>
import tweets from '@/tweets/tweets'

export default {
	data() {
		return {
			tweets
		}
	}
}
</script>
