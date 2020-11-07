(()=>{
	const $doc = document;
	const $tab = $doc.getElementById('js-tab');
	const $nav = $tab.querySelectorAll('[data-nav]');
	const $content = $tab.querySelectorAll('[data-content]');
	const ACTIVE = 'is-active'

	//初期化
	const init = () => {
		$content[0].style.display = 'block';
	};
	init();

	// クリックしたら起こるイベント
	const handleClick = (e) => {
		e.preventDefault();

		const $this = e.target;
		const targetVal = $this.dataset.nav;

		//一旦すべてのnav,contentsを非表示
		let index = 0;
		while(index < $nav.length){
			$content[index].style.display = 'none';
			$nav[index].classList.remove(ACTIVE);
			index ++;
		}

		// 対象のコンテンツをアクティブ化
		$tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = "block";
		$nav[targetVal].classList.add(ACTIVE);
	};

	// 全navに対応
	let index = 0;
	while(index < $nav.length) {
		$nav[index].addEventListener('click', (e) => handleClick(e));
		index ++;
	}


	// todo
	const buttonList = document.querySelectorAll('button');
	buttonList.forEach((button) => {
		button.addEventListener('click',() => {
			const li = button.closest('li');
				li.classList.toggle('done');
		});
	});
})();