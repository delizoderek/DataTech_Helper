let fundTable;
let moneyCards;

const inter = setInterval(() => {
  fundTable = document.querySelector('div[role="rowgroup"]');
	moneyCards = document.querySelectorAll('.card-text')
  if (fundTable && moneyCards) {
    const spanList = fundTable.querySelectorAll("span");
    spanList.forEach((item) => {
      if (item.textContent) {
        const submittedDate = new Date(
          `${item.textContent} ${new Date().getFullYear()}`
        );
        const approvalDate = new Date();
        approvalDate.setDate(submittedDate.getDate() + 7);
        item.textContent = `Hours on ${item.textContent} will be approved by ${approvalDate.toDateString()}`;
      }
    });

		moneyCards.forEach((textDiv) => {
			const textClone = textDiv.cloneNode()
			const totalNode = textDiv.cloneNode()
			const value = Number(textDiv.textContent.trim().replace('$',''))
			const taxes = value * 0.2
			const postTax = value - taxes
			textDiv.textContent = `Posttax: $${postTax.toFixed(2)}`
			textClone.textContent = `Taxes: $${taxes.toFixed(2)}`
			totalNode.textContent = `Total: $${value.toFixed(2)}`
			textDiv.parentNode.appendChild(textClone)
			textDiv.parentNode.appendChild(totalNode)
		})

    clearInterval(inter);
  }
}, 500);
