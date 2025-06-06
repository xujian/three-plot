# three-plot

A lightweight 3D charting library built on top of [Three.js](https://threejs.org/). Effortlessly create interactive 3D plots and visualizations for the web.

## Features
- Simple API for 3D charts (scatter, line, bar, surface, etc.)
- Interactive controls (zoom, pan, rotate)
- Customizable axes, labels, and colors
- Responsive and high-performance rendering
- Extensible with custom Three.js objects

## Installation
```bash
npm install three-plot
```

## Usage
```js
import { Plot } from 'three-plot'

const plot = new Plot({
  container: document.getElementById('plot'),
  width: 800,
  height: 600,
})

plot.addScatter([
  { x: 1, y: 2, z: 3 },
  { x: 2, y: 3, z: 1 },
])

plot.render();
```

## API Overview
- `Plot3D(options)`: Create a new plot instance
  - `container`: DOM element to render into
  - `width`, `height`: Size in pixels
- `addScatter(data, options)`: Add 3D scatter points
- `addLine(data, options)`: Add 3D line plot
- `addBar(data, options)`: Add 3D bar chart
- `addSurface(data, options)`: Add 3D surface plot
- `render()`: Render or re-render the plot

## Example
```html
<div id="plot"></div>
<script type="module">
  import { Plot } from 'three-plot';
  const plot = new Plot({ container: document.getElementById('plot') });
  plot.addScatter([{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }]);
  plot.render();
</script>
```

## Contributing
PRs and issues welcome! Please open an issue to discuss major changes.

## License
MIT 