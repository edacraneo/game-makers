// OAuth GitHub pour Decap CMS — pattern "external OAuth client"
// /auth     → redirige vers github.com/login/oauth/authorize
// /callback → échange le code contre un token, le renvoie au CMS via postMessage
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/auth') {
      const redirect = new URL('https://github.com/login/oauth/authorize');
      redirect.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      redirect.searchParams.set('redirect_uri', `${url.origin}/callback`);
      redirect.searchParams.set('scope', 'repo');
      const state = url.searchParams.get('state');
      if (state) redirect.searchParams.set('state', state);
      return Response.redirect(redirect.toString(), 302);
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      let status = 'error';
      let payload = { message: 'OAuth failed' };
      if (code) {
        try {
          const resp = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              client_id: env.GITHUB_CLIENT_ID,
              client_secret: env.GITHUB_CLIENT_SECRET,
              code,
            }),
          });
          const data = await resp.json();
          if (data.access_token) {
            status = 'success';
            payload = { token: data.access_token, provider: 'github' };
          } else {
            payload = { message: data.error_description || data.error || 'token exchange failed' };
          }
        } catch (e) {
          payload = { message: String(e) };
        }
      } else {
        payload = { message: url.searchParams.get('error_description') || 'no code' };
      }

      const html = `<!doctype html><html><body><script>
(function () {
  var result = ${JSON.stringify(payload)};
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:${status}:' + JSON.stringify(result),
      e.origin
    );
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>Authentification…</body></html>`;
      return new Response(html, { headers: { 'Content-Type': 'text/html;charset=utf-8' } });
    }

    return new Response('gm-cms-auth OK', { status: 200 });
  },
};
