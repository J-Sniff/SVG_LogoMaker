class Shape {
    constructor(color) {
        this.color = color;
    }    
    render() {
        throw new Error("render() method must be implemented.")
    }
}

class Circle extends Shape {
    constructor(cx, cy, r, color) {
    // Super is calling 'color' to inherit it's properties from its parent class.
    super(color);
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    }
    // Rendor method being used to generate the shape to SVG using the properties given.
    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" /> `;
    }
}

class Square extends Shape {
    constructor(x, y, width, height, color) {
    super(color);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    }
    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(x1, y1, x2, y2, x3, y3, color) {
        super(color);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }
    render() {
        return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.color}" />`;
      }
}

// Exporting module allowing the use of these objects in other files.
module.exports = { Shape, Circle, Square, Triangle };