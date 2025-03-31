function getElementWidth(content, padding, border) {
  return (
    Number.parseFloat(content) + (Number.parseFloat(padding) + Number.parseFloat(border)) * 2
  );
}