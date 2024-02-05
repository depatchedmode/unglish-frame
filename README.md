## Unglish Word Frame

- Developed using `v0.7.0` of https://github.com/depatchedmode/simplest-frame
- View the original cast {here} <- to replace with link


### Getting started

1. Clone the repo
2. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/)
3. Copy `sample.env` to `.env` and add:
   + your Netlify Key, for deploys: `NETLIFY_AUTH_TOKEN`
   + a [Wield Key](https://docs.wield.co/farcaster/api() for reading Farcaster state: `WIELD_API_KEY`
4. `npm install`
5. `netlify dev`

### Testing

1. Run `netlify dev --live` will give [proxy your local machine](https://docs.netlify.com/cli/local-development/#share-a-live-development-server) to the *world* *wide* *web*.
2. Test that link in the Warpcast Embed UI: https://warpcast.com/~/developers/embeds



