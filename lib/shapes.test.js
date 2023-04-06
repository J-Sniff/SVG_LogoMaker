// Calling shape classes from shapes file.
const { Triangle, Square, Circle } = require('./shapes')

describe('shape classes', () => {
    test('Triangle should generate correct SVG', () => {
        const triangle = new Triangle();
        triangle.color = 'blue';
        // Checking render() method to create SVG with given points and color
        expect(triangle.render()).toEqual( '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">\n    <polygon points="100, 50 250, 50 175, 175" fill="blue" />\n    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="undefined">undefined</text>\n    </svg>' );
    });

    test('Square should generate correct SVG', () => {
        const square = new Square();
        square.color = 'green';
        expect(square.render()).toEqual( '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">\n    <rect x="50" y="50" width="150" height="150" fill="green" />\n    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="undefined">undefined</text>\n    </svg>' );
    });

    test('Circle should generate correct SVG', () => {
        const circle = new Circle;
        circle.color = 'red';
        expect(circle.render()).toEqual( '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">\n    <circle cx="150" cy="100" r="50" fill="red" />\n    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="undefined">undefined</text>\n    </svg>' );
    });
});