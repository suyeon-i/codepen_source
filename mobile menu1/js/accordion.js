const accordion={
	ui: function(dom){
		let menuLi=document.querySelectorAll(dom);

		menuLi.forEach(function(item1, i){
			item1.addEventListener("click", function(e){
				e.preventDefault();

				if(item1.classList.contains("active") == false){
					menuLi.forEach(function(item2, j){
						if(j == i){
							item2.classList.add("active");
							gsap.fromTo(item2.lastElementChild, {
								display: "block", height: 0
							},
							{
								height: "auto", duration: 0.3
							});
						}
						else{
							item2.classList.remove("active");
							gsap.to(item2.lastElementChild, {
								height: 0, display: "none", duration: 0.3
							});
						}
					});
				}
				else{
					item1.classList.remove("active");

					gsap.to(item1.lastElementChild, {
						height: 0, display: "none", duration: 0.3
					});
				}
			});
		});
	}
};