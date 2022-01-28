window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  document.getElemntById('title').value = "This share target";
  document.getElemntById('text').value = "This app perform sharing";
  document.getElemntById('url').value = "This share target";
});
