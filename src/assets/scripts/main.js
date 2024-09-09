function contactFormHandler(node) {
  if (node?.nodeName.toLowerCase() !== "form") return;

  node.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log('er');
    

    let tooltip = node.querySelector("#contact-form-tooltip");
    if (tooltip) tooltip.showPopover();
  });
}

contactFormHandler(document.querySelector('.b-form'));
