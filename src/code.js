export const twitter = `
def get_tweets_with_hashtag(hashtag, count):
    # If there is already a file for those tweets,
    # use the cached version
    ...
    # Otherwise pull from twitter
    tweets = _API.GetSearch(term=hashtag, include_entities=True, count=count)
    analyses = []
    for tweet in tweets:
        ...
        # Get the maximum emote of the tweet
        max_emote = max(analysis.items(), key=operator.itemgetter(1))
        # Construct the emotion data along with relevant tweet data
        # to better visualize with
        result = {
            'text': tweet.text,
            'tweet': {
                'favorites': tweet.favorite_count,
                'retweets': tweet.retweet_count,
				...
            },
            'emotion': max_emote[0],
            'magnitude': max_emote[1]
        }
        analyses.append(result)
    # Return as JSON
    json.dump(analyses, open('%s.json'%hashtag, 'w'))
    return analyses
`;