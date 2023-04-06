const fs = require('fs')
const inquirer = require( 'inquirer' )
const { Shape, Circle, Square, Triangle } = require('./lib/shapes');

inquirer
    .prompt([
        {
            // Not all questions objects needs a 'type:' as the default type is input.
            name: 'text',
            message: 'Enter up to three characters:',
            default: 'ABC',
            // Validate function is called by inquirer to validate user input stays within three characters.
            validate: function (value) {
                const valid = value.length <=3;
                return valid || 'Input must be no more than 3 characters.'
            }
        },
        {
            name: 'textColor',
            message: 'What would you like the text color to be?',
            default: 'yellow',

        },
        {
            name: 'shapeType',
            message: 'What would you like the shape to be?',
            type: 'list',
            choices: ['Circle', 'Square', 'Triangle']

        },
        {
            name: 'shapeColor',
            message: 'What would you like the shape color to be?',
            default: 'purple'
        },
    ])
    .then(answers => {
        const shape = new Shape(answers.text, answers.shapeColor, answers.textColor);

        let svg;
        switch (answers.shapeType) {
            case 'Circle':
                svg = Circle.generateSvg(shape);
                break;
            case 'Square':
                svg = Square.generateSvg(shape);
                break;
            case 'Triangle':
                svg = Triangle.generateSvg(shape);
                break;
            default:
                throw new Error('invalid shape type');         
        }
        // write SVG to file.
        fs.writeFileSync('output.svg', svg);
    })
    .catch(error => {
        console.error(error);
    });