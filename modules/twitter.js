const Twitter = require('twitter')
const fs = require('fs-extra')

const client = Twitter({
	consumer_key: '[CONSUMER KEY]',
    consumer_secret: '[CONSUMER SECRET]',
    access_token_key: '[ACCESS TOKEN]',
    access_token_secret: '[ACCESS TOKEN SECRET]'
})

const endpoint = 'statuses/user_timeline'
const params = {
    screen_name: '[YOUR USERNAME]',
    include_rts: false
}
const callback = (error, tweets, response) => {
	if (!error) fs.outputJSON('./tweets/tweets.json', tweets.slice(0, 5), { spaces: 4 })
}

export default function NuxtTwitter(config) {
	this.nuxt.hook('build:before', generator => {
		client.get(endpoint, params, callback)
	})
}
