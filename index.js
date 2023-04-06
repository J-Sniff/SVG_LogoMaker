const inquirer = require('inquirer')
const fs = require('fs')
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
            choices: ['circle', 'square', 'triangle']

        },
        {
            name: 'shapeColor',
            message: 'What would you like the shape color to be?',
            default: 'purple'
        },
    ])
    .then(answers => {
        let shape;
        switch (answers.shapeType) {
            case 'circle':
                shape = new Circle(answers.shapeColor);
                shape.cx = 150;
                shape.cy = 100;
                shape.r = 50;
                break;
            case 'square':
                shape = new Square(answers.shapeColor);
                shape.x = 50;
                shape.y = 50;
                shape.width = 200;
                shape.height = 200;
                break;
            case 'triangle':
                shape = new Triangle(answers.shapeColor);
                shape.x1 = 100;
                shape.y1 = 50;
                shape.x2 = 250;
                shape.y2 = 50;
                shape.x3 = 175;
                shape.y3 = 175;
                break;
            default:
                throw new Error('Invalid shape type.');
        }
        shape.text = answers.text;
        shape.textColor = answers.textColor;
        const svg = shape.render();
        fs.writeFileSync('./examples/output.svg', svg);
        console.log('Generated Logo');
    })
    .catch(error => {
        console.error(error);
    });