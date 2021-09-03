addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
    console.log(new Map(request.headers));
    return new Response('Hello worker @ ' + request.headers.get('CF-Connecting-IP') , {
        headers: { 'content-type': 'text/plain' },
    })
}
