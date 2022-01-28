window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);
    // searchParams.get() will properly handle decoding the values.
    document.getElementById('title').innerHTML = "value";
    document.getElementById('text').innerHTML = "text";
    document.getElementById('url').innerHTML = "url";
  });
