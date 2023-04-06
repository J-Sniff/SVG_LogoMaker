class Shape {
  constructor(color) {
    this.color = color;
  }
  render() {
    throw new Error("render() method must be implemented.");
  }
}

class Circle extends Shape {
  constructor(color) {
    // Super is calling 'color' to inherit it's properties from its parent class.
    super(color);
    this.cx = 150;
    this.cy = 100;
    this.r = 50;
  }
  // Rendor method being used to generate the shape to SVG using the properties given.
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
    <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
    this.x = 50; // x-coordinate of top-left corner
    this.y = 50; // y-coordinate of top-left corner
    this.width = 150; // width of square
    this.height = 150; // height of square
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
    <rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
    this.x1 = 100;
    this.y1 = 50;
    this.x2 = 250;
    this.y2 = 50;
    this.x3 = 175;
    this.y3 = 175;
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
    <polygon points="${this.x1}, ${this.y1} ${this.x2}, ${this.y2} ${this.x3}, ${this.y3}" fill="${this.color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

// Exporting module allowing the use of these objects in other files.
module.exports = { Shape, Circle, Square, Triangle };
