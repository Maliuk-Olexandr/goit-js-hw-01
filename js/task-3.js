function getElementWidth(content, padding, border) {

  // return (Number.parseFloat(content) + (Number.parseFloat(padding) + Number.parseFloat(border)) * 2);  //це по завданню.
  
  const widht =
    Number.parseFloat(content) +
    (Number.parseFloat(padding) + Number.parseFloat(border)) * 2;
  return `${widht}px`;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

// AI forever
const outputDiv3 = document.getElementById("task-3");
outputDiv3.innerHTML = `
            <p>${getElementWidth("50px", "8px", "4px")}</p>
            <p>${getElementWidth("60px", "12px", "8.5px")}</p>
            <p>${getElementWidth("200px", "0px", "0px")}</p>
        `;
