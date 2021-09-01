# Home Assistant Couldflare Workers Proxy

## About

This is a Cloudflare Pages + Worker repo for a summer challenge project that enables Home Assistant API calls to be routed to a dynamic IP. This can be used much like a reverse proxy or DDNS service to get calls from (for example) the Android Application to your server.

## Why

Swag... also, putting workers in the middle of the calls can grant you additional flexibility. For instance, there's an option to create a Cloudflare Durable Object that holds a request que. If your home IP changes rapidly, using this feature can prevent your Home Assistant devices from missing an API call by waiting for a success message from the Home Assitant server.

Additionally, you can configure the same que to work with the HA API in polling mode, so you don't have to open ports on your router.

## Cloudflare Setup

Go get a free cloudflare account and read some of the Workers documentation first, that way you can troubleshoot problems with your particular implementation of this solution.

Once your a bit more familiar with the platform, clone the workerFiles directory to a new private repo from which you can base your worker. Create a new config.yaml file and input the neccessary information.

## Home Assistant Setup

Grab the file from the homassistant folder and load it up as a polling API in your Home Assistant GUI.

## Android App Setup

Input the cloudflare worker URL into your Host field duringing initial setup of the home assistant app.