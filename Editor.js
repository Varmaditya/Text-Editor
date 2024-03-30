const elements = document.querySelectorAll('.btn');


elements.forEach(element => {
	element.addEventListener('click', () => {
		let command = element.dataset['element'];
		
		if (command == 'createLink' || command == 'insertImage') {
			let url = prompt('Enter the link here:', 'http://');
			document.execCommand(command, false, url);
			if(cmd==="insertImage"){
				const imgs = document.queryselectorAll('img');
				imgs.forEach(item =>{
					imgs.style.maxWidth = "50px";
				})
			}else{
				const links = document.querySelectorAll('a');
				
				links.forEach(item =>{
					item.target = "_blank";
					item.addEventListener('mouseover', ()=>{
						document.designMode = "Off";
					})
					item.addEventListener('mouseout', () =>{
						document.designMode = "On";
					});
				})
			}
		}else {
			document.execCommand(command, false, null);
		}
	});
});