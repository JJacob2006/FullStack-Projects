const drawingBoard = document.getElementById('drawingArea');

  let isDrawing = false;
 

  drawingBoard.addEventListener('mousedown', (e) => {
    isDrawing = true;

    currPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    currPath.setAttribute('fill', 'none');
    currPath.setAttribute('stroke', 'red');
    currPath.setAttribute('d', `M ${e.offsetX} ${e.offsetY}`);

    drawingBoard.appendChild(currPath);
  });

  drawingBoard.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    const d = currPath.getAttribute("d");
    currPath.setAttribute("d", d + ` L ${e.offsetX} ${e.offsetY}`);
  });

  drawingBoard.addEventListener('mouseup', () => {
    isDrawing = false;
  });