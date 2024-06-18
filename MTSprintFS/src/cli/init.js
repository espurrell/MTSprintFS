const fs = require('fs-extra');
const path = require('path');

const init = async () => {
    const configDir = path.join(__dirname, '../config');
    const helpDir = path.join(configDir, 'help-files');

    try {
        await fs.ensureDir(configDir);
        await fs.ensureDir(helpDir);

        const defaultConfig = {
            setting1: 'value1',
            setting2: 'value2'
        };
        
        await fs.writeJson(path.join(configDir, 'default-config.json'), defaultConfig);
        
        console.log('Initialization successful.');
    } catch (err) {
        console.error('Initialization failed:', err);
    }
};

module.exports = init;