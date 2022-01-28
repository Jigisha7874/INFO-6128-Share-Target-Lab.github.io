window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  document.getElementById('title').value = "This share target";
  document.getElementById('text').value = "This app perform sharing";
  document.getElementById('url').value = "This share target";
});
