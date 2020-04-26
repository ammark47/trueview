const express = require('express')
const app = express()
const StreamChat = require('stream-chat').StreamChat;

const port = 4000

const client = new StreamChat('bwkz679bfvdm', 'hz9bn8s88bxqu9nkq6x7dsq4j3ptewqwyffgjuj984xvrqz8ajgp4sd65w8sf5y8');   

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/disable-auth', async (req, res, next) =>{
    try {
        const disable = await client.updateAppSettings({
            disable_auth_checks: true,
        });    

        res.send(disable)
    } catch (error) {
        next(error)
    }
})

app.get('/channels/:userid', async (req, res, next) => {
    try {
        const filter = { type: 'messaging', members: { $in: [req.params.userid] } };
        const channels = await client.queryChannels(filter);
        console.log(channels)
        res.send(channels)
    } catch (error) {
        next(error)
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))