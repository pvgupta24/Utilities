Simple Script to automate sending multiple mails with custom html as the email body

### Usage
- Run `npm install` to install dependencies
- Replace credentials in _auth.js_ and turn on _less secure apps_ settings for the gmail account. (Contributions welcome to overcome this)
- Replace data.js with required content
- Use https://premailer.io/ to convert your html template blocks into inline style attributes for HTML emails 
- Render custom html by passing `custom` as context in `index.js` and using as `<%=custom%>` in _data/template.ejs_
- Run with `node index.js`

### Dependencies
- NodeJS
- npm or yarn