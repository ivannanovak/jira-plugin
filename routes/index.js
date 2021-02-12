export default function routes(app, addon) {
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    app.get('/hello-world', addon.authenticate(), (req, res) => {
      
        res.render(
          'hello-world.jsx',
          {
            title: 'Atlassian Connect',
          }
        );
    });

    // Add additional route handlers here...
}
