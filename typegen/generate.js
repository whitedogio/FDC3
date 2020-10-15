const { writeFileSync, readdirSync } = require('fs');
const { compileFromFile } = require('json-schema-to-typescript');

async function generate() {
    const baseSchemas = ['contextTypes.schema.json', 'contextType.schema.json'];

    const schemas = [
        ...baseSchemas,
        ...readdirSync('schemas').filter(file => file.endsWith('.schema.json') && !baseSchemas.includes(file))
    ];

    const types = await Promise.all(schemas.map(schema => {
        console.log(`Generating TypeScript type for ${schema}`);

        return compileFromFile(
            `./schemas/${schema}`,
            {
                cwd: './schemas',
                unknownAny: true,
                declareExternallyReferenced: false,
                enableConstEnums: false,
                bannerComment: ''
            }
        );
    }));

    writeFileSync('./ContextTypes.ts', [
        '// prettier-ignore',
        '// This file is auto-generated, do not edit. Make changes to the *.schema.json files and run `yarn typegen`.\n',
        ...types
    ].join('\n'));
}

generate();