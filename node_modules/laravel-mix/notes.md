# URL Loader

Btw: the url-loader has never used rework. Remember, the url-loader is not responsible for detecting url() references in CSS-files. The url-loader does not know about CSS, HTML or JavaScript. It just takes a file, checks its file size and either emits it to the output folder and returns the final url or just returns a data url.

# Resolve URL Loader

Webpack loader that resolves relative paths in url() statements based on the original source file.


# Provide Plugin

The ProvidePlugin replaces a symbol in another source through the respective import, but does not expose the symbol on the global namespace.