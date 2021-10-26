addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
* readRequestBody reads in the incoming request body
* Use await readRequestBody(..) in an async function to get the string
*/
async function readRequestBody(request) {
const contentType = request.headers.get("content-type") || "";
if (contentType.includes("application/json")) {
  return await request.json();
}
if (contentType.includes("application/text")) {
  return request.text();
}
if (contentType.includes("text/html")) {
  return request.text();
}
if (contentType.includes("form")) {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  return JSON.stringify(body);
}
// Perhaps some other type of data was submitted in the form
// like an image, or some other binary data.
return "a file";
}

/**
* Respond with hello worker text
* @param {Request} request
*/
async function handleRequest(request) {
  console.log(new Map(request.headers));
  let body = await readRequestBody(request);
  let requestURL = request.url;
  let myip = '';

  if (requestURL.includes('workers.dev')) {
    return await new Response(fetch(`http://${HA.get('current_ip')}:8123`, {
      headers: request.headers,
      body: body,
      method: request.method
    }));
  }

  if (typeof(body.myip) == 'string') {
      myip = body.myip;
      await HA.put('current_ip', myip);
  }

  await HA.put('last_request', JSON.stringify(body));

  return new Response('Hello worker @ ' + await HA.get('current_ip') + requestURL, {
      headers: { 'content-type': 'text/plain' },
  })
}
