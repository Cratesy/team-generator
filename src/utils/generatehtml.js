const generateHtml = (answers) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
        crossorigin="anonymous"
      />
  
      <title>My Team</title>
    </head>
    <body>
      <div>
        <header class="text-center p-4 bg-light">
        <h1>Team Name</h1>
        </header>
      </div>
    </body>
  </html>
  `;
};

module.exports = generateHtml;
