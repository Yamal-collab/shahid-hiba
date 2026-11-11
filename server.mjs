import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const root = resolve(process.cwd());
const port = Number(process.env.PORT || 4173);
const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.png', 'image/png'],
  ['.mp4', 'video/mp4'],
  ['.mp3', 'audio/mpeg'],
  ['.ttf', 'font/ttf'],
]);


createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname === '/favicon.ico') {
      response.writeHead(204).end();
      return;
    }
    const requested = pathname.replace(/^\/+/, '');
    const relative = pathname === '/'
      ? 'index.html'
      : requested.startsWith('assets/') ? `public/${requested}` : requested;
    const file = resolve(root, relative);
    if (file !== root && !file.startsWith(`${root}${sep}`)) {
      response.writeHead(403).end('Forbidden');
      return;
    }

    const content = await readFile(file);
    const range = request.headers.range;
    // Keep the original filename/bytes while accurately describing its AAC-in-MP4 container.
    const contentType = pathname === '/assets/reel.mp3'
      ? 'audio/mp4'
      : types.get(extname(file).toLowerCase()) || 'application/octet-stream';
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (!match || (!match[1] && !match[2])) {
        response.writeHead(416, { 'Content-Range': `bytes */${content.length}` }).end();
        return;
      }
      const start = match[1] ? Number(match[1]) : Math.max(0, content.length - Number(match[2]));
      const end = match[2] && match[1] ? Math.min(Number(match[2]), content.length - 1) : content.length - 1;
      if (start >= content.length || end < start) {
        response.writeHead(416, { 'Content-Range': `bytes */${content.length}` }).end();
        return;
      }
      response.writeHead(206, {
        'Accept-Ranges': 'bytes',
        'Content-Range': `bytes ${start}-${end}/${content.length}`,
        'Content-Length': end - start + 1,
        'Content-Type': contentType,
      });
      response.end(request.method === 'HEAD' ? undefined : content.subarray(start, end + 1));
      return;
    }

    response.writeHead(200, {
      'Accept-Ranges': 'bytes',
      'Content-Length': content.length,
      'Content-Type': contentType,
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Invitation running at http://localhost:${port}`);
});
