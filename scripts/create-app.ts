import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface({ input, output });

async function question(query: string, defaultValue?: string): Promise<string> {
    const answer = await rl.question(`${query}${defaultValue ? ` (${defaultValue})` : ''}: `);
    return answer.trim() || defaultValue || '';
}

async function main() {
    console.log('Welcome to the Runtipi App Scaffolding Tool!\n');

    const name = await question('App Name', 'My App');
    if (!name) {
        console.error('App Name is required.');
        process.exit(1);
    }

    const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    console.log(`Using App ID: ${id}`);

    const appDir = join(process.cwd(), 'apps', id);
    if (existsSync(appDir)) {
        console.error(`Error: Directory apps/${id} already exists.`);
        process.exit(1);
    }

    console.log('\nCreating app structure...');

    // Create directories
    await mkdir(join(appDir, 'metadata'), { recursive: true });

    // config.json
    const config = {
        $schema: "https://raw.githubusercontent.com/runtipi/runtipi/main/packages/shared/src/schemas/app-info.json",
        id: id,
        available: true,
        name: name,
        short_desc: "TODO: Add short description",
        description: "TODO: Add full description",
        author: "TODO: Add author",
        source: "",
        website: "",
        tipi_version: 4,
        version: "latest",
        port: 0,
        categories: ["utilities"],
        exposable: true,
        https: false,
        supported_architectures: ["amd64", "arm64"],
        form_fields: []
    };

    await writeFile(join(appDir, 'config.json'), JSON.stringify(config, null, 4));

    // docker-compose.json
    const dockerCompose = {
        $schema: "https://raw.githubusercontent.com/runtipi/runtipi/main/packages/shared/src/schemas/dynamic-compose.json",
        services: [
            {
                name: id,
                image: "todo/image:latest",
                isMain: true,
                internalPort: 80,
                restart: "always",
                environment: {},
                volumes: [
                    {
                        hostPath: "${APP_DATA_DIR}/data",
                        containerPath: "/data"
                    }
                ]
            }
        ]
    };

    await writeFile(join(appDir, 'docker-compose.json'), JSON.stringify(dockerCompose, null, 4));

    // metadata/description.md
    await writeFile(join(appDir, 'metadata', 'description.md'), `# ${name}`);

    console.log(`\nSuccessfully created app "${name}" in apps/${id}!`);
    console.log('You can now edit the generated files to configure details.');

    rl.close();
}

main().catch(console.error);
