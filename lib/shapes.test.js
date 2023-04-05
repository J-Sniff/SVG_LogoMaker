// Calling shape classes from shapes file.
const { Triangle, Square, Circle } = require('./shapes')

describe('shape classes', () => {
    test('Triangle should generate correct SVG', () => {
        const triangle = new Triangle();
        triangle.color = 'blue';
        // Checking render() method to create SVG with given points and color
        expect(triangle.render()).toEqual( '<polygon points="100, 50 250, 50 175, 175" fill="blue" />' );
    });

    test('Square should generate correct SVG', () => {
        const square = new Square;
        square.color = 'green';
        expect(square.render()).toEqual( '<rect x="50" y="50" width="200" height="200" fill="green" />' );
    });

    test('Circle should generate correct SVG', () => {
        const circle = new Circle;
        circle.color = 'red';
        expect(circle.render()).toEqual( '<circle cx="150" cy="100" r="50" fill="red" />' );
    });
});